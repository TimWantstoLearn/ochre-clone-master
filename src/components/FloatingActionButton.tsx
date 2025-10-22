import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingActionButton = () => {
  return (
    <Button
      size="icon"
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-accent hover:bg-accent/90 text-accent-foreground z-50"
    >
      <Plus className="w-6 h-6" />
    </Button>
  );
};
