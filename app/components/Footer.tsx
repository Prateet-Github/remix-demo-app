import { Github, Instagram, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  const socialLinks = [
    { Icon: Instagram, href: "https://instagram.com/prateet_tiwarii", color: "hover:text-pink-500" },
    { Icon: Twitter, href: "https://twitter.com/prateet_tiwarii", color: "hover:text-blue-400" },
    { Icon: Linkedin, href: "https://linkedin.com/in/prateet-tiwari", color: "hover:text-blue-600" },
    { Icon: Github, href: "https://github.com/Prateet-Github", color: "hover:text-gray-300" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="footer" className="relative">
      {/* Decorative Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <footer className="relative w-full py-8 px-6 bg-gray-900/95 backdrop-blur-xl text-white overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-40 -bottom-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -right-40 -bottom-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Logo & Copyright */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 text-center md:text-left"
            >
              <motion.h1 
                whileHover={{ scale: 1.05 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-2xl cursor-pointer"
              >
                Prateet.dev
              </motion.h1>
              <p className="text-sm text-gray-400 flex items-center gap-1 justify-center md:justify-start">
                Made with <Heart className="w-4 h-4 text-red-500 inline-block" fill="currentColor" /> by Prateet Tiwari
              </p>
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </motion.div>

            {/* Center: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="hidden md:flex gap-6"
            >
              {["About", "Skills", "Projects", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>

            {/* Right: Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              {socialLinks.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800/50 backdrop-blur-md rounded-lg flex items-center justify-center border border-gray-700 hover:border-gray-600 ${color} transition-all duration-200`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Bottom Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-6"
          />

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-center text-xs text-gray-500"
          >
            <p>Designed & Built by Prateet Tiwari • Powered by React & Remix</p>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer group"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </motion.button>
      </footer>
    </section>
  )
}

export default Footer