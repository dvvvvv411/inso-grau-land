import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteGrundstuecksrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Grundstücksrecht"
        description="Rechtsanwalt Stegmann berät beim Grundstücksrecht insbesondere bei rechtlichen Fragen und Themen rund um Kauf und Verkauf von Grundstücken und Immobilien. Auch bei Fragen rund um die Belastung von Grundstücken mit Rechten wie z.B. Nießbrauch, Wohnrecht, Wegerecht oder Grundpfandrechten (z.B. Grundschuld, Hypothek) berät er Sie sehr gerne."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Grundstücksrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div 
              className="w-full h-64 md:h-80 rounded-lg shadow-lg relative bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 69, 149, 0.3), rgba(255, 255, 255, 0.1), rgba(0, 86, 179, 0.2)), url('/lovable-uploads/be3e4c30-b54a-47ce-b256-f0c9bdf74f64.png')`
              }}
            >
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Warum sind wir die richtigen Berater im Grundstücksrecht für Sie?
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Rechtsanwalt Stegmann ist sowohl Fachanwalt für Baurecht als auch Fachanwalt für Miet- und Wohnungseigentumsrecht. Wir haben die thematische Ausrichtung unserer Anwälte aus dem Blickwinkel der Mandanten gesehen.
              </p>
              
              <p>
                In der Praxis fallen viele Themen rund um die Immobilie und das Wohnen und Bauen zusammen. Das Immobilienrecht umfasst alles, was mit dem Eigentum, der Verwaltung oder auch der Nutzung von Grundstücken zu tun hat. Etwa die Rechte und Pflichten von Grundstücksnachbarn, beispielsweise im Hinblick auf Lärm, Baum- und Pflanzenbewuchs (Höhe/Mindestabstand von der Grundstücksgrenze, Laub- und Obstfall, Überhang von Ästen/Eindringen von Wurzeln auf das Nachbargrundstück etc.) regelt. Sowie die Beratung bei allen Fragen rund um den Kauf von Grundstücken.
              </p>
              
              <p>
                Rechtsanwalt Stegmann steht unseren Mandanten daher rund um die Themen Haus (Immobilie), Wohnung oder Grundstück und Nachbarschaft zur Seite.
              </p>
            </div>
          </div>

          {/* A-Z Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white border-blue-100">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Grundstücksrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes im Grundstücksrecht kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Grundstücksrecht mit verständlicher Sprache.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/grundstuecksrecht/a-z/" className="inline-flex items-center">
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

export default RechtsgebieteGrundstuecksrecht;