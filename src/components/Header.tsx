
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-semibold text-primary text-xl"
        >
          <span className="text-2xl font-playfair">Iftar Giving Tree</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="/impact">
            <Button variant="ghost">Our Impact</Button>
          </Link>
          <Link to="/donate">
            <Button variant="default">Donate Now</Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
