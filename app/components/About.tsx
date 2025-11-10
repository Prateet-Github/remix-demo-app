import { motion } from "framer-motion"
import { Download, Code, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const About = () => {
  const stats = [
    { label: "Name", value: "Prateet Tiwari" },
    { label: "Location", value: "Delhi, India" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Availability", value: "Available for hire" }
  ]

  const codeSnippet = `const developer = {
  name: "Prateet Tiwari",
  location: "Delhi, India",
  role: "Full Stack Developer",
  skills: ["React", "Next.js", "TypeScript"],
  passion: "Building amazing apps",
  status: "Available for hire"
};

console.log("Let's build something great!");`

  const [displayedCode, setDisplayedCode] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex flex-col text-white border-t border-gray-300 justify-center items-center py-16 px-4 md:px-8 overflow-hidden">
      {/* Background Animation */}
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
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
            <Code className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">About Me</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold px-4">
            Know More <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">About Me</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12 md:mb-16 px-4"
        >
          Developer. Problem Solver. Lifelong Learner.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-20"></div>
              
              <div className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                  <div className="flex gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                    />
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
                    />
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
                    />
                  </div>
                  <span className="text-gray-400 text-xs md:text-sm ml-4 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    developer.js
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-4 md:p-6 font-mono text-xs md:text-sm max-h-64 md:max-h-96 overflow-auto">
                  <pre className="text-gray-300">
                    <code>
                      {displayedCode.split('\n').map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="hover:bg-gray-800 px-2 -mx-2 rounded transition-colors duration-150"
                        >
                          <span className="text-gray-600 mr-2 md:mr-4 select-none">{i + 1}</span>
                          <span dangerouslySetInnerHTML={{ 
                            __html: line
                              .replace(/const|let|var/g, '<span class="text-purple-400">$&</span>')
                              .replace(/=>/g, '<span class="text-blue-400">$&</span>')
                              .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
                              .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-orange-400">$1</span>')
                              .replace(/console/g, '<span class="text-yellow-400">$&</span>')
                              .replace(/\[/g, '<span class="text-gray-400">[</span>')
                              .replace(/\]/g, '<span class="text-gray-400">]</span>')
                              .replace(/{/g, '<span class="text-gray-400">{</span>')
                              .replace(/}/g, '<span class="text-gray-400">}</span>')
                          }} />
                        </motion.div>
                      ))}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-blue-500 ml-1"
                      />
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 p-4 md:p-8">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold"
            >
              A passionate developer based in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Delhi
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed text-base md:text-lg"
            >
              I am a dedicated professional, driven by an entrepreneurial spirit and a passion for continuous innovation. I view every challenge as an opportunity to learn, adapt, and excel, and I lead with a focus on resilience and integrity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed text-base md:text-lg"
            >
              As a proactive leader, I empower teams through clear communication, creative problem solving, and a positive, can-do attitude. I believe in fostering a collaborative environment where every obstacle becomes a stepping stone to success.
            </motion.p>

            {/* Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-200 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="text-gray-400 text-sm mb-1 relative z-10">{stat.label}</p>
                  <p className="text-blue-500 font-semibold relative z-10">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Download CV Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-fit relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About