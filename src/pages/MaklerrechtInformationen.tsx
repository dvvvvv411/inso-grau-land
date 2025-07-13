import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MaklerrechtInformationen = () => {
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
            <Link to="/rechtsgebiete/maklerrecht" className="hover:text-white transition-colors">Maklerrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Informationen für Makler</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Informationen für Makler
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Unser Beratungsangebot für Makler erstreckt sich vom ersten Kundenkontakt bis zu der (hoffentlich nicht notwendigen) gerichtlichen Durchsetzung des Provisionsanspruchs. Der erste Schritt besteht dabei darin eine rechtssichere Vertragsgrundlage zu schaffen. Danach sollte der Ablauf des Maklermandats so angelegt werden, dass die Voraussetzungen für die Provision gut nachgewiesen werden können. Optimiert man diese Abläufe auch rechtlich, können ein Großteil von Problemen und Auseinandersetzungen schon im Ansatz vermieden werden.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Rechtssichere Vereinbarungen – Maklerauftrag schriftlich festhalten
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Der Makler trägt für den Vertragsschluss die Beweislast. Der Maklerauftrag sollte daher schriftlich fixiert werden und zwar so, dass über sämtliche relevante Punkte verständliche und wirksame Regelungen getroffen werden.
              </p>
              <p>
                Möchte der Makler zum Beispiel eine höhere Provision erhalten, als den üblichen Lohn, so muss er dies gemäß § 653 Absatz 2 BGB beweisen. Nach einer Entscheidung des BGH vom 7.7.2016 ist darüber hinaus zu beachten, dass ein Maklervertrag, der zwischen Makler und einem Verbraucher per Email oder am Telefon geschlossen wird, einen Fernabsatzvertrag darstellt und vom Kunden widerrufen werden kann. Der Kunde ist daher bei einem solchen Vertragsschluss über sein Widerrufsrecht zu belehren, da er ansonsten über einen Zeitraum von mehr als einem Jahr den Widerruf erklären kann.
              </p>
              <p>
                Wichtig ist auch eine vereinbarte Laufzeit oder Kündigungsfristen, da ein Maklervertrag ansonsten jederzeit kündbar ist.
              </p>
              <p>
                Es macht daher auf jeden Fall Sinn, den Vertrag aber auch den Ablauf, der zum Vertrag führt, mit anwaltlicher Hilfe zu optimieren.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ausschluss des Kausalitätserfordernisses und erfolgsunabhängige Maklerprovision
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Grundsätzlich erhält ein Makler nur seine Maklerprovision, wenn seine Leistung für den Kauf / die Miete „kausal", also ursächlich war.
              </p>
              <p>
                Die Beweislast hierfür trägt der Makler, wobei bei einem gewissen sachlichen und zeitlichen Zusammenhang (bis zu einem Jahr) zwischen der Tätigkeit des Maklers und dem Hauptvertragsabschluss die Kausalität seiner Tätigkeit vermutet wird. Es genügt dabei, wenn seine Tätigkeit mitursächlich für den Abschluss des Hauptvertrags wurde.
              </p>
              <p>
                Kommt es dagegen in einem längeren Zeitraum nicht zum Abschluss des Vertrages oder ändern sich die Umstände, muss die Kausalität nachgewiesen werden. Dieses Kausaliätserfordernis kann jedoch durch eine individuelle Vereinbarung (nicht in AGB) ausgeschlossen werden.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Qualifizierte Maklerklausel im notariellen Vertrag
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Des Weiteren kann sich die Verwendung sogenannten Maklerklauseln in einem notariellen Vertrag empfehlen. Dies reicht von der Verwendung von deklaratorischen Klauseln mit Vollstreckungsunterwerfung oder zur Beweiserleichterung. Daneben gibt es jedoch auch Maklerklauseln als echte Verträge zugunsten eines Dritten, nämlich des Maklers bzw. als dergestalt, dass sich der Käufer gegenüber dem Verkäufer verpflichtet, die durch diesen geschuldete Maklerprovision zu zahlen.
              </p>
              <p>
                Wie man hier am Besten formuliert und wie man die Klauseln im Vertrag verankert ist von Fall zu Fall verschieden.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Maklerprovision auch bei Vorkaufsrecht
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Der Makler verdient seine Provision im Regelfall auch dann, wenn der Vertrag durch Ausübung eines Vorkaufsrechtes mit dessen Inhaber zustande kommt.
              </p>
              <p>
                Auch hier ist allerdings wieder eine saubere Vertragsgestaltung richtig. Wurde der Maklervertrag mit dem Käufer rechtzeitig schriftlich geschlossen und sieht der notarielle Vertrag eine qualifizierte Maklerklausel vor, so tritt der Vorkaufsberechtigte nicht nur in den Kaufvertrag sondern auch in die Provisionspflicht des Maklervertrages ein. Wir konnten einen entsprechenden Fall unter anderem vor dem Landgericht Würzburg (Urteil vom 22.08.2017, 61 O 479/17) durchsetzen.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ihr Recht in guten Händen – Risiken des Maklerrechts durch eine anwaltliche Beratung minimieren
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In maklerrechtlichen Fragestellungen sind wir gerne mit unserem Team kompetent an Ihrer Seite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaklerrechtInformationen;