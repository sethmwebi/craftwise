import { motion } from "framer-motion";
import FooterLinks from "./FooterLinks";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center">
          <FooterLinks />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-12 pt-8 border-t border-gray-800 w-full text-center"
          />
        </div>
      </div>
      <Footer2 />
    </footer>
  );
};

export default Footer;
