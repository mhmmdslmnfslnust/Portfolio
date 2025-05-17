import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <motion.div
      variants={item}
      className="bg-white dark:bg-dark shadow-lg rounded-xl overflow-hidden"
    >
      <div className="h-48 overflow-hidden relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex space-x-3">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-white/20 text-white text-xs rounded backdrop-blur-sm">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 bg-white/20 text-white text-xs rounded backdrop-blur-sm">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
                aria-label="View GitHub repository"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
                aria-label="View live demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <span className="px-3 py-1 text-xs bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
