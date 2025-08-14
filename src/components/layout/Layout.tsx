import { ReactNode } from "react";
import Navigation from "@/components/ui/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="ml-64 p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;