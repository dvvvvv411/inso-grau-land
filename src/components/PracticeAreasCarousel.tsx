import { useState } from "react";
import { ChevronLeft, ChevronRight, Scale, Home, Briefcase, Building, Calculator, FileText, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const practiceAreas = [
  {
    title: "Arbeitsrecht",
    icon: Briefcase,
    description: "Umfassende Beratung bei arbeitsrechtlichen Streitigkeiten und Vertragsgestaltung"
  },
  {
    title: "Insolvenzrecht", 
    icon: Calculator,
    description: "Kompetente Unterstützung bei Insolvenzverfahren und Sanierungsmaßnahmen"
  },
  {
    title: "Immobilienrecht",
    icon: Building,
    description: "Rechtliche Begleitung bei Immobilienkäufen, -verkäufen und Vermietungen"
  },
  {
    title: "Mietrecht",
    icon: Home,
    description: "Beratung für Mieter und Vermieter bei allen mietrechtlichen Angelegenheiten"
  },
  {
    title: "Steuerrecht",
    icon: FileText,
    description: "Professionelle Steuerberatung für Privatpersonen und Unternehmen"
  },
  {
    title: "Vertragsrecht",
    icon: Scale,
    description: "Vertragsgestaltung und -prüfung für alle Arten von Rechtsgeschäften"
  },
  {
    title: "Erbrecht",
    icon: Heart,
    description: "Testamentsgestaltung und Beratung bei Erbschaftsangelegenheiten"
  },
  {
    title: "Strafrecht",
    icon: Shield,
    description: "Verteidigung in Strafverfahren und präventive Rechtsberatung"
  }
];

const PracticeAreasCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
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
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="outline"
          size="lg"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="rounded-full p-3 border-[#004595]/20 hover:border-[#004595] hover:bg-[#004595]/5 disabled:opacity-30"
        >
          <ChevronLeft className="w-6 h-6 text-[#004595]" />
        </Button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-[#004595] w-8' 
                  : 'bg-[#004595]/30 hover:bg-[#004595]/50'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="lg"
          onClick={goToNext}
          disabled={currentIndex === maxIndex}
          className="rounded-full p-3 border-[#004595]/20 hover:border-[#004595] hover:bg-[#004595]/5 disabled:opacity-30"
        >
          <ChevronRight className="w-6 h-6 text-[#004595]" />
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
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <Card className="h-full bg-white border border-gray-200/50 hover:border-[#004595]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6 mx-auto">
                      <div className="w-16 h-16 bg-[#004595]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#004595]/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-[#004595]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#004595] transition-colors duration-300">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {area.description}
                    </p>

                    {/* Hover Accent Bar */}
                    <div className="mt-6 w-0 h-1 bg-[#004595] rounded-full mx-auto group-hover:w-12 transition-all duration-300"></div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Info */}
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          {currentIndex + 1} - {Math.min(currentIndex + cardsPerView, practiceAreas.length)} von {practiceAreas.length} Bereichen
        </p>
      </div>
    </div>
  );
};

export default PracticeAreasCarousel;