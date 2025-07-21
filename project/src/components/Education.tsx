import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      title: "Data Science and Artificial Intelligence",
      institution: "Maastricht University",
      period: "2023 - 2024"
    },
    {
      title: "Bachillerato de Ciencias",
      institution: "IES Reyes Católicos",
      period: "2019 - 2021"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-50">
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educations.map((education, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : (index === 1 ? 30 : 0) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start"
            >
              <div className="p-3 bg-teal-100 rounded-lg text-teal-600 mr-4 shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{education.title}</h3>
                <p className="text-teal-600 font-medium mt-1">{education.institution}</p>
                <p className="text-slate-500 mt-1">{education.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;