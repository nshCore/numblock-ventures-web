
import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardContent from '@/components/dashboard/DashboardContent';

const Dashboard: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <SidebarInset className="p-6">
          <DashboardHeader title="Dashboard" />
          <DashboardContent />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
