import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Kanzlei",
      items: ["Über uns", "News", "Downloads", "Team", "Philosophie", "Geschichte"]
    },
    {
      title: "Rechtsgebiete", 
      items: ["Familienrecht", "Arbeitsrecht", "Vertragsrecht", "Immobilienrecht", "Strafrecht"]
    },
    {
      title: "Steuerberatung",
      items: ["Unternehmenssteuern", "Privatsteuern", "Steuerplanung", "Jahresabschluss"]
    },
    {
      title: "Stellenangebote",
      items: ["Anwälte", "Steuerberater", "Sekretariat", "Praktikanten"]
    },
    {
      title: "Kontakt",
      items: ["Standorte", "Terminvereinbarung", "Anfahrt", "Notfallkontakt"]
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
    <header className="bg-[#004595] text-white shadow-xl relative z-50 border-b border-blue-400/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-white">Anwalts</span><span className="text-blue-200">kanzlei</span>
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
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                    <div className="py-2">
                      {menu.items.map((item, itemIndex) => {
                        const isUeberUns = menu.title === "Kanzlei" && item === "Über uns";
                        const isNews = menu.title === "Kanzlei" && item === "News";
                        const isDownloads = menu.title === "Kanzlei" && item === "Downloads";
                        
                        if (isUeberUns) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/ueber-uns"
                              className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#004595] transition-all duration-150 font-medium border-b border-gray-50 last:border-b-0"
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
                              className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#004595] transition-all duration-150 font-medium border-b border-gray-50 last:border-b-0"
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
                              className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#004595] transition-all duration-150 font-medium border-b border-gray-50 last:border-b-0"
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
                            className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#004595] transition-all duration-150 font-medium border-b border-gray-50 last:border-b-0"
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
                        const isNews = menu.title === "Kanzlei" && item === "News";
                        const isDownloads = menu.title === "Kanzlei" && item === "Downloads";
                        
                        if (isUeberUns) {
                          return (
                            <Link
                              key={itemIndex}
                              to="/ueber-uns"
                              className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-600/50 rounded transition-colors"
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
                              className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-600/50 rounded transition-colors"
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
                              className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-600/50 rounded transition-colors"
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
                            className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-600/50 rounded transition-colors"
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
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdowns}
        />
      )}
    </header>
  );
};

export default Header;