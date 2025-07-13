import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteSozialrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Sozialrecht"
        description="Professionelle Vertretung in allen Bereichen des Sozialrechts. Wir setzen Ihre Ansprüche gegen Sozialversicherungsträger durch und helfen bei Erwerbsminderungsrenten, Schwerbehindertenrecht und Statusfeststellungsverfahren."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Sozialrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6e3e40b9-401f-4bbd-b08d-0ad16e3c7827.png" 
                alt="Sozialrecht Team" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Als spezialisierte Sozialrechtsexperten vertreten wir Sie erfolgreich in allen Bereichen der Sozialversicherung, des sozialen Entschädigungsrechts und der sozialen Förderung. Unser Schwerpunkt liegt auf der Durchsetzung von Erwerbsminderungsrenten und der Geltendmachung von Ansprüchen gegenüber Berufsgenossenschaften.
              </p>
              <p>
                Wir prüfen behördliche Bescheide gründlich auf ihre Rechtmäßigkeit und setzen Ihre berechtigten Ansprüche konsequent durch. Ein aktueller Schwerpunkt unserer Tätigkeit liegt in der Beratung bei Scheinselbständigkeits-Verfahren der Deutschen Rentenversicherung, wo wir Sie vor kostspieligen Nachzahlungen schützen.
              </p>
              <p>
                Aufgrund hoher Nachfrage konzentrieren wir uns auf unsere Kernkompetenzen und können derzeit keine Mandate im Bereich der sozialen Hilfen (Grundsicherung, Bürgergeld) übernehmen. Hierfür empfehlen wir spezialisierte Online-Portale wie Hartz4Widerspruch.
              </p>
            </div>
          </div>

          {/* Sozialrecht A-Z Card */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Sozialrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Spezialisierte Einblicke in alle Bereiche des Sozialrechts. Wir erklären komplexe sozialrechtliche Zusammenhänge verständlich und entwickeln erfolgreiche Strategien für Ihre Anspruchsdurchsetzung.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/sozialrecht/a-z/" className="inline-flex items-center">
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

export default RechtsgebieteSozialrecht;