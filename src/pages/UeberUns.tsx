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
        description="Seit 2020 stehen wir für exzellente Rechtsberatung im Herzen Berlins. Erfahren Sie mehr über unsere Werte, unsere Expertise und unseren Anspruch an erstklassigen Service."
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
              Ihre Rechtsexperten im Zentrum der Hauptstadt
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Strategische Rechtsberatung auf höchstem Niveau - persönlich, effizient und mit dem tiefen Verständnis für die Anforderungen moderner Mandanten in Berlin und darüber hinaus.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Gray Background */}
      <div className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="text-foreground text-lg leading-relaxed space-y-6 max-w-5xl mx-auto">
            <p>
              Was 2020 als Vision begann, ist heute Realität: Heß & Partner hat sich zu einer führenden Kanzlei mit hochspezialisierten Rechtsexperten entwickelt, die deutschlandweit Mandanten betreuen.
            </p>
            <p>
              Unser Team vereint fünf erfahrene Rechtsanwältinnen und Rechtsanwälte mit ausgewiesener Fachkompetenz und Fachanwaltstitel.
              Ergänzt wird diese Expertise durch unsere erfahrenen Steuerberater und spezialisierten Fachangestellten.
              Diese Vielfalt an Fachkenntnissen ermöglicht es uns, nahezu jede rechtliche oder steuerliche Herausforderung erfolgreich zu meistern.
              Mit hunderten erfolgreich abgeschlossenen Mandaten pro Jahr setzen wir neue Maßstäbe in der Kanzleiarbeit.
              Sie finden uns zentral und gut erreichbar in Berlin Mitte, Marienstraße 19/20.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground pt-6">
              Leidenschaft für Recht und Excellence
            </h3>
            
            <p>
              „Exzellenz entsteht nur dort, wo Leidenschaft auf Kompetenz trifft." Diese Philosophie prägt jeden Tag unserer Arbeit bei Heß & Partner.
            </p>
            
            <p>
              Unser Team besteht aus überzeugten Juristen, die bewusst den Weg der spezialisierten Beratung gewählt haben. Obwohl unsere Qualifikationen auch andere Karrierewege ermöglicht hätten, haben wir uns für Heß & Partner entschieden - weil hier unsere Vision von erstklassiger Rechtsberatung Realität wird.
            </p>
            
            <p>
              Diese innere Überzeugung spiegelt sich in unserem unermüdlichen Einsatz für Mandanten wider, in der juristischen Präzision unserer Arbeit und in unserem Anspruch, stets die bestmöglichen Ergebnisse zu erzielen. Das sind die Werte, die Heß & Partner täglich zum Leben erweckt.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Eine Kanzlei auf aktuellem Stand - Blue Background */}
      <div className="py-20" style={{ backgroundColor: '#004595' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center leading-tight">
              Innovation trifft auf bewährte Expertise
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Heß & Partner verbindet traditionelle Rechtsexpertise mit modernster Technologie. Unsere digitale Kanzleiführung ermöglicht es uns, effizienter zu arbeiten und bessere Ergebnisse für unsere Mandanten zu erzielen.
            </p>
            <br />
            <p className="text-xl text-white/90 leading-relaxed">
              Von Beginn an haben wir auf vollständige Digitalisierung gesetzt: intelligente Wissensdatenbanken, papierlose Prozesse und modernste Kommunikationstechnologie. Diese Infrastruktur ermöglicht uns flexible Arbeitsmodelle und schnelle Reaktionszeiten. So verbinden wir die Vorteile einer Berliner Präsenzkanzlei mit der Effizienz digitaler Arbeitsweisen - für eine Mandantenbetreuung, die neue Standards setzt.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Unser Alleinstellungsmerkmal - Gray Background */}
      <div className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center leading-tight">
              Was Heß & Partner einzigartig macht
            </h2>
            
            <div className="space-y-6">
              {[
                "Umfassende Expertise: Wir bieten Ihnen erstklassige rechtliche und steuerliche Beratung auf höchstem Niveau - unabhängig von der Komplexität Ihres Anliegens.",
                "Qualität ohne Kompromisse: Unsere spezialisierte Beratung steht den renommiertesten Großkanzleien in nichts nach - mit dem Vorteil persönlicher Betreuung.",
                "Synergien nutzen: Unser vernetztes Expertenteam stellt sicher, dass für Ihren Fall immer der optimale Spezialist zur Verfügung steht - effizient und zielgerichtet.",
                "Praxisnahe Lösungen: Unsere Beratung ist niemals abstrakt. Als Berliner sind wir fest verwurzelt, verstehen reale Herausforderungen und entwickeln pragmatische Lösungen mit echtem Mehrwert.",
                "Leidenschaft für Erfolg: Jedes Mitglied unseres Teams - von Rechtsanwälten über Steuerberater bis hin zu Fachangestellten - brennt für erstklassige Ergebnisse. Diese Hingabe sehen Sie an unserem Erfolg für Sie."
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