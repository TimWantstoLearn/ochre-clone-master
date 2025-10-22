import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a description",
        description: "Describe what you'd like to add to your itinerary",
        variant: "destructive",
      });
      return;
    }

    // Handle AI submission here
    toast({
      title: "Processing your request",
      description: `Adding "${prompt}" to your itinerary...`,
    });
    
    setPrompt("");
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 z-50 px-6 py-6 text-base font-semibold"
      >
        <Sparkles className="w-5 h-5 mr-2" />
        Plan with AI
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              Add to your Itinerary with AI
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Simply give a short description of what you want to do and we will take care of the rest.
            </DialogDescription>
          </DialogHeader>
          
          <Input
            placeholder="Describe your adventure..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            className="w-full"
          />
          
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="secondary"
              onClick={() => {
                setIsOpen(false);
                setPrompt("");
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
