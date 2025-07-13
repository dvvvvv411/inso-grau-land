import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SozialrechtRechtsschutz = () => {
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
            <span className="text-white">Einstweiliger Rechtsschutz zu Gunsten einer lebensverlängernden Therapie</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Einstweiliger Rechtsschutz zu Gunsten einer lebensverlängernden Therapie
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Begehrt ein an einer lebensbedrohlichen, regelmäßig tödlich verlaufenden Krankheit erkrankter Versicherter von seiner Krankenkasse im Wege des einstweiligen Rechtsschutzes eine potentiell lebensverlängernde Therapie kommt es darauf an, ob das Gericht dies in der vorgegebenen Zeit entscheiden kann. Ist es dem Gericht in der gebotenen Zeit nicht möglich, den Sachverhalt zu den Anspruchsvoraussetzungen für die beantragte Behandlung aufzuklären, führt die vorzunehmende Folgenabwägung regelmäßig zum Ergebnis, dass dem Versicherten die Therapie vorläufig zu gewähren ist. Das Sozialgericht Stuttgart hat im einstweiligen Rechtsschutz einem Erkrankten eine Hyperthermiebehandlung zuerkannt. Dies, obwohl der gemeinsame Bundesausschuss die Therapiemethode als solche generell für die vertragsärztliche Versorgung bereits negativ bewertet hatte.
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
                Somit stärkte das Gericht im vorliegend einstweiligen Rechtsschutz die Rechte einer Antragstellerin, die wirtschaftlich die Hyperthermiebehandlung nicht selbst finanzieren könnte. Dies, da die Antragstellerin ansonsten mit einer nicht reversiblen Lebensverkürzung zu rechnen hätte, ihr also schwere und nicht anders abwendbare Nachteile drohten.
              </p>
              <p>
                Die Richter wollten daher einen Leistungsanspruch des Versicherten, zumindest im Rahmen des zu prüfenden Anordnungsanspruchs, nicht von vorne herein als ausgeschlossen ansehen, nur weil der gemeinsame Bundesausschuss bereits einen Beschluss auf Basis der evidenzbasierten Medizin und strengen statistischen Vorgaben getroffen hat. Im Rahmen der verfassungskonformen Auslegung genüge bereits eine auf Indizien gestützte, nicht ganz fern liegende Aussicht auf Heilung oder eine wenigstens spürbar positive Auswirkung auf den Krankheitsverlauf.
              </p>
              <p>
                Wir gehen davon aus, dass dieses Urteil nicht unerhebliche Auswirkungen auf die Praxis hat. Den Krankenkassen wird durch den einstweiligen Rechtsschutz der Weg abgeschnitten, auf Zeit zu spielen. Gerade bei den umstrittenen Therapieoptionen empfehlen wir daher, keine langwierige Auseinandersetzung mit der Krankenkasse in Kauf zu nehmen, sondern sich zügig gerichtlicher Hilfe zu bedienen.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Heß & Partner – Ihr kompetenter Ansprechpartner in allen sozialrechtlichen Fragen
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In allen sozialrechtlichen Fragen sind wir gerne mit unserem sozialrechtlichen Team rund um unsere Fachanwältin für Sozialrecht Ines Heck an Ihrer Seite. Über ein Pauschalhonorar oder ein Stundenhonorar wird individuell mit Ihnen und abhängig von der rechtlichen Fragestellung, der Schwierigkeit und dem Umfang Ihrer Angelegenheit in einem gemeinsamen Beratungsgespräch entschieden.
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

export default SozialrechtRechtsschutz;