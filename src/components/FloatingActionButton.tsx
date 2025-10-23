import { useState } from "react";
import { Plus, Sliders, Sparkles, Layers, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const handleManual = () => {
    toast({
      title: "Manual Mode",
      description: "Opening manual entry...",
    });
    setIsExpanded(false);
  };

  const handleAI = () => {
    toast({
      title: "AI Mode",
      description: "Opening AI assistant...",
    });
    setIsExpanded(false);
  };

  const handleNewList = () => {
    toast({
      title: "New List",
      description: "Creating new list...",
    });
    setIsExpanded(false);
  };

  return (
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
              onClick={handleManual}
              variant="secondary"
              className="aspect-square rounded-xl flex flex-col items-center justify-center gap-2 h-auto p-4"
            >
              <Sliders className="w-6 h-6" />
              <span className="text-sm font-medium">Manual</span>
            </Button>

            <Button
              onClick={handleAI}
              variant="secondary"
              className="aspect-square rounded-xl flex flex-col items-center justify-center gap-2 h-auto p-4"
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-medium">AI</span>
            </Button>
          </div>
          
          <Button
            onClick={handleNewList}
            variant="default"
            className="w-full h-20 rounded-xl flex items-center justify-center gap-3"
          >
            <Layers className="w-5 h-5" />
            <span className="font-medium">New List</span>
          </Button>
          
          <Button
            onClick={() => setIsExpanded(false)}
            variant="outline"
            className="w-full h-12 rounded-xl flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" />
            <span className="text-sm">Close</span>
          </Button>
        </div>
      )}
    </div>
  );
};
