import { Link } from 'react-router-dom';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const Footer = () => {
  const { resetConsent } = useCookieConsent();
  const footerMenuItems = [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGBs', href: '/agbs' }
  ];

  const kanzleiLinks = [
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Team', href: '/team' },
    { name: 'News', href: '/news' },
    { name: 'Downloads', href: '/downloads' }
  ];

  const steuerberatungLinks = [
    { name: 'Unternehmenssteuern', href: '/steuerberatung/unternehmenssteuern' },
    { name: 'Privatsteuern', href: '/steuerberatung/privatsteuern' },
    { name: 'Steuerplanung', href: '/steuerberatung/steuerplanung' },
    { name: 'Jahresabschluss', href: '/steuerberatung/jahresabschluss' }
  ];

  return (
    <footer className="bg-[#004595] text-white">
      <div className="w-full max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
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
          </div>

          {/* Kanzlei Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Kanzlei</h3>
            <div className="grid grid-cols-1 gap-2">
              {kanzleiLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-blue-100 hover:text-white transition-colors duration-200 text-sm py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Steuerberatung Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Steuerberatung</h3>
            <div className="grid grid-cols-1 gap-2">
              {steuerberatungLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-blue-100 hover:text-white transition-colors duration-200 text-sm py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Award Image Section - Takes 2 columns for bigger size */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <img 
                src="/lovable-uploads/96cce04b-471a-447f-af2e-9200112168b8.png" 
                alt="Auszeichnung" 
                className="object-contain w-full max-w-sm h-auto"
              />
              <a 
                href="https://www.anvvalt.de/hess-partner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="/lovable-uploads/a1364ca9-edc5-47f0-b24c-3bf4e86e0740.png" 
                  alt="Anwalt.de Bewertung 5,0 Sterne" 
                  className="object-contain w-full max-w-sm h-auto hover:opacity-80 transition-opacity duration-200"
                />
              </a>
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
                  // Clear localStorage and force reload to show banner
                  localStorage.removeItem('cookie-consent');
                  window.location.reload();
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