import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ProgramPage = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  features, 
  tools,
  outcome 
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(`Program Interest from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message: ${formData.message}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:charlesgiftangila@gmail.com?subject=${subject}&body=${body}&from=${formData.email}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Close the form
    setShowForm(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl">{subtitle}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div ref={ref} className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-8">Program Features</h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-orange-500 p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Tools & Resources</h2>
            <ul className="space-y-4">
              {tools.map((tool, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-orange-500">•</span>
                  <span>{tool}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Outcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Program Outcome</h2>
          <p className="text-xl text-gray-600">{outcome}</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all"
          >
            Express Interest
          </button>
          <a href="https://0au0uzstrck.typeform.com/to/EcsAcnpt" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all">
              Apply Now
            </button>
          </a>
        </motion.div>
      </div>

      {/* Interest Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold mb-4">Express Interest</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-md px-3 py-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border rounded-md px-3 py-2"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full border rounded-md px-3 py-2"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProgramPage;

