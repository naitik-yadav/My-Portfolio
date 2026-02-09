import { motion } from 'framer-motion';
import { Code, Database, Cloud, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with Django, React.js, and Next.js'
    },
    {
      icon: Server,
      title: 'REST API Development',
      description: 'Designing and implementing RESTful APIs supporting 10,000+ active users'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Working with MySQL, PostgreSQL, and SQLite for efficient data handling'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploying applications on AWS EC2 and S3 using Docker containers'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Results-driven Software Developer
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Results-driven Software Developer with a strong foundation in Python, Django, and React.js. 
              Experienced in building, testing, and deploying scalable web applications and REST APIs. 
              Proficient in Docker, AWS, and modern development workflows.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Recognized for improving backend performance, reducing deployment time, and contributing 
              to cross-functional agile teams to deliver high-quality software solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently working as a Fullstack Developer at TeamHalt Pvt. Ltd., where I develop and 
              deploy production-grade web applications using Django and React.js.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <span className="block text-3xl font-bold text-blue-600">2+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <span className="block text-3xl font-bold text-blue-600">10K+</span>
                <span className="text-sm text-gray-600">Active Users</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <span className="block text-3xl font-bold text-blue-600">5+</span>
                <span className="text-sm text-gray-600">Projects Delivered</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
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

