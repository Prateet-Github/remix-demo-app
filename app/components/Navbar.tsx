import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const NavItems = [
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];

  const { scrollY } = useScroll();
  
  // Transform scroll to width - from max-w-6xl (72rem) to smaller
  const maxWidth = useTransform(scrollY, [0, 100], ["72rem", "46rem"]);

  return (
    <motion.nav
     style={{
        maxWidth: maxWidth,
        transition: 'max-width 0.5s ease-out'
      }}
      className="w-full max-w-6xl mx-auto px-6 py-3 mt-6
                 bg-black/30 backdrop-blur-md shadow-lg text-white rounded-2xl 
                 flex items-center justify-between fixed top-0 left-0 right-0 z-50"
    >
      {/* Left: Logo */}
      <div>
        <h1 className="font-bold text-blue-500 text-lg tracking-wide">
          MyPortfolio
        </h1>
      </div>

      {/* Center: Nav Links */}
      <div>
        <ul className="flex gap-8">
          {NavItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="relative text-gray-200 hover:text-white transition-colors duration-200
                           after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                           after:w-full after:scale-x-0 after:bg-blue-500 after:origin-left 
                           after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Button */}
      <div>
        <button className="bg-white hover:text-blue-500 text-black py-2 px-4 font-semibold rounded-xl text-xs cursor-pointer">
          Get in Touch
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;