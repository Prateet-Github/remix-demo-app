import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    
     <section id="footer">
       <footer className="w-full py-6 px-4 border-t border-gray-300 bg-black/30 backdrop-blur-md shadow-lg text-white
      flex items-center justify-between">
      <div className="flex flex-col gap-2">
          <h1 className="text-blue-500 font-semibold text-2xl">MyPortfolio </h1>
        <p className="text-sm text-gray-300">&copy; 2025 Prateet Tiwari. All rights reserved.</p>
      </div>
      <div className="text-gray-300 flex gap-4">
  <a
    href="https://instagram.com/prateet_tiwarii"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="hover:text-white transition-colors duration-200 cursor-pointer" />
  </a>

  <a
    href="https://twitter.com/prateet_tiwarii"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="hover:text-white transition-colors duration-200 cursor-pointer" />
  </a>

  <a
    href="https://linkedin.com/in/prateet-tiwari"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="hover:text-white transition-colors duration-200 cursor-pointer" />
  </a>

  <a
    href="https://github.com/Prateet-Github"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="hover:text-white transition-colors duration-200 cursor-pointer" />
  </a>
</div>
      </footer>
     </section>
   
  )
}

export default Footer