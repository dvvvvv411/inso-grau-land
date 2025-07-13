import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
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

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  
  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, newsArticles.length - cardsPerView);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Mobile-first Navigation */}
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <Button
          variant="outline"
          size={cardsPerView === 1 ? "default" : "lg"}
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="rounded-full p-2 md:p-3 border-[#004595]/20 hover:border-[#004595] hover:bg-[#004595]/5 disabled:opacity-30 touch-manipulation"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-[#004595]" />
        </Button>

        {/* Touch-friendly Dot Indicators */}
        <div className="flex gap-1 md:gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 touch-manipulation ${
                currentIndex === index 
                  ? 'bg-[#004595] w-6 md:w-8' 
                  : 'bg-[#004595]/30 hover:bg-[#004595]/50 w-3'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size={cardsPerView === 1 ? "default" : "lg"}
          onClick={goToNext}
          disabled={currentIndex === maxIndex}
          className="rounded-full p-2 md:p-3 border-[#004595]/20 hover:border-[#004595] hover:bg-[#004595]/5 disabled:opacity-30 touch-manipulation"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-[#004595]" />
        </Button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {newsArticles.map((article, index) => (
            <div
              key={article.title}
              className="flex-shrink-0 px-2 md:px-4"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <Card className="h-full bg-white border border-gray-200/50 hover:border-[#004595]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                {article.link.startsWith('/') ? (
                  <Link 
                    to={article.link}
                    className="block h-full"
                  >
                    {/* Image - Responsive */}
                    <div className="h-48 md:h-64 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content - Responsive */}
                    <CardContent className="p-4 md:p-6 h-56 md:h-64 flex flex-col">
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-[#004595] transition-colors duration-300 line-clamp-2 md:line-clamp-3 leading-tight">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3 md:line-clamp-5 mb-3 md:mb-4">
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
                    className="block h-full"
                  >
                    {/* Image - Responsive */}
                    <div className="h-48 md:h-64 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content - Responsive */}
                    <CardContent className="p-4 md:p-6 h-56 md:h-64 flex flex-col">
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-[#004595] transition-colors duration-300 line-clamp-2 md:line-clamp-3 leading-tight">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3 md:line-clamp-5 mb-3 md:mb-4">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;