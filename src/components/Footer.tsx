import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                MH
              </div>
              <div>
                <div className="text-lg font-bold">Mafabana Holdings</div>
                <div className="text-xs text-gray-400">Excellence in Project Management</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Specialising in project development, management, and integrated logistics solutions for public and private sector initiatives.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  City of Johannesburg, Gauteng, South Africa
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+27838002399" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  +27 83 800 2399
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:makhuboe1968@gmail.com" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  makhuboe1968@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin size={18} className="text-amber-500 flex-shrink-0" />
                <a
                  href="https://linkedin.com/in/nhlanhla-makhubo-792a2ba6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-amber-500 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Mafabana Holdings. All rights reserved.
          </p>
          <a
            href="https://www.autopilotai.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-amber-500 transition-colors"
          >
            Powered by <span className="font-semibold">AutopilotAI.IN</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
