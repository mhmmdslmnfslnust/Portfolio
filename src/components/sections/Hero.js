// import { motion } from 'framer-motion';
// import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

// const Hero = () => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <section id="home" className="h-screen flex items-center">
//       <div className="container mx-auto px-4">
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="max-w-2xl"
//         >
//           <motion.p variants={item} className="text-primary dark:text-primary-light text-lg mb-2">
//             Hello, I'm
//           </motion.p>
          
//           <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-4">
//             Your Name
//           </motion.h1>
          
//           <motion.h2 variants={item} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
//             Frontend Developer & UI/UX Designer
//           </motion.h2>
          
//           <motion.p variants={item} className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
//             I build exceptional digital experiences that are intuitive, accessible, and visually appealing.
//           </motion.p>
          
//           <motion.div variants={item} className="flex space-x-4">
//             <a
//               href="#contact"
//               className="btn btn-primary"
//             >
//               Contact Me
//             </a>
            
//             <a
//               href="#projects"
//               className="btn btn-outline"
//             >
//               View Projects
//             </a>
//           </motion.div>
          
//           <motion.div variants={item} className="mt-8 flex space-x-6">
//             <a
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors"
//               aria-label="GitHub"
//             >
//               <FiGithub size={24} />
//             </a>
//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors"
//               aria-label="LinkedIn"
//             >
//               <FiLinkedin size={24} />
//             </a>
//             <a
//               href="https://twitter.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors"
//               aria-label="Twitter"
//             >
//               <FiTwitter size={24} />
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import config from '../../config';
import SocialIcon from '../ui/SocialIcon';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark dark:to-dark-light">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-primary">{config.name}</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            variants={itemVariants}
          >
            {config.title} <br />
            <span className="text-lg">{config.education}</span>
          </motion.p>
          
          <motion.div 
            className="mb-10"
            variants={itemVariants}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">Based in {config.location}</p>
            <p className="text-md mb-6">Passionate about technology and learning new skills (about drinking water).</p>
            
            <div className="flex justify-center space-x-4">
              {Object.entries(config.socialMedia).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="h-10 w-10 rounded-full bg-gray-200 dark:bg-dark-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <Link 
              to="about"
              smooth={true}
              duration={500}
              className="btn btn-primary cursor-pointer"
            >
              About Me
            </Link>
            <Link 
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-outline cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
