import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RechtsgebieteKaufrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#004595] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <div className="flex items-center text-blue-200 mb-6 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Rechtsgebiete</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Kaufrecht</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Kaufrecht
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Shoppen, so das neudeutsche Wort für Einkaufen, ist mittlerweile eine der Lieblingsfreizeitaktivitäten der Deutschen.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/api/placeholder/400/300" 
                alt="Team Kaufrecht" 
                className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Shoppen ohne Reue!
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Schnell sind ein paar neue Schuhe, ein Navigationsgerät oder ein DVD-Spieler gekauft. Aber auch der neue Tesla oder die gekaufte PV-Anlage fallen unter das Kaufrecht.
              </p>
              <p>
                Wenn dann die Ware nicht hält, was sie verspricht, stellt sich die Frage, welche Rechte der Käufer hat. So kann er unter Umständen den Kaufvertrag anfechten, widerrufen; er kann mindern oder Schadensersatz verlangen. Dem Käufer stehen Gewährleistungs- und ggf. Garantierechte zu. Hier den Durchblick zu bewahren, ist gar nicht so einfach. So besteht schon mal kein generelles „Umtauschrecht" – nur weil einem die Muster auf der Jeans nun doch nicht mehr gefallen. All diese Fragen werden im Kaufrecht geregelt.
              </p>
              <p>
                Kaufrechtliche Probleme und damit verwandte Fragestellungen tauchen in vielen verschiedenen Fallgestaltungen auf. Sei es der ebay-Kauf, die online-Auktion, der Fahrzeug-Kauf, der Kauf im Einzelhandel oder auch der Grundstückskauf.
              </p>
              <p>
                Wissen Sie, dass Ihre Rechte ggf. unterschiedlich danach zu beurteilen sind, ob Sie Unternehmer oder Verbraucher sind, und ob Sie selber von einem Unternehmer oder Verbraucher kaufen? Dies kann z. B. gerade beim Fahrzeugkauf problematisch werden. Aber auch die Art des Kaufes kann einen Teil Ihrer Rechte bestimmen, so ist in einigen Punkten danach zu differenzieren, ob Sie z. B. einen „herkömmlichen" Kauf in einem Geschäft tätigen oder online Ware bestellen.
              </p>
              <p>
                Gerade wenn es um höhere Summen geht, so z. B. beim Pkw-Kauf oder beim Erwerb von Grundstücken, kann schnelles und informiertes Handeln angezeigt sein.
              </p>
              <p>
                Aber auch „vorsorgend" können wir gerne für Sie tätig werden, z. B. bei der Ausarbeitung von Verträgen oder auch beratend, so auch im Bereich der Erstellung von auf Sie zugeschnittenen allgemeinen Geschäftsbedingungen (AGB). Der Kaufvertrag hinsichtlich eines Grundstücks bedarf z. B. zwingend der notariellen Form –aber selbstverständlich lohnt sich auch hier oftmals eine anwaltliche Beratung bereits im Vorfeld oder die Durchsicht des Vertragsentwurfes durch einen Anwalt.
              </p>
              <p>
                Wir beraten Sie gerne über Ihre Rechte bei der Rückabwicklung von Kaufverträgen, Minderung und Schadensersatz.
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
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Kaufrecht mit verständlicher Sprache.
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