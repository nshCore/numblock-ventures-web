
import React from 'react';

const Thesis: React.FC = () => {
  const theses = [
    {
      number: '01',
      title: 'Championing Technology Democratization',
      description: 'We invest in solutions that dismantle long-standing barriers to technology, opening doors for unprecedented access and opportunity. Our vision is a world where breakthrough innovations are accessible to everyone, fueling a vibrant ecosystem of creativity and inclusion.',
      color: 'from-blue-500 to-violet-500'
    },
    {
      number: '02',
      title: 'Pioneering a Decentralized Future',
      description: 'We see blockchain and Web3 as the cornerstones of a new era—one where ownership, governance, and value creation are reimagined. By backing platforms that champion decentralization, we are at the forefront of a movement towards more transparent, equitable, and resilient systems.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      number: '03',
      title: 'Harnessing AI for Radical Transformation',
      description: 'Artificial intelligence is not just a tool—it’s a catalyst for reshaping industries and amplifying human potential. We support ventures that integrate AI to unlock new efficiencies, drive insightful decision-making, and create smarter, more responsive solutions across every sector.',
      color: 'from-violet-500 to-fuchsia-500'
    },
    {
      number: '04',
      title: 'Driving Sustainable Innovation',
      description: 'In a rapidly evolving world, the most impactful companies are those that blend profit with purpose. We are committed to funding innovations that address human needs while respecting the planet’s limits. Our focus is on ventures that generate lasting, positive change, ensuring a sustainable legacy for future generations.',
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
            At the heart of our approach lies an unwavering commitment to harnessing transformative technologies that redefine what's possible. We invest in bold innovations that not only disrupt markets but also empower communities and create lasting impact. Our guiding pillars are:
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
