import { Download } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StandardHero from "../components/StandardHero";

const Downloads = () => {
  const downloadItems = [
    {
      title: "Vertretungsvollmacht – Allgemein",
      size: "38 kB",
      link: "/vertretungsvollmacht-allgemein.pdf"
    },
    {
      title: "Vertretungsvollmacht – Zweitsprachig deutsch/englisch",
      size: "38 kB",
      link: "/vertretungsvollmacht-zweisprachig-deutsch-englisch.pdf"
    },
    {
      title: "Vertretungsvollmacht – Arbeitsrecht",
      size: "42 kB",
      link: "/vertretungsvollmacht-arbeitsrecht.pdf"
    },
    {
      title: "Vertretungsvollmacht – Steuerberatung",
      size: "36 kB",
      link: "/vertretungsvollmacht-steuerberatung.pdf"
    },
    {
      title: "Referat – Testament",
      size: "57 kB",
      link: "/referat-testament.pdf"
    },
    {
      title: "Referat – Mietrecht",
      size: "38 kB",
      link: "/referat-mietrecht.pdf"
    },
    {
      title: "Referat – Verkehrsrecht-Unfallversicherungsrecht",
      size: "72 kB",
      link: "/referat-verkehrsrecht-unfallversicherungsrecht-p1.pdf"
    },
    {
      title: "Referat – Privatinsolvenz / Verbraucherinsolvenzverfahren",
      size: "66 kB",
      link: "/referat-privatinsolvenz-verbraucherinsolvenzverfahren.pdf"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <StandardHero
        title="Downloads"
        description="Die Rechte an dieser Website und an den enthaltenen Inhalten liegen bei Heß & Partner. Besucher der Webseite dürfen gerne Dateien oder Inhalte herunterladen, nutzen und weiter übertragen. Urheberrechtsvermerke dürfen allerdings nicht entfernt werden. Eine gewerbliche Nutzung ohne unsere vorherige Zustimmung ist nicht erlaubt."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Downloads" }
        ]}
      />

      {/* Downloads Content */}
      <section className="py-20 px-4 flex-grow bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Downloads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadItems.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                download
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 hover:border-[#004595]/20 group cursor-pointer block"
              >
                <div className="flex items-center justify-between">
                  {/* Title and Size */}
                  <div className="flex-1 pr-4">
                    <h3 className="text-base font-medium text-foreground leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.size}
                    </p>
                  </div>
                  
                  {/* Download Icon */}
                  <div className="flex-shrink-0">
                    <Download className="w-5 h-5 text-[#004595] group-hover:text-[#003366]" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;