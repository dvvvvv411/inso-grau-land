import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteMaklerrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Maklerrecht"
        description="Spezialisierte Beratung bei Maklerverträgen, Provisionsfragen und Immobilienvermittlung. Wir schützen Ihre Interessen als Makler oder Auftraggeber und lösen komplexe maklerrechtliche Konflikte erfolgreich."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Maklerrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6f662738-736c-4ade-859f-1733b3ea9f0a.png" 
                alt="Maklerrecht Team" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professionelle Maklerrechtsberatung für alle Beteiligten
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Das Maklerrecht ist ein hochspezialisiertes Rechtsgebiet mit komplexen gesetzlichen Regelungen und einer umfangreichen Rechtsprechung. Als erfahrene Maklerrechtsexperten verstehen wir die Feinheiten dieses Rechtsbereichs und entwickeln maßgeschneiderte Lösungen für Ihre spezifischen Herausforderungen.
              </p>
              <p>
                Jeder Fall erfordert eine individuelle Betrachtung unter Berücksichtigung der aktuellen Rechtsprechung. Mit unserer langjährigen Expertise im Maklerrecht verfügen wir über die notwendige Kompetenz, Sie bei allen maklerrechtlichen Fragestellungen erfolgreich zu beraten und zu vertreten.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Maklerverträge: Rechtssichere Gestaltung und Durchsetzung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Der Maklervertrag ist auf den professionellen Nachweis oder die Vermittlung von Hauptverträgen ausgerichtet. Als Rechtsbeziehung zwischen Makler und Auftraggeber umfasst er meist Immobilienkauf- oder Mietverträge, kann aber auch andere Vermittlungsleistungen wie Arbeitsplätze oder Ausbildungsplätze betreffen.
              </p>
              <p>
                Neben den grundlegenden BGB-Regelungen (§§ 652 ff.) sind spezialgesetzliche Bestimmungen zu beachten, wie das Wohnungsvermittlungsgesetz bei Mietverträgen. Eine professionelle Vertragsgestaltung sollte klare Provisionsvereinbarungen enthalten, da sonst die übliche Provision als vereinbart gilt.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Provisionsansprüche: Durchsetzung und Verteidigung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Der Provisionsanspruch entsteht grundsätzlich bei erfolgreichem Abschluss des vermittelten Hauptvertrags. Entscheidend ist die Mitursächlichkeit der Maklertätigkeit für den Vertragsabschluss. Wir entwickeln strategische Ansätze zur Durchsetzung berechtigter Provisionsansprüche und zur Abwehr unbegründeter Forderungen.
              </p>
              <p>
                Die Rechtsprechung stellt unterschiedliche Anforderungen an den Nachweis der Mitursächlichkeit. Bei zeitnahem Vertragsabschluss greift eine Vermutungsregelung zugunsten des Maklers. Wir nutzen diese und andere rechtliche Instrumente optimal für Ihren Erfolg.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Rechtsprechung zum Maklerrecht
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p><strong>Doppelmaklerschaft:</strong> AG München, Urteil vom 02.07.2010</p>
              <p><strong>Makler ist nicht Kostenschuldner des Notars:</strong> OLG Düsseldorf, Beschluss vom 27. April 2017</p>
              <p><strong>Vorkaufsberechtigter, Maklerklausel:</strong> Urteil des BGH's 14.12.1995</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Umfassende Maklerrechtsberatung für Ihren Erfolg
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Als spezialisierte Maklerrechtsexperten stehen wir Ihnen mit umfassender Kompetenz zur Seite. Ob Provisionsstreitigkeiten, Vertragsgestaltung oder präventive Beratung - wir entwickeln maßgeschneiderte Lösungen für Ihre maklerrechtlichen Herausforderungen.
              </p>
              <p>
                Unser Beratungsansatz ist transparent und effizient: Wir besprechen individuell das optimale Gebührenmodell - Pauschalhonorar oder Stundenhonorar - abhängig von Komplexität und Umfang Ihres Falls. Nutzen Sie unsere moderne Infrastruktur für Beratungsgespräche vor Ort, telefonisch oder online. Unser kostenloser Rückruf-Service steht Ihnen jederzeit zur Verfügung.
              </p>
            </div>
          </div>

          {/* Maklerrecht A-Z Card */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Maklerrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Umfassendes Expertenwissen zu allen Facetten des Maklerrechts. Wir erläutern komplexe Sachverhalte verständlich und zeigen praxisnahe Lösungsstrategien für Ihre maklerrechtlichen Anliegen auf.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/maklerrecht/a-z/" className="inline-flex items-center">
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

export default RechtsgebieteMaklerrecht;