import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = {
  "Quick Links": [
    { name: "Facebook", url: "https://web.facebook.com/profile.php?id=61571583696663", icon: <FaFacebook /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/craftwise-academyke/?viewAsMember=true", icon: <FaLinkedin /> },
    { name: "Instagram", url: "https://www.instagram.com/craftwiseke?igsh=MWxyZmJsemFzeGRkdg==", icon: <FaInstagram /> }
  ],
  "Programs": [
    { name: "Rising Professionals", route: "/rising" },
    { name: "New Managers", route: "/managers" },
    { name: "Emerging Leaders", route: "/emerging" },
    { name: "Legacy Leaders", route: "/legacy" }
  ],
  "Company": [
    { name: "About Us", sectionId: "about" },
    { name: "How we work", sectionId: "what-we-do" },
    { name: "Crafters Assembly", sectionId: "crafters" },
    { name: "Partners", sectionId: "partners" }
  ],
  "Contact Info": [
    { name: "info@craftwiseacademy.com", sectionId: "email" },
    { name: "+254 715 208 322", sectionId: "phone" },
    { name: "Nairobi , Kenya", sectionId: "address-2" }
  ]
};

const FooterLinks = () => {
  const navigate = useNavigate();

  const handleClick = (e, route) => {
    if (route) {
      e.preventDefault();
      navigate(route);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full text-center">
      {Object.entries(links).map(([category, items], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.2 }}
          className="flex flex-col items-center"
        >
          <h3 className="font-montserrat text-2xl font-semibold text-orange-500 mb-4">
            {category}
          </h3>
          <ul className="space-y-2">
            {items.map((item, itemIndex) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
              >
                <a
                  href={item.url ? item.url : `#${item.sectionId}`}
                  onClick={(e) =>
                    item.route
                      ? handleClick(e, item.route)
                      : item.sectionId && scrollToSection(item.sectionId)
                  }
                  target={item.url ? "_blank" : "_self"}
                  rel={item.url ? "noopener noreferrer" : ""}
                  className={
                    category === "Quick Links"
                      ? "w-10 h-10 font-montserrat rounded-full border border-[#9c6717] hover:bg-[#ffe920] transition duration-500 flex justify-center items-center text-white"
                      : "text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  }
                >
                  {category === "Quick Links" ? item.icon : item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default FooterLinks;
