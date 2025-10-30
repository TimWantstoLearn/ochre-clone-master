import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PongGameProps {
  onClose: () => void;
}

const CANVAS_WIDTH = 348;
const CANVAS_HEIGHT = 300;
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 80;
const BALL_SIZE = 10;
const PADDLE_SPEED = 5;
const BALL_SPEED = 6;

export const PongGame = ({ onClose }: PongGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  const gameStateRef = useRef({
    playerPaddle: { x: 10, y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2 },
    cpuPaddle: { x: CANVAS_WIDTH - 20, y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2 },
    ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, dx: BALL_SPEED, dy: BALL_SPEED },
    mouseY: CANVAS_HEIGHT / 2,
  });

  const resetBall = () => {
    gameStateRef.current.ball = {
      x: CANVAS_WIDTH / 2,
      y: CANVAS_HEIGHT / 2,
      dx: Math.random() > 0.5 ? BALL_SPEED : -BALL_SPEED,
      dy: (Math.random() - 0.5) * BALL_SPEED * 2,
    };
  };

  const updateGame = () => {
    const state = gameStateRef.current;

    // Update player paddle based on mouse
    state.playerPaddle.y = Math.max(0, Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, state.mouseY - PADDLE_HEIGHT / 2));

    // Update CPU paddle (simple AI)
    const ballCenter = state.ball.y + BALL_SIZE / 2;
    const cpuCenter = state.cpuPaddle.y + PADDLE_HEIGHT / 2;
    if (ballCenter < cpuCenter - 10) {
      state.cpuPaddle.y = Math.max(0, state.cpuPaddle.y - PADDLE_SPEED);
    } else if (ballCenter > cpuCenter + 10) {
      state.cpuPaddle.y = Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, state.cpuPaddle.y + PADDLE_SPEED);
    }

    // Update ball
    state.ball.x += state.ball.dx;
    state.ball.y += state.ball.dy;

    // Ball collision with top/bottom
    if (state.ball.y <= 0 || state.ball.y >= CANVAS_HEIGHT - BALL_SIZE) {
      state.ball.dy = -state.ball.dy;
    }

    // Ball collision with paddles
    if (
      state.ball.x <= state.playerPaddle.x + PADDLE_WIDTH &&
      state.ball.y + BALL_SIZE >= state.playerPaddle.y &&
      state.ball.y <= state.playerPaddle.y + PADDLE_HEIGHT &&
      state.ball.dx < 0
    ) {
      state.ball.dx = -state.ball.dx;
    }

    if (
      state.ball.x + BALL_SIZE >= state.cpuPaddle.x &&
      state.ball.y + BALL_SIZE >= state.cpuPaddle.y &&
      state.ball.y <= state.cpuPaddle.y + PADDLE_HEIGHT &&
      state.ball.dx > 0
    ) {
      state.ball.dx = -state.ball.dx;
    }

    // Score points
    if (state.ball.x < 0) {
      setCpuScore(prev => prev + 1);
      resetBall();
    } else if (state.ball.x > CANVAS_WIDTH) {
      setPlayerScore(prev => prev + 1);
      resetBall();
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw paddles
    ctx.fillStyle = "#fff";
    ctx.fillRect(gameStateRef.current.playerPaddle.x, gameStateRef.current.playerPaddle.y, PADDLE_WIDTH, PADDLE_HEIGHT);
    ctx.fillRect(gameStateRef.current.cpuPaddle.x, gameStateRef.current.cpuPaddle.y, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Draw ball
    ctx.fillRect(gameStateRef.current.ball.x, gameStateRef.current.ball.y, BALL_SIZE, BALL_SIZE);

    // Draw center line
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(CANVAS_WIDTH / 2, 0);
    ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT);
    ctx.strokeStyle = "#fff";
    ctx.stroke();
    ctx.setLineDash([]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    gameStateRef.current.mouseY = e.clientY - rect.top;
  };

  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = () => {
      updateGame();
      draw();
    };

    const interval = setInterval(gameLoop, 1000 / 60); // 60 FPS
    return () => clearInterval(interval);
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted) {
      draw();
    }
  }, [gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    resetBall();
  };

  const resetGame = () => {
    setGameStarted(false);
    setPlayerScore(0);
    setCpuScore(0);
    gameStateRef.current = {
      playerPaddle: { x: 10, y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2 },
      cpuPaddle: { x: CANVAS_WIDTH - 20, y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2 },
      ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, dx: BALL_SPEED, dy: BALL_SPEED },
      mouseY: CANVAS_HEIGHT / 2,
    };
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 bg-card border border-border rounded-lg shadow-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Pong Game</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex justify-between mb-4">
        <span>Player: {playerScore}</span>
        <span>CPU: {cpuScore}</span>
      </div>

      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onMouseMove={handleMouseMove}
        className="border border-border rounded cursor-none"
      />

      <div className="flex gap-2 mt-4">
        {!gameStarted ? (
          <Button onClick={startGame} className="flex-1">
            Start Game
          </Button>
        ) : (
          <Button onClick={resetGame} variant="outline" className="flex-1">
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};