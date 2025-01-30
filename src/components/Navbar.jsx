import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          <div className="">
            <Link to="/">
              <img
                src="https://i.imgur.com/XcKmpWW.png"
                alt="logo"
                className="h-36 object-contain w-auto md:w-56 -ml-5 md:-ml-14 -mt-5 md:-mt-6"
              />
            </Link>
          </div>

          <div className="md:hidden">
            {isMenuOpen ? (
              <X
                className="cursor-pointer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            ) : (
              <Menu
                className="cursor-pointer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            )}
          </div>

          <div className="md:flex hidden  space-x-8">
            <Link
              to="/"
              className=" font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              Home
            </Link>
            <Link
              to="/benefits"
              className="font-montserrat font-medium text-[15px]  inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              Benefits
            </Link>
            .
            <Link
              to="/contact"
              className=" font-montserrat font-medium text-[15px]  inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              Contact
            </Link>
          </div>
        </div>
        {isMenuOpen && (<div className="flex md:hidden justify-center items-center flex-col h-[calc(100vh-4rem)] mt-16">
          <div className="flex flex-col gap-y-8 -mt-16">
            <Link
              to="/"
              className=" font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Home
            </Link>
            <Link
              to="/benefits"
              className="font-montserrat font-medium text-[15px]  inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Benefits
            </Link>
            <Link
              to="/contact"
              className=" font-montserrat font-medium text-[15px]  inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Contact
            </Link>
          </div>
          </div>)}
      </div>
    </motion.nav>
  );
};

export default Navbar;

