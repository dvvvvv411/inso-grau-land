import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SozialrechtUnfallversicherung = () => {
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
            <Link to="/rechtsgebiete/Sozialrecht" className="hover:text-white transition-colors">Sozialrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Gesetzliche Unfallversicherung</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Gesetzliche Unfallversicherung
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Das Recht der Gesetzlichen Unfallversicherung findet sich im Sozialgesetzbuch Siebtes Buch. Aufgabe der gesetzlichen Unfallversicherung ist es, Arbeitsunfälle und Berufskrankheiten zu verhüten und im Schadensfall den Verletzten bzw. seine Angehörigen/ Hinterbliebenen zu entschädigen.
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
                Arbeitsunfälle sind Unfälle von Versicherten infolge einer versicherten Tätigkeit. Versicherte Tätigkeit ist z.B. bei Arbeitnehmern die Arbeitstätigkeit, bei Kindergartenkindern der Kindergarten- bei Schülern der Schulbesuch. Versicherte Tätigkeiten sind auch das „Zurücklegen des mit der versicherten Tätigkeit zusammenhängenden unmittelbaren Weges nach und von dem Ort der Tätigkeit". Erleidet ein Versicherten auf dem unmittelbaren Weg zur Arbeitsstelle einen Verkehrsunfall, liegt ebenfalls ein Arbeitsunfall in Form des Wegeunfalls vor.
              </p>
              <p>
                Berufskrankheiten sind Krankheiten, die Versicherte infolge einer den Versicherungsschutz begründenden Tätigkeit erleiden. Die Krankheit muss also durch Belastungen verursacht sein, die spezifisch für die versicherte Tätigkeit, in aller Regel die Berufstätigkeit, ist.
              </p>
              <p>
                Maßgeblich für die Bewertung einer Krankheit als Berufskrankheit ist die Berufskrankheiten-Verordnung.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Heß & Partner – Ihr kompetenter Ansprechpartner in allen sozialrechtlichen Fragen
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In allen sozialrechtlichen Fragen sind wir gerne mit unserem Team Sozialrecht an Ihrer Seite. Über ein Pauschalhonorar oder ein Stundenhonorar wird individuell mit Ihnen und abhängig von der rechtlichen Fragestellung, der Schwierigkeit und dem Umfang Ihrer Angelegenheit in einem gemeinsamen Beratungsgespräch entschieden.
              </p>
              <p>
                Als mittelständische Kanzlei mit mehreren Niederlassungen bieten wir genügend Ressourcen, um Ihren Fall jederzeit umfassend betreuen zu können. Möchten Sie uns direkt kontaktieren, um einen Termin zu vereinbaren oder uns sonst eine Frage zu stellen, freuen wir uns auf Ihre Kontaktaufnahme. Vereinbaren Sie für Ihr Anliegen einfach ein Gespräch, das dank unserer technischen Ausstattung auch telefonisch oder online durchgeführt werden kann. Darüber hinaus können Sie auch gerne unseren kostenlosen „Rückruf-Service" nutzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SozialrechtUnfallversicherung;