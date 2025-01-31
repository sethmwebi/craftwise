import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div 
    style={{
      backgroundImage: "url('https://i.imgur.com/nPmR0FH.png')",
      backgroundSize: "cover", // Ensures the image covers the entire div
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents tiling
      borderRadius: "12px", // Rounded corners (adjust as needed)
      
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
      overflow: "hidden",
       // For rounded corners
    }}
    className="relative min-h-screen overflow-hidden">
      {/* Background Animated Shape */}
     

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        

       
      </div>
      
        <h1 className='p-8 md:p-32 text-white mt-10  md:mt-24 font-montserrat font-bold text-3xl md:text-7xl'><strong>CRAFTWISE <br></br>ACADEMY</strong></h1>
       

        <p className='pl-8 md:pl-32 font-montserrat text-white text-xl md:text-3xl font-medium' >Experience Learning, <br></br> That Changes Everything.</p>
        <motion.div
          ref={ref}
          className="md:w-1/2 pl-8 md:pl-32 pt-8 p-4 text-white z-10 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.8 }}
        >
            

          

          <Link  to="/programs">
            <motion.button
              className="relative flex items-center justify-center gap-2 px-5 py-3 text-white font-bold text-sm bg-accent border border-white/30 rounded-full shadow-lg overflow-hidden hover:scale-105 hover:border-white/60 transition-transform duration-300 ease-in-out "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Programmes Offered
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6  "
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                ></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
    </div>
  );
}
