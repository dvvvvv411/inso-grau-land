import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const KaufrechtInternetversandhandel = () => {
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
            <Link to="/rechtsgebiete/kaufrecht" className="hover:text-white transition-colors">Kaufrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Internetversandhandel</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Internetversandhandel
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Der Kauf über's Internet? Wie komme ich da raus?
            </p>
            <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto mt-4">
              Viele haben es schon erlebt:
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Man hat eine Jacke im Internet gekauft, die dort mit tollen Mustern und Farben abgebildet war. Nachdem sie geliefert wurde, ist die Enttäuschung groß. Die Farben sind blaß, das Muster öde, der Schnitt langweilig.
              </p>
              <p>
                Keine Sorge! Ihnen steht ein Widerrufsrecht zu, wenn folgende Voraussetzungen erfüllt sind:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Sie sind Verbraucher, d.h. Sie haben die Jacke nicht zu gewerblichen Zwecken, sondern rein privaten Zwecken gekauft.
                </li>
                <li>
                  Die Jacke haben Sie von einem Unternehmer im Sinne von § 14 BGB gekauft. Unternehmer ist der Vertragspartner, der in Ausübung seiner gewerblichen oder selbständigen beruflichen Tätigkeit (eigener Internetshop, Powerseller) handelt.
                </li>
                <li>
                  Schließlich muss ein sogenanntes Fernabsatzgeschäft vorliegen. Dies ist bei Verkäufen, die ausschließlich über das Internet erfolgen, der Fall.
                </li>
              </ul>
              <p>
                Sind all diese Voraussetzungen erfüllt und handelt es sich nicht um ein für Sie individuell angefertigtes Produkt, können Sie den Kaufvertrag innerhalb der gesetzlichen Frist widerrufen. Wann die Widerrufsfrist zu laufen beginnt und wie lange diese dauert, hängt davon ab, ob und wann Sie als Käufer eine ordnungsgemäße Widerrufsbelehrung in Textform erhalten haben:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Erhalten Sie noch vor Vertragsschluss eine ordnungsgemäße Belehrung, beträgt die Widerrufsfrist 2 Wochen.
                </li>
                <li>
                  Wurde Ihnen diese erst nach nach dem Vertragsschluss übermittelt, beträgt die Widerrufsfrist 1 Monat.
                </li>
                <li>
                  Erhalten Sie überhaupt keine Widerrufsbelehrung, erlischt das Widerrufsrecht grundsätzlich nicht.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kompetente Beratung durch unsere Rechtsanwälte für Kaufrecht
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In kaufrechtlichen Fragestellungen sind wir gerne mit unserem Team Kaufrecht kompetent an Ihrer Seite.
              </p>
              <p>
                Über ein Pauschalhonorar oder ein Stundenhonorar wird individuell mit Ihnen und abhängig von der rechtlichen Fragestellung, der Schwierigkeit und dem Umfang Ihrer Angelegenheit in einem gemeinsamen Beratungsgespräch entschieden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KaufrechtInternetversandhandel;