import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram, Mail, MessageCircleMore, CheckCircle } from 'lucide-react';

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
    // Basic validation before sending
    if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      alert('Please enter a valid name (only letters and spaces).');
      return;
    }
    if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
       alert('Please enter a valid email address.');
       return;
    }
    // You can add more checks for the message if needed

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
        // Optionally hide the message after a few seconds
        // setTimeout(() => setSent(false), 5000);
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  const contacts = [
    {
      role: "Faculty Coordinator",
      name: "Dr. Narendhar Singh",
      phone: "+91 XXXX XXXXX", // Placeholder
      email: "faculty.email@example.com", // Placeholder
    },
    {
      role: "President",
      name: "Aishwarya",
      phone: "+91 XXXX XXXXX", // Placeholder
      email: "president.email@example.com", // Placeholder
    },
    {
      role: "Vice President",
      name: "Eshwar",
      phone: "+91 XXXX XXXXX", // Placeholder
      email: "vp.email@example.com", // Placeholder
    },
  ];

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

        {/* Direct Contacts Section */}
        <div className="bg-blue-600 py-12 px-4 rounded-lg shadow-xl mb-12">
          {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Direct Contacts</h2> */}
          <h2 className="text-3xl font-bold text-center text-white mb-8">Direct Contacts</h2>

          <div className="flex flex-wrap justify-center gap-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 w-72 text-center shadow-lg"
              >
                <h3 className="text-blue-600 text-lg font-semibold mb-2">{contact.role}</h3>
                <p className="text-gray-800 text-xl font-bold mb-3">{contact.name}</p>
                <p className="text-gray-600 text-sm mb-2">{contact.phone}</p>
                <p className="text-gray-600 text-sm break-words">{contact.email}</p>
              </motion.div>
            ))}
          </div>
        </div>

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
              pattern="^[a-zA-Z\s]*$"
              title="Only letters and spaces are allowed"
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
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center bg-green-100 text-green-800 p-3 rounded-md flex items-center justify-center space-x-2"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
