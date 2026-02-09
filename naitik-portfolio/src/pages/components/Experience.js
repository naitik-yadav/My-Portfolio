import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Fullstack Developer',
      company: 'TeamHalt Pvt. Ltd.',
      period: 'May 2024 - Present',
      location: 'Ghaziabad, UP',
      achievements: [
        'Developed and deployed production-grade web applications using Django and React.js',
        'Built and optimized RESTful APIs to support 10,000+ active users, improving response time by 25%',
        'Containerized applications using Docker and deployed them on AWS EC2 for seamless scaling',
        'Collaborated with cross-functional agile teams to deliver high-quality software solutions'
      ],
      projects: [
        {
          name: 'TeamHalt',
          description: 'Job assurance platform',
          url: 'https://teamhalt.com/'
        },
        {
          name: 'Attendance Management',
          description: 'Employee attendance tracking system',
          url: 'https://attendance.teamhalt.com/'
        },
        {
          name: 'Document Manager',
          description: 'Centralized document management system',
          url: 'https://document.teamhalt.com/'
        },
        {
          name: 'Gahar',
          description: 'E-commerce clothing website',
          url: 'https://thegahar.com/'
        },
        {
          name: 'Instarupay',
          description: 'Static business site',
          url: 'https://flyfoxfinvest.com/'
        }
      ],
      current: true
    },
    {
      title: 'Associate Backend Developer',
      company: 'PayMe India',
      period: 'April 2023 - May 2024',
      location: 'India',
      achievements: [
        'Designed and developed REST APIs in Django for finance-related operations',
        'Wrote automated unit tests increasing code reliability and reducing bugs by 30%',
        'Collaborated with QA and DevOps to streamline deployment pipelines',
        'Implemented robust authentication and data validation using Django'
      ],
      projects: [
        {
          name: 'Unity Backend',
          description: 'REST API with automated test cases using Django',
          url: null
        },
        {
          name: 'Arvog Backend',
          description: 'API system with robust authentication and data validation',
          url: null
        }
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional journey and key accomplishments
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

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
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {experience.title}
                      </h3>
                      {experience.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {experience.company}
                    </h4>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Projects */}
                    {experience.projects.length > 0 && (
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">
                          Key Projects:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.projects.map((project, i) => (
                            <a
                              key={i}
                              href={project.url || '#'}
                              target={project.url ? '_blank' : '_self'}
                              rel={project.url ? 'noopener noreferrer' : ''}
                              className={`inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors ${
                                !project.url ? 'cursor-default' : ''
                              }`}
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

