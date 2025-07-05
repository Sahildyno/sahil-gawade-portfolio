
import { motion } from 'framer-motion';
import { Cloud, Settings, Code, Monitor, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'DevOps Automation & Consulting',
      description: 'Streamline your development workflow with automated CI/CD pipelines, infrastructure provisioning, and deployment strategies.',
      features: ['CI/CD Pipeline Setup', 'Workflow Automation', 'Process Optimization', 'Best Practices Consulting'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Infrastructure Setup (AWS)',
      description: 'Design and implement scalable, secure cloud infrastructure on AWS with cost optimization and high availability.',
      features: ['AWS Architecture Design', 'Cost Optimization', 'Security Implementation', 'Migration Services'],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Infrastructure as Code (Terraform)',
      description: 'Manage your infrastructure with version-controlled, repeatable, and scalable Terraform configurations.',
      features: ['Terraform Scripts', 'State Management', 'Multi-environment Setup', 'Infrastructure Versioning'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'CI/CD Pipeline Development',
      description: 'Build robust continuous integration and deployment pipelines that ensure fast, reliable software delivery.',
      features: ['Jenkins Automation', 'GitLab CI/CD', 'Automated Testing', 'Deployment Strategies'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Containerization & Orchestration',
      description: 'Containerize applications with Docker and orchestrate them using Kubernetes for scalability and reliability.',
      features: ['Docker Containerization', 'Kubernetes Deployment', 'Service Mesh', 'Container Security'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Monitoring & Performance Optimization',
      description: 'Implement comprehensive monitoring solutions and optimize system performance for maximum efficiency.',
      features: ['CloudWatch Setup', 'Performance Monitoring', 'Alerting Systems', 'Log Management'],
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <div className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What I <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive DevOps solutions to accelerate your development process and optimize your infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Ready to optimize your infrastructure?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            Let's Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
