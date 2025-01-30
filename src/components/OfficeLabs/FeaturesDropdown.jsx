import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: "Advanced technology and collaboration tools",
    icon: "💻",
    description: "State-of-the-art digital tools that mirror real workplace environments"
  },
  {
    title: "Real-time problem-solving exercises",
    icon: "🎯",
    description: "Hands-on scenarios that develop critical thinking and decision-making skills"
  },
  {
    title: "Role-playing scenarios",
    icon: "🎭",
    description: "Immersive experiences that simulate leadership and team dynamics"
  }
];

const FeaturesDropdown = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="space-y-4">
      <h3 className=" font-montserrat text-4xl font-bold text-gray-900 mb-6">Features:</h3>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white font-montserrat rounded-lg shadow-md overflow-hidden text-[15px]"
        >
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-orange-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{feature.icon}</span>
              <span className="font-semibold text-gray-800">{feature.title}</span>
            </div>
            <motion.span
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </button>
          
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 bg-orange-50"
              >
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesDropdown;