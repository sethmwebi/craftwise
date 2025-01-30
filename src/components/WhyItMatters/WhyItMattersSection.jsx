import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyItMattersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className=" bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-8">Why it matters:</h2>
            
            <motion.div
              className="bg-orange-500 text-white p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className=" font-montserrat text-2xl font-bold mb-4">Career Fulfillment:</h3>
              <p  className="font-montserrat text-lg mb-4">
                It's not just about a paycheck. It's about making an impact, feeling
                engaged, and growing continuously.
              </p>
              <p className=" font-montserrat text-lg">
                CraftWise Academy ensures you're not just surviving but thriving in your
                career.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2h5JTIwaXQlMjBtYXR0ZXJzJTIwYWZyaWNhbiUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Career growth"
              className="rounded-lg shadow-2xl"
            />
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-20"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyItMattersSection;