import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage2 from "../assets/news-placeholder-2.jpg";

const NewsArticle2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Blue Hero Section */}
      <section className="bg-[#004595] py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-white/80 mb-8">
            <Link 
              to="/news" 
              className="hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              News
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white text-sm font-medium">
              Meldefristen beim Datenschutzvorfall
            </span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Meldefristen beim Datenschutzvorfall
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
              src={newsImage2}
              alt="Meldefristen beim Datenschutzvorfall"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Wann muss eine Datenpanne der Aufsichtsbehörde gemeldet werden?
            </h2>

            <p className="mb-6">
              Nicht selten kommt es vor, dass Daten durch Dritte abgegriffen oder anderweitig abhandengekommen sind. Aus datenschutzrechtlicher Sicht stellt sich dann immer die Frage, ob diese Datenpanne gegenüber der Aufsichtsbehörde angezeigt werden muss.
            </p>

            <p className="mb-8">
              Eine Meldepflicht gegenüber der Datenschutz-Aufsichtsbehörde nach Art. 33 DSGVO besteht immer dann, wenn von einem rechtlich relevanten Risiko ausgegangen werden kann. Lediglich bei einem geringen, zu vernachlässigen Risiko kann eine Meldung unterbleiben.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Risikostufen Datenpanne / Datenleck / Datenschutzvorfall
            </h2>

            <p className="mb-6">
              In der Regel wird zwischen drei Risikostufen unterschieden:
            </p>

            <ol className="list-decimal list-inside mb-8 space-y-4">
              <li>
                <strong>Tritt voraussichtlich kein Risiko auf</strong> – in der Sache handelt es sich um ein vernachlässigbar geringes (datenschutzrechtlich nicht relevantes) Risiko – unterbleiben sowohl die Meldung einer Datenschutzverletzung an die Datenschutz-Aufsichtsbehörde wie auch die Benachrichtigung der betroffenen Personen.
              </li>
              <li>
                <strong>Entsteht voraussichtlich ein (datenschutzrechtlich relevantes) Risiko</strong>, ist nach Art. 33 Abs. 1 DSGVO zu melden, aber nicht nach Art. 34 Abs. 1 DSGVO zu benachrichtigen.
              </li>
              <li>
                <strong>Nur wenn die Datenschutzverletzung voraussichtlich ein hohes Risiko zur Folge hat</strong>, muss eine Meldung an die Datenschutz-Aufsichtsbehörde abgegeben werden und es müssen auch die betroffenen Personen benachrichtigt werden.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Meldefrist: 72 Stunden
            </h2>

            <p className="mb-6">
              Die Meldung gegenüber der Datenschutz-Aufsichtsbehörde muss unverzüglich, jedoch spätestens innerhalb von 72 Stunden erfolgen.
            </p>

            <p className="mb-6">
              Die Meldefrist beginnt ab dem Zeitpunkt zu laufen, ab dem irgendjemand in dem Unternehmen des Verantwortlichen Kenntnis von den erheblichen Tatsachen der Datenpanne erhalten hat. Hierbei spielt es keine Rolle, ob bereits eine vollständige Ermittlung des Sachverhaltes stattgefunden hat, sondern vielmehr ist es notwendig eine vorläufige Meldung zu erstatten und gegebenenfalls die weitere Sachverhaltsaufklärungen nachzureichen.
            </p>

            <p className="mb-6">
              Festzuhalten ist jedoch, dass der Verantwortliche die 72 Stunden nicht voll ausreizen darf, sondern vielmehr unverzüglich also auch früher melden muss. Eine Verletzung der Meldefrist ist gem. Art. 83 Abs. 4 lit. a DSGO bußgeldbewehrt.
            </p>

            <p className="mb-8">
              Bei dokumentierten, außergewöhnlichen Umständen kann von dem Verantwortlichen gem. Art. 33 Abs. 1 S. 2 DSGVO dargelegt werden, aus welchen Gründen die Meldefrist nicht eingehalten werden konnte.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Wir helfen weiter!
            </h2>

            <p className="mb-6">
              Wir empfehlen Ihnen, bei Eintritt eines meldepflichtigen Ereignisses umgehend alle relevanten Informationen zu sammeln und die Meldung so schnell wie möglich, spätestens jedoch innerhalb von drei Tagen, bei der zuständigen Behörde einzureichen.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#004595] p-6 mt-8">
              <p>
                Für die Einschätzung sämtlicher datenschutzrelevanter Informationen stehen wir Ihnen unkompliziert und vertrauensvoll per E-Mail unter{" "}
                <a 
                  href="mailto:info@hess-anwaltskanzlei.de" 
                  className="text-[#004595] hover:underline font-medium"
                >
                  info@hess-anwaltskanzlei.de
                </a>
                {" "}oder telefonisch zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle2;