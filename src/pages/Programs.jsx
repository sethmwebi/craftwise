import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
const programs = [
  {
    title: "NEW MANAGERS PROGRAMME",
    subtitle: "Transitioning from Individual Contributor to Leader",
    description: "A comprehensive program designed for new managers, focusing on essential leadership skills and team management fundamentals.",
    image: "https://i.imgur.com/Y94ziMX.png",
    path: "/managers"
  },
  {
    title: "EMERGING LEADERS PROGRAMME",
    subtitle: "Preparing for Senior Leadership Roles",
    description: "An advanced program for emerging leaders ready to take on greater organizational responsibilities.",
    image: "https://i.imgur.com/1NTh8oR.png",
    path: "/emerging"
  },
  {
    title: "LEGACY LEADERS PROGRAMME",
    subtitle: "Shaping Organizational Transformation",
    description: "An executive program focused on building lasting organizational impact and cultural transformation.",
    image: "https://i.imgur.com/qsWTkfs.png",
    path: "/legacy"
  },
  {
    title: "RISING PROFESSIONALS PROGRAMME",
    subtitle: "Empowering Early Career Success",
    description: "A foundational program designed to accelerate the growth of emerging professionals.",
    image: "https://i.imgur.com/6GjLRZC.png",
    path: "/rising"
  }
];

function ProgramSection({ program, index }) {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleReadMore = () => {
    navigate(program.path);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col md:flex-row items-center gap-8 py-16 border-b border-gray-200 last:border-b-0"
    >
      <div className="w-full md:w-1/2">
        <img 
          src={program.image} 
          alt={program.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">{program.title}</h2>
        <h3 className="text-xl text-gray-600">{program.subtitle}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {program.description}
        </p>
        <motion.button
          onClick={handleReadMore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="read-more text-coral-red font-semibold inline-flex items-center group"
        >
          Read more
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

function Programs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          width: '100%',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Empowering leaders and organizations through world-class education and development programs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {programs.map((program, index) => (
          <ProgramSection key={index} program={program} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Programs;