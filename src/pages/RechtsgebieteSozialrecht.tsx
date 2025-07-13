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
        description="Das Sozialrecht greift in alle Bereiche des Lebens ein und regelt eine breite Vorsorge für verschiedenste Stadien im Leben, wie z.B. bei Alter, Tod, Invalidität, Krankheit und Arbeitsunfall. Hier bietet sich die Möglichkeit, vielen zu helfen, die Hilfe dringend nötig haben."
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
            <div 
              className="w-full h-64 md:h-80 rounded-lg shadow-lg relative bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 69, 149, 0.6), rgba(255, 255, 255, 0.1), rgba(0, 86, 179, 0.4)), url('/lovable-uploads/6e3e40b9-401f-4bbd-b08d-0ad16e3c7827.png')`
              }}
            >
            </div>
          </div>
          
          <div className="mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Wir vertreten Sie im Sozialrecht unter anderem in den Bereichen der Sozialversicherung, des sozialen Entschädigungsrechts (z.B. Schwerbehindertenrecht), der sozialen Förderung (z.B. Kindergeld) und wir helfen Ihnen dabei, Erwerbsminderungsrenten durchzusetzen oder Ansprüche gegenüber Berufsgenossenschaften geltend zu machen.
              </p>
              <p>
                Dabei überprüfen wir z.B. behördliche Bescheide, ob diese unter hinreichender Beachtung der berechtigten Belange des Rechtssuchenden erlassen worden sind. Aktuell kümmern wir uns im Sozialrecht auch häufig um das Problem der Scheinselbständigkeit. Häufig kommen Mandanten zu uns, die ein sogenanntes Statusfeststellungverfahren bei der Deutschen Rentenversicherung (DRV) eingeleitet haben und denen nun die Nachzahlung von Versicherungsbeiträgen droht.
              </p>
              <p>
                Aufgrund von Arbeitsüberlastung schaffen wir es leider nicht, auch Mandate im Bereich der sozialen Hilfen annehmen zu können. Bei Anfragen zu Grundsicherung für Arbeitssuchende oder Grundsicherung im Alter und bei Erwerbsunfähigkeit empfehlen wir Onlineportale zu nutzen, insbesondere beim Bürgergeld-Bescheid das Portal Hartz4Widerspruch.
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
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Sozialrecht mit verständlicher Sprache.
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