
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cloud, ShoppingCart, Car, Database, School } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    
    
    {
      title: 'Car Rental System - Web Application',
      description: 'Full-featured car rental management system with booking functionality, payment processing, and administrative dashboard.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
      technologies: ['PHP', 'MySQL', 'Docker', 'NGINX', 'Git', 'Linux', 'Bootstrap'],
      icon: <Car className="w-6 h-6" />, 
      color: 'from-purple-500 to-pink-500',
      links: {
        demo: '#',
        github: 'https://github.com/Sahildyno/Car-Rental-System.git',
      },
      highlights: [
        'Complete CRUD operations',
        'User authentication',
        'Booking management',
        'Payment integration',
      ],
    },

    {
  title: 'StudentApp.UI',
  description: 'A full-stack student management system deployed on AWS, featuring user login, student records, admin dashboard, and analytics.',
  image: 'https://i.postimg.cc/4xh69nmQ/close-up-person-holding-smartphone-1.jpg', // You can update this with your own app screenshot
  technologies: ['AWS EC2', 'S3', 'Terraform', 'Docker', 'GitLab CI/CD', 'React', 'Node.js', 'MySQL'],
  icon: <School className="w-6 h-6" />, // You can use another icon if needed
  color: 'from-green-500 to-blue-500',
  links: {
    demo: '#',   // ✅ Replace with your live link
    github: 'https://github.com/Sahildyno/studentapp-ui.git', // ✅ Replace with your repo link
  },
  highlights: [
    'Deployed on AWS EC2 with NGINX reverse proxy',
    'Infrastructure automated using Terraform',
    'CI/CD setup with GitLab pipelines',
    'MySQL database with data backup strategy',
  ],
},

{
      title: 'Amazon Clone - Full-Stack eCommerce on AWS',
      description: 'A comprehensive eCommerce platform deployed on AWS with scalable architecture, featuring user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['AWS EC2', 'Terraform', 'Docker', 'Jenkins', 'CloudWatch', 'React', 'Node.js', 'MongoDB'],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      links: {
        github: '#',
      },
      highlights: [
        'Auto-scaling infrastructure',
        'CI/CD with Jenkins',
        'Containerized deployment',
        'Real-time monitoring',
      ],
    }

    
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
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing real-world DevOps implementations and cloud infrastructure projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                  {project.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY HIGHLIGHTS</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  
                  <Button
                    onClick={() => window.open(project.links.github, '_blank')}
                    variant="outline"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
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
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <Button
            onClick={() => window.open('https://github.com/Sahildyno', '_blank')}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Github className="w-5 h-5 mr-2" />
            Visit My GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
