import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "GetRides",
    description:
      "A Ride hailing platform",
    tech: ["React", "Node.js", "MongoDB", "Express","Web Sockets"],
    live: "https://smartbuy.vercel.app",
    repo: "https://github.com/Prateet-Github/smartbuy",
    image: "getrides.png", // sample image
  },
  {
    title: "SmartBuy",
    description:
      "An AI-powered device recommendation platform built with the MERN stack. It compares devices by price, performance, and ratings to help users buy smarter.",
    tech: ["React", "Node.js", "Mongo DB", "Tailwind CSS"],
    live: "#",
    repo: "#",
    image: "smartbuy.png",
  },
  {
    title: "MyMap",
    description:
      "An alternative to Google Maps",
    tech: ["React", "OSM", "OSRM", "Web Sockets", "Node.js"],
    live: "#",
    repo: "#",
    image: "mymap.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center border-t px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-12 text-blue-500"
      >
        Featured <span className="text-white">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400 transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400 transition"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;