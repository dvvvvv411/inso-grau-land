import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SteuerrechtGestaltungsmissbrauch = () => {
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
            <Link to="/rechtsgebiete/steuerrecht" className="hover:text-white transition-colors">Steuerrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Gestaltungsmissbrauch nach § 42 AO</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Gestaltungsmissbrauch nach § 42 AO
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Grundlagen des Gestaltungsmissbrauchs
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Von einem Gestaltungsmissbrauch nach § 42 AO spricht der Gesetzgeber, wenn
              </p>
              <p>
                a) eine unangemessene rechtliche Gestaltung gewählt wird, die
              </p>
              <p>
                b) zu einem gesetzlich nicht vorgesehenen Steuervorteil führt.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Was ist eine unangemessene Gestaltung?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Eine Steuergestaltung in diesem Kontext meint einen Sachverhalt, der zu einer niedrigen Steuerlast führt. Dies kann bedeuten, dass Gewinne lediglich in andere Jahre verschoben werden. Oder natürlichen oder juristischen Personen zugeordnet wird, die einen niedrigeren Steuersatz haben. Zu diesem Zweck ändern auch Unternehmen ihre Rechtsform, oder der Firmensitz wird ins Ausland verlegt.
              </p>
              <p>
                Unangemessen ist diese Gestaltung und deshalb ein Gestaltungsmissbrauch, wenn es keine „wirtschaftlichen und beachtlichen Gründe" gibt.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Beispiele für Gestaltungsmissbrauch
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Dies ist etwa die Kettenschenkung. Es gibt im Erbschaftssteuerrecht Freibeträge je Person. Schenkt nun Person A an Person B einen Betrag, den diese dann sogleich weiterverschenkt oder sogar weiterschenken muss, liegt in der Regel ein Gestaltungsmissbrauch, eine Umwegschenkung, vor.
              </p>
              <p>
                Eine Gründung einer Kapitalgesellschaft nur zu dem Zweck, einen gewerblichen Grundstückshandel zu vermeiden, kann ein Gestaltungsmissbrauch sein. Kann, denn es gibt Varianten, die gerichtlich geprüft und nicht beanstandet wurden.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Gibt es auch Fälle von Gestaltungsmissbrauch, die nicht nach § 42 AO zu beurteilen sind?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Ja. § 42 AO ist eine Regelung, die sehr allgemein gehalten ist. In einzelnen Gesetzen gibt es speziellere Vorschriften zur Missbrauchsvermeidung, so zum Beispiel in § 22 UmwStG. Gibt es solche Spezialvorschriften, wird die Frage eines Gestaltungsmissbrauchs nach diesen speziellen Voraussetzungen geprüft.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fazit: Prüfung und Absicherung durch Steuerberater oder einen Fachanwalt für Steuerrecht ist dringend anzuraten
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Wir haben uns bemüht, hier keine Fachbegriffe zu verwenden, wir möchten unsere Mandanten ebenso kompetent wie auch verständlich beraten. Wenn der Gesetzgeber allerdings eine Vielzahl von vagen, unbestimmten Begriffen verwendet, fällt eine Abgrenzung selbst Fachleuten sehr schwer. Rechtsunkundigen wird es in der Regel nicht möglich sein, die von ihm gewünschte Gestaltung belastbar einzuordnen. Hier helfen wir gerne und stehen beratend zur Seite. Für unsere Mandanten ist dies zugleich eine wertvolle Absicherung, nicht später mit dem Finanzamt in einen Konflikt zu geraten.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kompetente Beratung durch unsere Steuerberater und Rechtsanwälte für Steuer- und Steuerstrafrecht
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In steuerrechtlichen Fragestellungen sind wir gerne mit unserem Team Steuerrecht kompetent an Ihrer Seite. Unsere Rechtsanwälte und Steuerberater arbeiten hierfür Hand in Hand miteinander.
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

export default SteuerrechtGestaltungsmissbrauch;