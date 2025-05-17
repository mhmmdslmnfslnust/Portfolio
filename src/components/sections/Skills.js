import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillItem from '../ui/SkillItem';
import { skills } from '../../data/skills';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Software'
  };

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-light">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {Object.keys(categoryTitles).map(category => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 text-center">{categoryTitles[category]}</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.filter(skill => skill.category === category).map(skill => (
                  <SkillItem key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
