import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SozialrechtSchwerbehinderung = () => {
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
            <span className="text-white">Anerkennung Schwerbehinderung, Hochstufung</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Anerkennung Schwerbehinderung, Hochstufung
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Gemäß § 2 SGB IX sind Menschen behindert, wenn ihre körperliche Funktion, geistige Fähigkeit oder seelische Gesundheit mit hoher Wahrscheinlichkeit länger als sechs Monate von dem für das Lebensalter typischen Zustand abweichen und daher ihre Teilhabe am Leben in der Gesellschaft beeinträchtigt ist. Schwerbehindert sind Menschen, wenn bei ihnen ein Grad der Behinderung von wenigstens 50 Prozent vorliegt.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto mt-4">
              Zuständig für die Feststellung des Grades der Behinderung ist das für den Wohnort des Antragstellers zuständige Versorgungsamt.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bewertung durch Vergleich von gleichaltrigen Personen
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Bewertet wird die Funktionsbeeinträchtigung des Behinderten im Vergleich zum etwa gleichaltrigen nicht beeinträchtigten Menschen. Dabei ist nicht die bloße Existenz einer Gesundheitsstörung, zum Beispiel einer Wirbelsäulenerkrankung, entscheidend, sondern die dadurch verursachten konkreten Funktionsbehinderungen.
              </p>
              <p>
                Neben dem Grad der Behinderung wird durch das Versorgungsamt auch festgestellt, ob und welche Merkzeichen (Nachteilsausgleiche) vorliegen. Dies können zum Beispiel sein:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Merkzeichen G</strong> (Gehbehinderung)</li>
                <li><strong>Merkzeichen B</strong> (Unentgeltliche Beförderung einer Begleitperson)</li>
                <li><strong>Merkzeichen H</strong> (Hilflos)</li>
                <li><strong>Merkzeichen aG</strong> (außergewöhnlich gehbehindert)</li>
                <li><strong>Merkzeichen RF</strong> (Rundfunkgebührenbefreiung)</li>
                <li><strong>Merkzeichen Bl</strong> (Blind)</li>
              </ul>
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

export default SozialrechtSchwerbehinderung;