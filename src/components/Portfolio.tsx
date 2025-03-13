
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  website: string;
  year: number;
  details: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      name: 'BlockChain',
      category: 'Blockchain',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Decentralized finance protocol for asset management',
      website: '#',
      year: 2022,
      details: 'BlockChain is revolutionizing financial asset management through blockchain technology, providing unparalleled security and transparency for institutional clients. Our strategic investment has helped them scale to over $100M in managed assets within 18 months.'
    },
    {
      id: 2,
      name: 'NexAI',
      category: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1677442135040-b03af523ae12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'AI-powered business intelligence platform',
      website: '#',
      year: 2021,
      details: 'NexAI delivers advanced analytics and business intelligence through a suite of AI tools that process unstructured data at scale. Their platform helps enterprises extract actionable insights, improving decision-making efficiency by 40%.'
    },
    {
      id: 3,
      name: 'CloudSphere',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Enterprise cloud management solution',
      website: '#',
      year: 2020,
      details: 'CloudSphere provides a comprehensive cloud infrastructure management platform that helps enterprises optimize costs and enhance security across multi-cloud environments. Their solution has been adopted by Fortune 500 companies globally.'
    },
    {
      id: 4,
      name: 'TokenWave',
      category: 'Web3',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Web3 infrastructure for token economies',
      website: '#',
      year: 2022,
      details: 'TokenWave builds essential infrastructure for creating and managing token-based communities and economies. Their SDK has been integrated into over 50 projects, supporting new models of digital ownership and governance.'
    },
    {
      id: 5,
      name: 'DataMesh',
      category: 'Big Data',
      image: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Distributed data processing framework',
      website: '#',
      year: 2021,
      details: 'DataMesh has developed a groundbreaking distributed data processing framework that reduces computation time by 75% compared to traditional methods. Their technology enables real-time analytics for massive datasets with minimal infrastructure requirements.'
    },
    {
      id: 6,
      name: 'SecureEdge',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Next-gen security for IoT networks',
      website: '#',
      year: 2020,
      details: 'SecureEdge delivers enterprise-grade security for IoT deployments, addressing the unique challenges of protecting distributed device networks. Their patented technology has been deployed across industrial IoT, healthcare, and smart city applications.'
    },
  ];
  
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 opacity-0 animate-slide-up">OUR INVESTMENTS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-slide-up animate-delay-100">Portfolio Companies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-200">
            Innovative startups we've backed that are reshaping industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="opacity-0 animate-slide-up hover-scale"
              style={{ animationDelay: `${300 + index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-card rounded-2xl overflow-hidden cursor-pointer border border-border/50 h-full">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div 
            className="bg-card rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-auto relative z-10 animate-fade-in shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-foreground/80 hover:text-foreground bg-background/50 rounded-full p-2"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>
            
            <div className="h-64 md:h-80 overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-semibold px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full">
                  Est. {selectedProject.year}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.name}</h3>
              <p className="text-muted-foreground mb-6">{selectedProject.details}</p>
              
              <a 
                href={selectedProject.website} 
                className="inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2.5 font-medium transition-all hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
