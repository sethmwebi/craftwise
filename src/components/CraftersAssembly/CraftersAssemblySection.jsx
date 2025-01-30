import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CraftersAssemblyCard from './CraftersAssemblyCard';

const features = [
  {
    icon: "🚀",
    title: "Career Resources",
    description: "Access to career resources and ongoing professional development.",
    delay: 0.2
  },
  {
    icon: "🤝",
    title: "Exclusive Events",
    description: "Invitations to exclusive events and networking opportunities.",
    delay: 0.4
  },
  {
    icon: "💼",
    title: "Job Opportunities",
    description: "Job openings from top companies seeking skilled professionals.",
    delay: 0.6
  }
];

const CraftersAssemblySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id='crafters'  className=" min-h-screen bg-gradient-to-b from-orange-50 to-white py-16">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className=" font-montserrat text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
      
          >
            THE CRAFTERS ASSEMBLY
          </motion.h2>

          <div className="font-montserrat text-[18px] grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <CraftersAssemblyCard key={index} {...feature} />
                ))}
              </div>
              
              <motion.p
                className="text-[20px] text-gray-700 italic mt-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                Join an elite community committed to continuous growth and impact.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <img
                src="https://i.imgur.com/l109sQ7.png"
                alt="Professional meeting"
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CraftersAssemblySection;