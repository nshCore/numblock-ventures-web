
import React, { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  website: string;
  year: number;
  details: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const projects: Project[] = [
    {
      id: 1,
      name: 'Rental Master AI',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Your ultimate SaaS solution for rental property management.',
      tags: ['ai', 'real estate', 'saas'],
      website: '#',
      year: 2023,
      details: "Introducing Rental Master AI, your ultimate SaaS solution for rental property management. Say goodbye to the hassles of manual tasks – with Rental Master AI, users can effortlessly generate their own websites for rental properties. Powered by AI, our platform creates high-converting sales copy, manages contracts, facilitates guest check-ins, and handles payments with ease. From streamlining operations to maximizing efficiency, Rental Master AI empowers landlords worldwide to elevate their rental businesses to new heights."
    },
    {
      id: 2,
      name: 'MiCasaDAO',
      category: 'Web3',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Revolutionizing real estate investment through tokenization.',
      tags: ['ai', 'real estate', 'blockchain', 'tokenisation', 'web3'],
      website: '#',
      year: 2022,
      details: "Introducing MiCasaDAO, a groundbreaking web project revolutionizing real estate investment. With MiCasaDAO, individuals can tokenize income-producing short-term holiday rental properties, democratizing access to lucrative real estate opportunities. Through blockchain technology, investors can securely own fractions of properties, diversifying their portfolio with ease. Say goodbye to barriers of entry – MiCasaDAO opens the doors to global real estate investment, empowering everyone to participate in the wealth of the property market."
    },
    {
      id: 3,
      name: 'Food Store AI',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Launch a successful online restaurant ordering website effortlessly.',
      tags: ['ai', 'ecom', 'saas'],
      website: '#',
      year: 2023,
      details: "Introducing FoodStoreAI, your ultimate solution for launching a successful online restaurant ordering website. With FoodStoreAI, anyone can effortlessly create a stunning platform tailored to their culinary venture. Powered by cutting-edge AI technology, FoodStoreAI generates high-converting sales copy and captivating images, ensuring your menu delights and entices customers. Say goodbye to the hassle of website design – FoodStoreAI empowers restaurateurs to showcase their offerings with style and sophistication, driving sales and satisfaction with every click."
    },
    {
      id: 4,
      name: 'Deployer Host',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'The ultimate provisioning tool for developers on the fast track.',
      tags: ['hosting', 'cloud solutions'],
      website: '#',
      year: 2022,
      details: "Introducing Deployer Host, the ultimate provisioning tool for developers on the fast track to shipping products. Designed around DevOps best practices, Deployer Host offers seamless environment provisioning, including dev/stage and production setups. With one-click deployment, developers can effortlessly push their creations from development to production, minimizing deployment headaches and maximizing productivity. Say goodbye to wasted time on setup and configuration – with Deployer Host, developers can focus on what they do best: building exceptional products."
    },
    {
      id: 5,
      name: 'Ecom Store AI',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Your ultimate solution for launching a successful ecommerce website.',
      tags: ['ai', 'ecom', 'saas'],
      website: '#',
      year: 2023,
      details: "Introducing EcomStoreAI, your ultimate solution for launching a successful online ecommerce website. Powered by state-of-the-art AI technology, EcomStoreAI empowers users to effortlessly create stunning platforms that drive conversions. Say goodbye to the guesswork of sales copy and imagery – EcomStoreAI generates high-converting sales copy and captivating images tailored to your products and brand. With EcomStoreAI, anyone can build a professional ecommerce website that stands out in the crowded online marketplace. Unlock the power of AI and elevate your online store with EcomStoreAI."
    },
    {
      id: 6,
      name: 'Audik Dev',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Premier cybersecurity partner specializing in auditing smart contracts.',
      tags: ['web3', 'blockchain', 'cyber security'],
      website: '#',
      year: 2022,
      details: "Introducing Audik Dev, your premier cybersecurity partner specializing in auditing smart contracts and Web3 project code and infrastructure. With expertise in blockchain technology and cybersecurity, Audik Dev provides comprehensive audits to ensure the integrity and security of your projects. From scrutinizing smart contract logic to assessing network infrastructure, our team employs rigorous testing methodologies to identify vulnerabilities and mitigate risks. Trust Audik Dev to safeguard your digital assets and reputation in the rapidly evolving landscape of decentralized finance and Web3 applications."
    },
    {
      id: 7,
      name: 'SnapShotIng',
      category: 'Web3',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Game-changing platform revolutionizing user management for blockchain projects.',
      tags: ['web3', 'blockchain'],
      website: '#',
      year: 2022,
      details: "Introducing SnapShot.ing, the game-changing platform revolutionizing user management for blockchain projects. Say goodbye to cumbersome spreadsheets and manual data parsing – with SnapShot.ing, project owners can effortlessly capture snapshots of users from smart contracts based on customizable input parameters. Whether it's for airdrops, rewards, or community engagement initiatives, SnapShot.ing streamlines the process, allowing project owners to build lists of users with ease. Simplify your workflow and maximize efficiency – choose SnapShot.ing for seamless user management in the decentralized era."
    },
    {
      id: 8,
      name: 'DeFi Index AI',
      category: 'DeFi',
      image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Your gateway to personalized index funds of digital assets.',
      tags: ['web3', 'blockchain', 'defi', 'ai'],
      website: '#',
      year: 2023,
      details: "Introducing DeFi Index AI, your gateway to personalized index funds of digital assets, powered by cutting-edge artificial intelligence. With DeFi Index AI, users can curate their own portfolios with ease, selecting from a wide range of digital assets. Our powerful AI algorithm handles the heavy lifting, automatically rebalancing portfolios to optimize performance and mitigate risk. Say goodbye to emotional trading – DeFi Index AI empowers users to invest with confidence, leveraging data-driven insights for long-term success in the dynamic world of decentralized finance."
    },
    {
      id: 9,
      name: 'DeFi Desktop',
      category: 'DeFi',
      image: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Your all-in-one solution for decentralized finance on your desktop.',
      tags: ['web3', 'blockchain', 'defi', 'ai'],
      website: '#',
      year: 2022,
      details: "Introducing DeFi Desktop, your all-in-one solution for decentralized finance on your desktop. With DeFi Desktop, users can seamlessly connect to multiple DeFi networks across different chains, managing their portfolios with ease. But that's not all – DeFi Desktop's extensible nature empowers developers to create custom plugins for DeFi strategies, enabling endless possibilities for optimizing and automating financial activities. Say hello to a new era of decentralized finance accessibility and innovation – with DeFi Desktop, your DeFi journey starts here."
    },
    {
      id: 10,
      name: 'Company Creator AI',
      category: 'Business Tools',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Your indispensable tool for crafting the optimal corporate structure.',
      tags: ['web3', 'blockchain', 'saas', 'business tools'],
      website: '#',
      year: 2023,
      details: "Introducing Company Creator AI, your indispensable tool for crafting the optimal corporate structure tailored to your business sector. Whether you're diving into real estate with SPVs or venturing into the realm of multinational ecommerce, Company Creator harnesses the power of AI to guide founders in sculpting the ideal legal framework. Drawing on a vast repository of worldwide regulations and industry insights, Company Creator ensures efficiency and compliance every step of the way. Say hello to seamless corporate structuring – with Company Creator AI, founders can embark on their entrepreneurial journey with confidence and clarity."
    },
    {
      id: 11,
      name: 'SmartAccounts.ai',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'AI powered accounting and banking platform.',
      tags: ['accounting', 'crm', 'ai', 'fintech', 'saas'],
      website: '#',
      year: 2023,
      details: "SmartAccounts.ai is a cutting-edge AI-powered accounting and banking platform designed to streamline financial operations for businesses of all sizes. Leveraging advanced machine learning algorithms, the platform automates bookkeeping tasks, reconciles transactions, and provides real-time financial insights with unprecedented accuracy. Beyond traditional accounting, SmartAccounts.ai integrates banking services, enabling seamless money management and financial planning all in one secure ecosystem."
    },
  ];
  
  // Extract all unique categories
  const categories = useMemo(() => {
    const allCategories = projects.map(project => project.category);
    return ['all', ...Array.from(new Set(allCategories))];
  }, [projects]);
  
  // Extract all unique tags
  const tags = useMemo(() => {
    const allTags = projects.flatMap(project => project.tags);
    return Array.from(new Set(allTags));
  }, [projects]);
  
  // Filter projects based on the active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    
    if (categories.includes(activeFilter)) {
      return projects.filter(project => project.category === activeFilter);
    }
    
    // Filter by tag if category not found
    return projects.filter(project => project.tags.includes(activeFilter));
  }, [projects, activeFilter, categories]);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  // Generate pagination items
  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <PaginationItem key={i}>
        <PaginationLink 
          isActive={i === currentPage} 
          onClick={() => handlePageChange(i)}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }
  
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
        
        {/* Combined Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 opacity-0 animate-slide-up animate-delay-300">
          {/* Category Filters */}
          {categories.map((category) => (
            <Button
              key={`category-${category}`}
              variant={activeFilter === category ? "default" : "outline"}
              className="rounded-full capitalize"
              onClick={() => {
                setActiveFilter(category);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
            >
              {category}
            </Button>
          ))}
          
          {/* Tag Filters */}
          {tags.map((tag) => (
            <Badge
              key={`tag-${tag}`}
              variant={activeFilter === tag ? "default" : "outline"}
              className="px-3 py-1.5 cursor-pointer capitalize"
              onClick={() => {
                setActiveFilter(tag);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {currentProjects.map((project, index) => (
            <div 
              key={project.id}
              className="opacity-0 animate-slide-up hover-scale"
              style={{ animationDelay: `${300 + index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <Card className="overflow-hidden cursor-pointer h-full border border-border/50">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mt-3 mb-2">{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs capitalize">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-10 opacity-0 animate-slide-up" style={{ animationDelay: '600ms' }}>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>
              )}
              
              {paginationItems}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
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
                <Badge className="text-xs">
                  {selectedProject.category}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Est. {selectedProject.year}
                </Badge>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.name}</h3>
              <p className="text-muted-foreground mb-6">{selectedProject.details}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="capitalize">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button 
                className="rounded-full"
                asChild
              >
                <a 
                  href={selectedProject.website} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
