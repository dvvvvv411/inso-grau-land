import { Facebook, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const locations = [
    { name: 'Berlin Mitte', href: '/kontakt' }
  ];

  const footerMenuItems = [
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Zoom', href: '/videotelefonat' },
    { name: 'Gender-Hinweis', href: '/gender-hinweis' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/hesspartner.berlin/',
      icon: Facebook
    },
    { 
      name: 'Xing', 
      href: 'https://www.xing.com/pages/hess-partner/',
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
          <path fill="currentColor" d="M21.8044 0H2.20568C1.00272 0 0.00195312 1.00281 0.00195312 2.20373V21.8024C0.00195312 22.9992 1.00272 24 2.20568 24H21.8044C22.9991 24 23.9999 22.9992 23.9999 21.8024V2.20373C23.9999 1.00281 22.9991 0 21.8044 0ZM7.40354 16.1573H4.60139C4.19087 16.143 4.09897 15.7958 4.3032 15.4976L7.20542 10.1445C7.30142 10.0465 7.30142 9.9035 7.20542 9.80138L5.29172 6.46005C5.1896 6.25989 5.29172 5.96171 5.49187 5.96171H8.36754C8.46966 5.96171 8.56973 5.98417 8.66981 6.16186L10.8041 9.9035C10.9001 10.0015 10.9001 10.0975 10.8041 10.2017L7.70172 15.8999C7.70172 15.8999 7.58326 16.1471 7.40354 16.1573ZM19.6027 3.50268L13.9882 13.8044C13.8901 13.9066 13.8901 13.9637 13.9882 14.0659L17.5991 20.4994C17.7992 20.8792 17.5991 21.1243 17.3029 21.1243H14.5049C14.4028 21.1243 14.3415 21.0549 14.2006 20.8016L10.4017 14.0659C10.3323 13.9883 10.3343 13.8943 10.4017 13.8004L16.2041 3.10033C16.3206 2.87567 16.5003 2.82461 16.6024 2.82461H19.3474C19.7007 2.8144 19.7599 3.18407 19.6027 3.50268Z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      href: 'mailto:info@hess-partner-berlin.de',
      icon: Mail
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/hesspartnerberlin/',
      icon: Instagram
    },
    { 
      name: 'YouTube', 
      href: 'https://www.youtube.com/channel/UChesspartnerberlin',
      icon: Youtube
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/hess-partner-berlin/',
      icon: Linkedin
    }
  ];

  return (
    <footer className="bg-[#004595] text-white">
      <div className="w-full max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/88fbd551-e951-4bd1-ac03-317ed47b6bec.png"
                alt="Kanzlei Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-blue-100 leading-relaxed mb-4">
              Eine starke Unterstützung, wann immer Sie sie brauchen. Komplette Rechts- und Steuerberatung für Ihre Bedürfnisse.
            </p>
            <Link 
              to="/news" 
              className="text-blue-200 hover:text-white underline text-sm transition-colors duration-200"
            >
              Zertifiziert nach DIN EN ISO 9001:2015
            </Link>
          </div>

            {/* Locations Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Standort</h3>
            <div className="grid grid-cols-1 gap-2">
              {locations.map((location) => (
                <Link
                  key={location.name}
                  to={location.href}
                  className="text-blue-100 hover:text-white transition-colors duration-200 text-sm py-1"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="lg:col-span-1">
            {/* Award Image */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <img 
                src="https://i.imgur.com/8Pk1t7j.png" 
                alt="Auszeichnung" 
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Folgen Sie uns</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'nofollow noopener noreferrer'}
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-400 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Footer Menu */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {footerMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Copyright and Cookie Settings */}
            <div className="flex flex-col lg:flex-row items-center gap-4 text-sm">
              <div className="text-blue-100">
                © 2025 Heß & Partner. Alle Rechte vorbehalten.
              </div>
              <button
                onClick={() => {
                  // Cookie dialog functionality would go here
                  console.log('Open cookie preferences');
                }}
                className="text-blue-200 hover:text-white underline transition-colors duration-200"
              >
                Cookie-Einwilligung
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;