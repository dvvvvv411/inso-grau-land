import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteVerwaltungsrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Verwaltungsrecht"
        description="Effektive Vertretung gegenüber Behörden und in verwaltungsgerichtlichen Verfahren. Wir schützen Ihre Rechte gegen staatliche Übergriffe und setzen Ihre Ansprüche erfolgreich durch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Verwaltungsrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/ceed31b4-65ae-4203-807b-9a69c2bc01a1.png" 
                alt="Team Verwaltungsrecht" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Ein wichtiger Bestandteil ist das Verwaltungsverfahren, welches den Ablauf und die Form behördlicher Entscheidungen festlegt. Dieses Verfahren schließt vielfältige Handlungen ein, wie die Erteilung von Genehmigungen, Erlaubnissen und Bescheiden. Bürger haben im Rahmen des Verwaltungsrechts die Möglichkeit, gegen Entscheidungen der Behörden vorzugehen, wenn sie das Gefühl haben, dass ihre Rechte verletzt wurden.
              </p>
              <p>
                Das Verwaltungsrecht deckt zahlreiche Teilbereiche ab, einschließlich, aber nicht beschränkt auf das Umweltrecht, das Baurecht, das Sozialrecht, das Beamtenrecht und das Versammlungsrecht. Jeder dieser Bereiche hat spezifische Regelungen und Verfahren, die für die Bürger von großer Bedeutung sind. Beispielsweise regelt das Umweltrecht Fragen des Naturschutzes, der Luftreinhaltung oder der Abfallentsorgung, während das Baurecht sich mit der Planung und Genehmigung von Bauvorhaben beschäftigt.
              </p>
              <p>
                Ein konkretes Beispiel aus diesem Rechtsgebiet ist der Erhalt einer Baugenehmigung. Bevor ein Bürger ein größeres Bauvorhaben in Angriff nehmen kann, ist in der Regel eine Genehmigung von der zuständigen Behörde erforderlich. Das Verfahren dazu ist oft komplex und erfordert die Einhaltung zahlreicher Vorschriften und Standards, die den Schutz der Umwelt, die Sicherheit und den ästhetischen Einfluss des Bauvorhabens berücksichtigen.
              </p>
              <p>
                Bürger haben im Rahmen des Verwaltungsrechtverfahrensrechts die Möglichkeit, gegen Entscheidungen der Behörden vorzugehen, wenn sie das Gefühl haben, dass ihre Rechte verletzt wurden. Im Verwaltungsrecht sind sowohl Widerspruchsverfahren als auch verwaltungsgerichtliche Klagen möglich, um individuelle Ansprüche zu überprüfen und durchzusetzen.
              </p>
              <p>
                Verwaltungsstreitigkeiten können aus vielerlei Gründen entstehen, etwa durch den Entzug von Fahrerlaubnissen, Konflikte im Schulrecht oder im Bereich beamtenrechtlicher Fragen. In all diesen Fällen gibt es die notwendigen Instrumente und Verfahren, um rechtliche Probleme systematisch und fair zu lösen.
              </p>
              <p>
                Insgesamt ist das Verwaltungsrecht ein unverzichtbares Werkzeug zur Sicherstellung von Recht und Ordnung in der Gesellschaft. Es gewährleistet, dass die Macht und die Entscheidungsgewalt der Behörden im Einklang mit den Gesetzen stehen und ermöglicht es den Bürgern, ihre Rechte zu schützen und ihre Interessen zu vertreten. Durch die Möglichkeit, Rechtsstreitigkeiten auf einer rechtsstaatlichen Basis zu klären, trägt das Verwaltungsrecht entscheidend zu einem harmonischen Zusammenleben zwischen Staat und Bürgern bei.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                Wie kann unser Rechtsanwalt Ihnen im Verwaltungsrecht helfen?
              </h2>
              <p>
                Der Staat tritt uns Bürgern gegenüber ständig auf. Dabei besteht die Gefahr, dass Ihre Rechte beeinträchtigt und verletzt werden können. Sind Sie durch Handeln von Behörden oder anderen staatlichen Stellen beeinträchtigt, unterstützen wir Sie gerne. Wir prüfen für Sie alle Vorgehensweisen, die Ihren Erfolg ermöglichen und erheben auch Klage vor Gericht für Sie, wenn es notwendig wird. Dabei ist es unser Anliegen, dass Sie auch selbst alles nachvollziehen und entscheiden können. Deswegen erläutern wir Ihnen das Vorgehen der Behörden auf einer praktischen und nachvollziehbaren Ebene und informieren Sie steht über unsere Handlungen.
              </p>
            </div>
          </div>

          {/* Verwaltungsrecht A-Z Card */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Verwaltungsrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes mit Schwerpunkt im Verwaltungsrecht kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Verwaltungsrecht mit verständlicher Sprache.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/verwaltungsrecht/a-z/" className="inline-flex items-center">
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

export default RechtsgebieteVerwaltungsrecht;