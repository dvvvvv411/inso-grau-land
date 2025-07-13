import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SteuerberatungUnternehmenssteuern = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#004595] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <div className="flex items-center text-blue-200 mb-6 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Steuerberatung</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Unternehmenssteuern</span>
          </div>
          
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Unternehmenssteuern
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Professionelle Beratung für alle steuerlichen Belange Ihres Unternehmens.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Umfassende steuerliche Betreuung für Unternehmen
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Die steuerliche Landschaft für Unternehmen wird immer komplexer. Von der Körperschaftsteuer über die Gewerbesteuer bis hin zur Umsatzsteuer - wir begleiten Sie durch alle steuerlichen Herausforderungen Ihres Unternehmens.
              </p>
              <p>
                Unsere Expertise umfasst die Beratung bei Rechtsformwahl, laufende steuerliche Betreuung, Betriebsprüfungen und steuerliche Gestaltungsberatung. Dabei stehen sowohl kleine Unternehmen als auch große Konzerne im Fokus unserer Beratung.
              </p>
              <p>
                Wir helfen Ihnen dabei, steuerliche Risiken zu minimieren und gleichzeitig alle legalen Gestaltungsmöglichkeiten optimal zu nutzen. Von der Gründung bis zur Unternehmensnachfolge sind wir Ihr kompetenter Partner.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Leistungen</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Körperschaftsteuer und Gewerbesteuer</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Umsatzsteuer und Vorsteuerabzug</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Lohnsteuer und Sozialversicherung</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Betriebsprüfungen und Einspruchsverfahren</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Steuerliche Gestaltungsberatung</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Internationales Steuerrecht</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Steuerliche Beratung für Ihr Unternehmen
            </h3>
            <p className="text-gray-700 mb-6">
              Lassen Sie uns gemeinsam die optimale steuerliche Strategie für Ihr Unternehmen entwickeln.
            </p>
            <Button className="bg-[#004595] hover:bg-blue-700 text-white">
              Beratungstermin vereinbaren
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SteuerberatungUnternehmenssteuern;