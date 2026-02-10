import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare, User } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
  const { darkMode } = useTheme();
  
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9315366691',
      href: 'tel:+919315366691',
      color: 'from-orange-500 to-orange-400',
      bg: 'bg-orange-500/20'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'yadavnaitik316@gmail.com',
      href: 'mailto:yadavnaitik316@gmail.com',
      color: 'from-orange-500 to-orange-400',
      bg: 'bg-orange-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'naitik-singh-430871284',
      href: 'https://www.linkedin.com/in/naitik-singh-430871284/',
      color: 'from-orange-500 to-orange-400',
      bg: 'bg-orange-500/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '1/164 Police Line, Ghaziabad, UP',
      href: null,
      color: 'from-orange-500 to-orange-400',
      bg: 'bg-orange-500/20'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ left: '-20%', top: '30%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ right: '-20%', bottom: '30%' }}
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
            Get in touch
          </motion.span>
          <h2 className={`heading-2 ${darkMode ? 'text-black' : 'text-gray-900'} mb-4`}>
            Contact Me
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto mb-4`}>
            Feel free to reach out for collaborations, job opportunities, or just to say hello!
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`heading-3 ${darkMode ? 'text-black' : 'text-gray-900'} mb-4`}>
              Let's Connect
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 leading-relaxed`}>
              I'm currently available for freelance work and full-time positions. 
              If you have a project that needs some creative touch, I'd love to hear about it.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-xl shadow-xl p-4 flex items-center gap-4 cursor-pointer`}
                  onClick={() => item.href && window.open(item.href, '_blank')}
                >
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`font-medium hover:text-orange-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold ${darkMode ? 'text-black' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <MessageSquare size={18} className="text-orange-500" />
                Connect with me
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/naitik-singh-430871284/' },
                  { icon: Mail, href: 'mailto:yadavnaitik316@gmail.com' },
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg flex items-center justify-center hover:shadow-orange-500/20 transition-all`}
                  >
                    <social.icon className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-orange-500 transition-colors`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-lg border rounded-2xl shadow-xl p-8`}>
              <h3 className={`heading-3 ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 flex items-center gap-3`}>
                <Send className="text-orange-500" />
                Send a Message
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Success/Error Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 ${darkMode ? 'bg-green-900/30 border-green-700/50 text-green-400' : 'bg-green-50 border-green-200 text-green-600'} rounded-xl text-sm border`}
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 ${darkMode ? 'bg-red-900/30 border-red-700/50 text-red-400' : 'bg-red-50 border-red-200 text-red-600'} rounded-xl text-sm border`}
                  >
                    ✗ Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}

                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Your Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={`w-full pl-12 pr-4 py-4 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 border`}
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={`w-full pl-12 pr-4 py-4 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 border`}
                    />
                  </div>
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={18} />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className={`w-full pl-12 pr-4 py-4 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 border`}
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className={`w-full px-4 py-4 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 border resize-none`}
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                  className={`w-full py-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                    status === 'submitting'
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-orange-500/30'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Send size={20} />
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

