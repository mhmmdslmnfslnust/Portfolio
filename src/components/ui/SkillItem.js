// import { motion } from 'framer-motion';

// const SkillItem = ({ skill }) => {
//   const item = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.4 } 
//     }
//   };

//   return (
//     <motion.div
//       variants={item}
//       className="bg-white dark:bg-dark p-4 rounded-lg shadow-md flex flex-col items-center"
//     >
//       <div className="text-4xl text-primary dark:text-primary-light mb-3">
//         {skill.icon}
//       </div>
      
//       <h4 className="text-lg font-semibold text-center mb-2">{skill.name}</h4>
      
//       <div className="w-full bg-gray-200 dark:bg-dark-light rounded-full h-2.5 mb-1">
//         <div 
//           className="bg-primary h-2.5 rounded-full" 
//           style={{ width: `${skill.level}%` }}
//         ></div>
//       </div>
      
//       <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
//         {skill.level}%
//       </p>
//     </motion.div>
//   );
// };

// export default SkillItem;

import { motion } from 'framer-motion';
import { 
  FaCode, FaDatabase, FaLanguage, FaUsers, 
  FaComments, FaPuzzlePiece, FaGlassWater 
} from 'react-icons/fa6';

const SkillItem = ({ skill }) => {
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 } 
    }
  };

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'code': return <FaCode />;
      case 'database': return <FaDatabase />;
      case 'language': return <FaLanguage />;
      case 'users': return <FaUsers />;
      case 'comments': return <FaComments />;
      case 'puzzle-piece': return <FaPuzzlePiece />;
      case 'water': return <FaGlassWater />;
      default: return <FaCode />;
    }
  };

  return (
    <motion.div
      variants={item}
      className="bg-white dark:bg-dark p-4 rounded-lg shadow-md flex flex-col items-center"
    >
      <div className="text-4xl text-primary dark:text-primary-light mb-3">
        {getIcon(skill.icon)}
      </div>
      
      <h4 className="text-lg font-semibold text-center mb-2">{skill.name}</h4>
      
      <div className="w-full bg-gray-200 dark:bg-dark-light rounded-full h-2.5 mb-1">
        <div 
          className="bg-primary h-2.5 rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {skill.level}%
      </p>

      {skill.description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
          {skill.description}
        </p>
      )}
    </motion.div>
  );
};

export default SkillItem;