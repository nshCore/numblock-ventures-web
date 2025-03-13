
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-slide-up">About Numblock Ventures</h2>
            
            <div className="opacity-0 animate-slide-up animate-delay-100">
              <h3 className="text-xl font-semibold mb-2 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                At Numblock Ventures, our mission is to empower visionary entrepreneurs in the fields of 
                technology, SaaS, Web3, AI, and blockchain by providing strategic investment, mentorship, 
                and cutting-edge resources. We are committed to helping startups develop transformative 
                solutions, scale rapidly, and create lasting impact through innovation, collaboration, 
                and forward-thinking capital.
              </p>
            </div>
            
            <div className="opacity-0 animate-slide-up animate-delay-200">
              <h3 className="text-xl font-semibold mb-2 text-primary">Our History</h3>
              <p className="text-muted-foreground">
                Founded in 2021 by tech entrepreneurs John Numblock and Sarah Chen, Numblock Ventures 
                emerged from a shared vision to bridge the gap between innovative ideas and sustainable 
                business growth. With over 20 years of combined experience in technology startups and 
                venture capital, our founders have built Numblock Ventures into a leading force in 
                early-stage technology investment.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70 animate-pulse-slow -z-10"></div>
            <div className="bg-card rounded-2xl p-8 shadow-soft opacity-0 animate-slide-up animate-delay-300">
              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-mono text-xl font-bold text-primary">JN</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">John Numblock</h4>
                  <p className="text-muted-foreground">Co-Founder & Managing Partner</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="font-mono text-xl font-bold text-secondary">SC</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Sarah Chen</h4>
                  <p className="text-muted-foreground">Co-Founder & Investment Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
