import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase, Code, Zap, Users } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();

  const experiences = [
    {
      title: 'Fullstack Developer',
      company: 'TeamHalt Pvt. Ltd.',
      period: 'May 2024 - Present',
      location: 'Ghaziabad, UP',
      type: 'Full-time',
      achievements: [
        'Developed and deployed production-grade web applications using Django and React.js',
        'Built and optimized RESTful APIs supporting 10,000+ active users, improving response time by 25%',
        'Containerized applications using Docker and deployed them on AWS EC2 for seamless scaling',
        'Collaborated with cross-functional agile teams to deliver high-quality software solutions'
      ],
      projects: [
        { name: 'Accounts ERP', description: 'Enterprise ERP system', url: 'https://accounts.teamhalt.com/' },
        { name: 'TeamHalt', description: 'Job assurance platform', url: 'https://teamhalt.com/' },
        { name: 'Attendance Management', description: 'Employee attendance tracking', url: 'https://attendance.teamhalt.com/' },
        { name: 'Document Manager', description: 'Centralized document management', url: 'https://document.teamhalt.com/' },
        { name: 'Gahar', description: 'E-commerce clothing website', url: 'https://thegahar.com/' },
        { name: 'Instarupay', description: 'Static business site', url: 'https://flyfoxfinvest.com/' }
      ],
      tech: ['Django', 'React.js', 'PostgreSQL', 'Docker', 'AWS'],
      current: true,
      accent: 'blue'
    },
    {
      title: 'Associate Backend Developer',
      company: 'PayMe India',
      period: 'April 2023 - May 2024',
      location: 'India',
      type: 'Full-time',
      achievements: [
        'Designed and developed REST APIs in Django for finance-related operations',
        'Wrote automated unit tests increasing code reliability and reducing bugs by 30%',
        'Collaborated with QA and DevOps to streamline deployment pipelines',
        'Implemented robust authentication and data validation using Django'
      ],
      projects: [
        { name: 'Unity Backend', description: 'REST API with automated test cases', url: null },
        { name: 'Arvog Backend', description: 'API system with authentication', url: null }
      ],
      tech: ['Django', 'PostgreSQL', 'REST API', 'Unit Testing'],
      current: false,
      accent: 'purple'
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-white dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ left: '60%', top: '30%' }}
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
            My journey
          </motion.span>
          <h2 className={`heading-2 ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Work Experience
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto mb-4`}>
            Professional journey and key accomplishments
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-black z-10"
                  style={{ 
                    background: experience.current 
                      ? 'linear-gradient(135deg, #f97316, #ea580c)' 
                      : 'linear-gradient(135deg, #fb923c, #f97316)'
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {experience.title}
                      </h3>
                      {experience.current && (
                        <span className={`px-3 py-1 ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'} text-xs font-medium rounded-full`}>
                          Current
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-3">
                      {experience.company}
                    </h4>

                    {/* Meta Info */}
                    <div className={`flex flex-wrap items-center gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} text-xs font-medium rounded-full`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Projects */}
                    {experience.projects.length > 0 && (
                      <div>
                        <h5 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 flex items-center gap-2`}>
                          <Briefcase size={14} />
                          Key Projects:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.projects.map((project, i) => (
                            <a
                              key={i}
                              href={project.url || '#'}
                              target={project.url ? '_blank' : '_self'}
                              rel={project.url ? 'noopener noreferrer' : ''}
                              className={`inline-flex items-center gap-1 px-3 py-1 ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-orange-900/30 hover:text-orange-400' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'} rounded-full text-xs font-medium transition-colors ${!project.url ? 'cursor-default' : ''}`}
                            >
                              {project.name}
                              {project.url && <ExternalLink size={10} />}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

