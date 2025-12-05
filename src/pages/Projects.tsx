import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Infrastructure Project Facilitation',
      description:
        'Comprehensive project management for large-scale infrastructure development, coordinating multiple stakeholders and ensuring timely delivery within budget constraints.',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Infrastructure',
    },
    {
      title: 'Logistics Planning & Supply Chain Execution',
      description:
        'End-to-end supply chain optimization for distribution network, improving efficiency by 40% and reducing operational costs significantly.',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Logistics',
    },
    {
      title: 'Development Project Coordination',
      description:
        'Strategic coordination of multi-phase development project, managing resources, timelines, and stakeholder communications for successful completion.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Development',
    },
    {
      title: 'Resource Allocation & Workforce Management',
      description:
        'Optimized resource allocation and workforce management across multiple project sites, ensuring maximum productivity and efficient utilization.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Management',
    },
    {
      title: 'Transport & Distribution Oversight',
      description:
        'Comprehensive transport coordination and distribution management, streamlining operations and ensuring reliable delivery schedules.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Transport',
    },
    {
      title: 'Public Sector Project Implementation',
      description:
        'Successful implementation of government-funded initiatives, ensuring compliance with regulations and achieving community development objectives.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Public Sector',
    },
    {
      title: 'Private Sector Logistics Solutions',
      description:
        'Tailored logistics solutions for private enterprises, optimizing supply chain operations and enhancing operational efficiency.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Private Sector',
    },
    {
      title: 'Project Finance Facilitation',
      description:
        'Strategic financial planning and facilitation for capital-intensive projects, securing funding and managing budgets effectively.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Finance',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
                Our Projects
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcasing our expertise in project management, development, and logistics solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-900 via-amber-600 to-blue-900 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of our successful project implementations across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="text-white flex items-center gap-2">
                      <span className="text-sm font-semibold">View Details</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-900 via-amber-600 to-blue-900 bg-clip-text text-transparent">
                Project Success Metrics
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Projects</div>
              <div className="text-sm text-gray-600">Successfully Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">On Time</div>
              <div className="text-sm text-gray-600">Delivery Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Clients</div>
              <div className="text-sm text-gray-600">Served Nationwide</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Years</div>
              <div className="text-sm text-gray-600">Industry Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
          >
            Let's collaborate to bring your vision to life with our proven project management expertise
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
