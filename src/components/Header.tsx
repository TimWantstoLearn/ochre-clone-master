import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/Breadcrumb";

interface HeaderProps {
  content: {
    postJobButton: string;
  };
}

export const Header = ({ content }: HeaderProps) => {
  return (
    <header className="fixed top-0 right-0 left-16 h-20 flex items-center justify-between px-8 z-40 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center">
        <PageBreadcrumb />
      </div>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link to="/pricing">Post a Job</Link>
        </Button>
      </div>
    </header>
  );
};
//