import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage3 from "../assets/news-placeholder-3.jpg";

const ForderungsanmeldungWiderspruchEigentumsvorbehalt = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Blue Hero Section */}
      <section className="bg-[#004595] py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-white/80 mb-8">
            <span className="text-white text-sm font-medium">Rechtsgebiete</span>
            <ChevronRight className="w-4 h-4" />
            <Link 
              to="/rechtsgebiete/insolvenzrecht" 
              className="hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Insolvenzrecht
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white text-sm font-medium">
              Forderungsanmeldung, Widerspruch, Eigentumsvorbehalt
            </span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Forderungsanmeldung, Widerspruch, Eigentumsvorbehalt
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-4 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src={newsImage3}
              alt="Forderungsanmeldung, Widerspruch, Eigentumsvorbehalt"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ein wichtiger Kunde von Ihnen hat Insolvenzantrag gestellt. Viele Rechnung sind noch offen. Es wird mit einer Insolvenquote von unter einem Prozent gerechnet. Sie haben Ihr Geld schon abgeschrieben und wollen nicht noch „gutes" hinterherwerfen.
            </p>

            <p className="text-xl font-bold text-foreground mb-6">
              Dieses Verhalten kann sich gerade im Insolvenzrecht rächen!
            </p>

            <p className="mb-6">
              Zum Beispiel lässt sich durch die Vereinbarung eines Eigentumsvorbehalts die verkaufte Ware über die sog. Aussonderung zurückholen. Ihre Verluste können dadurch erheblich vermindert werden.
            </p>

            <p className="mb-8 font-semibold text-[#004595]">
              Hier kann sich kompetente anwaltliche Hilfe schnell auszahlen!
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Wir erbringen folgende Dienstleistungen für Sie:
            </h2>

            <ul className="list-disc list-inside mb-8 space-y-3">
              <li>Beratung bzgl. der „insolvenzfesten" Sicherungsrechte wie Eigentumsvorbehalt</li>
              <li>Anmeldung der Forderung im Insolvenzverfahren</li>
              <li>Rückforderung der unter Eigentumsvorbehalt stehenden Ware im Wege der sog. Aussonderung</li>
              <li>Verteidigung gegen Insolvenzanfechtungen des Insolvenzverwalters</li>
              <li>Stellung des Insolvenzantrags für den Gläubiger</li>
              <li>Widerspruch gegen angemeldete unberechtigte Forderungen anderer Gläubiger</li>
            </ul>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ForderungsanmeldungWiderspruchEigentumsvorbehalt;