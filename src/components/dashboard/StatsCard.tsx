
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  description?: React.ReactNode;
  footer?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, footer }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
      {(description || footer) && (
        <CardContent>
          {description && <div className="text-xs text-muted-foreground">{description}</div>}
          {footer && <div className="text-xs">{footer}</div>}
        </CardContent>
      )}
    </Card>
  );
};

export default StatsCard;
