import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Header */}
      <Header />
      
      {/* Section 1: Spezialisierte Beratung mit regionalen Wurzeln - Blue Background */}
      <div className="py-20" style={{ backgroundColor: '#004595' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Spezialisierte Beratung mit regionalen Wurzeln
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Mit drei Rechtsanwälten eröffnete im Jahr 2000 die Anwaltskanzlei Steinbock & Partner in Randersacker bei Würzburg. Die Idee hinter unserer Kanzleigründung: auch in kleineren und mittleren Städten und auf dem Land besteht Bedarf an spezialisierter Rechtsberatung. Wer fundiertes anwaltliches Wissen auf unterschiedlichen Rechtsgebieten benötigt, soll dafür nicht nach Berlin, Frankfurt oder Nürnberg fahren müssen!
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Gray Background */}
      <div className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="text-foreground text-lg leading-relaxed space-y-6 max-w-5xl mx-auto">
            <p>
              Dieses Konzept hat sich von Beginn an bewährt. Schon ein Jahr später waren wir auf fünf Anwälte gewachsen.
            </p>
            <p>
              Heute gehören siebzehn Rechtsanwältinnen und Rechtsanwälte zu unserer Kanzlei, viele davon mit Fachanwaltstitel.
              Dazu kommen in der Steuerabteilung unter der Leitung des Steuerberaters Sebastian Egidy eine Steuerberaterin und ein weiterer Steuerberater.
              Dank unserer Bandbreite an Fachkompetenz betreuen wir fast jedes rechtliche oder steuerliche Anliegen, mit dem Sie konfrontiert sind.
              Unsere Kanzlei bearbeitet weit über 3.000 Mandate im Jahr.
              Sie finden uns an neun Standorten: fünf Mal in und um Würzburg, außerdem in Bad Kissingen, Bamberg, Gotha und in München.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-6">
              Anwälte und Steuerberater aus Überzeugung
            </h3>
            
            <p>
              „Nur wer Anwalt werden will, wird ein guter Anwalt." Diese alte Weisheit unter Jura-Professoren bringt es auf den Punkt: Nur wer seinen Beruf aus Leidenschaft betreibt, ist wirklich gut darin.
            </p>
            
            <p>
              Bei Steinbock & Partner arbeiten „Überzeugungstäter": Wir lieben unsere Arbeit und identifizieren uns mit der Philosophie der Kanzlei. Wir haben uns bewusst und gerne für diese Kanzlei entschieden, auch wenn die Abschlussnoten den Weg zu einer Großkanzlei, zur Staatsanwaltschaft oder ins Richteramt ermöglicht hätten.
            </p>
            
            <p>
              Diese Überzeugung zeigt sich in unserem Engagement für die Mandanten, im juristischen Qualitätsniveau und unserem hohen Anspruch an die eigene Arbeit. Das sind die Werte, die Steinbock & Partner in der alltäglichen Arbeit umsetzt.
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
              Steinbock & Partner hat keine Angst vor Neuem. Unsere Kanzlei nutzt gern moderne Mittel, um zum Erfolg zu kommen. Die Anwälte unserer Kanzlei haben sich bereits 2003 auf verschiedene Standorte aufgeteilt, als das Berufsrecht darauf noch nicht eingestellt war.
            </p>
            <br />
            <p className="text-xl text-white/90 leading-relaxed">
              Wir haben die Digitalisierung der Kanzlei-Abläufe schon 2004 in Angriff genommen. Seit 2008 besitzen wir eine zentrale Wissensdatenbank für unsere Kanzlei, die wir mobil und von jedem Standort aus nutzen können. Inzwischen umfasst sie mehr als 11.000 Einträge. Seit 2015 arbeiten wir komplett ohne Papierakten. Video-Meetings gehörten bei uns schon vor der Pandemie zum Arbeitsalltag. Wir sind hervorragend vernetzt, ortsungebunden erreichbar und überall arbeitsfähig. Auch das ist Teil der Mandantenorientierung.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Unser Alleinstellungsmerkmal - Gray Background */}
      <div className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center leading-tight">
              Unser Alleinstellungsmerkmal: die Summe aus dem, was Steinbock & Partner ausmacht
            </h2>
            
            <div className="space-y-6">
              {[
                "Unsere Kanzlei bietet Ihnen kompetente, qualifizierte Unterstützung zu Ihren rechtlichen Anliegen unabhängig vom Rechtsgebiet, dazu auch Steuerberatung.",
                "Unsere spezialisierte Rechtsberatung muss den Qualitätsvergleich mit großen Kanzleien nicht scheuen.",
                "Ihnen steht überall unser gesamtes Team zur Verfügung. Dank Vernetzung und moderner Technik wird an jedem Standort der richtige Anwalt oder Steuerberater für Ihren Fall hinzugezogen.",
                "Die Beratung bei Steinbock & Partner ist nie akademisch oder abgehoben. Wir sind in mittelgroßen, kleinen und ganz kleinen Städten verwurzelt, Menschen zum Anfassen, die im Leben stehen und die pragmatische Perspektive unserer Mandanten teilen.",
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