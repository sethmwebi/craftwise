import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const WhatWeDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id='what-we-do' className=" bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2  className="text-4xl font-montserrat font-bold text-gray-900 mb-10">
            We Serve ...
          </h2>
         
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title=  "Ambitious Professionals"
            description="Looking to elevate their careers through practical, hands-on learning experiences."
            icon={<span className="text-2xl">👥</span>}
            delay={0.2}
            
          />
          <ServiceCard
            title="Corporate Leaders"
            description="Who want to build high-performing teams and drive organizational success."
            icon={<span className="text-2xl">💼</span>}
            delay={0.4}
          />
          <ServiceCard
            title="Organizations"
            description="Committed to fostering a culture of continuous growth and collaboration."
            icon={<span className="text-2xl">🎯</span>}
            delay={0.6}
          />
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
         
          <p  className=" font-montserrat text-[17px] text-gray-800 font-medium  mx-auto p-5">
            Whether you are an aspiring manager, a seasoned leader, or an HR professional seeking innovative training solutions, CraftWise Academy is crafted just for you.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;