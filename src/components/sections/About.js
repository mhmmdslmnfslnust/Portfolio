// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const About = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   return (
//     <section id="about" className="section bg-gray-50 dark:bg-dark-light">
//       <div className="container">
//         <h2 className="section-title">About Me</h2>
        
//         <motion.div 
//           ref={ref}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={variants}
//           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
//         >
//           <div className="flex justify-center">
//             <div className="relative w-64 h-64 md:w-80 md:h-80">
//               <div className="absolute inset-0 rounded-full border-4 border-primary bg-gray-200 dark:bg-dark-dark overflow-hidden">
//                 <img 
//                   src="https://via.placeholder.com/300" 
//                   alt="Profile" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
//             <p className="text-gray-700 dark:text-gray-300 mb-6">
//               I'm a passionate Frontend Developer with a strong background in creating user-friendly 
//               and accessible web applications. With over X years of experience, I specialize in 
//               React, JavaScript, and modern CSS frameworks like Tailwind CSS.
//             </p>
            
//             <h3 className="text-2xl font-semibold mb-4">Key Skills</h3>
//             <div className="flex flex-wrap gap-2 mb-6">
//               <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full">React</span>
//               <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full">JavaScript</span>
//               <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full">Tailwind CSS</span>
//               <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full">UI/UX Design</span>
//               <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full">Responsive Design</span>
//             </div>
            
//             <h3 className="text-2xl font-semibold mb-4">Fun Facts</h3>
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//               <li>Coffee enthusiast</li>
//               <li>Amateur photographer</li>
//               <li>Hiking lover</li>
//               <li>Avid book reader</li>
//             </ul>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, scrollVariants } from '../../utils/scrollReveal';
import config from '../../config';

const About = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-light">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <motion.div 
          ref={ref}
          variants={scrollVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">{config.name}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {config.about.biography}
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Education:</h4>
              <p className="text-gray-600 dark:text-gray-300">{config.education}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Location:</h4>
              <p className="text-gray-600 dark:text-gray-300">{config.location}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Fun Facts:</h4>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                {config.about.funFacts.map((fact, index) => (
                  <li key={index} className="mb-1">{fact}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img 
                src="/profile-image.jpg" 
                alt={`${config.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
