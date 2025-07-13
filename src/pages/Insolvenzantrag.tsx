import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage4 from "../assets/news-placeholder-4.jpg";

const Insolvenzantrag = () => {
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
              Insolvenzantrag
            </span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Insolvenzantrag
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
              src={newsImage4}
              alt="Insolvenzantrag"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Insolvenz als Weg aus der Krise
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Wir prüfen Ihre Situation und beraten Sie umfassend dahingehend, inwiefern eine Insolvenz sinnvoll ist oder vermieden werden kann.
            </p>

            <p className="mb-6">
              Dabei zeigen wir Ihnen Möglichkeiten auf, wie Sie das Insolvenzverfahren für einen Neuanfang nutzen können, um:
            </p>

            <ul className="list-disc list-inside mb-8 space-y-3">
              <li>Ihre Firma zu sanieren</li>
              <li>Ihr Privatvermögen zu sichern;</li>
              <li>strafrechtliche Verfahren gegen Sie zu vermeiden</li>
              <li>zivilrechtliche Haftungsprozesse gegen Sie erst gar nicht entstehen zu lassen</li>
              <li>weiterhin aktiv im Geschäftsleben tätig zu bleiben</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Heß & Partner – Ihr kompetenter Ansprechpartner bei Fragen zum Insolvenzrecht
            </h2>

            <p className="mb-6">
              In allen insolvenzrechtlichen Fragen sind wir gerne mit unserem Team Insolvenzrecht kompetent an Ihrer Seite.
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

export default Insolvenzantrag;