
import React from 'react';

const Thesis: React.FC = () => {
  const theses = [
    {
      number: '01',
      title: 'Technology Democratization',
      description: 'We believe in technologies that expand access and create opportunities for more people, breaking down traditional barriers.',
      color: 'from-blue-500 to-violet-500'
    },
    {
      number: '02',
      title: 'Decentralized Future',
      description: 'Blockchain and Web3 technologies are reshaping ownership, governance, and value creation in profound ways.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      number: '03',
      title: 'AI-Powered Transformation',
      description: 'Artificial intelligence will fundamentally augment human capabilities and revolutionize industries through automation and insight.',
      color: 'from-violet-500 to-fuchsia-500'
    },
    {
      number: '04',
      title: 'Sustainable Innovation',
      description: 'The most valuable companies of tomorrow will create solutions that address both human needs and planetary boundaries.',
      color: 'from-fuchsia-500 to-pink-500'
    }
  ];
  
  return (
    <section id="thesis" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 opacity-0 animate-slide-up">OUR PERSPECTIVE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-slide-up animate-delay-100">Investment Thesis</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-200">
            The core principles and beliefs that guide our investment decisions.
          </p>
        </div>
        
        <div className="space-y-8">
          {theses.map((thesis, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 opacity-0 animate-slide-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/5">
                  <div className={`bg-gradient-to-r ${thesis.color} text-white text-4xl font-bold rounded-xl h-20 w-20 flex items-center justify-center`}>
                    {thesis.number}
                  </div>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-2xl font-bold mb-4">{thesis.title}</h3>
                  <p className="text-muted-foreground text-lg">{thesis.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thesis;
