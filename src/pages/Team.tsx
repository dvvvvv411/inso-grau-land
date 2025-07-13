import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StandardHero from "@/components/StandardHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

const Team = () => {
  // Mapping für Rechtsgebiete zu URLs
  const rechtsgebietUrls: { [key: string]: string } = {
    "Insolvenzrecht": "/rechtsgebiete/insolvenzrecht",
    "Steuerrecht": "/rechtsgebiete/steuerrecht", 
    "Grundstücksrecht": "/rechtsgebiete/grundstuecksrecht",
    "Kaufrecht": "/rechtsgebiete/kaufrecht",
    "Maklerrecht": "/rechtsgebiete/maklerrecht",
    "Sozialrecht": "/rechtsgebiete/sozialrecht",
    "Vertragsrecht": "/rechtsgebiete/vertragsrecht",
    "Verwaltungsrecht": "/rechtsgebiete/verwaltungsrecht",
    "Wettbewerbsrecht": "/rechtsgebiete/wettbewerbsrecht"
  };
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Kai Henrik Heß",
      email: "k.hess@hess-anwaltskanzlei.de",
      areas: ["Insolvenzrecht", "Steuerrecht"],
      image: "/lovable-uploads/8a903cc8-6180-44ca-aa29-51d0c215b56d.png"
    },
    {
      id: 2,
      name: "Arnold Bernstein",
      email: "a.bernstein@hess-anwaltskanzlei.de",
      areas: ["Grundstücksrecht", "Kaufrecht"],
      image: "/lovable-uploads/1baa43dd-bffa-494b-ae03-8e8c2abfb724.png"
    },
    {
      id: 3,
      name: "Heike Burgfeld",
      email: "h.burgfeld@hess-anwaltskanzlei.de",
      areas: ["Maklerrecht", "Sozialrecht"],
      image: "/lovable-uploads/46aec5ad-fbe3-406d-b9d1-4155a55ef8b1.png"
    },
    {
      id: 4,
      name: "Heinrich Falkenberg",
      email: "h.falkenberg@hess-anwaltskanzlei.de",
      areas: ["Vertragsrecht", "Verwaltungsrecht"],
      image: "/lovable-uploads/6b7dabf1-de18-49fa-9cab-947e0f3c88aa.png"
    },
    {
      id: 5,
      name: "Werner von Breidenbach",
      email: "w.breidenbach@hess-anwaltskanzlei.de",
      areas: ["Wettbewerbsrecht", "Grundstücksrecht"],
      image: "/lovable-uploads/5a61c3c4-7199-4a3b-b8e7-285bdfae72b5.png"
    }
  ];

  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Team" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Unser Team"
        description="Lernen Sie unser hochqualifiziertes Expertenteam kennen - erfahrene Rechtsanwälte und Steuerberater, die sich mit voller Hingabe für Ihren Erfolg einsetzen."
        breadcrumbs={breadcrumbs}
      />

      <main className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Team Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Exzellenz durch Expertise und Leidenschaft
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unser Team vereint jahrzehntelange Berufserfahrung mit hochspezialisiertem Fachwissen in allen relevanten Rechtsgebieten. 
              Wir sind Ihr strategischer Partner für juristischen Erfolg auf höchstem Niveau.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white border-0 shadow-lg hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Porträt von ${member.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">
                      Ihr Experte für rechtlichen Erfolg
                    </p>
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 block mb-4"
                  >
                    {member.email}
                  </a>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500 font-medium">Kernkompetenzen:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.areas.map((area, areaIndex) => (
                        <Link
                          key={areaIndex}
                          to={rechtsgebietUrls[area] || "#"}
                          className="inline-block px-3 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 transform hover:scale-105 cursor-pointer hover:shadow-md"
                        >
                          {area}
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <Users className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Werden Sie Teil der Erfolgsgeschichte
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Suchen Sie eine Karriere mit Perspektive? Verstärken Sie unser Expertenteam und gestalten Sie die Zukunft 
                einer der innovativsten Kanzleien Berlins aktiv mit.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/stellenangebote" className="inline-flex items-center">
                  Karrieremöglichkeiten entdecken
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;