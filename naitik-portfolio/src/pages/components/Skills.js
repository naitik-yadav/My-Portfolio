import { motion } from 'framer-motion';
import { Code, Box, Database, Cloud, Monitor, Users } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Skills = () => {
  const { darkMode } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML/CSS', level: 90 },
      ],
      colors: { bar: 'from-orange-500 to-orange-400', bg: 'bg-orange-500/20', text: 'text-orange-500' }
    },
    {
      title: 'Frameworks & Libraries',
      icon: Box,
      skills: [
        { name: 'Django', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Flask', level: 75 },
        { name: 'Bootstrap', level: 85 },
      ],
      colors: { bar: 'from-orange-500 to-orange-400', bg: 'bg-orange-500/20', text: 'text-orange-500' }
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 85 },
      ],
      colors: { bar: 'from-orange-500 to-orange-400', bg: 'bg-orange-500/20', text: 'text-orange-500' }
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS (EC2, S3)', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'E2E Networks', level: 90 },
      ],
      colors: { bar: 'from-orange-500 to-orange-400', bg: 'bg-orange-500/20', text: 'text-orange-500' }
    },
    {
      title: 'Operating Systems',
      icon: Monitor,
      skills: [
        { name: 'Windows', level: 80 },
        { name: 'Linux (Ubuntu)', level: 85 },
        { name: 'macOS', level: 85 },
      ],
      colors: { bar: 'from-orange-500 to-orange-400', bg: 'bg-orange-500/20', text: 'text-orange-500' }
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Teamwork', level: 85 },
        { name: 'Time Management', level: 80 },
      ],
      colors: { bar: 'from-orange-500 to-orange-400', bg: 'bg-orange-500/20', text: 'text-orange-500' }
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ left: '-20%', top: '0%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ right: '-20%', bottom: '0%' }}
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
            What I work with
          </motion.span>
          <h2 className={`heading-2 ${darkMode ? 'text-black' : 'text-gray-900'} mb-4`}>
            Skills & Technologies
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto mb-4`}>
            A comprehensive overview of my technical skills and competencies
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl ${category.colors.bg} flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 ${category.colors.text}`} />
                </div>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1, 
                          duration: 1,
                          ease: 'easeOut'
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.colors.bar}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

