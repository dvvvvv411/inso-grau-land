import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SteuerberatungSteuerplanung = () => {
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
            <span className="text-white">Steuerplanung</span>
          </div>
          
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Steuerplanung
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Strategische Steuerplanung für nachhaltige Steueroptimierung.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Vorausschauende Steuergestaltung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Erfolgreiche Steuerplanung bedeutet, heute die richtigen Weichen für morgen zu stellen. Durch vorausschauende Gestaltung können Sie erhebliche Steuervorteile erzielen und Ihre Steuerlast legal minimieren.
              </p>
              <p>
                Unsere Steuerplanung umfasst sowohl kurzfristige als auch langfristige Strategien. Wir analysieren Ihre aktuelle Situation, identifizieren Optimierungspotentiale und entwickeln maßgeschneiderte Lösungen für Ihre individuellen Bedürfnisse.
              </p>
              <p>
                Ob Unternehmensnachfolge, Investitionsplanung, Immobiliengeschäfte oder Altersvorsorge - mit der richtigen Steuerplanung können Sie Ihre Ziele effizienter erreichen und dabei Steuern sparen.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Planungsleistungen</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Langfristige Steuergestaltung und -optimierung</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Unternehmensnachfolge und Erbschaftsplanung</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Investitions- und Finanzierungsplanung</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Internationale Steuerplanung</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Umstrukturierungen und Rechtsformwahl</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Steuerliche Gestaltung bei Immobiliengeschäften</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vorteile der Steuerplanung</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Steuerersparnis</h4>
                <p className="text-gray-700">Durch strategische Planung können Sie Ihre Steuerlast erheblich reduzieren.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Rechtssicherheit</h4>
                <p className="text-gray-700">Alle Gestaltungen erfolgen im Rahmen der geltenden Gesetze.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Langfristige Perspektive</h4>
                <p className="text-gray-700">Nachhaltige Lösungen für dauerhafte steuerliche Vorteile.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Individuelle Beratung</h4>
                <p className="text-gray-700">Maßgeschneiderte Strategien für Ihre spezifische Situation.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Strategische Steuerplanung
            </h3>
            <p className="text-gray-700 mb-6">
              Lassen Sie uns gemeinsam Ihre steuerliche Zukunft planen und optimieren.
            </p>
            <Button className="bg-[#004595] hover:bg-blue-700 text-white">
              Planungsberatung anfragen
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SteuerberatungSteuerplanung;