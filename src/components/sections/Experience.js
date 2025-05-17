import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineItem from '../ui/TimelineItem';
import { experience, education } from '../../data/experience';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState('experience');

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
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'experience'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-gray-200'
              }`}
            >
              Work Experience
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'education'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-gray-200'
              }`}
            >
              Education
            </button>
          </div>
        </div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {activeTab === 'experience' ? (
            <div className="border-l-2 border-primary ml-3 pl-8 space-y-10">
              {experience.map(item => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="border-l-2 border-primary ml-3 pl-8 space-y-10">
              {education.map(item => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
