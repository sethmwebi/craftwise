import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ExperienceCard = ({ title, description, icon, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="relative"
    >
      <motion.div
        className="bg-white rounded-full w-28  h-28 md:w-32 md:h-32 mx-auto mb-6 flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-3xl md:text-4xl">{icon}</span>
      </motion.div>
      
      <motion.div
        className="text-center"
        animate={{ y: isExpanded ? -10 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-orange-500 hover:text-orange-600 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="mt-4 text-center text-gray-600 overflow-hidden"
      >
        <p>{description}</p>
      </motion.div>
      
    </motion.div>
  );
};

export default ExperienceCard;
