import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "GetRides",
    description:
      "A Ride hailing platform with real-time tracking and seamless booking experience for users and drivers.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Web Sockets"],
    live: "https://smartbuy.vercel.app",
    repo: "https://github.com/Prateet-Github/smartbuy",
    image: "getrides.png",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "SmartBuy",
    description:
      "An AI-powered device recommendation platform built with the MERN stack. It compares devices by price, performance, and ratings to help users buy smarter.",
    tech: ["React", "Node.js", "Mongo DB", "Tailwind CSS"],
    live: "#",
    repo: "#",
    image: "smartbuy.png",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "MyMap",
    description:
      "An alternative to Google Maps with custom routing, real-time navigation, and interactive map features.",
    tech: ["React", "OSM", "OSRM", "Web Sockets", "Node.js"],
    live: "#",
    repo: "#",
    image: "mymap.png",
    gradient: "from-purple-500 to-pink-500",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center border-t border-gray-300 px-6 py-20 overflow-hidden"
    >
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
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
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
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">My Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing my recent work and passion projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              />

              {/* Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/20"
                  >
                    Featured
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className={`bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white text-xs px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-all duration-200 group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </motion.a>
                    
                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-all duration-200 group/link"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </motion.a>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${project.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Prateet-Github"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-200 relative overflow-hidden group"
          >
            <Github className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View All Projects on GitHub</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;