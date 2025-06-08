import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram, Mail, MessageCircleMore, CheckCircle, Phone, MapPin, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      alert('Please enter a valid name (only letters and spaces).');
      return;
    }
    if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
       alert('Please enter a valid email address.');
       return;
    }

    emailjs
      .send(
        'service_dc2p2s6',
        'template_ec811cs',
        formData,
        'KWT_E66aFJVwR1QQH'
      )
      .then(() => {
        setSent(true);
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  const contacts = [
    {
      role: "Faculty Coordinator",
      name: "Dr. Narender Singh",
      phone: "+91 90140 67636",
      email: "narendhar.singh@anurag.edu.in",
    },
    {
      role: "President",
      name: "Aishwarya Alichella",
      phone: "+91 78935 17093",
      email: "aishwaryaalechalla@gmail.com",
    },
    {
      role: "Vice President",
      name: "Eshwar",
      phone: "+91 91821 04900",
      email: "eswar.kumar@anurag.edu.in",
    },
  ];

  const closeModal = () => {
    setShowSuccessModal(false);
    setSent(false);
  };

  return (
    <div className="min-h-screen bg-light-blue-purple">
      {/* Hero Section */}
      <div className="relative pt-28 pb-24 bg-dark-blue-purple">
        <div className="absolute inset-0 bg-[url('/pics_png/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Contact Us</h1>
            <p className="text-light-blue-purple text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Have a question, suggestion, or want to collaborate? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </div>
<br /><br />  
      <div className="container mx-auto px-6 -mt-6 pb-20">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-bright-orange/10 p-4 rounded-xl w-fit mb-6">
                <Phone className="text-bright-orange" size={24} />
              </div>
              <h3 className="text-medium-blue text-lg font-semibold mb-3">{contact.role}</h3>
              <p className="text-dark-blue-purple text-xl font-bold mb-4">{contact.name}</p>
              <div className="space-y-3">
                <p className="text-dark-blue-purple text-sm flex items-center gap-3">
                  <Phone size={16} className="text-bright-orange" />
                  {contact.phone}
                </p>
                <p className="text-dark-blue-purple text-sm flex items-center gap-3">
                  <Mail size={16} className="text-bright-orange" />
                  {contact.email}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-dark-blue-purple mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-5 bg-light-blue-purple/10 rounded-xl hover:bg-light-blue-purple/20 transition-colors">
                <div className="bg-bright-orange/10 p-4 rounded-xl">
                  <Mail className="text-bright-orange" size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-blue-purple/70 mb-1">Email Us</p>
                  <a href="mailto:iucee@anurag.edu.in" className="text-dark-blue-purple hover:text-medium-blue transition">
                    iucee@anurag.edu.in
                  </a>
                </div>
              </div>


              <div className="flex items-center gap-5 p-5 bg-light-blue-purple/10 rounded-xl hover:bg-light-blue-purple/20 transition-colors">
                <div className="bg-bright-orange/10 p-4 rounded-xl">
                  <Linkedin className="text-bright-orange" size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-blue-purple/70 mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/iucee-au-37163a310"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-blue-purple hover:text-medium-blue transition"
                  >
                    Connect with us
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 bg-light-blue-purple/10 rounded-xl hover:bg-light-blue-purple/20 transition-colors">
                <div className="bg-bright-orange/10 p-4 rounded-xl">
                  <Instagram className="text-bright-orange" size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-blue-purple/70 mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/iucee.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-blue-purple hover:text-medium-blue transition"
                  >
                    Follow us
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 bg-light-blue-purple/10 rounded-xl hover:bg-light-blue-purple/20 transition-colors">
                <div className="bg-bright-orange/10 p-4 rounded-xl">
                  <MessageCircleMore className="text-bright-orange" size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-blue-purple/70 mb-1">WhatsApp</p>
                  <a
                    href="https://www.whatsapp.com/channel/0029VacEQKs9cDDaV22u2K2g" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-blue-purple hover:text-medium-blue transition"
                  >
                    Join the channel
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-dark-blue-purple mb-8">Send a Message</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-blue-purple mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bright-orange focus:border-transparent transition"
                  required
                  pattern="^[a-zA-Z\s]*$"
                  title="Only letters and spaces are allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-blue-purple mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bright-orange focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-blue-purple mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bright-orange focus:border-transparent transition"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-bright-orange text-white py-4 rounded-xl font-semibold hover:bg-orange-yellow transition-colors duration-300"
              >
                Send Message
              </button>
              <AnimatePresence>
                {showSuccessModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                  >
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-dark-blue-purple mb-3">Response Recorded!</h3>
                      <p className="text-dark-blue-purple/70 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                      <button
                        onClick={closeModal}
                        className="bg-bright-orange text-white py-2 px-6 rounded-xl font-semibold hover:bg-orange-yellow transition-colors duration-300"
                      >
                        Close
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
