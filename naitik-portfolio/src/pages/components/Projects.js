import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Cloud, Users, ShoppingCart, FileText, Briefcase } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TeamHalt',
      subtitle: 'Job Assurance Platform',
      description: 'A comprehensive job assurance platform connecting job seekers with employers.',
      technologies: ['Django', 'React.js', 'PostgreSQL', 'Docker', 'AWS EC2'],
      features: ['User Authentication', 'Job Listings', 'Application Tracking', 'Resume Management'],
      icon: Users,
      url: 'https://teamhalt.com/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Attendance Management',
      subtitle: 'Employee Tracking System',
      description: 'A complete employee attendance tracking solution for organizations.',
      technologies: ['Django', 'React.js', 'MySQL', 'Docker', 'AWS'],
      features: ['Real-time Tracking', 'Reports Generation', 'Leave Management', 'Admin Dashboard'],
      icon: FileText,
      url: 'https://attendance.teamhalt.com/',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Document Manager',
      subtitle: 'Centralized Document System',
      description: 'Enterprise-grade document management system for secure file handling.',
      technologies: ['Django REST Framework', 'React.js', 'PostgreSQL', 'S3'],
      features: ['Secure Storage', 'Version Control', 'Sharing & Permissions', 'Search'],
      icon: Database,
      url: 'https://document.teamhalt.com/',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Gahar',
      subtitle: 'E-commerce Clothing Website',
      description: 'A modern e-commerce platform for clothing and fashion products.',
      technologies: ['Django', 'React.js', 'PostgreSQL', 'Payment Gateway'],
      features: ['Product Catalog', 'Shopping Cart', 'Order Management', 'Payment Integration'],
      icon: ShoppingCart,
      url: 'https://thegahar.com/',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Instarupay',
      subtitle: 'Business Website',
      description: 'Professional static business website for financial services.',
      technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
      features: ['Responsive Design', 'Modern UI', 'SEO Optimized', 'Fast Loading'],
      icon: Briefcase,
      url: 'https://flyfoxfinvest.com/',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Unity Backend',
      subtitle: 'Finance API System',
      description: 'REST API backend for finance operations with comprehensive test coverage.',
      technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'Unit Testing'],
      features: ['RESTful APIs', 'Automated Tests', 'Finance Operations', 'Data Validation'],
      icon: Code,
      url: null,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Arvog Backend',
      subtitle: 'Authentication System',
      description: 'API system with robust authentication and data validation.',
      technologies: ['Django', 'JWT Auth', 'PostgreSQL', 'API Documentation'],
      features: ['JWT Authentication', 'Data Validation', 'Rate Limiting', 'API Docs'],
      icon: Cloud,
      url: null,
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects and contributions
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} p-6 flex items-center justify-between`}>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <project.icon className="text-white" size={28} />
                </div>
                {project.url && (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-3">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">7+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Active Users Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-blue-100">Companies Worked With</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

