import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const ContactItem = ({ icon, title, value, link, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-3 bg-teal-100 rounded-lg text-teal-600 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-slate-500 mb-1">{title}</h3>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
        >
          {value}
        </a>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="container max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Let's connect on LinkedIn to discuss potential collaborations and opportunities
          </p>
        </motion.div>

        <div className="flex justify-center">
          <ContactItem 
            icon={<Linkedin size={24} />} 
            title="LinkedIn" 
            value="Connect on LinkedIn" 
            link="https://www.linkedin.com/in/nicol%C3%A1s-guti%C3%A9rrez-0a389a315/"
            delay={0.1}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500">
            © {new Date().getFullYear()} Nicolás Gutiérrez. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;