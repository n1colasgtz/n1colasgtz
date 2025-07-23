import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';

const calculateDuration = (startDate, endDate) => {
  // Parse dates with a fallback to ensure compatibility
  const parseDate = (dateStr) => {
    const [month, year] = dateStr.split(' ');
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
    return new Date(year, monthIndex);
  };

  const start = parseDate(startDate);
  const end = endDate === 'Present' ? new Date() : parseDate(endDate);

  // Check if dates are valid
  if (isNaN(start) || isNaN(end)) return 'Invalid duration';

  const diffMs = end - start;
  if (diffMs < 0) return '0 mos'; // Handle future dates

  const diffMonths = Math.round(diffMs / (1000 * 60 * 60 * 24 * 30.44));

  if (diffMonths < 1) return '1 mo';
  if (diffMonths < 12) return `${diffMonths} mos`;
  const years = Math.floor(diffMonths / 12);
  const remainingMonths = diffMonths % 12;
  return remainingMonths >= 6 ? `${years + 1} yrs` : `${years} yrs${remainingMonths > 0 ? ` ${remainingMonths} mos` : ''}`;
};

const ExperienceItem = ({ position, company, period, location, responsibilities, isFirst = false }) => {
  const [startDate, duration] = period.split(' · ');
  const [city, country] = location.split(' · ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col md:flex-row mb-12 md:mb-16"
    >
      <div className="absolute left-0 top-6 md:hidden w-6 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center z-10">
          <BriefcaseIcon size={20} />
        </div>
        <div className="w-1 h-full bg-slate-200 -mt-2"></div>
      </div>

      <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 pl-10 md:pl-0">
        <div className="hidden md:flex absolute right-0 md:right-auto md:left-1/2 transform translate-x-4 md:-translate-x-1/2 top-0 w-10 h-10 rounded-full bg-teal-500 text-white items-center justify-center z-10">
          <BriefcaseIcon size={20} />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">{position}</h3>
        <p className="text-teal-600 font-medium text-base md:text-inherit">{company}</p>

        <div className="mt-2 text-sm md:text-base text-slate-500 space-y-1">
          <div className="flex md:block">
            <span className="font-medium min-w-[80px] inline-block md:hidden">Location:</span>
            <div>
              <p>{city}</p>
              <p>{country}</p>
            </div>
          </div>
          <div className="flex md:block">
            <span className="font-medium min-w-[80px] inline-block md:hidden">Period:</span>
            <div>
              <p>{startDate}</p>
              <p className="text-teal-600 font-medium">{duration}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 md:pl-12 pl-10">
        <ul className="space-y-3 text-slate-600 text-sm md:text-base">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="pl-5 relative before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-teal-500 before:left-0 before:top-2">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      position: "Full-Stack Automation Engineer",
      company: "Self-employed",
      period: `Jul 2025 - Present · ${calculateDuration('Jul 2025', 'Present')}`,
      location: "Maastricht, Limburg · Netherlands",
      responsibilities: [
        "Working on automation solutions to improve the world through adaptive technologies."
      ]
    },
    {
      position: "Automation Developer",
      company: "Eldorado.gg · Self-employed",
      period: `Oct 2021 - Oct 2023 · ${calculateDuration('Oct 2021', 'Oct 2023')}`,
      location: "Malaga, Andalusia · Remote",
      responsibilities: [
        "Developed advanced web scraping solutions using Java Playwright to bypass sophisticated anti-scraping mechanisms, ensuring reliable data extraction.",
        "Designed and implemented robust backend services using Java, Spring Boot, and Lombok, integrating PostgreSQL and Redis across multiple database instances.",
        "Architected real-time data pipelines with Apache Kafka and Zookeeper for efficient event streaming."
      ]
    },
    {
      position: "Automation Developer",
      company: "G2G · Self-employed",
      period: `Oct 2021 - Apr 2023 · ${calculateDuration('Oct 2021', 'Apr 2023')}`,
      location: "Malaga, Andalusia · Remote",
      responsibilities: [
        "Built an automated order dispatch system using Java Playwright for web scraping due to no API access, ensuring GDPR compliance with AES-256 encryption.",
        "Utilized Python scripting to analyze market trends, enhancing competitive pricing strategies."
      ]
    },
    {
      position: "DevOps Developer",
      company: "Minecraft · Self-employed",
      period: `Jun 2014 - Jul 2020 · ${calculateDuration('Jun 2014', 'Jul 2020')}`,
      location: "Malaga, Andalusia · Remote",
      responsibilities: [
        "Server orchestration using Bash scripting, iptables, and helper plugins to manage and maintain interconnected gamemodes.",
        "Network-level protection through firewall rules, port management, access control, and a custom traffic filtering layer for DDoS and brute-force mitigation.",
        "Plugin system optimization by consolidating redundant functionality into unified core plugins.",
        "Coordinated plugin development teams by defining responsibilities and supervising testing."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 px-4 bg-white">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 z-0"></div>
          
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;