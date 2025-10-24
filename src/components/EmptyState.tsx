import { Map, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EmptyState = () => {
  const handlePostJob = () => {
    window.location.href = '/pricing';
  };

  return (
    <div className="text-center space-y-6 py-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">No jobs found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Be the first to post a job and help others find their dream Christian career.
        </p>
      </div>
      
    </div>
  );
};
