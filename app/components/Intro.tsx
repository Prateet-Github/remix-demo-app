import { Github, Instagram, Linkedin, Twitter, ArrowDown, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Intro = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  
  const titles = [
    "Full Stack Developer",
    "Aspiring Entrepreneur",
    "Problem Solver",
    "Tech Enthusiast",
    "Creative Builder"
  ]

  // Rotate titles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl flex flex-col gap-8 items-center justify-center px-12 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-400">Available for freelance work</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-7xl md:text-8xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 inline-block">
              Prateet Tiwari
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Title */}
        <motion.div 
          variants={itemVariants}
          className="h-12 flex items-center justify-center"
        >
          <motion.div
            key={currentTitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-300"
          >
            {titles[currentTitle]}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 max-w-2xl leading-relaxed"
        >
          I specialize in building high-quality web applications using modern technologies like
          React, Node.js, and TypeScript. Let's create something amazing together.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-row gap-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer relative overflow-hidden group"
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0 bg-blue-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 border-2 border-gray-700 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-500/10 transition-colors duration-200"
          >
            View my Work
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 mt-8"
        >
          {[
            { Icon: Instagram, href: "https://instagram.com/prateet_tiwarii", color: "hover:text-pink-500" },
            { Icon: Twitter, href: "https://twitter.com/prateet_tiwarii", color: "hover:text-blue-400" },
            { Icon: Linkedin, href: "https://linkedin.com/in/prateet-tiwari", color: "hover:text-blue-600" },
            { Icon: Github, href: "https://github.com/Prateet-Github", color: "hover:text-gray-300" }
          ].map(({ Icon, href, color }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-400 ${color} transition-all duration-200 cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={floatingAnimation}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Intro