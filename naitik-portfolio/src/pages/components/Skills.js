import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 }
      ],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Django', level: 90 },
        { name: 'Django REST Framework', level: 85 },
        { name: 'Flask', level: 75 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Bootstrap', level: 85 }
      ],
      color: 'purple'
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'SQLite', level: 80 }
      ],
      color: 'green'
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS (EC2, S3)', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'E2E Networks', level: 70 }
      ],
      color: 'orange'
    },
    {
      title: 'Operating Systems',
      skills: [
        { name: 'Windows', level: 90 },
        { name: 'Linux (Ubuntu)', level: 80 },
        { name: 'macOS', level: 85 }
      ],
      color: 'cyan'
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Observation', level: 90 },
        { name: 'Multi-Tasking', level: 85 },
        { name: 'Decision-Making', level: 80 },
        { name: 'Communication', level: 85 }
      ],
      color: 'pink'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
      cyan: 'bg-cyan-500',
      pink: 'bg-pink-500'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
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
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 0.8 }}
                        className={`h-2 rounded-full ${getColorClasses(category.color)}`}
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

