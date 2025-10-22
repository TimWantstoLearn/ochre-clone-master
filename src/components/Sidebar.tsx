import { Plane, Home, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-card border-r border-border flex flex-col items-center py-6 z-50">
      <nav className="flex flex-col gap-6 flex-1">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-xl hover:bg-accent/10 transition-all"
        >
          <Plane className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-xl hover:bg-accent/10 transition-all"
        >
          <Home className="w-5 h-5" />
        </Button>
      </nav>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="w-10 h-10 rounded-xl hover:bg-accent/10 transition-all"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </aside>
  );
};
