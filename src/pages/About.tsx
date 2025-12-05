import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={40} />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results in every project we undertake',
    },
    {
      icon: <Eye size={40} />,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical business practices',
    },
    {
      icon: <Award size={40} />,
      title: 'Innovation',
      description: 'Embracing modern solutions and continuous improvement in project delivery',
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'Working together with clients and stakeholders to achieve shared success',
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
                About Mafabana Holdings
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in project development, management, and integrated logistics solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our Company"
                className="rounded-xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mafabana Holdings is a project development, management, and logistics solutions company specialising in project preparation, supervisory management, finance facilitation, and operational planning.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The business supports both public and private sector initiatives by coordinating human and material resources, identifying risks, and ensuring efficient project execution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The company also provides integrated logistics solutions that support procurement, resource distribution, transport coordination, and end-to-end supply chain management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With experience in practical project facilitation and operational oversight, Mafabana Holdings helps organisations implement scalable, cost-effective, and sustainable project outcomes.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-900 via-amber-600 to-blue-900 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                  NM
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nhlanhla Makhubo</h3>
                  <p className="text-xl text-amber-600 font-semibold mb-4">Director</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  With extensive experience in project management and logistics coordination, Nhlanhla Makhubo leads Mafabana Holdings with a vision of delivering excellence in every project.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  His expertise spans project preparation, supervisory management, finance facilitation, and operational planning across both public and private sector initiatives.
                </p>
                <div className="pt-4 space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Location:</span> City of Johannesburg, Gauteng, South Africa
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Phone:</span>
                    <a href="tel:+27838002399" className="text-blue-900 hover:text-amber-600 transition-colors">
                      +27 83 800 2399
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:makhuboe1968@gmail.com" className="text-blue-900 hover:text-amber-600 transition-colors">
                      makhuboe1968@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">LinkedIn:</span>
                    <a
                      href="https://linkedin.com/in/nhlanhla-makhubo-792a2ba6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:text-amber-600 transition-colors"
                    >
                      View Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
