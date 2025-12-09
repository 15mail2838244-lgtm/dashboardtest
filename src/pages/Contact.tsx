import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');

  try {
    // 1️⃣ Submit to Netlify Forms (this stores submissions)
    const formEl = e.target as HTMLFormElement;
    const formDataObj = new FormData(formEl);

    await fetch('/', {
      method: 'POST',
      body: formDataObj,
    });

    // 2️⃣ Trigger email notification
    try {
      await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (emailError) {
      console.warn('Email notification failed:', emailError);
    }

    // 3️⃣ Reset form
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  } catch (err) {
    console.error('Submission error:', err);
    setError('Failed to submit form. Please try again or contact us directly.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your project goals
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Contact Information
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mafabana Holdings is a project development, management, and logistics solutions company specialising in delivering excellence for both public and private sector initiatives.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      City of Johannesburg<br />
                      Gauteng, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+27838002399"
                      className="text-blue-900 hover:text-amber-600 transition-colors"
                    >
                      +27 83 800 2399
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:makhuboe1968@gmail.com"
                      className="text-blue-900 hover:text-amber-600 transition-colors"
                    >
                      makhuboe1968@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/nhlanhla-makhubo-792a2ba6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:text-amber-600 transition-colors"
                    >
                      Connect with Nhlanhla Makhubo
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Director</h3>
                <p className="text-lg font-bold text-blue-900">Nhlanhla Makhubo</p>
                <p className="text-sm text-gray-600">Mafabana Holdings</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-netlify="true"
                  name="contact"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-gray-50">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230267.08703419!2d27.8546!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Johannesburg Location"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
