import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9315366691',
      href: 'tel:+919315366691',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'yadavnaitik316@gmail.com',
      href: 'mailto:yadavnaitik316@gmail.com',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'naitik-singh-430871284',
      href: 'https://www.linkedin.com/in/naitik-singh-430871284/',
      color: 'bg-sky-100 text-sky-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '1/164 Police Line, Ghaziabad, UP',
      href: null,
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, job opportunities, or just to say hello!
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-8">
              I'm currently available for freelance work and full-time positions. 
              If you have a project that needs some creative touch, I'd love to hear about it.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <item.icon size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/naitik-singh-430871284/', color: 'bg-sky-100 text-sky-600 hover:bg-sky-200' },
                  { icon: Mail, href: 'mailto:yadavnaitik316@gmail.com', color: 'bg-blue-100 text-blue-600 hover:bg-blue-200' },
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center transition-colors`}
                  >
                    <social.icon size={24} />
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
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

