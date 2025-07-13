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
        title="Ihre Rechtsanwälte im Steuerrecht"
        description="Nicht immer ist es mit der reinen Steuerberatung innerhalb des Steuerrecht getan. Auseinandersetzungen mit dem Finanzamt können ebenso von der unterschiedlichen Rechtsauffassung wie unterschiedlicher Bewertung von Lebenssachverhalten getragen werden."
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
            <div 
              className="w-full h-64 md:h-80 rounded-lg shadow-lg relative bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 69, 149, 0.3), rgba(255, 255, 255, 0.1), rgba(0, 86, 179, 0.2)), url('/lovable-uploads/fadea5fe-d754-4949-9dce-10414d7c1be9.png')`
              }}
            >
            </div>
          </div>
          
          <div className="mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In vielen Fällen sind die Auswirkungen aber für die Betroffenen gravierend, wir erinnern an den berühmten deutschen Tennisspieler, dem Gefängnisstrafen drohten und der Millionen nachzahlen musste, weil er falsche Steuererklärungen abgegeben hatte. Es ging im Ergebnis allerdings nicht um komplizierte Rechtsfragen des Steuerrecht, sondern recht einfach um die Frage, ob hier ein Wohnsitz in Deutschland vorlag sowie, ob mehr als die Hälfte der Tage innerhalb eines Kalenderjahres in Deutschland verbracht wurden. Die unbeschränkte Steuerpflicht nach § 1 EStG erlischt ja, wenn man den Wohnsitz in Deutschland aufgibt.
              </p>
              <p>
                Außenprüfungen, Durchsuchungen, überhöhte Steuerfestsetzungen, die Möglichkeiten der Auseinandersetzung sind mannigfaltig.
              </p>
              <p>
                Wir nehmen unseren Mandanten die komplette Auseinandersetzung und jeglichen Schriftwechsel ab, sei es nun im Steuerfestsetzungsverfahren, die Vertretung im Umgang mit den Behörden, oder – falls notwendig – die Vertretung vor den Finanzgerichten.
              </p>
              <p>
                Als mittelständische Kanzlei mit rund 70 Mitarbeitern und allein 3 Rechtsanwälten, die in diesem Fachgebiet tätig sind, bieten wir genügend Ressourcen, um Ihren Fall jederzeit umfassend betreuen zu können. Möchten Sie uns direkt kontaktieren, um einen Termin zu vereinbaren oder uns sonst eine Frage zu stellen, freuen wir uns auf Ihre Kontaktaufnahme. Vereinbaren Sie für Ihr Anliegen einfach ein Gespräch, das dank unserer technischen Ausstattung auch telefonisch oder online durchgeführt werden kann. Darüber hinaus können Sie auch gerne unseren kostenlosen „Rückruf-Service" nutzen.
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
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Rechtsanwaltes mit Schwerpunkt im Steuerrecht kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Steuerrecht mit verständlicher Sprache.
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