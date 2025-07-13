import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteSteuerrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Steuerrecht"
        description="Umfassende steuerrechtliche Beratung und Vertretung vor Finanzgerichten. Wir lösen Konflikte mit Finanzbehörden, optimieren Ihre Steuerlast und schützen Sie vor kostspieligen Fehlern im Steuerrecht."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Steuerrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/fadea5fe-d754-4949-9dce-10414d7c1be9.png" 
                alt="Steuerrecht Team" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Steuerrechtliche Auseinandersetzungen können schwerwiegende finanzielle Folgen haben. Unser spezialisiertes Steuerrechts-Team vertritt Sie erfolgreich bei komplexen Verfahren mit Finanzbehörden und vor Finanzgerichten. Dabei geht es oft um mehr als nur unterschiedliche Rechtsauffassungen - häufig stehen erhebliche Nachzahlungen oder sogar strafrechtliche Konsequenzen im Raum.
              </p>
              <p>
                Von Außenprüfungen über Durchsuchungen bis hin zu überhöhten Steuerfestsetzungen - die Konfliktfelder sind vielfältig. Wir übernehmen die komplette rechtliche Auseinandersetzung und entlasten Sie vollständig von belastenden Behördenkontakten.
              </p>
              <p>
                Unser umfassender Service erstreckt sich von der Vertretung im Steuerfestsetzungsverfahren über den professionellen Umgang mit Behörden bis hin zur strategischen Prozessführung vor Finanzgerichten. Als leistungsstarke Kanzlei mit drei spezialisierten Steuerrechtsanwälten verfügen wir über die notwendigen Ressourcen für eine umfassende Mandantenbetreuung.
              </p>
              <p>
                Nutzen Sie unsere moderne Beratungsinfrastruktur: Termine vor Ort, telefonisch oder online sowie unseren kostenlosen Rückruf-Service für Ihre erste Kontaktaufnahme.
              </p>
            </div>
          </div>

          {/* Steuerrecht A-Z Card */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Steuerrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Professionelle Einblicke in komplexe Steuerrechtsverfahren. Wir erläutern steuerrechtliche Fachbegriffe verständlich und entwickeln strategische Lösungsansätze für Ihre individuellen Herausforderungen.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/steuerrecht/a-z/" className="inline-flex items-center">
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RechtsgebieteSteuerrecht;