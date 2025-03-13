
import React from 'react';
import { Zap, Globe, TrendingUp, Users, Lightbulb, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: 'Seed Funding',
      description: 'Strategic early-stage investments to jump-start promising ventures in tech and blockchain.'
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: 'Global Network',
      description: 'Access to our extensive network of industry leaders, mentors, and potential partners.'
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: 'Growth Strategy',
      description: 'Data-driven insights and strategic guidance to scale your business effectively.'
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'Mentorship',
      description: 'One-on-one mentorship from successful entrepreneurs and industry experts.'
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: 'Innovation Lab',
      description: 'Resources and support to develop and refine cutting-edge technologies.'
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: 'Operational Support',
      description: 'Hands-on assistance with legal, financial, and operational challenges.'
    }
  ];
  
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 opacity-0 animate-slide-up">WHAT WE OFFER</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-slide-up animate-delay-100">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-200">
            Comprehensive support for founders building the next generation of groundbreaking companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft opacity-0 animate-slide-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
