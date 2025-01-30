import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PartnerCard = ({ logo, name, rating, delay,website }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center"
    >
      <div className="bg-white w-48 h-48 rounded-full flex items-center justify-center p-6 shadow-lg hover:shadow-xl transition-shadow">
        <img src={logo} alt={name} className="w-32 h-32 object-contain" />
      </div>
      <div className="flex mt-4 space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + (i * 0.1) }}
            className="text-2xl text-yellow-400"
          >
            ⭐
          </motion.span>
        ))}
      </div>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 hover:text-white  space-x-1  relative flex items-center justify-center gap-2 px-5 py-2.5 text-yellow-500 font-bold text-sm   border-white/30 rounded-full shadow-lg overflow-hidden hover:scale-105 hover:border-white/60 transition-transform duration-300 ease-in-out  mx-auto"
      >
        <FaExternalLinkAlt size={20} />
        
      </a>
    </motion.div>
  );
};

export default PartnerCard;