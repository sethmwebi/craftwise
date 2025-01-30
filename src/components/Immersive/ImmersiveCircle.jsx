import { motion } from 'framer-motion';

const ImmersiveCircle = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="relative"
    >
      <div className="relative">
        {/* Dotted circle animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, rgba(251, 146, 60, 0.2) 20%, transparent 40%)`,
          }}
        />
        
        {/* Main circle */}
        <div className="relative bg-[#4A1D1F] rounded-full p-4 lg:p-8 aspect-square flex flex-col items-center justify-center text-center border-2 border-orange-500">
          <div className="text-white mb-2 text-2xl md:text-6xl">{icon}</div>
          <h3 className="text-white font-bold mb-2">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImmersiveCircle;
