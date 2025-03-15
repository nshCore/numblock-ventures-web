
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import StatsCard from './StatsCard';
import { useAuth } from '@/context/AuthContext';

const DashboardContent: React.FC = () => {
  const { profile } = useAuth();
  
  return (
    <div className="pt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Welcome, {profile?.full_name || 'Investor'}</h2>
        <p className="text-muted-foreground">
          Here's a summary of your investment performance
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Total Investment" 
          value={`$${profile?.investment_amount?.toLocaleString() || '250,000'}`}
          description={`Initial investment: $${profile?.initial_investment?.toLocaleString() || '200,000'}`}
        />
        
        <StatsCard 
          title="Current Value" 
          value={`$${profile?.current_value?.toLocaleString() || '312,500'}`}
          footer={
            <div className="text-green-500 font-medium">
              +${(profile?.current_value - profile?.investment_amount)?.toLocaleString() || '62,500'} ({profile?.annual_roi || '25'}%)
            </div>
          }
        />
        
        <StatsCard 
          title="Annual ROI" 
          value={`${profile?.annual_roi || '18.2'}%`}
          footer={<div className="text-green-500 font-medium">+3.5% from last quarter</div>}
        />
        
        <StatsCard 
          title="LP Share" 
          value={`${profile?.lp_share || '5.3'}%`}
          description="Fund size: $6.2M"
        />
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
  );
};

export default DashboardContent;
