import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import StandardHero from "../components/StandardHero";

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Header />
      
      <StandardHero
        title="Über uns"
        description="Im Jahr 2020 eröffnete die Anwaltskanzlei Heß & Partner in Berlin Mitte. Die Idee hinter unserer Kanzleigründung: auch in der dynamischen Hauptstadt Berlin besteht Bedarf an spezialisierter Rechtsberatung mit persönlichem Kontakt."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Über uns" }
        ]}
      />
      
      {/* Section 1: Spezialisierte Beratung mit regionalen Wurzeln - Content */}
      <div className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Spezialisierte Beratung im Herzen Berlins
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fundiertes anwaltliches Wissen auf unterschiedlichen Rechtsgebieten direkt in Berlin Mitte - persönlich, kompetent und mit dem Verständnis für die Besonderheiten der Hauptstadt!
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Gray Background */}
      <div className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="text-foreground text-lg leading-relaxed space-y-6 max-w-5xl mx-auto">
            <p>
              Dieses Konzept hat sich von Beginn an bewährt. Innerhalb von fünf Jahren sind wir zu einem kompetenten Team von fünf spezialisierten Anwälten gewachsen.
            </p>
            <p>
              Heute gehören fünf Rechtsanwältinnen und Rechtsanwälte zu unserer Kanzlei, viele davon mit Fachanwaltstitel.
              Dazu kommen in der Steuerabteilung erfahrene Steuerberater und spezialisierte Fachangestellte.
              Dank unserer Bandbreite an Fachkompetenz betreuen wir fast jedes rechtliche oder steuerliche Anliegen, mit dem Sie konfrontiert sind.
              Unsere Kanzlei bearbeitet eine Vielzahl von Mandaten im Jahr.
              Sie finden uns zentral in Berlin Mitte in der Marienstraße 19/20.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-6">
              Anwälte und Steuerberater aus Überzeugung
            </h3>
            
            <p>
              „Nur wer Anwalt werden will, wird ein guter Anwalt." Diese alte Weisheit unter Jura-Professoren bringt es auf den Punkt: Nur wer seinen Beruf aus Leidenschaft betreibt, ist wirklich gut darin.
            </p>
            
            <p>
              Bei Heß & Partner arbeiten „Überzeugungstäter": Wir lieben unsere Arbeit und identifizieren uns mit der Philosophie der Kanzlei. Wir haben uns bewusst und gerne für diese Kanzlei entschieden, auch wenn die Abschlussnoten den Weg zu einer Großkanzlei, zur Staatsanwaltschaft oder ins Richteramt ermöglicht hätten.
            </p>
            
            <p>
              Diese Überzeugung zeigt sich in unserem Engagement für die Mandanten, im juristischen Qualitätsniveau und unserem hohen Anspruch an die eigene Arbeit. Das sind die Werte, die Heß & Partner in der alltäglichen Arbeit umsetzt.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Eine Kanzlei auf aktuellem Stand - Blue Background */}
      <div className="py-20" style={{ backgroundColor: '#004595' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center leading-tight">
              Eine Kanzlei auf aktuellem Stand
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Heß & Partner hat keine Angst vor Neuem. Unsere Kanzlei nutzt moderne Technologien und Arbeitsweisen, um für unsere Mandanten optimale Ergebnisse zu erzielen. Als moderne Berliner Kanzlei setzen wir von Anfang an auf innovative Ansätze.
            </p>
            <br />
            <p className="text-xl text-white/90 leading-relaxed">
              Wir haben die Digitalisierung der Kanzlei-Abläufe von Beginn an konsequent umgesetzt. Unsere zentrale Wissensdatenbank ermöglicht es uns, schnell und effizient auf relevante Informationen zuzugreifen. Wir arbeiten weitgehend papierlos und nutzen moderne Kommunikationsmittel wie Video-Meetings selbstverständlich. In Berlin vernetzt, flexibel erreichbar und hocheffizient arbeitend - das ist unser Ansatz der modernen Mandantenbetreuung.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Unser Alleinstellungsmerkmal - Gray Background */}
      <div className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center leading-tight">
              Unser Alleinstellungsmerkmal: die Summe aus dem, was Heß & Partner ausmacht
            </h2>
            
            <div className="space-y-6">
              {[
                "Unsere Kanzlei bietet Ihnen kompetente, qualifizierte Unterstützung zu Ihren rechtlichen Anliegen unabhängig vom Rechtsgebiet, dazu auch Steuerberatung.",
                "Unsere spezialisierte Rechtsberatung muss den Qualitätsvergleich mit großen Kanzleien nicht scheuen.",
                "Ihnen steht unser gesamtes Team zur Verfügung. Dank Vernetzung und moderner Technik wird der richtige Anwalt oder Steuerberater für Ihren Fall hinzugezogen.",
                "Die Beratung bei Heß & Partner ist nie akademisch oder abgehoben. Wir sind mitten in Berlin verwurzelt, Menschen zum Anfassen, die im Leben stehen und die pragmatische Perspektive unserer Mandanten teilen.",
                "Alle Mitglieder unseres Kanzleiteams – Rechtsanwälte, Steuerberater und Fachangestellte – sind aus Überzeugung und mit vollem Einsatz für Sie da. Wir lieben, was wir tun. Als Mandant sehen Sie das am Erfolg unserer Arbeit."
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#004595] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UeberUns;