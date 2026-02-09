import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'RD Engineering College',
      location: 'Ghaziabad',
      period: '2023 - 2025',
      description: 'Advanced studies in computer science, software development, and modern technologies.',
      icon: '🎓'
    },
    {
      degree: 'Bachelor of Arts (English)',
      institution: 'SD Degree College',
      location: 'Ghaziabad',
      period: '2019 - 2022',
      description: 'Graduated with focus on English literature and communications.',
      icon: '📚'
    },
    {
      degree: 'PCM (Science)',
      institution: 'Police Modern School',
      location: 'Ghaziabad',
    //   period: '2017 - 2018',
      description: 'Higher secondary education with Physics, Chemistry, and Mathematics.',
      icon: '🔬'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
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
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl mb-4">
                {edu.icon}
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {edu.degree}
              </h3>

              {/* Institution */}
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                {edu.institution}
              </h4>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
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
              <p className="text-gray-600 text-sm">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline View (Alternative) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Educational Journey
          </h3>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.degree} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
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

