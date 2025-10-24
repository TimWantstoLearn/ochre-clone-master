import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-16 h-20 flex items-center justify-end px-8 z-40 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link to="/pricing">Post a Job</Link>
        </Button>
      </div>
    </header>
  );
};
