import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { User, Home, BookOpen, Trophy, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BookOpen, label: "Lessons", path: "/lessons" },
    { icon: Trophy, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <nav className="bg-card border-r border-border p-4 w-64 h-screen fixed left-0 top-0 flex flex-col">
      <div className="mb-8">
        <Link to="/" className="flex items-center gap-3 font-bold text-xl text-primary">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-sm">🦉</span>
          </div>
          LearnLingo
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
              "hover:bg-primary/10 hover:text-primary",
              location.pathname === path
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "text-muted-foreground"
            )}
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </div>

      <div className="mt-auto">
        <div className="p-4 bg-gradient-card rounded-xl border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
              <User size={16} className="text-secondary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-sm">Guest User</p>
              <p className="text-xs text-muted-foreground">Level 1</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>🔥 0 day streak</span>
            <span>💎 0 XP</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;