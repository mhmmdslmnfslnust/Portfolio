import { motion } from 'framer-motion';

const TimelineItem = ({ item }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="relative"
    >
      {/* Dot */}
      <div className="absolute -left-11 mt-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-dark-light"></div>
      
      <div>
        <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full mb-2">
          {item.period}
        </span>
        
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <h4 className="text-lg text-gray-700 dark:text-gray-300">{item.organization}</h4>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{item.location}</p>
        
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-3 space-y-1">
          {item.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
