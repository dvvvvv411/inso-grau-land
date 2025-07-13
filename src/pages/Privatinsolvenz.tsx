import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage5 from "../assets/news-placeholder-5.jpg";

const Privatinsolvenz = () => {
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
              Privatinsolvenz
            </span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Privatinsolvenz
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
              src={newsImage5}
              alt="Privatinsolvenz"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Eine Privatinsolvenz gliedert sich in folgende Verfahrensabschnitte:
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-6">
              Verfahrensabschnitte
            </h2>

            <div className="mb-6">
              <p className="mb-4">
                <strong>außergerichtliche Einigung</strong>, sollte diese scheitern, folgt eine
              </p>

              <p className="mb-4">
                <strong>gerichtliche Einigung</strong>: Der Antrag auf Eröffnung des Insolvenzverfahrens ist schriftlich zu stellen. Anders als beim außergerichtlichen Einigungsversuch, bei dem alle zustimmen müssen, reicht bei der möglichen gerichtlichen Einigung eine Zustimmung der einfachen Mehrheit der Gläubiger.
              </p>

              <p className="mb-6">
                Scheitert auch der gerichtliche Einigungsversuch, folgt das so genannte <strong>vereinfachte Insolvenzverfahren</strong>: Ein Treuhänder verwertet das pfändbare Vermögen und verteilt dies ggf. an die Gläubiger.
              </p>

              <p className="mb-8">
                Nach sechs Jahren werden dem Schuldner dann die Restschulden erlassen.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Heß & Partner – Ihr kompetenter Ansprechpartner bei Fragen zur Privatinsolvenz
            </h2>

            <p className="mb-6">
              Sollten Sie Fragen zu einer Privatinsolvenz haben, können Sie sich jederzeit vertrauensvoll an uns wenden. Wir beraten Sie gerne mit unserem Team Insolvenzrecht bei allen insolvenzrechtlichen Themen.
            </p>

            <p className="mb-6">
              Über ein Pauschalhonorar oder ein Stundenhonorar wird individuell mit Ihnen und abhängig von der rechtlichen Fragestellung, der Schwierigkeit und dem Umfang Ihrer Angelegenheit in einem gemeinsamen Beratungsgespräch entschieden.
            </p>

            <p className="mb-8">
              Als mittelständische Kanzlei mit mehreren Niederlassungen bieten wir genügend Ressourcen, um Ihren Fall jederzeit umfassend betreuen zu können. Möchten Sie uns direkt kontaktieren, um einen Termin zu vereinbaren oder uns sonst eine Frage zu stellen, freuen wir uns auf Ihre Kontaktaufnahme. Vereinbaren Sie für Ihr Anliegen einfach ein Gespräch, das dank unserer technischen Ausstattung auch telefonisch oder online durchgeführt werden kann. Darüber hinaus können Sie auch gerne unseren kostenlosen „Rückruf-Service" nutzen.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Privatinsolvenz;