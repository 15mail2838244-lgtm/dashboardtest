import { motion } from 'framer-motion';
import {
  Briefcase,
  DollarSign,
  ClipboardCheck,
  Users,
  Truck,
  BarChart3,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase size={48} />,
      title: 'Project Management & Coordination',
      description:
        'Comprehensive project oversight from planning to execution, ensuring all deliverables meet quality standards and timelines. We coordinate teams, manage resources, and maintain clear communication throughout the project lifecycle.',
      features: [
        'Project planning and scheduling',
        'Team coordination and leadership',
        'Risk identification and mitigation',
        'Quality assurance and control',
      ],
    },
    {
      icon: <DollarSign size={48} />,
      title: 'Project Finance & Development Support',
      description:
        'Strategic financial planning and facilitation services to ensure project viability and sustainable funding. We assist in budget development, financial analysis, and securing project financing.',
      features: [
        'Budget planning and management',
        'Financial analysis and reporting',
        'Funding facilitation',
        'Cost optimization strategies',
      ],
    },
    {
      icon: <ClipboardCheck size={48} />,
      title: 'Project Preparation & Planning',
      description:
        'Detailed preparation and strategic planning services to set your project up for success. We develop comprehensive project plans that address all aspects of execution.',
      features: [
        'Feasibility studies',
        'Resource requirement analysis',
        'Timeline development',
        'Stakeholder engagement planning',
      ],
    },
    {
      icon: <Users size={48} />,
      title: 'Supervisory & Resource Facilitation',
      description:
        'Expert oversight and resource coordination to ensure optimal project performance. We manage human and material resources efficiently to maximize productivity.',
      features: [
        'Team supervision and development',
        'Resource allocation and optimization',
        'Performance monitoring',
        'Capacity building',
      ],
    },
    {
      icon: <Truck size={48} />,
      title: 'End-to-End Logistics Solutions',
      description:
        'Comprehensive logistics management covering procurement, distribution, and transport coordination. We streamline your supply chain for maximum efficiency.',
      features: [
        'Procurement management',
        'Transport coordination',
        'Warehouse and distribution',
        'Logistics planning and optimization',
      ],
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Supply Chain Planning & Operational Support',
      description:
        'Strategic supply chain design and operational support to ensure seamless material flow. We optimize your supply chain for cost-effectiveness and reliability.',
      features: [
        'Supply chain strategy development',
        'Vendor management',
        'Inventory optimization',
        'Process improvement',
      ],
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
                Our Services
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive project management and logistics solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="text-blue-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
                Why Choose Our Services
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="text-5xl font-bold text-blue-900 mb-4">15+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years of Experience</h3>
              <p className="text-gray-600">
                Proven track record in delivering successful projects across various sectors
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="text-5xl font-bold text-blue-900 mb-4">100+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Projects Completed</h3>
              <p className="text-gray-600">
                Successfully delivered projects for public and private sector clients
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="text-5xl font-bold text-blue-900 mb-4">98%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                High satisfaction rates through excellence in service delivery
              </p>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
          >
            Contact us today to discuss how our services can help you achieve your project goals
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
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
