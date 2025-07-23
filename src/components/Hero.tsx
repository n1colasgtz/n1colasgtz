import React, { useState, useEffect } from 'react';
import { LinkedinIcon, GithubIcon, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="font-mono bg-slate-800 px-2 sm:px-4 py-2 rounded-lg w-full max-w-[18rem] sm:max-w-[24rem] md:max-w-[28rem] h-[2.5rem] flex items-center overflow-hidden">
      <span className="text-green-400">$ </span>
      <span className="text-white text-sm sm:text-base whitespace-nowrap text-ellipsis overflow-hidden flex-1">{displayText}</span>
      {showCursor && !isTypingComplete && <span className="text-white sm:hidden">▋</span>}
    </div>
  );
};

const Hero = () => {
  const squares = Array.from({ length: 40 }, (_, i) => {
    const size = Math.floor(Math.random() * 60 + 30);
    const colors = [
      'bg-teal-100/30',
      'bg-blue-100/30',
      'bg-slate-100/30',
      'bg-teal-200/20',
      'bg-blue-200/20'
    ];
    return {
      id: i,
      size: size,
      color: colors[Math.floor(Math.random() * colors.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotation: Math.floor(Math.random() * 360),
      delay: Math.random() * 2,
      duration: 15 + Math.random() * 10
    };
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="absolute inset-0 overflow-hidden">
        {squares.map(square => (
          <motion.div
            key={square.id}
            className={`absolute ${square.color} rounded-lg`}
            style={{
              width: `${square.size}px`,
              height: `${square.size}px`,
              top: `${square.top}%`,
              left: `${square.left}%`,
              rotate: square.rotation,
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, 20, 0],
              rotate: [square.rotation, square.rotation + 10],
            }}
            transition={{
              duration: square.duration,
              delay: square.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container max-w-6xl relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6"
          >
            Nicolás Gutiérrez
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-10 flex justify-center"
          >
            <TypewriterText text="Automation Engineer" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-guti%C3%A9rrez-0a389a315/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/n1colasgtz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition-colors shadow-md hover:shadow-lg"
              aria-label="GitHub profile"
            >
              <GithubIcon size={20} />
              <span>GitHub</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center text-slate-600"
          >
            <MapPin size={20} className="mr-2" />
            <span>Maastricht, Netherlands</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 z-10"
        animate={{
          y: [0, 15, 0],
          opacity: [1, 0.8, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 via-blue-400 to-slate-800"></div>
    </section>
  );
};

export default Hero;