import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeaturesDropdown from './FeaturesDropdown';

const OfficeLabsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className=" mb-6 bg-gradient-to-b from-orange-50 to-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl font-montserrat font-semibold text-gray-900 mb-2">The CraftWise Office Labs</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p className=" font-montserrat font-medium text-[18px] text-black mt-8">
                A Leading-edge training environment that simulates a fully operational corporate office, 
                featuring functional departments such as HR, Marketing, Sales, and Operations.
              </p>
              <p className=" mt-16 font-montserrat text-lg text-gray-700"><strong>
                Equipped with state-of-the-art technology and tools to provide participants with a 
                hands-on experience reflective of contemporary workplace dynamics.
             </strong> </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://i.imgur.com/zPfjSp1.png"
                alt="Office environment"
                className="rounded-lg shadow-xl mt-0"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 text-4xl">🧪</div>
            </motion.div>
          </div>

          <FeaturesDropdown />
        </motion.div>
      </div>
    </div>
  );
};

export default OfficeLabsSection;