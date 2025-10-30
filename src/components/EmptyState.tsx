import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface EmptyStateProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const EmptyState = ({ content }: EmptyStateProps) => {
  const navigate = useNavigate();

  const handlePostJob = () => {
    navigate('/pricing');
  };

  return (
    <div className="text-center space-y-6 py-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">{content.title}</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          {content.description}
        </p>
      </div>
      <Button onClick={handlePostJob} size="lg" className="gap-2">
        <Plus className="w-4 h-4" />
        {content.buttonText}
      </Button>
    </div>
  );
};
