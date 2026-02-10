import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Coffee, Bug, Sparkles, Cloud } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/naitik-singh-430871284/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:yadavnaitik316@gmail.com', label: 'Email' },
  ];

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: Code, delay: 0, left: '5%', top: '15%', color: 'text-orange-500' },
    { icon: Coffee, delay: 1, left: '12%', top: '75%', color: 'text-amber-500' },
    { icon: Sparkles, delay: 1.5, left: '82%', top: '70%', color: 'text-yellow-500' },
    { icon: Code, delay: 2, left: '3%', top: '45%', color: 'text-orange-500' },
    { icon: Sparkles, delay: 2.5, left: '92%', top: '50%', color: 'text-orange-400' },
  ];

  const cloudPositions = [
    { delay: 0, left: '15%', top: '30%', size: 'w-32 h-32' },
    { delay: 1, left: '70%', top: '25%', size: 'w-24 h-24' },
    { delay: 2, left: '25%', top: '60%', size: 'w-28 h-28' },
    { delay: 1.5, left: '75%', top: '65%', size: 'w-20 h-20' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ right: '10%', top: '30%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ left: '30%', bottom: '20%' }}
        />
      </div>

      {/* Cloud Backgrounds */}
      {cloudPositions.map((cloud, index) => (
        <motion.div
          key={index}
          className={`absolute opacity-30 ${cloud.size} bg-gradient-to-r from-white/40 to-white/20 rounded-full blur-xl`}
          style={{ left: cloud.left, top: cloud.top }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 6 + Math.random() * 4, 
            repeat: Infinity,
            delay: cloud.delay 
          }}
        />
      ))}

      {/* Floating 3D Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute hidden lg:block ${item.color}`}
          style={{ left: item.left, top: item.top }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
          >
            <item.icon size={40} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Available for hire
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}
            >
              Hi, I'm <span className="text-gradient">Naitik Singh</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-2xl md:text-3xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}
            >
              Software Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-2xl`}
            >
              Results-driven Software Developer with a strong foundation in Python, Django, and React.js. 
              Building scalable web applications and REST APIs that make a difference.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-300 shadow-lg' : 'bg-gray-100 text-gray-700 shadow-md'} hover:text-orange-500 hover:shadow-orange-500/20 transition-all duration-200`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg hover:shadow-orange-500/30 transition-all duration-200 flex items-center justify-center gap-2"
              >
                About Me
                <ArrowDown size={18} />
              </motion.button>
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); const element = document.querySelector('#projects'); element?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl ${darkMode ? 'bg-gray-800 text-orange-500 border-gray-700' : 'bg-gray-100 text-orange-600 border-gray-200'} font-semibold shadow-lg border-2 hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all duration-200 flex items-center justify-center gap-2`}
              >
                View Projects
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Floating Man with Laptop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              {/* Gradient Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-black"></div>
              </motion.div>

              {/* 3D Man Floating with Laptop Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl bg-white dark:bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-400/20 dark:from-orange-500/10 dark:to-orange-400/10"></div>
                
                {/* Cloud Background */}
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="absolute w-48 h-20 bg-orange-100 dark:bg-white/30 rounded-full blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-40 h-16 bg-orange-50 dark:bg-white/20 rounded-full blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </motion.div>
                </div>

                {/* 3D Man Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {/* Man Body */}
                    <div className="flex flex-col items-center">
                      {/* Head */}
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-coral-500 shadow-lg flex items-center justify-center"
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-coral-400 flex items-center justify-center">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                          </div>
                          <div className="absolute bottom-4 w-6 h-3 bg-gray-800 rounded-full"></div>
                        </div>
                      </motion.div>

                      {/* Body */}
                      <div className="w-16 h-20 bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-800 dark:to-gray-700 rounded-xl mt-2 shadow-lg relative">
                        {/* Laptop */}
                        <motion.div
                          className="absolute -right-8 top-4"
                          animate={{ rotate: [-5, 5, -5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-16 h-12 bg-gradient-to-br from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-300 dark:border-gray-400">
                            <div className="w-12 h-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded flex items-center justify-center">
                              <Code size={12} className="text-white" />
                            </div>
                          </div>
                          <div className="w-14 h-2 bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded mt-1 ml-1"></div>
                        </motion.div>
                      </div>

                      {/* Floating Elements around man */}
                      <motion.div
                        className="absolute -left-8 top-8 text-orange-500"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles size={16} />
                      </motion.div>
                      <motion.div
                        className="absolute right-0 -top-4 text-coral-500"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      >
                        <Code size={14} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Icons on edges */}
                <motion.div
                  className="absolute top-4 right-8 text-amber-500"
                  animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Coffee size={20} />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 left-4 text-orange-400"
                  animate={{ y: [0, 8, 0], rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  <Bug size={20} />
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className={`absolute -bottom-4 -right-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl shadow-xl p-3 flex items-center gap-2`}
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Open to work</span>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Scroll</span>
                <ArrowDown className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

