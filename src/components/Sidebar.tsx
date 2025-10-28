import { Building, Home, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SidebarNavigationItem {
  id: string;
  label: string;
  path: string;
}

interface SidebarProps {
  content: {
    navigation: SidebarNavigationItem[];
    themeToggle: {
      lightLabel: string;
      darkLabel: string;
    };
  };
}

export const Sidebar = ({ content }: SidebarProps) => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "home":
        return <Home className="w-5 h-5" />;
      case "companies":
        return <Building className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-card border-r border-border flex flex-col items-center py-6 z-50">
      <nav className="flex flex-col gap-6 flex-1">
        {content.navigation.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-xl hover:bg-accent/10 transition-all"
            onClick={() => navigate(item.path)}
            aria-label={item.label}
          >
            {getIcon(item.id)}
          </Button>
        ))}
      </nav>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="w-10 h-10 rounded-xl hover:bg-accent/10 transition-all"
        aria-label={isDark ? content.themeToggle.darkLabel : content.themeToggle.lightLabel}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </aside>
  );
};
