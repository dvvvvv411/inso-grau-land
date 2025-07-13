import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SteuerberatungJahresabschluss = () => {
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
            <span className="text-white">Jahresabschluss</span>
          </div>
          
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Jahresabschluss
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Professionelle Erstellung und Prüfung von Jahresabschlüssen aller Rechtsformen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Zuverlässige Jahresabschlusserstellung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Der Jahresabschluss ist das zentrale Instrument zur Darstellung der wirtschaftlichen Lage Ihres Unternehmens. Er dient nicht nur der Information von Gesellschaftern und Gläubigern, sondern ist auch Grundlage für steuerliche Erklärungen und betriebswirtschaftliche Entscheidungen.
              </p>
              <p>
                Wir erstellen Jahresabschlüsse für alle Rechtsformen - von der einfachen Einnahmen-Überschuss-Rechnung bis zum komplexen Konzernabschluss nach HGB oder IFRS. Dabei achten wir sowohl auf die Einhaltung aller gesetzlichen Vorschriften als auch auf eine optimale steuerliche Gestaltung.
              </p>
              <p>
                Unser Service umfasst die komplette Abwicklung von der Buchführung über die Jahresabschlusserstellung bis zur Einreichung bei den entsprechenden Behörden. So können Sie sich auf Ihr Kerngeschäft konzentrieren.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Leistungen</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Erstellung von Einnahmen-Überschuss-Rechnungen (EÜR)</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Handelsrechtliche Jahresabschlüsse nach HGB</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Steuerliche Gewinnermittlung und Steuerbilanz</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Konzernabschlüsse und Teilkonzernabschlüsse</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Zwischenabschlüsse und unterjährige Reportings</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#004595] mt-1 mr-3 flex-shrink-0" />
                <span>Prüfung und Analyse bestehender Jahresabschlüsse</span>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unser Vorgehen</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#004595] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Datenerfassung und -prüfung</h4>
                  <p className="text-gray-700">Systematische Erfassung und Validierung aller buchungsrelevanten Belege und Geschäftsvorfälle.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#004595] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bilanzierung und Bewertung</h4>
                  <p className="text-gray-700">Sachgerechte Bilanzierung und Bewertung nach den geltenden Rechnungslegungsvorschriften.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#004595] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Steueroptimierung</h4>
                  <p className="text-gray-700">Optimierung unter steuerlichen Gesichtspunkten bei Einhaltung aller gesetzlichen Vorschriften.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#004595] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Erstellung und Einreichung</h4>
                  <p className="text-gray-700">Finale Erstellung des Jahresabschlusses und fristgerechte Einreichung bei allen relevanten Stellen.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professioneller Jahresabschluss
            </h3>
            <p className="text-gray-700 mb-6">
              Vertrauen Sie auf unsere Expertise für einen ordnungsgemäßen und optimierten Jahresabschluss.
            </p>
            <Button className="bg-[#004595] hover:bg-blue-700 text-white">
              Jahresabschluss beauftragen
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SteuerberatungJahresabschluss;