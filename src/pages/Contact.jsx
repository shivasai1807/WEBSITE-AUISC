import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, MessageCircleMore } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_dc2p2s6',
        'template_ec811cs',
        formData,
        'KWT_E66aFJVwR1QQH'
      )
      .then(() => {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
      });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Contact Us
        </motion.h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a question, suggestion, or want to collaborate? Feel free to reach out to us using the details below or drop us a message!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500" size={24} />
              <a href="mailto:iucee@anurag.edu.in" className="text-gray-700 hover:text-blue-600 transition">
                iucee@anurag.edu.in
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Linkedin className="text-blue-600" size={24} />
              <a
                href="https://www.linkedin.com/in/iucee-au-37163a310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Instagram className="text-pink-500" size={24} />
              <a
                href="https://www.instagram.com/iucee.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500 transition"
              >
                Instagram
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <MessageCircleMore className="text-green-600" size={24} />
              <a
                href="https://whatsapp.com/channel/0029VacEQKs9cDDaV22u2K2g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition"
              >
                WhatsApp Channel
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Send a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Send
            </button>
            {sent && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
