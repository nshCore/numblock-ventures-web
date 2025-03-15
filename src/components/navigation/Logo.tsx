
import React from 'react';

const Logo: React.FC = () => {
  return (
    <a 
      href="#" 
      className="text-2xl font-bold text-gradient"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <span className="font-mono">{ }Nublock</span>
      <span>Ventures</span>
    </a>
  );
};

export default Logo;
