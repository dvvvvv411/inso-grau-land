import { Download } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Downloads = () => {
  const downloadItems = [
    {
      title: "Vertretungsvollmacht – Allgemein",
      size: "38 kB"
    },
    {
      title: "Vertretungsvollmacht – Zweitsprachig deutsch/englisch",
      size: "38 kB"
    },
    {
      title: "Vertretungsvollmacht – Arbeitsrecht",
      size: "42 kB"
    },
    {
      title: "Vertretungsvollmacht – Steuerberatung",
      size: "36 kB"
    },
    {
      title: "Referat – Testament",
      size: "57 kB"
    },
    {
      title: "Referat – Mietrecht",
      size: "38 kB"
    },
    {
      title: "Referat – Verkehrsrecht-Unfallversicherungsrecht",
      size: "72 kB"
    },
    {
      title: "Referat – Privatinsolvenz / Verbraucherinsolvenzverfahren",
      size: "66 kB"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Blue Hero Section */}
      <section className="bg-[#004595] py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Downloads
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Die Rechte an dieser Website und an den enthaltenen Inhalten liegen bei Steinbock & Partner. 
            Besucher der Webseite dürfen gerne Dateien oder Inhalte herunterladen, nutzen und weiter übertragen. 
            Urheberrechtsvermerke dürfen allerdings nicht entfernt werden.
          </p>
          <p className="text-lg text-white/80 mt-4 max-w-3xl mx-auto">
            Eine gewerbliche Nutzung ohne unsere vorherige Zustimmung ist nicht erlaubt.
          </p>
        </div>
      </section>

      {/* Downloads Content */}
      <section className="py-20 px-4 flex-grow bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Downloads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 hover:border-[#004595]/20 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  {/* Title */}
                  <h3 className="text-base font-medium text-foreground leading-tight flex-1 pr-4">
                    {item.title}
                  </h3>
                  
                  {/* Download Icon */}
                  <div className="flex-shrink-0">
                    <Download className="w-5 h-5 text-[#004595] group-hover:text-[#003366]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;