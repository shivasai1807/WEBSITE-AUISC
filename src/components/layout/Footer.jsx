import { Linkedin, Instagram, Mail, MessageCircleMore } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/iucee-au-37163a310",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/iucee.au",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:auiucee@gmail.com", label: "Email" },
    {
      icon: MessageCircleMore,
      href: "https://whatsapp.com/channel/0029VacEQKs9cDDaV22u2K2g",
      label: "WhatsApp Channel",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="w-36 h-16 md:w-48 md:h-20 mb-4">
              <img
                src="/AUISC_Logo.png"
                alt="AUISC Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The Anurag University IUCEE Student Chapter (AUISC) is dedicated
              to promoting engineering education and fostering innovation among
              students.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-400 hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Location</h3>
            <div className="w-full h-40 sm:h-52 md:h-56 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.67668622274!2d78.51668553808736!3d17.416770927111912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76730bf4dccf%3A0x2ca84b53416f0abd!2sAnurag%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1733766357708!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} AUISC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
