import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const KaufrechtAutokauf = () => {
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
            <span className="text-white">Autokauf und Gewährleistung</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Autokauf und Gewährleistung
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Die Rechte bei einem Kaufvertrag über einen PKW bestimmen sich nach den §§ 434 ff., 437 BGB, wonach der Käufer – bei Vorliegen der Voraussetzungen – verschiedene Wahlmöglichkeiten hat. Der Käufer kann vom Verkäufer Nacherfüllung, Minderung, Schadensersatz verlangen oder vom Vertrag zurücktreten. Vorrangig kann und muss aber zunächst Nacherfüllung in Form der Mängelbeseitigung verlangt werden.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Will Ihr PKW/LKW mal wieder nicht wie Sie wollen?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Voraussetzung dafür ist aber zunächst das Vorliegen eines Mangels. Ob ein Mangel an einem PKW/LKW vorliegt, hängt von dessen Alter, Erhaltungszustand, Laufleistung und dem im PKW betroffenen Bauteil ab und ist meist eine Frage des Einzelfalls d. h. des jeweiligen Fahrzeugtyps. Abzugrenzen ist das Vorliegen eines Mangels von den typischen Verschleiß- und Abnutzungserscheinungen (z. B.: Getriebeschaden, Motorschaden), bei welchen es sich rechtlich gesehen nicht um einen Mangel handelt.
              </p>
              <p>
                Erschwert wird dem Käufer die Durchsetzung und Wahrnehmung seiner Rechte oftmals mit der Behauptung eines Gewährleistungsausschlusses. Nach § 444 BGB ist eine rechtsgeschäftliche Beschränkung der Gewährleistungsrechte grundsätzlich möglich. Allerdings gilt dies nur, wenn nicht ein VERBRAUCHSGÜTERKAUF vorliegt, d. h. der Verkäufer gewerblich als Unternehmer (§ 14 BGB) und sie privat als Verbraucher (§ 13 BGB) gehandelt haben. Egal ist in diesem Fall, ob es sich um eine gebrauchte Sache handelt, denn auch bei gebrauchten Sachen ist ein voller Gewährleistungsausschluss unwirksam.
              </p>
              <p>
                Selbst wenn ein wirksamer Gewährleistungsausschluss vereinbart worden ist z. B. von Ihnen als Unternehmer, ist noch nichts verloren. § 444 BGB sagt weiter aus, dass der Verkäufer sich auf einen Gewährleistungsausschluss dann nicht berufen kann, wenn er den Mangel arglistig verschwiegen hat bzw. wenn er eine Garantie für die Beschaffenheit übernommen hat.
              </p>
              <p>
                Arglist liegt dann vor, wenn der Verkäufer die wahre Sachlage bezüglich eines Mangels kennt bzw. mit der Möglichkeit rechnet und dennoch billigend in Kauf nimmt, dass der Vertragspartner den Fehler nicht kennt und bei Offenbarung des Mangels den Vertrag so nicht abgeschlossen hätte. Es ist dabei eine lebensnahe Betrachtungsweise anzulegen. Als Kontrollfragen ist daher immer zu fragen, ob dem Verkäufer der Mangel „verborgen geblieben" sein kann, wobei u. a. die Sachkunde des Verkäufers eine Rolle spielt. Je mehr Sachkunde der Verkäufer hat, umso ehr wird man Arglist annehmen können.
              </p>
              <p>
                Soweit der Verkäufer dem Käufer eine Garantie bzw. Zusicherung (z. B.: bestimmte Laufleistung, Unfallfreiheit) abgegeben hat, so kann der Verkäufer sich gegenüber dem Käufer ebenfalls nicht auf einen Gewährleistungsausschluss berufen. Der Verkäufer kann nämlich dem Käufer mit der einen Hand nicht etwas geben (= Zusicherung), was er ihm mit der anderen Hand (= Gewährleistungsausschluss) sofort wieder nimmt.
              </p>
              <p>
                Die Rechtsprechung zur Frage der Mangelhaftigkeit, insbesondere die Abgrenzung zum Paradigma der typischen Verschleiß- und Abnutzungserscheinungen und die Probleme um den Gewährleistung eines PKW/LKW sind mannigfaltig, teils widersprüchlich und regional unterschiedlich.
              </p>
              <p>
                Wir helfen Ihnen und unterstützen Sie bei der Geltendmachung von Gewährleistungs- und Garantieansprüchen, sowie der Rückabwicklung eines Kaufvertrags. Auch wenn es um die Durchsetzung von Kaufpreisforderungen aus einem PKW Kaufvertrag geht, stehen wir Ihnen gerne zur Seite.
              </p>
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

export default KaufrechtAutokauf;