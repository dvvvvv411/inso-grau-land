import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage7 from "../assets/news-placeholder-7.jpg";

const NewsArticle7 = () => {
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
              eCommerce und Barrierefreiheit
            </span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              eCommerce und Barrierefreiheit
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
              src={newsImage7}
              alt="eCommerce und Barrierefreiheit"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Pflicht zur Barrierefreiheit von Webseiten
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="font-semibold">
                <strong>Wichtige Termine:</strong> Am 28.06.2025 wird das Barrierefreiheitsstärkungsgesetz (BFSG) in Kraft treten. Das BFSG ist an private Unternehmen adressiert, weshalb auch unternehmenseigene Homepages, welche auf einen Vertragsschluss mit einem Verbraucher hinwirken, erfasst sein können. Vereinzelt bestehen Übergangsbestimmungen, nach denen die Barrierefreiheitsanforderungen erst zum 28.6.2030 erfüllt werden müssen.
              </p>
            </div>

            <p className="mb-6">
              Das Barrierefreiheitsstärkungsgesetz gilt im B2C-Bereich. Es regelt die Barrierefreiheit von Produkten und Dienstleistungen, die von Verbrauchern genutzt werden. Dienstleistungen die ausschließlich im B2B-Sektor angeboten werden, sind nicht vom BFSG betroffen.
            </p>

            <p className="mb-8">
              Besteht aber für Verbraucher nur die Möglichkeit, die Dienstleistung in Anspruch zu nehmen, handelt es sich um eine Dienstleistung im elektronischen Geschäftsverkehr gegenüber Verbrauchern und das BFSG findet Anwendung. Wer das ausschließen möchte, sollte deutlich machen, dass Verträge nur mit Unternehmern geschlossen werden und auch eine gewisse Vorsorge dafür treffen, dass Privatkunden nicht bestellen können.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Weitgehende Anforderungen an Betreiber von Online-Shops und Webseiten
            </h2>

            <p className="mb-6">
              Der Online-Verkauf jeglicher Produkte oder Dienstleistungen fällt als „Dienstleistung im elektronischen Geschäftsverkehr" unter das BFSG.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#004595] p-6 mb-8">
              <p className="italic">
                „Dienstleistungen im elektronischen Geschäftsverkehr" sind Dienstleistungen der Telemedien, die über Webseiten und über Anwendungen auf Mobilgeräten angeboten werden und elektronisch und auf individuelle Anfrage eines Verbrauchers im Hinblick auf den Abschluss eines Verbrauchervertrags erbracht werden.
              </p>
            </div>

            <p className="mb-8">
              Zwar fallen Webseiten nicht pauschal und ausnahmslos unter das BFSG. Sobald jedoch eine Webseite Elemente enthält, die einen Schritt zum Abschluss eines Verbrauchervertrages darstellen, liegt eine Dienstleistung im elektronischen Geschäftsverkehr im Sinne des BFSG vor.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Ausnahmen: Kleinstunternehmer
            </h2>

            <p className="mb-6">
              Das BFSG sieht auch Ausnahmen vor, insbesondere für Kleinstunternehmer die Dienstleistungen anbieten. Als Kleinstunternehmen gelten Unternehmen, die weniger als 10 Mitarbeiter beschäftigen und deren Jahresumsatz oder Jahresbilanzsumme 2 Millionen Euro nicht überschreitet.
            </p>

            <p className="mb-6">
              Diese Unternehmen sind von den Anforderungen des BFSG ausgenommen, sofern die Umsetzung der Barrierefreiheit für sie eine unverhältnismäßige Belastung darstellt. Es ist jedoch empfehlenswert, dass auch Kleinstunternehmer nach Möglichkeit Barrierefreiheitsmaßnahmen umsetzen, um eine breitere Zielgruppe zu erreichen und soziale Verantwortung zu zeigen.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p>
                <strong>Aber Achtung:</strong> Für Kleinstunternehmen, das Produkte aus der Liste anbietet gilt das Gesetz trotzdem (§ 3 Abs. 3 BFSG).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Möglichkeit einer Online-Terminbuchung ausreichend
            </h2>

            <p className="mb-6">
              Für die Anwendbarkeit des BFSG genügt schon die Zurverfügungstellung einer Online-Terminbuchungsoption auf einer Website, wie aus den „Leitlinien für die Anwendung des Barrierefreiheitsstärkungsgesetzes" des Bundesministeriums für Arbeit und Soziales hervorgeht.
            </p>

            <p className="mb-6">
              Denn die Zurverfügungstellung einer solchen Terminbuchungsmöglichkeit geschieht bereits im Hinblick auf den (späteren) Abschluss eines Verbrauchervertrags. Dienstleistungen im elektronischen Verkehr können auch andere Formen der Kontaktaufnahme oder Interaktion auf einer Webseite darstellen.
            </p>

            <p className="mb-8">
              Aufgrund des frühen Anknüpfungspunkts gilt: Nur reine, „passive" Präsentationsseiten oder Blogs sind vom Gesetz ausgenommen. Sobald eine Webseite jedoch direkt den Abschluss von Verbraucherverträgen oder zumindest Vorbereitungshandlungen für einen solchen Vertragsschluss mit einem Verbraucher ermöglicht, wird die Pflicht zur barrierefreien Gestaltung der Webseite ausgelöst.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Auswirkungen für Webseitenbetreiber
            </h2>

            <p className="mb-6">
              Fällt die Webseite aufgrund mindestens eines darin enthaltenen und barrierefrei zu gestaltenden Elementes unter das BFSG, so muss die gesamte Webseite barrierefrei gestaltet werden.
            </p>

            <p className="mb-8">
              E-Commerce-Händler müssen aber nicht nur die eigene Website barrierefrei gestalten, sondern auch in ihren Allgemeinen Geschäftsbedingungen einen Hinweis auf die Barrierefreiheitsanforderungen aufnehmen sowie Produkte, die unter § 1 Abs. 2 BFSG fallen und barrierefrei sein müssen, erst auf dem Markt bereitstellen, wenn:
            </p>

            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>das Produkt mit der CE-Kennzeichnung versehen ist</li>
              <li>dem Produkt eine leicht verständliche deutschsprachige Gebrauchsanleitung und Sicherheitsinformationen beigefügt sind</li>
              <li>der Hersteller seine Kennzeichnungspflichten erfüllt hat und</li>
              <li>Pflichtangaben zum Einführer angebracht wurden.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Hauptkriterien einer barrierefreien Webseite
            </h2>

            <p className="mb-6">
              Nach den vier Hauptkriterien muss eine barrierefreie Webseite bzw. App im elektronischen Geschäftsverkehr die folgenden Anforderungen erfüllen:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-800">1. Wahrnehmbar</h3>
                <p className="text-sm text-green-700">
                  Inhalte müssen für jeden Nutzer wahrnehmbar sein. Zentral ist hier das Zwei-Kanal-Prinzip, wonach Informationen über zwei unterschiedliche Sinneskanäle wahrgenommen werden können. Das bedeutet z.B. das alles, was sehend erfasst werden kann, auch hörbar sein sollte, z.B. in dem man ein Bild durch einen Beschreibungstext vorlesbar gestaltet.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">2. Bedienbar</h3>
                <p className="text-sm text-blue-700">
                  Die Interaktionen auf der Webseite müssen auch für Menschen mit Behinderung ausführbar sein (z.B. logischstringente Funktionsweise von Schaltflächen; Bedingung der Webseite nur mithilfe der Tastatur).
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-purple-800">3. Verständlich</h3>
                <p className="text-sm text-purple-700">
                  Informationen und Bedienkonzepte müssen klar und nachvollziehbar sein (z.B. Darstellung von Informationen in einfacher Sprache; Erklärung von Fachbegriffen).
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-orange-800">4. Robust</h3>
                <p className="text-sm text-orange-700">
                  Inhalte müssen auch mit unterstützenden Technologien funktionieren (z.B. maschinelle Lesbarkeit für Screenreader).
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#004595] p-6 mt-8">
              <p>
                <strong>Fazit:</strong> Es ist daher lohnenswert, den eigenen Webauftritt bis zum Inkrafttreten des BFSG kritisch zu überprüfen und gegebenenfalls frühzeitig erforderliche Maßnahmen in die Wege zu leiten.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mt-8">
              <p>
                <strong>Wir helfen weiter!</strong> Haben Sie Fragen zur Barrierefreiheit Ihrer Website oder benötigen Unterstützung bei der Umsetzung der BFSG-Anforderungen? Kontaktieren Sie uns für eine rechtliche Beratung und praktische Hilfestellung.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle7;