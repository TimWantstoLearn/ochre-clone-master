import { Map, Plus } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl shadow-sm border border-border p-12 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
              <Map className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">
              🗺️ Add some plans
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Quickly add new adventures<br />to your travel list.
            </p>
          </div>
          
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Click <Plus className="inline w-4 h-4 mx-1 text-accent" /> to get started
            </p>
          </div>
          
          <div className="pt-4 space-y-2 text-xs text-muted-foreground">
            <p>Free for now. Add to your homescreen.</p>
            <p>
              Created by{" "}
              <a 
                href="https://newcult.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                newcult.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
