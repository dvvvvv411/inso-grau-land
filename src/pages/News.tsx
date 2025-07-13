import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StandardHero from "../components/StandardHero";
import newsImage1 from "../assets/news-placeholder-1.jpg";
import newsImage2 from "../assets/news-placeholder-2.jpg";
import newsImage3 from "../assets/news-placeholder-3.jpg";
import newsImage4 from "../assets/news-placeholder-4.jpg";
import newsImage5 from "../assets/news-placeholder-5.jpg";
import newsImage6 from "../assets/news-placeholder-6.jpg";
import newsImage7 from "../assets/news-placeholder-7.jpg";

const newsArticles = [
  {
    title: "20 % Schadensersatz gegenüber der Bank bei Kreditkartenmissbrauch",
    excerpt: "Das Oberlandesgericht (OLG) Dresden hat am 5. Mai 2025 (Az. 8 U 1482/24) ein bedeutendes Urteil…",
    link: "/news/20-schadensersatz-gegenueber-der-bank-bei-kreditkartenmissbrauch",
    image: newsImage1
  },
  {
    title: "Meldefristen beim Datenschutzvorfall",
    excerpt: "Wann muss eine Datenpanne der Aufsichtsbehörde gemeldet werden? Nicht selten kommt es vor, dass Daten durch…",
    link: "/news/meldefristen-beim-datenschutzvorfall",
    image: newsImage2
  },
  {
    title: "Bargeschäftsprivileg bei Vorsatzanfechtung",
    excerpt: "Neue Entscheidung des BGH gibt Klarheit zum Merkmal der Unlauterkeit im Rahmen des Bargeschäftsprivilegs bei Vorsatzanfechtung…",
    link: "/news/bargeschaeft-insolvenz",
    image: newsImage3
  },
  {
    title: "Datenübertragung bedeutet Kontrollverlust",
    excerpt: "Erfolg vor dem Bundesarbeitsgericht: Mitarbeiter wehrt sich gegen Datenübertragung in die USA Hintergrund der Entscheidung des…",
    link: "/news/datenuebertragung",
    image: newsImage4
  },
  {
    title: "Corona-Soforthilfe: Wann eine Rückforderung unzulässig ist",
    excerpt: "Corona-Wirtschaftshilfen auch 2025 noch Thema von hoher Relevanz Bundesweit sind auch 5 Jahre nach Beginn der…",
    link: "/news/coronahilfe-rueckforderung",
    image: newsImage5
  },
  {
    title: "Videoüberwachung am Arbeitsplatz",
    excerpt: "Wichtiges zur Videoüberwachung im Überblick(1) Grundsätzlich ist Videoüberwachung datenschutzrechtlich zulässig, sowohl im öffentlichen als auch im…",
    link: "/news/videoueberwachung-am-arbeitsplatz",
    image: newsImage6
  },
  {
    title: "eCommerce und Barrierefreiheit",
    excerpt: "Pflicht zur Barrierefreiheit von Webseiten Am 28.06.2025 wird das Barrierefreiheitsstärkungsgesetz (BFSG) in Kraft treten. Das BFSG…",
    link: "/news/ecommerce-und-barrierefreiheit",
    image: newsImage7
  }
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <StandardHero
        title="News"
        description="Bleiben Sie informiert über aktuelle Rechtsentwicklungen, wichtige Urteile und fachliche Einschätzungen unserer Rechtsexperten zu relevanten juristischen Themen."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" }
        ]}
      />

      {/* News Articles Grid */}
      <section className="py-20 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {newsArticles.map((article, index) => (
              <Card 
                key={article.title}
                className="bg-white border border-gray-200/50 hover:border-[#004595]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {article.link.startsWith('/') ? (
                  <Link 
                    to={article.link}
                    className="flex flex-col md:flex-row h-full"
                  >
                    {/* Image */}
                    <div className="w-full md:w-80 h-48 md:h-40 overflow-hidden flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#004595] transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                        {article.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center text-[#004595] text-sm font-medium group-hover:text-[#004595]/80 transition-colors duration-300 mt-auto">
                        <span>Weiterlesen</span>
                        <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Link>
                ) : (
                  <a 
                    href={article.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col md:flex-row h-full"
                  >
                    {/* Image */}
                    <div className="w-full md:w-80 h-48 md:h-40 overflow-hidden flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#004595] transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                        {article.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center text-[#004595] text-sm font-medium group-hover:text-[#004595]/80 transition-colors duration-300 mt-auto">
                        <span>Weiterlesen</span>
                        <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;