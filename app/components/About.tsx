import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Twitter,Download } from "lucide-react"
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
    <section id="about" className="min-h-screen flex flex-col text-white border-t border-gray-300 justify-center items-center py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold mb-4"
      >
        About <span className="text-blue-500">Me</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-16"
      >
        Get to know me better
      </motion.p>

      <div className="flex mx-20 gap-12 items-center">
        {/* Left Side - Image */}
        {/* <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-1/2 flex items-center justify-center p-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-lg blur-xl opacity-30"></div>
            <img 
              src="mypfp.jpg" 
              alt="Prateet Tiwari" 
              className="relative rounded-lg border-2 border-blue-500 shadow-2xl" 
            />
          </motion.div>
        </motion.div> */}

          <div className="w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm ml-4">developer.js</span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm">
            <pre className="text-gray-300">
              <code>
                {displayedCode.split('\n').map((line, i) => (
                  <div key={i} className="hover:bg-gray-800 px-2 -mx-2 rounded">
                    <span className="text-gray-600 mr-4 select-none">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ 
                      __html: line
                       
                        .replace(/=>/g, '<span class="text-blue-500">$&</span>')
                        .replace(/"([^"]*)"/g, '<span class="text-blue-500">"$1"</span>')
                        .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-orange-400">$1</span>')
                        .replace(/console/g, '<span class="text-yellow-400">$&</span>')
                    }} />
                  </div>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-blue-500 ml-1"
                />
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

        {/* Right Side - Content */}
        <div className="w-1/2 flex flex-col gap-6 p-8">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            A passionate developer based in <span className="text-blue-500">Delhi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed"
          >
            I am a dedicated professional, driven by an entrepreneurial spirit and a passion for continuous innovation. I view every challenge as an opportunity to learn, adapt, and excel, and I lead with a focus on resilience and integrity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed"
          >
            As a proactive leader, I empower teams through clear communication, creative problem solving, and a positive, can-do attitude. I believe in fostering a collaborative environment where every obstacle becomes a stepping stone to success, driving progress and exceeding expectations along the way.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mt-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-200"
              >
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-blue-500 font-semibold">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Download CV Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2 w-fit"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default About