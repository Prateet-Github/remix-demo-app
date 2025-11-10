import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Intro = () => {
  const [displayedCode, setDisplayedCode] = useState("")
  
  const codeSnippet = `const developer = {
  name: "Prateet Tiwari",
  location: "Delhi, India",
  role: "Full Stack Developer",
  skills: ["React", "Next.js", "TypeScript"],
  passion: "Building amazing apps",
  status: "Available for hire"
};

console.log("Let's build something great!");`

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
    <section id="intro" className="min-h-screen flex text-white border-t border-gray-300">
      <div className="w-full flex flex-col gap-6 items-center justify-center p-12 text-center">
        <h1 className="text-8xl">Hi, I'm <span className="text-blue-500 font-bold">
          Prateet Tiwari</span></h1>
        <p className="text-2xl font-sans">Full Stack Developer</p>
        <p className="">
          I specialize in building high-quality web applications using modern technologies like
          React, Node.js, and more.
        </p>
        <div className="flex flex-row gap-4">
          <button className="py-2 px-4 bg-blue-500 text-white rounded cursor-pointer">Get in Touch</button>
          <button className="py-2 px-4 hover:border-blue-500 border text-white rounded cursor-pointer">View my Work</button>
        </div>
        <div className="text-gray-300 flex gap-4">
          <a href="https://instagram.com/prateet_tiwarii" target="_blank" rel="noopener noreferrer">
            <Instagram className="hover:text-blue-500 transition-colors duration-200 cursor-pointer" />
          </a>
          <a href="https://twitter.com/prateet_tiwarii" target="_blank" rel="noopener noreferrer">
            <Twitter className="hover:text-blue-500 transition-colors duration-200 cursor-pointer" />
          </a>
          <a href="https://linkedin.com/in/prateet-tiwari" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-blue-500 transition-colors duration-200 cursor-pointer" />
          </a>
          <a href="https://github.com/Prateet-Github" target="_blank" rel="noopener noreferrer">
            <Github className="hover:text-blue-500 transition-colors duration-200 cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro