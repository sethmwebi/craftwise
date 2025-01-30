import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImmersiveCircle from './ImmersiveCircle';

const experiences = [
  {
    title: "TRANSFORMATIVE LEARNING",
    description: "Active participation, problem-solving, and hands-on practice",
    icon: "🔄 ",
    delay: 0.2
  },
  {
    title: "EMPATHETIC LEADERSHIP",
    description: "Role-reversal challenges to build understanding and trust",
    icon: "🥇",
    delay: 0.4
  },
  {
    title: "STRATEGIC AGILITY",
    description: "Real-time decision-making under pressure",
    icon: "🎯",
    delay: 0.6
  }
];

const ImmersiveSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-[#2A1011] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2  className=" font-montserrat text-5xl font-bold text-orange-500 mb-4">CRAFTWISE</h2>
          <h3  className=" font-montserrat text-4xl font-bold text-orange-500 mb-16">EXPERIENCE: IMMERSIVE</h3>
          
          <div className=" font-montserrat grid grid-cols-1 md:grid-cols-3 gap-16 relative text-2xl">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-orange-500" />
            
            {experiences.map((experience, index) => (
              <ImmersiveCircle key={index} {...experience} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveSection;
