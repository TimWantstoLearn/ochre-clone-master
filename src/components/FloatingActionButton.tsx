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
          className="w-20 h-20 rounded-3xl bg-cyan-400 hover:bg-cyan-500 border-4 border-black shadow-2xl transition-all hover:scale-105 flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '8px 8px'
          }}
        >
          <div className="absolute inset-0 border-4 border-black rounded-3xl"></div>
          <Plus className="w-10 h-10 text-black relative z-10" strokeWidth={3} />
        </button>
      ) : (
        <div 
          className="w-80 rounded-3xl bg-black border-4 border-black shadow-2xl p-3 space-y-3 animate-scale-in"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '4px 4px'
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleManual}
              className="aspect-square rounded-2xl bg-yellow-600 hover:bg-yellow-700 border-2 border-black shadow-lg transition-all hover:scale-105 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '6px 6px'
              }}
            >
              <Sliders className="w-8 h-8 text-black" strokeWidth={2.5} />
              <span className="text-white font-bold text-lg">Manual</span>
            </button>
            
            <button
              onClick={handleAI}
              className="aspect-square rounded-2xl bg-pink-500 hover:bg-pink-600 border-2 border-black shadow-lg transition-all hover:scale-105 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '6px 6px'
              }}
            >
              <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
              <span className="text-white font-bold text-lg">AI</span>
            </button>
          </div>
          
          <button
            onClick={handleNewList}
            className="w-full h-28 rounded-2xl bg-cyan-400 hover:bg-cyan-500 border-2 border-black shadow-lg transition-all hover:scale-105 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
              backgroundSize: '6px 6px'
            }}
          >
            <Layers className="w-10 h-10 text-black" strokeWidth={2.5} />
            <span className="text-white font-bold text-xl">New List</span>
          </button>
          
          <button
            onClick={() => setIsExpanded(false)}
            className="w-full h-20 rounded-2xl bg-black/40 hover:bg-black/60 border-2 border-gray-700 transition-all hover:scale-105 flex items-center justify-center"
          >
            <X className="w-8 h-8 text-gray-400" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
};
