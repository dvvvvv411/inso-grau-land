import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";

const InsolvenzrechtAZ = () => {
  const topics = [
    { letter: "A", title: "Insolvenzanfechtung", link: "/insolvenzrecht/insolvenzanfechtung/" },
    { letter: "F", title: "Forderungsanmeldung, Widerspruch, Eigentumsvorbehalt", link: "/insolvenzrecht/forderungsanmeldung-widerspruch-eigentumsvorbehalt/" },
    { letter: "I", title: "Insolvenzantrag", link: "/insolvenzrecht/insolvenzantrag/" },
    { letter: "P", title: "Privatinsolvenz", link: "/insolvenzrecht/privatinsolvenz/" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Blue Hero Section */}
      <section className="bg-[#004595] py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-white/80 mb-8">
            <span className="text-white text-sm font-medium">Rechtsgebiete</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white text-sm font-medium">Insolvenzrecht</span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Insolvenzrecht von A-Z
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Unser Ziel ist nicht, Wikipedia zu ersetzen. Sondern wir möchten unseren Mandanten wie auch Lesern die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes kennen zu lernen. Aus diesem Grund schreiben wir auch mit möglichst wenigen Fachbegriffen, sondern bemühen uns um klare, verständliche Sprache. Eine Rechtsberatung im konkreten Einzelfall kann dies aber ebenfalls nicht ersetzen, die Erläuterungen haben insofern auch nicht den Anspruch, jeden seltenen Sonderfall mit abzudecken.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <Link 
                key={index}
                to={topic.link}
                className="block border border-gray-200 rounded-lg p-6 hover:border-[#004595] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <Badge variant="default" className="w-12 h-12 rounded-xl text-lg font-bold flex items-center justify-center shrink-0 bg-[#004595] text-white hover:bg-[#003875]">
                    {topic.letter}
                  </Badge>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground hover:text-[#004595] transition-colors">
                      {topic.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsolvenzrechtAZ;