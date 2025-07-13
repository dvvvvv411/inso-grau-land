import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SteuerrechtWegzugsbesteuerung = () => {
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
            <span className="text-white">Wegzugsbesteuerung</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Wegzugsbesteuerung
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Grundlagen der Wegzugsbesteuerung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Die Wegzugsbesteuerung gemäß § 6 Außensteuergesetz (AStG) greift, wenn eine natürliche Person ihren Wohnsitz oder gewöhnlichen Aufenthalt ins Ausland verlagert, der unbeschränkten Steuerpflicht unterliegt und dabei wesentliche Beteiligungen an Kapitalgesellschaften hält. Ziel dieser Regelung ist es, die Verlagerung von stillen Reserven ins Ausland zu verhindern.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Betroffene Personen und Beteiligungen
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Betroffen sind Steuerpflichtige, die in den letzten zwölf Jahren mindestens sieben Jahre unbeschränkt steuerpflichtig in Deutschland waren und eine Beteiligung von mindestens 1% an einer inländischen oder ausländischen Kapitalgesellschaft besitzen. § 6 AStG erstreckt sich auf alle Anteile an in- oder ausländischen Kapitalgesellschaften, an denen der Steuerpflichtige in den letzten fünf Jahren vor seinem Wegzug zu mindestens 1 Prozent unmittelbar oder mittelbar beteiligt war (Anteile im Sinne des § 17 Absatz 1 Satz 1 EStG). Der Umzug ins Ausland wird steuerlich als Veräußerung der Anteile behandelt, wobei die Differenz zwischen dem Anschaffungswert und dem aktuellen Marktwert besteuert wird.
              </p>
              <p>
                Neben dem Umzug führt auch die Übertragung betroffener Vermögenswerte im Wege von Erbschaft oder Schenkung an eine Person, welche Ihren Wohnsitz oder gewöhnlichen Aufenthalt im Ausland hat, zur Auslösung der Steuerpflicht nach § 6 AStG.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stundung und Zahlungserleichterungen
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Bei einem Wegzug in einen EU/EWR-Staat kann die entstehende Steuer gemäß § 6 Absatz 5 AStG zinslos gestundet werden, solange bestimmte Bedingungen erfüllt sind und die Anteile nicht veräußert werden. Diese Bedingungen beinhalten unter anderem die kontinuierliche Ansässigkeit im EU/EWR-Ausland und die Erfüllung der Mitteilungspflichten. Bei Wegzug in ein Drittland ist die Steuer in der Regel sofort fällig.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mitteilungspflichten und Folgen bei Nichtbeachtung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Gemäß § 6 Absatz 1 AStG muss der Steuerpflichtige das Finanzamt über den Wegzug und die Beteiligungen informieren. Bei Nichtbeachtung der Anzeigepflichten oder unrichtigen Angaben drohen hohe Strafen und die Einleitung eines steuerlichen Strafverfahrens.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Entscheidung des BFH vom 06.09.2023
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Ein wegweisendes Urteil des Bundesfinanzhofs (BFH) vom 06.09.2023 (Az. I R 35/20) hat entschieden, dass die Wegzugsbesteuerung bei einem Wegzug in die Schweiz dauerhaft eine zinslose Stunden erfolgen muss, solange bestimmte Voraussetzungen erfüllt sind. Diese Entscheidung stärkt die Rechte der Steuerpflichtigen, die in EU/EWR-Staaten oder die Schweiz umziehen möchten, da die Stundung nicht mehr automatisch eine Sicherheitsleistung erfordert, sondern nur unter bestimmten Bedingungen.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Strategien zur Steueroptimierung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Betroffene sollten frühzeitig steuerliche Beratung in Anspruch nehmen, um Möglichkeiten zur Steueroptimierung und eventuelle Stundungsmöglichkeiten zu prüfen. Dies umfasst auch die Berücksichtigung von Doppelbesteuerungsabkommen und der aktuellen steuerlichen Gesetzgebung im Zielland.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kompetente Beratung durch unsere Steuerberater und Rechtsanwälte für Steuer- und Strafrecht
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In steuerrechtlichen Fragestellungen zum Wegzug ins Ausland sind wir gerne mit unserem Team Steuerrecht kompetent an Ihrer Seite. Unsere Rechtsanwälte und Steuerberater arbeiten hierfür Hand in Hand miteinander.
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

export default SteuerrechtWegzugsbesteuerung;