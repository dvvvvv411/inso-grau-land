import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SteuerrechtAnzeigepflicht = () => {
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
            <span className="text-white">Anzeigepflicht bei der Erbschaft- und Schenkungsteuer nach § 30 ErbStG</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Anzeigepflicht bei der Erbschaft- und Schenkungsteuer nach § 30 ErbStG
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Grundlagen der Anzeigepflicht
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Gemäß § 30 Erbschaftsteuer- und Schenkungsteuergesetz (ErbStG) besteht eine Anzeigepflicht, wenn man eine Schenkung oder eine Erbschaft erhält. Diese Pflicht betrifft sowohl Erben als auch Beschenkte und soll sicherstellen, dass steuerpflichtige Vorgänge der Finanzverwaltung gemeldet werden. Unter Umständen kann auch der Schenker gemeinsam mit den Beschenkten zur Anzeige verpflichtet sein.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wann besteht die Anzeigepflicht?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Die Anzeigepflicht besteht jedenfalls, wenn der Erwerb von Todes wegen oder durch Schenkung den gesetzlichen Freibetrag übersteigt. Diese Freibeträge variieren je nach Verwandtschaftsgrad zwischen dem Erblasser oder Schenker und dem Erwerber. Beispielsweise beträgt der Freibetrag für Ehegatten 500.000 Euro, für Kinder 400.000 Euro und für Enkel 200.000 Euro.
              </p>
              <p>
                Wenn eine Schenkung oder Erbschaft die Freibeträge unterschreitet, ist umstritten, ob auch hier bereits eine Anzeigepflicht entstehen kann. Generell kann gesagt werden, dass eine Anzeige notwendig wird, umso näher der erhaltene Betrag an die Freibetragsgrenze heranreicht. Die konkrete Notwendigkeit einer Anzeige des Finanzamts ist – auch unter Berücksichtigung möglicher Vorschenkungen – im Einzelfall zu prüfen.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Was ist anzuzeigen?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Anzuzeigen sind der Erwerb von Todes wegen (Erbschaften), Schenkungen unter Lebenden sowie Zweckzuwendungen. Die Anzeige muss die Höhe und Art des Erwerbs sowie das Verhältnis zum Erblasser oder Schenker umfassen. Zu melden sind auch Schenkungen und Erbschaften, die innerhalb eines Zeitraums von zehn Jahren mehrfach erfolgen und in ihrer Gesamtsumme den Freibetrag überschreiten.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wie erfüllt man die Anzeigepflicht?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Die Anzeige ist innerhalb von drei Monaten nach Kenntnis des steuerpflichtigen Vorgangs beim zuständigen Finanzamt schriftlich einzureichen. Hierfür gibt es entsprechende Formulare, die ausgefüllt und mit den notwendigen Nachweisen versehen werden müssen. Es ist ratsam, sich bei Unsicherheiten fachkundigen Rat einzuholen, um Fehler zu vermeiden und Fristen einzuhalten.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Folgen bei Nichtbeachtung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Eine Nichtanzeige oder verspätete Anzeige kann empfindliche Strafen nach sich ziehen, darunter Geldbußen und die Nachzahlung der fälligen Steuer, einschließlich Zinsen. Zudem kann es zur Einleitung eines steuerlichen Strafverfahrens kommen.
              </p>
              <p>
                Die Anzeigepflicht nach § 30 ErbStG ist ein wichtiger Bestandteil des Erbschaft- und Schenkungsteuerrechts. Um rechtliche und finanzielle Nachteile zu vermeiden, sollten Erben und Beschenkte sich frühzeitig über ihre Pflichten informieren und die notwendigen Schritte unternehmen. Eine rechtzeitige und korrekte Anzeige beim Finanzamt ist hierbei unerlässlich.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kompetente Beratung durch unsere Steuerberater und Rechtsanwälte für Steuer- und Strafrecht
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In steuerstrafrechtlichen Fragestellungen sind wir gerne mit unserem Team Steuerrecht kompetent an Ihrer Seite. Unsere Rechtsanwälte und Steuerberater arbeiten hierfür Hand in Hand miteinander.
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

export default SteuerrechtAnzeigepflicht;