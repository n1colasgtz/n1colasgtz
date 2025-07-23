import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, ServerIcon, Terminal } from 'lucide-react';

const SkillCategory = ({ icon, title, skills }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-teal-100 rounded-lg text-teal-600 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 font-medium">{skill.name}</span>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                skill.level === 'Expert' ? 'bg-teal-100 text-teal-700' :
                skill.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                'bg-slate-100 text-slate-700'
              }`}>
                {skill.level}
              </span>
            </div>
            <p className="text-sm text-slate-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const proficiencyLevels = [
    { level: 'Expert', description: 'Deep understanding and mastery, can architect complex solutions.' },
    { level: 'Advanced', description: 'Strong proficiency with independent problem-solving capabilities.' },
    { level: 'Proficient', description: 'Solid foundation with regular practical application.' }
  ];

  const backendSkills = [
    { 
      name: 'Java',
      level: 'Expert',
      description: 'Enterprise application development with extensive experience in Spring ecosystem'
    },
    { 
      name: 'SpringBoot',
      level: 'Expert',
      description: 'Building robust microservices and RESTful APIs'
    },
    {
      name: 'Java Playwright',
      level: 'Expert',
      description: 'Advanced web automation and testing'
    },
    { 
      name: 'Kafka & Zookeeper',
      level: 'Advanced',
      description: 'Event-driven architecture and distributed systems'
    }
  ];

  const devopsSkills = [
    { 
      name: 'Kubernetes',
      level: 'Expert',
      description: 'Container orchestration and cluster management'
    },
    { 
      name: 'Docker & Docker Compose',
      level: 'Expert',
      description: 'Containerization and deployment automation'
    },
    { 
      name: 'Terraform',
      level: 'Advanced',
      description: 'Infrastructure as Code and cloud provisioning'
    },
    { 
      name: 'Bash Scripting',
      level: 'Advanced',
      description: 'Automation and system administration'
    },
    { 
      name: 'Cloud Computing',
      level: 'Expert',
      description: 'Experience with major cloud platforms and architecture'
    },
    { 
      name: 'Cloudflare',
      level: 'Expert',
      description: 'Zero Trust implementation, reverse tunnels, DDoS protection, WAF configuration, and advanced security measures including bot management and captcha integration'
    }
  ];

  const databaseSkills = [
    { 
      name: 'PostgreSQL',
      level: 'Expert',
      description: 'Complex queries, optimization, and database design'
    },
    { 
      name: 'Redis',
      level: 'Expert',
      description: 'Caching, session management, and real-time data handling'
    }
  ];

  const scriptingSkills = [
    { 
      name: 'Python',
      level: 'Advanced',
      description: 'Data analysis, automation, and scripting'
    },
    { 
      name: 'Bash',
      level: 'Advanced',
      description: 'Shell scripting and system automation'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          
          <div className="flex flex-col gap-3 items-center mb-12">
            {proficiencyLevels.map((prof, index) => (
              <div key={index} 
                className={`flex items-center gap-3 px-6 py-3 rounded-lg ${
                  prof.level === 'Expert' ? 'bg-teal-50' :
                  prof.level === 'Advanced' ? 'bg-blue-50' :
                  'bg-slate-50'
                }`}
              >
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  prof.level === 'Expert' ? 'bg-teal-100 text-teal-700' :
                  prof.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {prof.level}
                </span>
                <span className="text-slate-600">{prof.description}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            icon={<Code size={24} />} 
            title="Backend Development" 
            skills={backendSkills} 
          />
          
          <SkillCategory 
            icon={<ServerIcon size={24} />} 
            title="DevOps & Infrastructure" 
            skills={devopsSkills} 
          />
          
          <SkillCategory 
            icon={<Database size={24} />} 
            title="Databases & Caching" 
            skills={databaseSkills} 
          />
          
          <SkillCategory 
            icon={<Terminal size={24} />} 
            title="Scripting & Data Analysis" 
            skills={scriptingSkills} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;