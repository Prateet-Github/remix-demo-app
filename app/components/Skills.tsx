import { motion } from "framer-motion";
import { Code2, Database, Globe, Zap, Sparkles } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Globe className="w-8 h-8" />,
    items: ["React", "Next.js", "Remix", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500"
  },
  {
    title: "Backend",
    icon: <Database className="w-8 h-8" />,
    items: ["Node.js", "Express.js", "Supabase", "MongoDB", "REST APIs"],
    color: "from-green-500 to-emerald-500",
    bgGlow: "bg-green-500"
  },
  {
    title: "Programming",
    icon: <Code2 className="w-8 h-8" />,
    items: ["JavaScript", "TypeScript", "C++", "Python"],
    color: "from-yellow-500 to-orange-500",
    bgGlow: "bg-yellow-500"
  },
  {
    title: "Other Tools",
    icon: <Zap className="w-8 h-8" />,
    items: ["Git", "VS Code", "Vercel", "Postman", "Figma"],
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500"
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center border-t border-gray-300 px-6 py-20 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
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
            <span className="text-sm text-blue-400">My Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 ${skill.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              />

              {/* Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 h-full hover:border-gray-600 transition-all duration-300">
                {/* Icon Header */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} mb-4 shadow-lg`}
                >
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {skill.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-2 group/item"
                    >
                      <motion.span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-sm font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
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
            Want to see these skills in action?
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-200 relative overflow-hidden group"
          >
            <span className="relative z-10">View My Projects</span>
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

export default Skills;