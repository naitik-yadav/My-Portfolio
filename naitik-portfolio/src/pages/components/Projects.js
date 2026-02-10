import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, ShoppingCart, FileText, Briefcase, Database, Cloud, Building2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: 'Accounts ERP',
      subtitle: 'Enterprise ERP System',
      description: 'Enterprise resource planning system for managing business operations including accounting, inventory, and HR.',
      technologies: ['ERPNext', 'Frappe', 'MariaDB', 'Docker', 'Nginx'],
      features: ['Accounting', 'Inventory Management', 'HR & Payroll', 'Custom Doctypes'],
      icon: Building2,
      url: 'https://accounts.teamhalt.com/',
      color: 'from-orange-500 to-orange-400',
      stats: ['Enterprise', 'ERP']
    },
    {
      title: 'TeamHalt',
      subtitle: 'Job Assurance Platform',
      description: 'A comprehensive job assurance platform connecting job seekers with employers.',
      technologies: ['Django', 'React.js', 'PostgreSQL', 'Docker', 'AWS EC2'],
      features: ['User Authentication', 'Job Listings', 'Application Tracking', 'Resume Management'],
      icon: Users,
      url: 'https://teamhalt.com/',
      color: 'from-orange-500 to-orange-400',
      stats: ['10K+ Users', 'Production']
    },
    {
      title: 'Attendance Management',
      subtitle: 'Employee Tracking System',
      description: 'A complete employee attendance tracking solution for organizations.',
      technologies: ['Django', 'React.js', 'MySQL', 'Docker', 'AWS'],
      features: ['Real-time Tracking', 'Reports Generation', 'Leave Management', 'Admin Dashboard'],
      icon: FileText,
      url: 'https://attendance.teamhalt.com/',
      color: 'from-orange-500 to-orange-400',
      stats: ['25% Faster', 'Production']
    },
    {
      title: 'Document Manager',
      subtitle: 'Centralized Document System',
      description: 'Enterprise-grade document management system for secure file handling.',
      technologies: ['Django REST Framework', 'React.js', 'PostgreSQL', 'S3'],
      features: ['Secure Storage', 'Version Control', 'Sharing & Permissions', 'Search'],
      icon: Database,
      url: 'https://document.teamhalt.com/',
      color: 'from-orange-500 to-orange-400',
      stats: ['Secure', 'Scalable']
    },
    {
      title: 'Gahar',
      subtitle: 'E-commerce Clothing Website',
      description: 'A modern e-commerce platform for clothing and fashion products.',
      technologies: ['Django', 'React.js', 'PostgreSQL', 'Payment Gateway'],
      features: ['Product Catalog', 'Shopping Cart', 'Order Management', 'Payment Integration'],
      icon: ShoppingCart,
      url: 'https://thegahar.com/',
      color: 'from-orange-500 to-orange-400',
      stats: ['E-commerce', 'Full Stack']
    },
    {
      title: 'Instarupay',
      subtitle: 'Business Website',
      description: 'Professional static business website for financial services.',
      technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
      features: ['Responsive Design', 'Modern UI', 'SEO Optimized', 'Fast Loading'],
      icon: Briefcase,
      url: 'https://flyfoxfinvest.com/',
      color: 'from-orange-500 to-orange-400',
      stats: ['Static', 'Responsive']
    },
    {
      title: 'Unity Backend',
      subtitle: 'Finance API System',
      description: 'REST API backend for finance operations with comprehensive test coverage.',
      technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'Unit Testing'],
      features: ['RESTful APIs', 'Automated Tests', 'Finance Operations', 'Data Validation'],
      icon: Cloud,
      url: null,
      color: 'from-orange-500 to-orange-400',
      stats: ['30% Fewer Bugs', 'Finance']
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-white dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ right: '10%', bottom: '20%' }}
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
            What I've built
          </motion.span>
          <h2 className={`heading-2 ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Featured Projects
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto mb-4`}>
            A showcase of my technical projects and contributions
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300`}
            >
              {/* Card Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <project.icon className="text-white" size={28} />
                  </div>
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
                
                {/* Decorative circles */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-orange-400 mb-3">
                  {project.subtitle}
                </p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4 line-clamp-2`}>
                  {project.description}
                </p>

                {/* Stats Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stats.map((stat, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} text-xs font-medium rounded-md`}
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-xs`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className={`space-y-2 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  {project.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
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
          className={`mt-16 ${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl p-8`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '7+', label: 'Projects Completed', icon: '🚀' },
              { value: '10K+', label: 'Active Users', icon: '👥' },
              { value: '8+', label: 'Technologies', icon: '💻' },
              { value: '2+', label: 'Years Experience', icon: '⏰' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

