import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SozialrechtAZ = () => {
  const entries = [
    {
      letter: "A",
      title: "Anerkennung Schwerbehinderung, Hochstufung",
      path: "/sozialrecht/anerkennung-schwerbehinderung-hochstufung/"
    },
    {
      letter: "E", 
      title: "Einstweiliger Rechtsschutz zu Gunsten einer lebensverlängernden Therapie",
      path: "/sozialrecht/einstweiliger-rechtsschutz-zu-gunsten-einer-lebensverlaengernden-therapie/"
    },
    {
      letter: "G", 
      title: "Gesetzliche Unfallversicherung",
      path: "/sozialrecht/gesetzliche-unfallversicherung/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#004595] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <div className="flex items-center text-blue-200 mb-6 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Rechtsgebiete</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/rechtsgebiete/Sozialrecht" className="hover:text-white transition-colors">Sozialrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">A-Z</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Sozialrecht von A-Z
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Unser Ziel ist nicht, Wikipedia zu ersetzen. Sondern wir möchten unseren Mandanten wie auch Lesern die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes kennen zu lernen. Aus diesem Grund schreiben wir auch mit möglichst wenigen Fachbegriffen, sondern bemühen uns um klare, verständliche Sprache. Eine Rechtsberatung im konkreten Einzelfall kann dies aber ebenfalls nicht ersetzen, die Erläuterungen haben insofern auch nicht den Anspruch, jeden seltenen Sonderfall mit abzudecken.
            </p>
          </div>
        </div>
      </section>

      {/* A-Z Entries */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {entries.map((entry, index) => (
                <Link
                  key={index}
                  to={entry.path}
                  className="flex items-center p-6 hover:bg-blue-50 transition-colors group"
                >
                  <Badge variant="default" className="w-12 h-12 rounded-xl text-lg font-bold flex items-center justify-center shrink-0 mr-4 bg-[#004595] text-white hover:bg-[#003875] transition-colors">
                    {entry.letter}
                  </Badge>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#004595] transition-colors">
                      {entry.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#004595] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SozialrechtAZ;