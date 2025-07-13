import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage6 from "../assets/news-placeholder-6.jpg";

const NewsArticle6 = () => {
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
              Videoüberwachung am Arbeitsplatz
            </span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Videoüberwachung am Arbeitsplatz
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
              src={newsImage6}
              alt="Videoüberwachung am Arbeitsplatz"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Wichtiges zur Videoüberwachung im Überblick
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#004595] p-6 mb-8">
              <ol className="list-decimal list-inside space-y-3">
                <li><strong>Grundsätzlich ist Videoüberwachung datenschutzrechtlich zulässig</strong>, sowohl im öffentlichen als auch im nicht öffentlichen Raum.</li>
                <li><strong>Im öffentlichen Raum ist eine Kennzeichnungspflicht</strong> für die Videoüberwachung vorgeschrieben. Heimliche Überwachung ist nur im nicht öffentlichen Bereich erlaubt, wenn sie anlassbezogen und kurzfristig erfolgt.</li>
                <li><strong>Am Arbeitsplatz ist Kameraüberwachung</strong> gemäß Bundesdatenschutzgesetz (BDSG) grundsätzlich nur mit Zustimmung der Mitarbeiter erlaubt und darf keine privaten Bereiche wie Toiletten oder Umkleiden überwachen.</li>
                <li><strong>Bei der Einwilligung zur Videoüberwachung</strong> müssen die Datenschutzgrundsätze von Zweckgebundenheit, Freiwilligkeit, Informiertheit und Widerrufbarkeit beachtet werden.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Rechtliche Würdigung der Videoüberwachung am Arbeitsplatz
            </h2>

            <p className="mb-6">
              Die Frage der Zulässigkeit von Videoüberwachung am Arbeitsplatz sorgt immer wieder für kontroverse Diskussionen. Im Mittelpunkt stehen dabei die Interessen der Arbeitgeber, ihr Eigentum zu schützen, und das Recht der Arbeitnehmer auf informationelle Selbstbestimmung, dass auch das Recht am eigenen Bild umfasst.
            </p>

            <p className="mb-8">
              Im öffentlichen Raum ist die Videoüberwachung datenschutzrechtlich meist nur durch die Hinweispflicht geregelt, während am Arbeitsplatz zusätzliche Maßnahmen erforderlich sind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-[#004595]">Öffentlich zugängliche Räume</h3>
                <p className="text-sm text-muted-foreground">Kennzeichnungspflicht und erweiterte Hinweispflichten erforderlich</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-[#004595]">Nicht öffentlich zugängliche Räume</h3>
                <p className="text-sm text-muted-foreground">Zusätzliche Maßnahmen und Einverständnis der Mitarbeiter notwendig</p>
              </div>
            </div>

            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>Interessensabwägung bei der Videoüberwachung</li>
              <li>Transparenzpflichten bei der Videoüberwachung</li>
              <li>Ausgestaltung der Videoüberwachung im Konkreten</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Ausgestaltung der Videoüberwachung im Konkreten
            </h2>

            <p className="mb-6">
              Auch wenn ein berechtigter Grund für eine Videoüberwachung am Arbeitsplatz vorliegt, bedeutet das nicht, dass diese uneingeschränkt durchgeführt werden darf. Im Datenschutz gilt stets das Prinzip der Datensparsamkeit, das darauf abzielt, unnötige Datenerhebungen zu vermeiden.
            </p>

            <p className="mb-6">
              Es geht nicht nur um die Frage, ob eine Videoüberwachung stattfindet, sondern auch um das „Wie" – also die genaue Ausgestaltung der Überwachung, die für ihre Zulässigkeit entscheidend ist.
            </p>

            <p className="mb-8">
              Für die Beurteilung der Zulässigkeit einer Videoüberwachung sind vor allem die Dauer der Überwachung, der überwachte Bereich, die Sichtbarkeit der Betroffenen (z.B. durch Verpixelung, wenn es nicht um die Identität der Person geht) und die Frage, ob eine Aufzeichnung erfolgt oder lediglich ein Monitoring stattfindet, von Bedeutung.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p>
                <strong>Wichtiger Hinweis:</strong> Es ist außerdem zu beachten, dass Tonaufnahmen bei der Videoüberwachung in der Regel unzulässig sind. Im Gegensatz zu Bildaufnahmen ist es gemäß § 201 StGB grundsätzlich verboten, das nichtöffentlich gesprochene Wort aufzuzeichnen oder abzuhören, und dies kann mit einer Freiheitsstrafe von bis zu drei Jahren geahndet werden. Wenn eine Videoüberwachungskamera eine Audiofunktion besitzt, muss diese daher dauerhaft deaktiviert werden.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Einsatz von Kamera-Attrappen
            </h2>

            <p className="mb-6">
              Kamera-Attrappen verarbeiten keine personenbezogenen Daten, weshalb die Vorschriften der DSGVO und des Bundesdatenschutzgesetzes (BDSG) nicht zur Anwendung kommen.
            </p>

            <p className="mb-8">
              Den betroffenen Personen könnten jedoch zivilrechtliche Ansprüche zustehen, da der Überwachungsdruck durch eine Kamera-Attrappe in das allgemeine Persönlichkeitsrecht der Betroffenen eingreifen kann.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Speicherdauer von Videodateien
            </h2>

            <p className="mb-6">
              Die Daten der Videoüberwachung müssen gemäß Art. 5 Abs. 1 lit. e DSGVO unverzüglich gelöscht werden, sobald sie nicht mehr für die Zwecke erforderlich sind, für die sie erhoben wurden, oder wenn schutzwürdige Interessen der betroffenen Personen einer weiteren Speicherung entgegenstehen.
            </p>

            <p className="mb-6">
              Laut den Aufsichtsbehörden dürfen Videoüberwachungsdaten grundsätzlich maximal 72 Stunden gespeichert werden. Es wird empfohlen, eine Speicherdauer von zwei Tagen zu wählen{" "}
              <a 
                href="https://www.datenschutzkonferenz-online.de/media/kp/dsk_kpnr_15.pdf" 
                className="text-[#004595] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Empfehlung der Datenschutzkonferenz)
              </a>
              . Diese Empfehlung ist jedoch nicht in jedem Fall praktikabel.
            </p>

            <p className="mb-8">
              Das OVG Lüneburg (Az.: 11 LC 11413) hat beispielsweise entschieden, dass eine Speicherdauer von bis zu 10 Tagen zulässig sein kann. Für die Speicherdauer ist der Zweck der Erhebung entscheidend – sobald der Zweck entfällt, müssen die Daten unverzüglich gelöscht werden.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Rechte bei unzulässiger Videoüberwachung
            </h2>

            <p className="mb-6">
              Bei schwerwiegenden Verstößen, wie etwa einer dauerhaften heimlichen Videoüberwachung ohne nachvollziehbaren Zweck oder der unbefugten Weiternutzung von Daten, können empfindliche Bußgelder gegen die verantwortliche Stelle verhängt werden.
            </p>

            <p className="mb-6">
              Betroffene Personen können zudem aufgrund der Verletzung ihrer Persönlichkeitsrechte möglicherweise Entschädigungsansprüche geltend machen. Ein Beispiel hierfür ist ein Urteil des Hessischen Landesarbeitsgerichts (Az.: 7 Sa 1586/09), bei dem ein Arbeitgeber zur Zahlung einer Entschädigung von 7.000,00 EUR verurteilt wurde, weil er eine Mitarbeiterin dauerhaft mit einer Videokamera an ihrem Arbeitsplatz überwacht hatte.
            </p>

            <p className="mb-8">
              In besonders schweren Fällen kann es sogar zu einem Leistungsverweigerungsrecht der Mitarbeiter kommen. In solchen Fällen müssen die Mitarbeiter nicht arbeiten, können jedoch trotzdem ihren Lohn weiterhin beanspruchen.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#004595] p-6 mt-8">
              <p>
                <strong>Wir helfen weiter!</strong> Haben Sie Fragen zur Videoüberwachung am Arbeitsplatz oder sind von einer unrechtmäßigen Überwachung betroffen? Kontaktieren Sie uns für eine rechtliche Beratung zu Ihren Rechten und Möglichkeiten.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle6;