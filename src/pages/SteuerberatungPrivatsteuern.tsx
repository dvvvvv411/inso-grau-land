import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SteuerberatungPrivatsteuern = () => {
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
            <span className="text-white">Privatsteuern</span>
          </div>
          
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Privatsteuern
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Kompetente Steuerberatung für Privatpersonen und Familien.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ihre persönliche Steuerberatung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Steuerliche Angelegenheiten von Privatpersonen werden immer komplexer. Ob Einkommensteuer, Erbschaftsteuer, Schenkungsteuer oder Grunderwerbsteuer - wir sorgen dafür, dass Sie alle Vorteile nutzen und keine Nachteile entstehen.
              </p>
              <p>
                Unsere Beratung umfasst sowohl die laufende steuerliche Betreuung als auch die Beratung bei besonderen Lebenssituationen wie Erbschaft, Schenkung, Immobilienkauf oder -verkauf. Dabei haben wir stets Ihre individuelle Situation im Blick.
              </p>
              <p>
                Von der einfachen Steuererklärung bis zur komplexen Steuergestaltung - wir bieten Ihnen maßgeschneiderte Lösungen für Ihre persönlichen steuerlichen Bedürfnisse.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Leistungen</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Einkommensteuererklärung und -optimierung</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Erbschaftsteuer und Schenkungsteuer</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Immobilienbesteuerung und Grunderwerbsteuer</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Kapitalertragssteuer und Abgeltungsteuer</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Steuerberatung für Rentner und Pensionäre</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Steuerliche Nachlassplanung</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Persönliche Steuerberatung
            </h3>
            <p className="text-gray-700 mb-6">
              Nutzen Sie alle steuerlichen Möglichkeiten und sparen Sie Zeit und Geld.
            </p>
            <Button className="bg-[#004595] hover:bg-blue-700 text-white">
              Termin vereinbaren
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SteuerberatungPrivatsteuern;