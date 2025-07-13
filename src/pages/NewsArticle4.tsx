import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage4 from "../assets/news-placeholder-4.jpg";

const NewsArticle4 = () => {
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
              Datenübertragung bedeutet Kontrollverlust
            </span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Datenübertragung bedeutet Kontrollverlust
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
              alt="Datenübertragung bedeutet Kontrollverlust"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Erfolg vor dem Bundesarbeitsgericht: Mitarbeiter wehrt sich gegen Datenübertragung in die USA
            </h2>

            <p className="mb-8">
              Hintergrund der Entscheidung des Bundesarbeitsgerichts (BAG) war, dass sich ein Mitarbeiter gegen die Datenübertragung seiner persönlichen Daten auf einen Server in den USA durch seine Arbeitgeberin wehrte. In letzter Instanz hat er nunmehr gewonnen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              DS-GVO und Schadensersatz: Rechtslage bei Datenübertragung auf amerikanische Server
            </h2>

            <p className="mb-6">
              Das Bundesarbeitsgericht urteilte am Donnerstag, dass Beschäftigte unter bestimmten Umständen gemäß der Datenschutz-Grundverordnung (DS-GVO) Schadensersatz verlangen können, wenn Arbeitgeber ihre personenbezogenen Daten mit einem Personalverwaltungssystem auf einen amerikanischen Cloud-Server hochladen.
            </p>

            <p className="mb-8">
              Das Gericht erkannte in diesem Fall einen immateriellen Schaden durch den Kontrollverlust über die personenbezogenen Daten und sprach dem klagenden Mitarbeiter 200 Euro Schadensersatz plus Zinsen zu (BAG, Urteil vom 08.05.2025 – 8 AZR 209/21).
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Cloudbasierte Personalverwaltung
            </h2>

            <p className="mb-6">
              Die Arbeitgeberin entschied im Jahr 2017, das cloudbasierte System „Workday" für die Personalverwaltung einzuführen und SAP abzulösen. Workdays Server befinden sich in den USA. Vor dem Einsatz solcher Programme ist es notwendig, mehrphasige Systemtests durchzuführen, um das IT-System zu überprüfen, Fehlerquellen zu identifizieren und zu beheben.
            </p>

            <p className="mb-8">
              Während solcher Testphasen ist es oft erforderlich, nicht nur fiktive Daten zu verwenden. Um das System realistisch zu testen, empfiehlt es sich, echte Mitarbeiterdaten zu nutzen, um Übertragungsfehler von SAP nach Workday zu vermeiden.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Zusätzliche Datenübertragung ohne Genehmigung / Einwilligung
            </h2>

            <p className="mb-6">
              Da die Einführung eines solchen IT-Systems die Zustimmung des Betriebsrats und gegebenenfalls der einzelnen Mitarbeiter bedarf, schloss das Unternehmen eine sogenannte „Duldungs-Betriebsvereinbarung über die Einführung von Workday" ab, die eine vorläufige Inbetriebnahme zu Testzwecken genehmigte.
            </p>

            <p className="mb-6">
              Es wurde vereinbart, dass bestimmte personenbezogene Echtdaten wie Personalnummer, Name, Telefonnummer und geschäftliche E-Mail-Adresse an die Konzernobergesellschaft in den USA übermittelt werden dürfen.
            </p>

            <p className="mb-8">
              Im vorliegenden Fall hat die Beklagte jedoch nicht nur diese Daten übermittelt, sondern auch zusätzliche Informationen wie Gehalt, private Wohnanschrift, Geburtsdatum, Familienstand, Sozialversicherungsnummer und Steuer-ID.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Urteil des Bundesarbeitsgerichts: Kontrollverlust über Daten als immaterieller Schaden
            </h2>

            <p className="mb-6">
              Der Kläger forderte daraufhin von dem Unternehmen eine Entschädigung in Höhe von 3.000 Euro nach der Datenschutz-Grundverordnung. Er argumentierte, dass die Verarbeitung zusätzlicher, nicht in der Betriebsvereinbarung geregelter Daten datenschutzrechtlich nicht gestattet gewesen sei.
            </p>

            <p className="mb-8">
              Die Vorinstanzen hatten die Klage abgewiesen, da sie der Meinung waren, dass bloße Befürchtungen über unbefugten Zugriff keinen ersatzfähigen Schaden darstellen. Das Bundesarbeitsgericht sah dies jedoch anders und betonte, dass der Schaden bereits im Kontrollverlust über die Daten liege. Da die ungenehmigte Datenübertragung unnötig war, lag ein Verstoß gegen die Datenschutz-Grundverordnung vor, der den Schadensersatzanspruch rechtfertigte.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Kleine Entschädigungen trotz DS-GVO-Verstoß: EuGH-Rechtsprechung und ihre Auswirkungen
            </h2>

            <p className="mb-8">
              Mit dem Urteil über 200 Euro blieb das Bundesarbeitsgericht deutlich hinter der Forderung des Klägers von 3.000 Euro zurück. Dies steht im Einklang mit der jüngeren Rechtsprechung des Europäischen Gerichtshofs, der entschieden hat, dass der Schadensersatzanspruch nach Artikel 82 der Datenschutz-Grundverordnung keine abschreckende oder strafende Funktion erfüllt (Az. C-687/21).
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Wir helfen weiter!
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#004595] p-6 mt-8">
              <p>
                Sollten auch Sie von einer unbefugten Datenübertragung betroffen sein, können Sie sich direkt, unkompliziert und vertrauensvoll an uns wenden. Wir sorgen dafür, dass Ihre Rechte gewahrt und durchgesetzt werden.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle4;