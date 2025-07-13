import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StandardHero from "@/components/StandardHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Kai Henrik Heß",
      areas: ["Insolvenzrecht", "Steuerrecht"],
      image: "/lovable-uploads/8a903cc8-6180-44ca-aa29-51d0c215b56d.png"
    },
    {
      id: 2,
      name: "Arnold Bernstein",
      areas: ["Grundstücksrecht", "Kaufrecht"],
      image: "/lovable-uploads/1baa43dd-bffa-494b-ae03-8e8c2abfb724.png"
    },
    {
      id: 3,
      name: "Heike Burgfeld",
      areas: ["Maklerrecht", "Sozialrecht"],
      image: "/lovable-uploads/46aec5ad-fbe3-406d-b9d1-4155a55ef8b1.png"
    },
    {
      id: 4,
      name: "Heinrich Falkenberg",
      areas: ["Vertragsrecht", "Verwaltungsrecht"],
      image: "/lovable-uploads/6b7dabf1-de18-49fa-9cab-947e0f3c88aa.png"
    },
    {
      id: 5,
      name: "Werner von Breidenbach",
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
        description="Lernen Sie unser erfahrenes Team von Rechtsanwälten und Experten kennen, die sich für Ihre rechtlichen Angelegenheiten einsetzen."
        breadcrumbs={breadcrumbs}
      />

      <main className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Team Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Expertise und Erfahrung für Ihren Erfolg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unser Team vereint jahrzehntelange Erfahrung und spezialisierte Kenntnisse in verschiedenen Rechtsgebieten. 
              Wir stehen Ihnen mit Kompetenz und Engagement zur Seite.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Porträt von ${member.name}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {member.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-medium">Spezialisierung:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.areas.map((area, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                        >
                          {area}
                        </span>
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
                Verstärken Sie unser Team
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Sind Sie auf der Suche nach einer neuen beruflichen Herausforderung? 
                Wir freuen uns auf engagierte und qualifizierte Bewerber, die unser Team bereichern möchten.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/stellenangebote" className="inline-flex items-center">
                  Aktuelle Stellenangebote
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