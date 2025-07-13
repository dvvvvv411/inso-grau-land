import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteKaufrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Kaufrecht"
        description="Expertenberatung bei Kaufverträgen, Gewährleistungsansprüchen und Verbraucherschutz. Von Online-Shopping bis Immobilienerwerb - wir sichern Ihre Käuferrechte rechtlich ab."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Kaufrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/9c6ffd77-bb56-4025-a2a2-0f079995c484.png" 
                alt="Team Kaufrecht" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kaufrechtsschutz für alle Lebensbereiche
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Vom alltäglichen Online-Kauf bis zur Immobilientransaktion - Kaufverträge prägen unser wirtschaftliches Leben. Unser Expertenteam schützt Ihre Rechte bei allen Arten von Kaufgeschäften und entwickelt maßgeschneiderte Lösungen für komplexe Kaufrechtsfragen.
              </p>
              <p>
                Wenn Waren nicht den versprochenen Qualitätsstandards entsprechen, stehen Ihnen vielfältige Rechtsmittel zur Verfügung: Vertragsanfechtung, Widerruf, Minderung oder Schadensersatz. Wir navigieren Sie durch das komplexe Geflecht aus Gewährleistungs- und Garantierechten und setzen Ihre Ansprüche erfolgreich durch.
              </p>
              <p>
                Kaufrechtliche Herausforderungen entstehen in vielen Bereichen: E-Commerce, Online-Auktionen, Fahrzeugerwerb, Einzelhandel oder Immobilienkauf. Jeder Bereich hat spezifische rechtliche Anforderungen, die wir für Sie professionell bewältigen.
              </p>
              <p>
                Ihre Rechtsposition hängt von verschiedenen Faktoren ab: Sind Sie Unternehmer oder Verbraucher? Kaufen Sie von einem Unternehmer oder Privatperson? Handelt es sich um einen Online-Kauf oder Geschäftskauf? Wir analysieren Ihre individuelle Situation und entwickeln die optimale Rechtsstrategie.
              </p>
              <p>
                Bei hochpreisigen Geschäften wie Fahrzeug- oder Immobilienkäufen ist schnelles, informiertes Handeln entscheidend. Unsere sofortige Rechtsberatung sichert Ihre Interessen ab und verhindert kostbare Versäumnisse.
              </p>
              <p>
                Präventive Beratung ist ebenso wichtig: Wir gestalten rechtssichere Verträge, erstellen maßgeschneiderte AGB und beraten Sie bei der Vertragsverhandlung. Bei Immobilienkäufen prüfen wir notarielle Vertragsentwürfe und optimieren Ihre Rechtsposition.
              </p>
              <p>
                Vertrauen Sie auf unsere Expertise bei Kaufvertragsrückabwicklung, Minderungsansprüchen und Schadensersatzdurchsetzung. Wir kämpfen für Ihre Rechte.
              </p>
            </div>
          </div>

          {/* Kaufrecht A-Z Card */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Kaufrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Umfassendes Fachwissen zu allen Aspekten des Kaufrechts. Wir erläutern komplexe Rechtssituationen verständlich und zeigen praxisnahe Lösungswege für Ihre kaufrechtlichen Anliegen auf.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/kaufrecht/a-z/" className="inline-flex items-center">
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

export default RechtsgebieteKaufrecht;