import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/Breadcrumb";
import { Globe, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  content: {
    postJobButton: string;
  };
  isMobile?: boolean;
  isLandingPage?: boolean;
}

export const Header = ({ content, isMobile, isLandingPage }: HeaderProps) => {
  return (
    <header className={`fixed top-0 ${isMobile ? 'left-0 right-0' : 'right-0 left-16'} h-20 flex items-center ${isMobile && isLandingPage ? 'justify-end' : 'justify-between'} px-8 z-40 bg-background/80 backdrop-blur-sm`}>
      {isMobile && isLandingPage ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/companies">Explore Companies</Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/pricing">Post a Job</Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/add-ons">Add-Ons</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <>
          <div className="flex items-center">
            {!isLandingPage && <PageBreadcrumb />}
          </div>
          {!isMobile && (
            <div className="flex items-center gap-2">
              <Button asChild>
                <Link to="/pricing">Post a Job</Link>
              </Button>
            </div>
          )}
        </>
      )}
    </header>
  );
};
//