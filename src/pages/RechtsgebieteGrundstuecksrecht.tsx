import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteGrundstuecksrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Grundstücksrecht"
        description="Professionelle Beratung bei Immobilienerwerb, Grundstücksverträgen und nachbarrechtlichen Konflikten. Unser Expertenteam sichert Ihre Interessen rechtlich ab und begleitet Sie erfolgreich durch komplexe Grundstücksangelegenheiten."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Grundstücksrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/be3e4c30-b54a-47ce-b256-f0c9bdf74f64.png" 
                alt="Anwalt für Grundstücksrecht" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ihr strategischer Partner für Grundstücks- und Immobilienrecht
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Als spezialisierte Fachanwälte für Baurecht sowie Miet- und Wohnungseigentumsrecht verstehen wir die vielschichtigen Herausforderungen des Immobilienmarktes. Unsere umfassende Expertise deckt alle Aspekte des Grundstücksrechts ab - von der Vertragsgestaltung bis zur Konfliktlösung.
              </p>
              
              <p>
                Unser ganzheitlicher Beratungsansatz umfasst sämtliche immobilienbezogenen Rechtsbereiche: Grundstückskauf und -verkauf, Nachbarschaftsrecht, Grundpfandrechte, Nießbrauch, Wohnrechte und Wegerechte. Dabei profitieren Sie von unserer langjährigen Erfahrung und unserem tiefen Verständnis für die Berliner Immobilienlandschaft.
              </p>
              
              <p>
                Als Ihr vertrauensvoller Rechtsberater stehen wir Ihnen bei allen Fragen rund um Immobilien, Wohneigentum und Nachbarschaftsangelegenheiten zur Seite - kompetent, lösungsorientiert und mit dem klaren Ziel, Ihre Rechte optimal zu schützen.
              </p>
            </div>
          </div>

          {/* A-Z Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white border-blue-100">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Grundstücksrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Entdecken Sie unser umfassendes Fachwissen im Grundstücksrecht. Wir erläutern komplexe Rechtsbegriffe verständlich und praxisnah - damit Sie fundierte Entscheidungen treffen können.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/grundstuecksrecht/a-z/" className="inline-flex items-center">
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RechtsgebieteGrundstuecksrecht;