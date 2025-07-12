import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Kanzlei",
      items: ["Über uns", "Team", "Philosophie", "Geschichte"]
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

  return (
    <header className="bg-[#004595] text-white shadow-lg relative z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">
            Anwaltskanzlei
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                  <span>{menu.title}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === menu.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menu.title && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <ul className="py-2">
                      {menu.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href="#"
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#004595] transition-colors duration-150 font-medium"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md hover:bg-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;