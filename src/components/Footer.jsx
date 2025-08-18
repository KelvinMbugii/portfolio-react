import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/KelvinMbugii', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/kelvin-weru-470b37293/', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:kc1078900@gmail.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: 'kc1078900@gmail.com', href: 'mailto:kc1078900@gmail.com' },
    { icon: <Phone className="h-5 w-5" />, text: '+254 713-387069', href: 'tel:+254713387069' },
    { icon: <MapPin className="h-5 w-5" />, text: 'Nairobi, Kenya', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life!
          </p>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Start a Conversation
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-cyan-400">{item.icon}</div>
                      <span>{item.text}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-cyan-400">{link.icon}</div>
                      <span className="text-white text-sm">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
                <div className="space-y-3">
                  {['Home', 'Skills', 'Portfolio', 'About', 'Contact'].map((item) => (
                    <motion.button
                      key={item}
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2025 Nelion Designs. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;