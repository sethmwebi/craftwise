import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer/Footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState("");
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill out all fields.");
      return;
    }

    const mailtoLink = `mailto:info@craftwiseacademy.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <div className="min-h-screen bg-orange-900 py-16">
        <motion.section
          ref={sectionRef}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          id="contact"
          className="relative overflow-hidden py-16"
        >
          <motion.div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-gradient" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2
                style={{ fontFamily: "Nexa " }}
                className="text-4xl font-bold text-white mb-4"
              >
                Contact Us
              </h2>
              <p
                style={{ fontFamily: "Nexa " }}
                className="text-white/80 text-2xl"
              >
                Get in touch with the CraftWise Academy team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                variants={itemVariants}
              >
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {formError && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-red-500/10 border border-red-500/20 text-red-200 text-center p-3 rounded-lg"
                    >
                      <p>{formError}</p>
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/90 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/90 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/90 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your message..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ fontFamily: "Nexa " }}
                    className="w-full bg-secondary text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:bg-secondary/90 hover:shadow-xl text-2xl transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
                variants={itemVariants}
              >
                <div className="space-y-8">
                  <h3
                    style={{ fontFamily: "Nexa " }}
                    className="text-2xl font-semibold text-white mb-8"
                  >
                    Contact Information
                  </h3>

                  {[
                    {
                      icon: FaMapMarkerAlt,
                      title: "Address",
                      content: "Nairobi, Kenya",
                    },
                    {
                      icon: FaPhone,
                      title: "Phone",
                      content: "+254 715 208 322",
                    },
                    {
                      icon: FaEnvelope,
                      title: "Email",
                      content: "INFO@CRAFTWISEACADEMY.COM",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-4 bg-secondary/20 rounded-xl group-hover:bg-secondary/30 transition-colors duration-300">
                        <item.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h4
                          style={{ fontFamily: "Nexa " }}
                          className="font-medium text-white text-lg mb-1"
                        >
                          {item.title}
                        </h4>
                        <p className="text-white/70 group-hover:text-white transition-colors duration-300">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
