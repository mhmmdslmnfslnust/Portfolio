import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-gray-200'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-full ${filter === 'web' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-gray-200'}`}
          >
            Web
          </button>
          <button 
            onClick={() => setFilter('mobile')}
            className={`px-4 py-2 rounded-full ${filter === 'mobile' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-gray-200'}`}
          >
            Mobile
          </button>
          <button 
            onClick={() => setFilter('other')}
            className={`px-4 py-2 rounded-full ${filter === 'other' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-gray-200'}`}
          >
            Other
          </button>
        </div>
        
        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
