import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ExternalLink, Code2, Phone, MapPin, Link, User, MessageCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/naitik-singh-430871284/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:yadavnaitik316@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black">
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-slate-900 to-black' : 'bg-gradient-to-t from-gray-100 to-white'}`}></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ left: '-20%', top: '20%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ right: '-20%', bottom: '20%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold">NS</span>
              </div>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Naitik<span className="text-gradient">Singh</span>
              </span>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>
              Results-driven Software Developer with expertise in Python, Django, and React.js. 
              Building scalable web applications that make a difference.
            </p>
            <div className="flex gap-3">
              <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <User size={18} className="text-orange-500" />
                Connect
              </h4>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-400 hover:text-orange-400 hover:bg-orange-900/30' : 'bg-gray-100 text-gray-600 hover:text-orange-500 hover:bg-orange-100'} flex items-center justify-center transition-colors`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
              <Link size={18} className="text-orange-500" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`${darkMode ? 'text-gray-400 hover:text-orange-400' : 'text-gray-600 hover:text-orange-500'} transition-colors text-sm flex items-center gap-2`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
              <MessageCircle size={18} className="text-orange-500" />
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className={`flex items-center gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-orange-500" />
                </span>
                +91-9315366691
              </li>
              <li className={`flex items-center gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-orange-500" />
                </span>
                yadavnaitik316@gmail.com
              </li>
              <li className={`flex items-start gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-orange-500" />
                </span>
                1/164 Police Line, Ghaziabad, UP
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} my-8`}></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Naitik Singh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

