import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BenefitCard from "./BenefitCard";
import Footer from "../Footer/Footer";

const benefits = [
  {
    title: "Transformative Learning",
    description: "Move beyond theory to action.",
    icon: "🎯",
    delay: 0.2,
  },
  {
    title: "Empathetic Leadership",
    description: "Deepen understanding of your team.",
    icon: "❤️",
    delay: 0.3,
  },
  {
    title: "Strategic Agility",
    description: "Develop confidence in high-stakes situations.",
    icon: "⚡",
    delay: 0.4,
  },
  {
    title: "Career Fulfillment",
    description: "Acquire skills that make you more valuable and satisfied.",
    icon: "🌟",
    delay: 0.5,
  },
  {
    title: "Exclusive Network",
    description:
      "Access the Crafter's Assembly—resources, events, and job opportunities",
    icon: "🤝",
    delay: 0.6,
  },
];

const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className=" font-montserrat text-4xl font-bold text-gray-900 mb-8">
              BENEFITS
            </h2>
            <div className=" font-montserrat text-[17px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BenefitsSection;
