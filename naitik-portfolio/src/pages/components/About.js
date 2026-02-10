import { motion } from 'framer-motion';
import { Code, Database, Cloud, Server, Target, Zap, Users, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  const highlights = [
    { icon: Code, title: 'Full Stack Development', description: 'Building scalable web applications with Django, React.js, and Next.js' },
    { icon: Server, title: 'REST API Development', description: 'Designing APIs supporting 10,000+ active users with optimized performance' },
    { icon: Database, title: 'Database Management', description: 'Working with MySQL, PostgreSQL for efficient data handling' },
    { icon: Cloud, title: 'Cloud & DevOps', description: 'Deploying on AWS EC2 and S3 using Docker containers' },
  ];

  const stats = [
    { icon: Award, value: '2+', label: 'Years Experience' },
    { icon: Zap, value: '8+', label: 'Projects Delivered' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ right: '-10%', top: '20%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ left: '-10%', bottom: '20%' }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-medium mb-2 block"
          >
            Get to know me
          </motion.span>
          <h2 className={`heading-2 ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`heading-3 ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Results-driven Software Developer
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
              Results-driven Software Developer with a strong foundation in Python, Django, and React.js. 
              Experienced in building, testing, and deploying scalable web applications and REST APIs. 
              Proficient in Docker, AWS, and modern development workflows.
            </p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
              Currently working as a Fullstack Developer at TeamHalt Pvt. Ltd., where I develop and 
              deploy production-grade web applications. Recognized for improving backend performance 
              and contributing to cross-functional agile teams.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl p-4 text-center`}
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center">
                      <stat.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </span>
                  <span className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {item.title}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

