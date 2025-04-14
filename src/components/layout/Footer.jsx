import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/auisc', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/auisc', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/auisc', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/auisc', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About AUISC</h3>
            <p className="text-gray-400">
              The Anurag University IUCEE Student Chapter (AUISC) is dedicated to
              promoting engineering education and fostering innovation among students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} AUISC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 