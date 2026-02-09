import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com', 
      label: 'GitHub',
      color: 'hover:text-gray-800'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/naitik-singh-430871284/', 
      label: 'LinkedIn',
      color: 'hover:text-sky-600'
    },
    { 
      icon: Mail, 
      href: 'mailto:yadavnaitik316@gmail.com', 
      label: 'Email',
      color: 'hover:text-blue-600'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">Naitik</span> Singh
            </h3>
            <p className="text-gray-400 mb-4">
              Results-driven Software Developer specializing in Python, Django, and React.js. 
              Passionate about building scalable web applications and delivering high-quality solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 bg-gray-800 rounded-lg text-gray-400 transition-colors ${social.color}`}
                >
                  <social.icon size={20} />
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
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
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-500">📍</span>
                <span>1/164 Police Line, Ghaziabad, UP</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span>
                <a href="tel:+919315366691" className="hover:text-blue-400 transition-colors">
                  +91-9315366691
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span>
                <a href="mailto:yadavnaitik316@gmail.com" className="hover:text-blue-400 transition-colors">
                  yadavnaitik316@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Naitik Singh. All rights reserved.
            </motion.p>
            
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.span>
              <span>using Next.js & Tailwind CSS</span>
            </motion.div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

