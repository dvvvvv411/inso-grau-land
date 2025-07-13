import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const GrundstuecksrechtUnberechtigteParkplatznutzung = () => {
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
            <Link to="/rechtsgebiete/Grundstuecksrecht" className="hover:text-white transition-colors">Grundstücksrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Unberechtigte Parkplatznutzung</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Unberechtigte Parkplatznutzung
            </h1>
            <div className="text-xl text-blue-100 leading-relaxed space-y-4">
              <p>Wird Ihr Privat-, Firmen- oder Kundenparkplatz trotz deutlicher Beschilderung regelmäßig unberechtigt genutzt?</p>
              <p>Haben Sie die unberechtigten Parkplatznutzer/Falschparker möglicherweise bereits erfolglos dazu aufgefordert, dies zu unterlassen?</p>
              <p className="font-semibold">In diesen Fällen können wir Ihnen helfen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 space-y-8">
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Der unberechtigt Parkende kann bei Vorliegen bestimmter Voraussetzungen regelmäßig zur Unterlassung und Abgabe einer sog. Unterlassungserklärung mit Vertragsstrafenversprechen aufgefordert werden. Das Vertragsstrafenversprechen hat zur Folge, dass der unberechtigt Parkende im Wiederholungsfall eine empfindliche Vertragsstrafe an Sie als berechtigten Parkplatznutzer zahlen muss. Dies stellte beispielsweise das Amtsgericht München in einem Urteil fest.
              </p>
              
              <p>
                Die Ihnen im Rahmen einer berechtigten Abmahnung entstehenden Anwaltskosten hat Ihnen der unberechtigt Parkende zu ersetzen, wie das Amtsgericht Augsburg feststellte. Gleiches gilt in diesen Fällen für die Kosten der Halterermittlung, so der Bundesgerichtshof 2012.
              </p>
              
              <p>
                Gerne stehen wir Ihnen zur Erörterung Ihrer individuellen rechtlichen Situation für einen persönlichen Besprechungstermin zur Verfügung.
              </p>
              
              <p>
                Auf Wunsch kann die gesamte Mandatsabwicklung auch via Telefon, Fax und E-Mail erfolgen.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-green-600">NEU:</span> Kostenlose 15-minütige telefonische Ersteinschätzung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Als besonderen Service bieten wir Ihnen in Fällen unberechtigter Parkplatznutzung eine <strong>kostenlose 15-minütige telefonische Ersteinschätzung</strong> Ihres Falles bei Nutzung unseres u.a. Online-Formulars an. Das Online-Formular dient dem Zweck, Ihre Anfrage möglichst effektiv zu beantworten.
                </p>
                <p>
                  Unser Sekretariat wird sich nach Erhalt des Formulars kurzfristig, alternativ zu der von Ihnen gewünschten Rückrufzeit, wegen der Vereinbarung eines Telefontermins mit Ihnen in Verbindung setzen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrundstuecksrechtUnberechtigteParkplatznutzung;