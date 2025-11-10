import { motion } from "framer-motion";
import { Code2, Database, Globe, Zap } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    items: ["React", "Next.js", "Remix", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 text-green-400" />,
    items: ["Node.js", "Express.js", "Supabase", "MongoDB", "REST APIs"],
  },
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6 text-yellow-400" />,
    items: ["JavaScript", "TypeScript", "C++", "Python"],
  },
  {
    title: "Other Tools",
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    items: ["Git", "VS Code", "Vercel", "Postman", "Figma"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center border-t px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-12 text-blue-500"
      >
        <span className="text-white">Skills</span> & Expertise
      </motion.h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              {skill.items.map((item) => (
                <li key={item} className="hover:text-white transition-colors">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;