import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Scale, Home, Briefcase, Building, Calculator, FileText, Users, Gavel } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const practiceAreas = [
  {
    title: "Grundstücksrecht",
    icon: Building,
    description: "Umfassende Beratung bei Immobilienerwerb, Baurecht und Grundstücksverträgen",
    link: "/rechtsgebiete/grundstuecksrecht"
  },
  {
    title: "Insolvenzrecht", 
    icon: Calculator,
    description: "Strategische Begleitung in Insolvenzverfahren und bei der Unternehmenssanierung",
    link: "/rechtsgebiete/insolvenzrecht"
  },
  {
    title: "Kaufrecht",
    icon: Briefcase,
    description: "Expertenberatung bei Kaufverträgen, Gewährleistung und Verbraucherschutz",
    link: "/rechtsgebiete/kaufrecht"
  },
  {
    title: "Maklerrecht",
    icon: Home,
    description: "Professionelle Beratung bei Maklerverträgen, Provisionsfragen und Immobilienvermittlung",
    link: "/rechtsgebiete/maklerrecht"
  },
  {
    title: "Sozialrecht",
    icon: Users,
    description: "Durchsetzung Ihrer Ansprüche in Renten-, Kranken- und Arbeitslosenversicherung",
    link: "/rechtsgebiete/sozialrecht"
  },
  {
    title: "Steuerrecht",
    icon: FileText,
    description: "Optimale Steuergestaltung und -beratung für Privatpersonen und Unternehmen",
    link: "/rechtsgebiete/steuerrecht"
  },
  {
    title: "Vertragsrecht",
    icon: Scale,
    description: "Rechtssichere Vertragsgestaltung und -prüfung für alle Geschäftsbereiche",
    link: "/rechtsgebiete/vertragsrecht"
  },
  {
    title: "Verwaltungsrecht",
    icon: Building,
    description: "Effektive Vertretung gegenüber Behörden und in verwaltungsgerichtlichen Verfahren",
    link: "/rechtsgebiete/verwaltungsrecht"
  },
  {
    title: "Wettbewerbsrecht",
    icon: Gavel,
    description: "Schutz Ihrer Wettbewerbsposition und Durchsetzung fairer Marktpraktiken",
    link: "/rechtsgebiete/wettbewerbsrecht"
  }
];

const PracticeAreasCarousel = () => {
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

  const maxIndex = Math.max(0, practiceAreas.length - cardsPerView);

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
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="flex-shrink-0 px-2 md:px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <Link to={area.link} className="h-full block">
                  <Card className="h-full bg-white border border-gray-200/50 hover:border-[#004595]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-4 md:p-6 lg:p-8 text-center h-full flex flex-col">
                      {/* Icon */}
                      <div className="mb-4 md:mb-6 mx-auto">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#004595]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#004595]/20 transition-colors duration-300">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#004595]" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-[#004595] transition-colors duration-300">
                        {area.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                        {area.description}
                      </p>

                      {/* Hover Accent Bar */}
                      <div className="mt-4 md:mt-6 w-0 h-1 bg-[#004595] rounded-full mx-auto group-hover:w-12 transition-all duration-300"></div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasCarousel;