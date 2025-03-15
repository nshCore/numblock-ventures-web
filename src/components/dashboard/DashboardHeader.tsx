
import React from 'react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  const { signOut } = useAuth();
  
  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="fixed top-0 left-0 right-0 p-4 pl-[calc(var(--sidebar-width)+1rem)] pr-6 flex items-center justify-between bg-background z-10 border-b">
      <div className="flex items-center">
        <SidebarTrigger />
        <h1 className="ml-4 text-xl font-semibold">{title}</h1>
      </div>
      <div>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
