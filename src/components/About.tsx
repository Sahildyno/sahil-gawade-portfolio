
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code, Cloud, Settings, Database } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      type: 'education',
      title: 'MCA - Master of Computer Applications',
      organization: 'Tilak Maharashtra Vidyapeeth, Pune',
      period: 'Expected 2026',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      type: 'work',
      title: 'DevOps Engineer Intern',
      organization: 'HisanLabs',
      period: 'July 2024 – June 2025',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      type: 'education',
      title: 'BCA - Bachelor of Computer Applications',
      organization: 'Sinhgad Institute, Pune',
      period: '2023',
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const skillCategories = [
    {
      title: 'DevOps & Automation',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'Docker', 'Kubernetes', 'Maven', 'Terraform', 'Ansible'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS EC2', 'IAM', 'S3', 'VPC', 'RDS', 'ELB', 'Auto Scaling', 'Route 53', 'SNS', 'SQS', 'CloudWatch'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Programming & Scripting',
      icon: <Code className="w-6 h-6" />,
      skills: ['Bash/Shell', 'Python', 'Django'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'SQL'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Web & Server',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Linux', 'NGINX', 'FTP', 'SSH'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate DevOps Engineer specializing in cloud computing, automation, and infrastructure as code. 
            With a strong foundation in AWS and modern DevOps practices, I bring expertise in building efficient, 
            scalable systems that bridge development and operations seamlessly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-blue-400" />
              Education & Experience
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`p-3 rounded-full ${
                    item.type === 'education' 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                      : 'bg-gradient-to-r from-green-500 to-teal-500'
                  } text-white`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-blue-400 font-medium">{item.organization}</p>
                    <p className="text-gray-400 text-sm">{item.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Code className="w-6 h-6 mr-3 text-blue-400" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm font-medium hover:bg-slate-600 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
