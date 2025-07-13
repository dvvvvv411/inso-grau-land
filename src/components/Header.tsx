import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Kanzlei",
      items: ["Über uns", "Team", "News", "Downloads"]
    },
    {
      title: "Rechtsgebiete", 
      items: ["Grundstücksrecht", "Insolvenzrecht", "Kaufrecht", "Maklerrecht", "Sozialrecht", "Steuerrecht", "Vertragsrecht", "Verwaltungsrecht", "Wettbewerbsrecht"]
    },
    {
      title: "Steuerberatung",
      items: ["Unternehmenssteuern", "Privatsteuern", "Steuerplanung", "Jahresabschluss"]
    }
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#004595] text-white shadow-xl fixed top-0 left-0 right-0 z-50 border-b border-blue-400/20"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/88fbd551-e951-4bd1-ac03-317ed47b6bec.png"
                alt="Kanzlei Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-2">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-600/80 transition-all duration-200 font-medium text-white group"
                >
                  <span>{menu.title}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-all duration-200 group-hover:text-blue-200 ${
                      activeDropdown === menu.title ? 'rotate-180 text-blue-200' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menu.title && (
                  <div className={`absolute top-full left-0 mt-2 ${menu.items.length > 5 ? 'w-96' : 'w-64'} bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden`}>
                    <div className={`py-2 ${menu.items.length > 5 ? 'grid grid-cols-2 gap-0' : ''}`}>
                      {menu.items.map((item, itemIndex) => {
                        const isUeberUns = menu.title === "Kanzlei" && item === "Über uns";
                        const isTeam = menu.title === "Kanzlei" && item === "Team";
                        const isNews = menu.title === "Kanzlei" && item === "News";
                        const isDownloads = menu.title === "Kanzlei" && item === "Downloads";
                        const isInsolvenzrecht = menu.title === "Rechtsgebiete" && item === "Insolvenzrecht";
                        const isGrundstuecksrecht = menu.title === "Rechtsgebiete" && item === "Grundstücksrecht";
                        const isKaufrecht = menu.title === "Rechtsgebiete" && item === "Kaufrecht";
                        const isMaklerrecht = menu.title === "Rechtsgebiete" && item === "Maklerrecht";
                        const isSozialrecht = menu.title === "Rechtsgebiete" && item === "Sozialrecht";
                        const isSteuerrecht = menu.title === "Rechtsgebiete" && item === "Steuerrecht";
                        const isVertragsrecht = menu.title === "Rechtsgebiete" && item === "Vertragsrecht";
                        const isVerwaltungsrecht = menu.title === "Rechtsgebiete" && item === "Verwaltungsrecht";
                        const isWettbewerbsrecht = menu.title === "Rechtsgebiete" && item === "Wettbewerbsrecht";
                        const isUnternehmenssteuern = menu.title === "Steuerberatung" && item === "Unternehmenssteuern";
                        const isPrivatsteuern = menu.title === "Steuerberatung" && item === "Privatsteuern";
                        const isSteuerplanung = menu.title === "Steuerberatung" && item === "Steuerplanung";
                        const isJahresabschluss = menu.title === "Steuerberatung" && item === "Jahresabschluss";
                        
                        const baseClasses = `block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#004595] transition-all duration-150 font-medium ${menu.items.length > 5 ? 'text-sm' : 'border-b border-gray-50 last:border-b-0'}`;
                        
                        if (isUeberUns) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/ueber-uns"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isTeam) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/team"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isNews) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/news"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isDownloads) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/downloads"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isInsolvenzrecht) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/rechtsgebiete/insolvenzrecht"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isGrundstuecksrecht) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/rechtsgebiete/grundstuecksrecht"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isKaufrecht) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/rechtsgebiete/kaufrecht"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isMaklerrecht) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/rechtsgebiete/maklerrecht"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isSozialrecht) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/rechtsgebiete/sozialrecht"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                          if (isSteuerrecht) {
                            return (
                              <Link
                                key={itemIndex}
                                to="/rechtsgebiete/steuerrecht"
                                className={baseClasses}
                                onClick={closeDropdowns}
                              >
                                {item}
                              </Link>
                            );
                          }

                          if (isVertragsrecht) {
                            return (
                              <Link
                                key={itemIndex}
                                to="/rechtsgebiete/vertragsrecht"
                                className={baseClasses}
                                onClick={closeDropdowns}
                              >
                                {item}
                              </Link>
                            );
                          }

                          if (isVerwaltungsrecht) {
                            return (
                              <Link
                                key={itemIndex}
                                to="/rechtsgebiete/verwaltungsrecht"
                                className={baseClasses}
                                onClick={closeDropdowns}
                              >
                                {item}
                              </Link>
                            );
                          }

                          if (isWettbewerbsrecht) {
                            return (
                              <Link
                                key={itemIndex}
                                to="/rechtsgebiete/wettbewerbsrecht"
                                className={baseClasses}
                                onClick={closeDropdowns}
                              >
                                {item}
                              </Link>
                            );
                          }
                        
                        if (isUnternehmenssteuern) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/steuerberatung/unternehmenssteuern"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isPrivatsteuern) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/steuerberatung/privatsteuern"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isSteuerplanung) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/steuerberatung/steuerplanung"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isJahresabschluss) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/steuerberatung/jahresabschluss"
                              className={baseClasses}
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        return (
                          <a
                            key={itemIndex}
                            href="#"
                            className={baseClasses}
                            onClick={closeDropdowns}
                          >
                            {item}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Direct navigation links */}
            <Link
              to="/kontakt"
              className="px-4 py-3 rounded-lg hover:bg-blue-600/80 transition-all duration-200 font-medium text-white"
              onClick={closeDropdowns}
            >
              Kontakt
            </Link>
            <Link
              to="/stellenangebote"
              className="px-4 py-3 rounded-lg hover:bg-blue-600/80 transition-all duration-200 font-medium text-white"
              onClick={closeDropdowns}
            >
              Stellenangebote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-blue-600/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#004595] border-t border-blue-400/20 shadow-xl">
            <div className="px-6 py-4 space-y-2">
              {menuItems.map((menu, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleDropdown(menu.title)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-600/80 transition-colors font-medium flex items-center justify-between"
                  >
                    <span>{menu.title}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === menu.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {activeDropdown === menu.title && (
                    <div className="ml-4 mt-2 space-y-1">
                      {menu.items.map((item, itemIndex) => {
                        const isUeberUns = menu.title === "Kanzlei" && item === "Über uns";
                        const isTeam = menu.title === "Kanzlei" && item === "Team";
                        const isNews = menu.title === "Kanzlei" && item === "News";
                        const isDownloads = menu.title === "Kanzlei" && item === "Downloads";
                        const isInsolvenzrecht = menu.title === "Rechtsgebiete" && item === "Insolvenzrecht";
                        const isGrundstuecksrecht = menu.title === "Rechtsgebiete" && item === "Grundstücksrecht";
                        const isKaufrecht = menu.title === "Rechtsgebiete" && item === "Kaufrecht";
                        const isMaklerrecht = menu.title === "Rechtsgebiete" && item === "Maklerrecht";
                        const isSozialrecht = menu.title === "Rechtsgebiete" && item === "Sozialrecht";
                        const isSteuerrecht = menu.title === "Rechtsgebiete" && item === "Steuerrecht";
                        const isVertragsrecht = menu.title === "Rechtsgebiete" && item === "Vertragsrecht";
                        const isVerwaltungsrecht = menu.title === "Rechtsgebiete" && item === "Verwaltungsrecht";
                        const isWettbewerbsrecht = menu.title === "Rechtsgebiete" && item === "Wettbewerbsrecht";
                        const isUnternehmenssteuern = menu.title === "Steuerberatung" && item === "Unternehmenssteuern";
                        const isPrivatsteuern = menu.title === "Steuerberatung" && item === "Privatsteuern";
                        const isSteuerplanung = menu.title === "Steuerberatung" && item === "Steuerplanung";
                        const isJahresabschluss = menu.title === "Steuerberatung" && item === "Jahresabschluss";
                        
                        if (isUeberUns) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/ueber-uns"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isTeam) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/team"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isNews) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/news"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isDownloads) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/downloads"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isInsolvenzrecht) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/rechtsgebiete/insolvenzrecht"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                         if (isGrundstuecksrecht) {
                           return (
                             <Link
                               key={itemIndex}
                               to="/rechtsgebiete/grundstuecksrecht"
                               className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                               onClick={closeDropdowns}
                             >
                               {item}
                             </Link>
                           );
                         }
                        
                         if (isKaufrecht) {
                           return (
                             <Link
                               key={itemIndex}
                               to="/rechtsgebiete/kaufrecht"
                               className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                               onClick={closeDropdowns}
                             >
                               {item}
                             </Link>
                           );
                         }
                        
                        if (isMaklerrecht) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/rechtsgebiete/maklerrecht"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                         if (isSozialrecht) {
                           return (
                             <Link
                               key={itemIndex}
                               to="/rechtsgebiete/sozialrecht"
                               className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                               onClick={closeDropdowns}
                             >
                               {item}
                             </Link>
                           );
                         }
                        
                          if (isSteuerrecht) {
                            return (
                              <Link
                                key={itemIndex}
                                to="/rechtsgebiete/steuerrecht"
                                className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                                onClick={closeDropdowns}
                              >
                                {item}
                              </Link>
                            );
                          }

                           if (isVertragsrecht) {
                             return (
                               <Link
                                 key={itemIndex}
                                 to="/rechtsgebiete/vertragsrecht"
                                 className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                                 onClick={closeDropdowns}
                               >
                                 {item}
                               </Link>
                             );
                           }

                           if (isVerwaltungsrecht) {
                             return (
                               <Link
                                 key={itemIndex}
                                 to="/rechtsgebiete/verwaltungsrecht"
                                 className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                                 onClick={closeDropdowns}
                               >
                                 {item}
                               </Link>
                             );
                           }

                           if (isWettbewerbsrecht) {
                             return (
                               <Link
                                 key={itemIndex}
                                 to="/rechtsgebiete/wettbewerbsrecht"
                                 className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                                 onClick={closeDropdowns}
                               >
                                 {item}
                               </Link>
                             );
                           }
                        
                        if (isUnternehmenssteuern) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/steuerberatung/unternehmenssteuern"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isPrivatsteuern) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/steuerberatung/privatsteuern"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isSteuerplanung) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/steuerberatung/steuerplanung"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        if (isJahresabschluss) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/steuerberatung/jahresabschluss"
                              className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                              onClick={closeDropdowns}
                            >
                              {item}
                            </Link>
                          );
                        }
                        
                        return (
                          <a
                            key={itemIndex}
                            href="#"
                            className="block px-4 py-2 text-blue-100 hover:text-white transition-colors rounded"
                            onClick={closeDropdowns}
                          >
                            {item}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* Direct links in mobile */}
              <Link
                to="/kontakt"
                className="block px-4 py-3 rounded-lg hover:bg-blue-600/80 transition-colors font-medium"
                onClick={closeDropdowns}
              >
                Kontakt
              </Link>
              <Link
                to="/stellenangebote"
                className="block px-4 py-3 rounded-lg hover:bg-blue-600/80 transition-colors font-medium"
                onClick={closeDropdowns}
              >
                Stellenangebote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;