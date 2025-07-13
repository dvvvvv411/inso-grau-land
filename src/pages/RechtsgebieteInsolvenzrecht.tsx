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
        description="In den letzten Jahren ist die Zahl der Insolvenzen dramatisch gewachsen. Auch viele Privatpersonen sind von der Insolvenz betroffen."
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
            <img 
              src="/lovable-uploads/15349153-a75f-48a5-a7a1-3060dddde8cb.png"
              alt="Insolvenzrecht Team"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Das Insolvenzrecht bearbeiten wir aus vielen Blickwinkeln. Wir betreuen ebenso
            </p>

            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>die typische Interessenlage der Gläubiger insolventer Unternehmen, die ihren Verlust möglichst begrenzen wollen. Nicht selten geht ein Inkassomandat in den Bereich der Insolvenz über</li>
              <li>Geschäftsführer von überschuldeten und/oder von Zahlungsunfähigkeit bedrohten Unternehmen, die geschützt werden möchten vor strafbaren Fehlern oder auch der ggf. drohenden Durchgriffshaftung.</li>
            </ul>

            <p className="mb-6">
              Der Schwerpunkt unserer Tätigkeit im Insolvenzrecht liegt allerdings darin, Firmen und Personen zu unterstützen, deren Forderungen durch die Insolvenz von Geschäftspartnern bedroht sind. Wir unterstützen unsere Mandanten zunächst dabei ihr Forderungsmanagement so aufzubauen, dass der Ausfall von Forderungen möglichst gering ausfällt. Sollte es dennoch nötig sein, melden wir Ihre Forderungen beim Insolvenzverfahren an und machen Aussonderungsrechte wie z.B. Eigentumsvorbehalt geltend.
            </p>

            <p className="mb-8">
              Wir unterstützen Sie auch, wenn der Insolvenzverwalter bereits an Sie gezahlte Beträge zurück fordert. Soweit Ansatzpunkte dafür bestehen, dass der Geschäftspartner eigentlich hätte absehen können, dass er nicht mehr bezahlen kann, prüfen wir auch ob eine Forderung aus vorsätzlicher unerlaubter Handlung vorliegt, die auch nach einer eventuellen Restschuldbefreiung weiterbesteht.
            </p>

            {/* Insolvenzrecht von A-Z Card */}
            <div className="mt-12">
              <Card className="bg-gradient-to-br from-[#004595] to-[#0056b3] text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Insolvenzrecht von A-Z</CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Insolvenzrecht mit verständlicher Sprache.
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