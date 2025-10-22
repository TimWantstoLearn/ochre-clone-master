import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FloatingActionButtonProps {
  hasTrips: boolean;
  onAdd: () => void;
  onDelete: () => void;
}

export const FloatingActionButton = ({ hasTrips, onAdd, onDelete }: FloatingActionButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);
    
    if (hasTrips) {
      onDelete();
    } else {
      onAdd();
    }
  };

  return (
    <Button
      size="icon"
      onClick={handleClick}
      aria-label={hasTrips ? "Delete all trips" : "Add new adventure"}
      className={`
        fixed bottom-8 right-8 w-14 h-14 rounded-full 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 ease-out
        hover:scale-110 active:scale-95
        bg-accent hover:bg-accent/90 text-accent-foreground 
        border-2 border-foreground
        z-50
        ${isPressed ? 'scale-95 shadow-md' : ''}
      `}
    >
      <div className={`transition-all duration-300 ${isPressed ? 'rotate-90' : ''}`}>
        {hasTrips ? (
          <Trash2 className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <Plus className="w-6 h-6 transition-transform duration-300" />
        )}
      </div>
    </Button>
  );
};
