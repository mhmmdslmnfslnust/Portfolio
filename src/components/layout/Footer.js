import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import config from '../../config';
import SocialIcon from '../ui/SocialIcon';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{config.name}</h3>
            <p className="text-gray-400 mt-2">{config.title}</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            {Object.entries(config.socialMedia).map(([platform, url]) => (
              <a 
                key={platform}
                href={url} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                className="hover:text-primary transition-colors duration-300"
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
          
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors duration-300"
          >
            <FaArrowUp />
          </button>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {config.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">Student at NUST, {config.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
