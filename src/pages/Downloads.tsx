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
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-[#004595]/20 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Download Icon */}
                  <div className="w-16 h-16 bg-[#004595]/10 rounded-full flex items-center justify-center group-hover:bg-[#004595]/20 transition-colors">
                    <Download className="w-8 h-8 text-[#004595]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* File Size */}
                  <div className="text-sm text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                    {item.size}
                  </div>
                  
                  {/* Download Button (placeholder for now) */}
                  <button className="w-full mt-4 bg-[#004595] text-white hover:bg-[#003366] font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
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