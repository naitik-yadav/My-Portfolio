import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Education = () => {
  const { darkMode } = useTheme();

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'RD Engineering College',
      location: 'Ghaziabad',
      period: '2023 - 2025',
      description: 'Advanced studies in computer science, software development, algorithms, and modern technologies.',
      icon: '🎓',
      accent: 'blue'
    },
    {
      degree: 'Bachelor of Arts (English)',
      institution: 'SD Degree College',
      location: 'Ghaziabad',
      period: '2019 - 2022',
      description: 'Graduated with focus on English literature, communications, and professional writing.',
      icon: '📚',
      accent: 'purple'
    },
    {
      degree: 'PCM (Science)',
      institution: 'Police Modern School',
      location: 'Ghaziabad',
      description: 'Higher secondary education with Physics, Chemistry, and Mathematics.',
      icon: '🔬',
      accent: 'pink'
    }
  ];

  return (
    <section id="education" className={`section-padding ${darkMode ? 'bg-slate-900/50' : 'bg-gray-50'} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ left: '-20%', top: '20%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ right: '-20%', bottom: '20%' }}
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
            Academic background
          </motion.span>
          <h2 className={`heading-2 ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Education
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto mb-4`}>
            My academic journey and qualifications
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-3xl mb-4">
                {edu.icon}
              </div>

              {/* Degree */}
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {edu.degree}
              </h3>

              {/* Institution */}
              <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">
                {edu.institution}
              </h4>

              {/* Meta Info */}
              <div className={`flex flex-wrap items-center gap-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl p-8`}
        >
          <h3 className={`heading-3 ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 flex items-center gap-3`}>
            <GraduationCap className="text-orange-500" />
            Educational Journey
          </h3>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.degree} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div className={`absolute left-1.5 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 border-4 ${darkMode ? 'border-slate-900' : 'border-white'}`}></div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  >
                    <div>
                      <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {edu.degree}
                      </h4>
                      <p className="text-orange-500 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

