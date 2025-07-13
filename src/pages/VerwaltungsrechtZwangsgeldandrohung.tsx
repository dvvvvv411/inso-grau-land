import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const VerwaltungsrechtZwangsgeldandrohung = () => {
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
            <Link to="/rechtsgebiete/Verwaltungsrecht" className="hover:text-white transition-colors">Verwaltungsrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Bescheid mit Zwangsgeldandrohung</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Bescheid mit Zwangsgeldandrohung
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Oft kommen Mandanten zu uns, nachdem sie bereits vor Monaten einen Bescheid von der Stadt, beispielsweise von der Bauaufsicht oder der Gewerbeaufsicht, erhalten haben. Diese Bescheide enthalten fast immer Anordnungen, die aus Sicht unseres Mandanten nicht gerechtfertigt sind. Die Gefahr daran: Meist wird auch ein Zwangsgeld in empfindlicher Höhe angedroht für den Fall, dass die Anordnung nicht umgesetzt wird. Zwangsgelder werden von der Behörde verwendet, um die Durchsetzung zu erzwingen, wenn eine Durchführung durch die Behörde selbst nicht möglich ist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  In keinem Fall das Schreiben Ignorieren!
                </h2>
                <p>
                  Zu oft neigt man leider dazu, solche unliebsamen Schreiben erstmal zu ignorieren. Erst wenn Monate später die Mahnung bzw. Vollstreckungsankündigung ins Haus flattert, wenden sich die Mandanten dann an uns – leider mit fatalen Folgen. Denn zu diesem Zeitpunkt ist für den ersten, ursprünglichen Bescheid die Klagefrist längst abgelaufen. Es ist dann fast unmöglich, noch dagegen vorzugehen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Heß & Partner – Ihr kompetenter Ansprechpartner im Verwaltungsrecht
                </h2>
                <p className="mb-4">
                  Haben auch Sie einen behördlichen Bescheid vom Landratsamt oder Ihrer Gemeinde bekommen? Eventuell sogar mit einer Zwangsgeldandrohung? Dann zögern Sie nicht, uns zu kontaktieren. Wir von der Kanzlei Heß & Partner prüfen umfassend und sofort, ob ein Vorgehen gegen den Bescheid Erfolgsaussichten hat, und reichen für Sie einen Eilantrag bzw. eine Klage ein.
                </p>
                <p className="mb-4">
                  Als mittelständische Kanzlei mit mehreren Niederlassungen bieten wir genügend Ressourcen, um Ihren Fall jederzeit umfassend betreuen zu können. Möchten Sie uns direkt kontaktieren, um einen Termin zu vereinbaren oder uns sonst eine Frage zu stellen, freuen wir uns auf Ihre Kontaktaufnahme. Vereinbaren Sie für Ihr Anliegen einfach ein Gespräch, das dank unserer technischen Ausstattung auch telefonisch oder online durchgeführt werden kann. Darüber hinaus können Sie auch gerne unseren kostenlosen „Rückruf-Service" nutzen.
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

export default VerwaltungsrechtZwangsgeldandrohung;