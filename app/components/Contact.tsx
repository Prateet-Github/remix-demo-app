import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Sparkles, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "prateettiwari29@gmail.com",
      link: "mailto:prateettiwari29@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9569940915",
      link: "tel:+919569940915",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Delhi, India",
      link: null,
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  const socialLinks = [
    { Icon: Github, href: "https://github.com/Prateet-Github", color: "hover:text-gray-300" },
    { Icon: Linkedin, href: "https://linkedin.com/in/prateet-tiwari", color: "hover:text-blue-600" },
    { Icon: Twitter, href: "https://twitter.com/prateet_tiwarii", color: "hover:text-blue-400" },
    { Icon: Instagram, href: "https://instagram.com/prateet_tiwarii", color: "hover:text-pink-500" }
  ]

  return (
    <section id="contact" className="relative min-h-screen flex flex-col lg:flex-row text-white border-t border-gray-300 overflow-hidden">
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

      {/* Left Side - Contact Info */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-16 space-y-6 lg:space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4 lg:mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              together
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-6 lg:mb-8 leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="space-y-3 lg:space-y-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              />

              <div className="relative flex items-center gap-3 md:gap-4 bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-xl p-3 md:p-4 hover:border-gray-600 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`bg-gradient-to-r ${item.gradient} p-2 md:p-3 rounded-lg shadow-lg flex-shrink-0`}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs md:text-sm mb-1">{item.label}</p>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-200 font-medium text-sm md:text-base break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm md:text-base">{item.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-6 lg:pt-8"
        >
          <p className="text-gray-400 mb-4 font-medium text-sm md:text-base">Connect with me</p>
          <div className="flex gap-3 md:gap-4">
            {socialLinks.map(({ Icon, href, color }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 md:w-12 md:h-12 bg-gray-800/50 backdrop-blur-md rounded-lg flex items-center justify-center border border-gray-700 hover:border-blue-500 ${color} transition-all duration-200`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-lg relative"
        >
          {/* Form Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20"></div>

          <form
            onSubmit={handleSubmit}
            className="relative bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                Your Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01, borderColor: "rgb(59, 130, 246)" }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-white placeholder:text-gray-500 text-sm md:text-base"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                Your Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01, borderColor: "rgb(59, 130, 246)" }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-white placeholder:text-gray-500 text-sm md:text-base"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                Subject
              </label>
              <motion.input
                whileFocus={{ scale: 1.01, borderColor: "rgb(59, 130, 246)" }}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-white placeholder:text-gray-500 text-sm md:text-base"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01, borderColor: "rgb(59, 130, 246)" }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none text-white placeholder:text-gray-500 text-sm md:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2.5 md:py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 relative overflow-hidden group text-sm md:text-base"
            >
              <span className="relative z-10">Send Message</span>
              <Send className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact