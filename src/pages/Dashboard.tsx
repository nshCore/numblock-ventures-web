
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Home, PieChart, DollarSign, BarChart3, Settings, LogOut, BarChart, Info } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Dashboard: React.FC = () => {
  const { profile, signOut } = useAuth();
  
  const handleLogout = () => {
    signOut();
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="flex items-center p-4">
            <div className="text-xl font-bold text-gradient">
              <span className="font-mono">NB</span>
              <span>Ventures</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Overview</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={true} tooltip="Dashboard">
                      <Home />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Portfolio">
                      <PieChart />
                      <span>Portfolio</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Investments">
                      <DollarSign />
                      <span>Investments</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Performance">
                      <BarChart3 />
                      <span>Performance</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Settings">
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Support">
                      <Info />
                      <span>Support</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                      <LogOut />
                      <span>Logout</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="p-4">
            <div className="text-sm text-muted-foreground">
              Logged in as: <span className="font-medium">{profile?.email || 'Loading...'}</span>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="p-6">
          <div className="fixed top-0 left-0 right-0 p-4 pl-[calc(var(--sidebar-width)+1rem)] pr-6 flex items-center justify-between bg-background z-10 border-b">
            <div className="flex items-center">
              <SidebarTrigger />
              <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
            </div>
            <div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </Button>
            </div>
          </div>
          
          <div className="pt-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Welcome, {profile?.full_name || 'Investor'}</h2>
              <p className="text-muted-foreground">
                Here's a summary of your investment performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Investment</CardDescription>
                  <CardTitle className="text-3xl">${profile?.investment_amount?.toLocaleString() || '250,000'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Initial investment: ${profile?.initial_investment?.toLocaleString() || '200,000'}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Current Value</CardDescription>
                  <CardTitle className="text-3xl">${profile?.current_value?.toLocaleString() || '312,500'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-green-500 font-medium">
                    +${(profile?.current_value - profile?.investment_amount)?.toLocaleString() || '62,500'} ({profile?.annual_roi || '25'}%)
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Annual ROI</CardDescription>
                  <CardTitle className="text-3xl">{profile?.annual_roi || '18.2'}%</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-green-500 font-medium">
                    +3.5% from last quarter
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>LP Share</CardDescription>
                  <CardTitle className="text-3xl">{profile?.lp_share || '5.3'}%</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Fund size: $6.2M
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Portfolio Performance</CardTitle>
                  <CardDescription>Last 12 months</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="text-muted-foreground italic">Performance chart would appear here</div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Investment Allocation</CardTitle>
                  <CardDescription>By sector</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="text-muted-foreground italic">Allocation chart would appear here</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
