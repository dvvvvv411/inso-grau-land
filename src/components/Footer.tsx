import { Link } from 'react-router-dom';

const Footer = () => {
  const footerMenuItems = [
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Zoom', href: '/videotelefonat' },
    { name: 'Gender-Hinweis', href: '/gender-hinweis' }
  ];

  const kanzleiLinks = [
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Team', href: '/team' },
    { name: 'News', href: '/news' },
    { name: 'Downloads', href: '/downloads' }
  ];

  const rechtsgebieteLinks1 = [
    { name: 'Grundstücksrecht', href: '/rechtsgebiete/grundstuecksrecht' },
    { name: 'Insolvenzrecht', href: '/rechtsgebiete/insolvenzrecht' },
    { name: 'Kaufrecht', href: '/rechtsgebiete/kaufrecht' },
    { name: 'Maklerrecht', href: '/rechtsgebiete/maklerrecht' },
    { name: 'Sozialrecht', href: '/rechtsgebiete/sozialrecht' }
  ];

  const rechtsgebieteLinks2 = [
    { name: 'Steuerrecht', href: '/rechtsgebiete/steuerrecht' },
    { name: 'Vertragsrecht', href: '/rechtsgebiete/vertragsrecht' },
    { name: 'Verwaltungsrecht', href: '/rechtsgebiete/verwaltungsrecht' },
    { name: 'Wettbewerbsrecht', href: '/rechtsgebiete/wettbewerbsrecht' }
  ];

  return (
    <footer className="bg-[#004595] text-white">
      <div className="w-full max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
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
            {/* Award Image */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <img 
                src="https://i.imgur.com/8Pk1t7j.png" 
                alt="Auszeichnung" 
                className="object-contain"
              />
            </div>
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

          {/* Rechtsgebiete Section - Column 1 */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Rechtsgebiete</h3>
            <div className="grid grid-cols-1 gap-2">
              {rechtsgebieteLinks1.map((link) => (
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

          {/* Rechtsgebiete Section - Column 2 */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 lg:opacity-0">Rechtsgebiete</h3>
            <div className="grid grid-cols-1 gap-2">
              {rechtsgebieteLinks2.map((link) => (
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