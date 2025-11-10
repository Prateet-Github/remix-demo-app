import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = [
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];

  const { scrollY } = useScroll();
  
  // Transform scroll to width and padding
  const maxWidth = useTransform(scrollY, [0, 100], ["72rem", "46rem"]);
  const padding = useTransform(scrollY, [0, 100], ["0.6rem", "0.6rem"]);
  const logoSize = useTransform(scrollY, [0, 100], ["1.125rem", "1rem"]);

  return (
    <motion.nav
      style={{
        maxWidth: maxWidth,
        paddingTop: padding,
        paddingBottom: padding,
      }}
      className="w-full mx-auto px-6 mt-6 bg-gray-900/80 backdrop-blur-xl shadow-2xl text-white rounded-2xl flex items-center justify-between fixed top-0 left-0 right-0 z-50 border border-gray-800/50"
    >
      {/* Left: Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.h1 
          style={{ fontSize: logoSize }}
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide cursor-pointer"
        >
          Prateet<span className="text-white">.dev</span>
        </motion.h1>
      </motion.div>

      {/* Center: Nav Links - Desktop */}
      <div className="hidden md:block">
        <ul className="flex gap-8">
          {NavItems.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={item.link}
                className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 origin-left transition-transform duration-300 hover:scale-x-100"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right: Button - Desktop */}
      <div className="hidden md:block">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-5 font-semibold rounded-lg text-sm cursor-pointer transition-all duration-200 overflow-hidden group inline-block"
        >
          <span className="relative z-10">Get in Touch</span>
          <motion.div
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 mt-2 mx-6 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl md:hidden overflow-hidden"
        >
          <ul className="flex flex-col">
            {NavItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 border-b border-gray-800/30 last:border-b-0"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: NavItems.length * 0.1 }}
              className="p-4"
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-5 font-semibold rounded-lg"
              >
                Get in Touch
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;