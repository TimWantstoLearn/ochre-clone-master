import { useState } from "react";
import { Plus, Sliders, Sparkles, Layers, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PongGame } from "./PongGame";

interface FloatingActionButtonProps {
  content: {
    manual: {
      label: string;
      toast: {
        title: string;
        description: string;
      };
    };
    ai: {
      label: string;
      toast: {
        title: string;
        description: string;
      };
    };
    newList: {
      label: string;
      toast: {
        title: string;
        description: string;
      };
    };
    closeButton: string;
  };
}

export const FloatingActionButton = ({ content }: FloatingActionButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPong, setShowPong] = useState(false);
  const { toast } = useToast();

  const handlePong = () => {
    setShowPong(true);
    setIsExpanded(false);
  };

  const handleAI = () => {
    toast({
      title: content.ai.toast.title,
      description: content.ai.toast.description,
    });
    setIsExpanded(false);
  };

  const handleNewList = () => {
    toast({
      title: content.newList.toast.title,
      description: content.newList.toast.description,
    });
    setIsExpanded(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 border-2 border-border shadow-lg transition-all hover:scale-105 flex items-center justify-center"
          >
            <Plus className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
          </button>
        ) : (
          <div className="w-80 rounded-2xl bg-card border border-border shadow-xl p-4 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handlePong}
                variant="secondary"
                className="aspect-square rounded-xl flex flex-col items-center justify-center gap-2 h-auto p-4"
              >
                <Gamepad2 className="w-6 h-6" />
                <span className="text-sm font-medium">Pong</span>
              </Button>

              <Button
                onClick={handleAI}
                variant="secondary"
                className="aspect-square rounded-xl flex flex-col items-center justify-center gap-2 h-auto p-4"
              >
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-medium">{content.ai.label}</span>
              </Button>
            </div>

            <Button
              onClick={handleNewList}
              variant="default"
              className="w-full h-20 rounded-xl flex items-center justify-center gap-3"
            >
              <Layers className="w-5 h-5" />
              <span className="font-medium">{content.newList.label}</span>
            </Button>

            <Button
              onClick={() => setIsExpanded(false)}
              variant="outline"
              className="w-full h-12 rounded-xl flex items-center justify-center gap-2"
            >
              <X className="w-4 h-4" />
              <span className="text-sm">{content.closeButton}</span>
            </Button>
          </div>
        )}
      </div>

      {showPong && <PongGame onClose={() => setShowPong(false)} />}
    </>
  );
};
