import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StandardHero from "../components/StandardHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import partnerTeamImage from "../assets/partner-team.png";

const RechtsgebieteInsolvenzrecht = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <StandardHero
        title="Insolvenzrecht"
        description="Strategische Beratung in Insolvenzverfahren und bei Unternehmenssanierungen. Wir schützen Ihre Forderungen, minimieren Ausfallrisiken und entwickeln maßgeschneiderte Lösungen für komplexe Insolvenzsituationen."
        breadcrumbs={[
          { label: "Rechtsgebiete" },
          { label: "Insolvenzrecht" }
        ]}
      />

      {/* Article Content */}
      <article className="py-20 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/15349153-a75f-48a5-a7a1-3060dddde8cb.png"
                alt="Insolvenzrecht Team"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unser Insolvenzrecht-Team vertritt Sie umfassend in allen Phasen von Insolvenzverfahren:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>Strategische Gläubigerberatung: Wir minimieren Forderungsausfälle und optimieren Ihre Rechtsposition in Insolvenzverfahren</li>
              <li>Geschäftsführerhaftung: Präventive Beratung und Verteidigung bei Durchgriffshaftung und strafrechtlichen Risiken in Krisensituationen</li>
            </ul>

            <p className="mb-6">
              Unser Schwerpunkt liegt in der professionellen Gläubigervertretung. Wir entwickeln präventive Forderungsmanagement-Strategien, melden Ihre Ansprüche fristgerecht an und setzen Aussonderungsrechte wie Eigentumsvorbehalte erfolgreich durch. So sichern wir Ihre wirtschaftlichen Interessen optimal ab.
            </p>

            <p className="mb-8">
              Bei Rückforderungen des Insolvenzverwalters prüfen wir alle Abwehrmöglichkeiten und entwickeln durchsetzungsstarke Strategien. Wir analysieren auch potenzielle Ansprüche aus vorsätzlich unerlaubter Handlung, die einer Restschuldbefreiung nicht unterliegen.
            </p>

            {/* Insolvenzrecht von A-Z Card */}
            <div className="mt-12">
              <Card className="bg-gradient-to-br from-[#004595] to-[#0056b3] text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Insolvenzrecht von A-Z</CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    Professionelle Einblicke in komplexe Insolvenzverfahren. Wir erklären Fachbegriffe verständlich und zeigen praxisnahe Lösungsansätze für Ihre individuelle Situation auf.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/insolvenzrecht/a-z/">
                    <Button variant="secondary" className="bg-white text-[#004595] hover:bg-white/90">
                      Mehr erfahren
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default RechtsgebieteInsolvenzrecht;