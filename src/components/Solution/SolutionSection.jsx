import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ApproachCard from './ApproachCard';

const approaches = [
  {
    title: "High-stakes simulations",
    icon: "🎯",
    delay: 0.2
  },
  {
    title: "Strategic decision-making exercises",
    icon: "🧩",
    delay: 0.4
  },
  {
    title: "Cross-functional adventures",
    icon: "🔄",
    delay: 0.6
  }
];

const SolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className=" mt-0 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 
              className="text-4xl font-montserrat font-bold text-gray-900 mb-6"
              
            
            >
               CraftWise's Unique Approach:
            </h1>
            <motion.p 
              className=" font-montserrat text-[19px] text-gray-800 font-medium mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              
            >
              Breaking away from the traditional, overcrowded training market!!!
            </motion.p>
            
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {approaches.map((approach, index) => (
                <ApproachCard key={index} {...approach} />
              ))}
            </div>
          </div>
          
          <div
           
            className="relative"
          >
            <img 
              src="https://i.imgur.com/0d15ose.jpeg"
              alt="Innovative learning"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 text-4xl">💡</div>
          </div>
        </div>
        
      </div>
      <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-4"
        >
         
          <p  className=" font-montserrat text-[17px] text-gray-800 font-medium  mx-auto p-5">
          We create an entirely new category of learning—experiential, engaging, and transformational.
          </p>
        </motion.div>
    </div>
  );
};

export default SolutionSection;