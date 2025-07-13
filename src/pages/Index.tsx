import heroImage from "/lovable-uploads/a36d0ea7-6638-4770-b104-68e1d1383eb9.png";
import partnerImage from "/lovable-uploads/fa338e2d-e8d3-485c-b80a-8ec5d5769623.png";
import workplaceCollage from "/lovable-uploads/d37caa46-8c2c-480a-a143-6ab6fa8c5e0d.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import PracticeAreasCarousel from "../components/PracticeAreasCarousel";
import NewsCarousel from "../components/NewsCarousel";
import TestimonialsSection from "../components/TestimonialsSection";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Index = () => {
  const features = [
    "Über 15 Jahre Expertise",
    "Berlin Mitte", 
    "Schnelle Lösungen",
    "Digitale Kanzlei"
  ];

  // Custom checkmark SVG from the original (blue color #004595)
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 12" height="12" width="17" className="flex-shrink-0">
      <path 
        fill="#004595" 
        d="M5.98276 9.61866L14.6493 0.96591C14.8437 0.773793 15.074 0.677734 15.3402 0.677734C15.6064 0.677734 15.8355 0.774224 16.0277 0.967202C16.2198 1.16018 16.3158 1.39129 16.3158 1.66052C16.3158 1.92977 16.2198 2.16229 16.0277 2.35808L6.67354 11.7122C6.47808 11.9043 6.24698 12.0004 5.98025 12.0004C5.71352 12.0004 5.4841 11.9043 5.29198 11.7122L0.884545 7.30477C0.692428 7.1079 0.598133 6.87468 0.601658 6.60512C0.605199 6.33556 0.703459 6.10472 0.896437 5.91261C1.08941 5.72049 1.32052 5.62443 1.58975 5.62443C1.859 5.62443 2.09152 5.72049 2.28731 5.91261L5.98276 9.61866Z"
      />
    </svg>
  );

  // Custom star SVG from the original (yellow color #FFCC00)
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" height="26" width="26">
      <g clipPath="url(#clip0_1276_8372)">
        <path 
          fill="#FFCC00" 
          d="M13 20.2642L6.47172 24.1952C6.28453 24.3122 6.08564 24.3648 5.87505 24.3531C5.66446 24.3414 5.47727 24.2771 5.31348 24.1601C5.14969 24.0431 5.02684 23.891 4.94495 23.7038C4.86305 23.5166 4.8455 23.306 4.8923 23.072L6.61211 15.6312L0.855997 10.6122C0.668806 10.4484 0.557661 10.267 0.522563 10.0681C0.487465 9.86924 0.493315 9.6762 0.540112 9.48901C0.58691 9.30182 0.692205 9.14388 0.855997 9.01518C1.01979 8.88649 1.21868 8.81044 1.45267 8.78704L9.06899 8.12017L12.0172 1.10052C12.1108 0.889929 12.2512 0.731987 12.4384 0.626692C12.6256 0.521397 12.8128 0.46875 13 0.46875C13.1872 0.46875 13.3744 0.521397 13.5616 0.626692C13.7488 0.731987 13.8892 0.889929 13.9828 1.10052L16.931 8.12017L24.5473 8.78704C24.7813 8.81044 24.9802 8.88649 25.144 9.01518C25.3078 9.14388 25.4131 9.30182 25.4599 9.48901C25.5067 9.6762 25.5125 9.86924 25.4774 10.0681C25.4423 10.267 25.3312 10.4484 25.144 10.6122L19.3879 15.6312L21.1077 23.072C21.1545 23.306 21.137 23.5166 21.0551 23.7038C20.9732 23.891 20.8503 24.0431 20.6865 24.1601C20.5227 24.2771 20.3355 24.3414 20.125 24.3531C19.9144 24.3648 19.7155 24.3122 19.5283 24.1952L13 20.2642Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1276_8372">
          <rect transform="translate(0.5 0.46875)" fill="white" height="25" width="25"></rect>
        </clipPath>
      </defs>
    </svg>
  );

  useDocumentTitle("Heß & Partner - Ihre Rechtsexperten in Berlin Mitte");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20 pt-20">
      {/* Header */}
      <Header />
      
      {/* Optimized Hero Container - Enhanced with visual effects */}
      <div className="hero-content relative overflow-hidden" style={{ backgroundColor: '#ebf4ff' }}>
        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/40 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-100/50 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-blue-100/30"></div>
        <div className="w-full max-w-7xl mx-auto relative z-10">
          {/* Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px] lg:h-[800px]">
            
            {/* Left Column - Content (50%) */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8 px-4 md:px-8 lg:px-12 py-12 lg:py-0">
              
              {/* Company Name */}
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium tracking-wide uppercase">
                  Heß & Partner
                </p>
                <div className="w-16 h-1 bg-[#004595] rounded"></div>
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Ihre <span className="text-[#004595]">Rechtsexperten</span> in Berlin
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                  Kompetente Beratung für Ihren Erfolg - rechtssicher und zukunftsorientiert
                </p>
              </div>
              
              {/* Features Grid - Mobile Optimized USP Section */}
              <div className="home-hero-usp">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                      <div className="p-1 bg-[#004595]/10 rounded-full group-hover:bg-[#004595]/20 transition-colors flex-shrink-0">
                        <CheckIcon />
                      </div>
                      <span className="text-foreground font-semibold text-sm md:text-base lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rating Section - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-6">
                <h3 className="text-base md:text-lg font-bold text-foreground">Ausgezeichnet</h3>
                
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-5 h-5 md:w-6 md:h-6">
                      <StarIcon />
                    </div>
                  ))}
                </div>
                
                <p className="text-sm md:text-base font-bold text-foreground">974+ Bewertungen</p>
              </div>
            </div>
            
            {/* Right Column - Desktop Only Image */}
            <div className="hidden lg:flex relative items-center justify-center px-4 md:justify-end md:pr-[5%] order-first lg:order-last">
              <div className="w-full max-w-sm md:max-w-md lg:w-[95%] h-64 md:h-96 lg:h-[800px] overflow-hidden relative transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                {/* Responsive layered shadows */}
                <div className="hidden md:block absolute inset-0 bg-black/20 blur-3xl transform translate-x-4 translate-y-4 rounded-lg"></div>
                <div className="hidden md:block absolute inset-0 bg-blue-600/30 blur-2xl transform translate-x-2 translate-y-2 rounded-lg"></div>
                <div className="hidden md:block absolute inset-0 bg-black/30 blur-xl transform translate-x-1 translate-y-1 rounded-lg"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl md:shadow-2xl ring-1 ring-black/10">
                  <img 
                    src={heroImage} 
                    alt="Professionelle Anwaltskanzlei - Heß & Partner"
                    className="w-full h-full object-cover"
                  />
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Mobile Responsive */}
      <div className="min-h-[500px] md:min-h-[600px] lg:h-[650px] overflow-hidden" style={{ backgroundColor: '#004595' }}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center py-12 md:py-16">
          {/* Section Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center mb-8 md:mb-12 leading-tight max-w-4xl mx-auto px-2">
            Ihr vertrauensvoller Partner für Recht und Steuern im Herzen Berlins
          </h2>

          {/* Two Column Layout - Mobile Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[300px] md:min-h-[400px]">
            
            {/* Left Column - Image (50%) */}
            <div className="flex justify-center h-full">
              <div className="w-full max-w-xl h-full flex items-center">
                <img 
                  src={partnerImage} 
                  alt="Heß & Partner Team"
                  className="w-full h-auto max-h-[500px] object-contain"
                />
              </div>
            </div>

            {/* Right Column - Text (50%) */}
            <div className="space-y-4 md:space-y-6 h-full flex flex-col justify-center">
              <div className="text-white/90 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4">
                <p>
                  Bei Heß & Partner verbinden wir juristische Expertise mit moderner Beratung. Unsere Mandanten profitieren von über 15 Jahren Erfahrung in komplexen Rechts- und Steuerangelegenheiten.
                </p>
                <p>
                  Wir entwickeln strategische Lösungen, die Ihre Interessen optimal schützen und Ihre Ziele verwirklichen. Dabei setzen wir auf persönliche Betreuung, transparente Kommunikation und nachhaltige Ergebnisse.
                </p>
                <p className="hidden md:block">
                  Von unserem Standort in Berlin Mitte aus betreuen wir Mandanten deutschlandweit - mit der Kombination aus lokaler Präsenz und digitaler Effizienz.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Button 
                  size="lg" 
                  className="bg-white text-[#004595] hover:bg-gray-100 font-semibold px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
                  asChild
                >
                  <Link to="/ueber-uns">Unsere Kanzlei kennenlernen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Section - Mobile Responsive */}
      <div className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Unsere <span className="text-[#004595]">Tätigkeitsbereiche</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Spezialisierte Rechtsberatung für alle Lebensbereiche - von der Erstberatung bis zur Prozessführung
            </p>
          </div>

          {/* Practice Areas Carousel */}
          <PracticeAreasCarousel />
        </div>
      </div>

      {/* News Section - Mobile Responsive */}
      <div className="py-12 md:py-16 lg:py-20 bg-white border-y border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
              <span className="text-[#004595]">News</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-2">
              Aktuelle Rechtsentwicklungen und Fachbeiträge aus unserem Expertenteam
            </p>
          </div>

          {/* News Carousel */}
          <NewsCarousel />
        </div>
      </div>

      {/* Stellenangebote Section - Mobile Responsive */}
      <div className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Two Column Layout - Mobile Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <img 
                  src={workplaceCollage} 
                  alt="Arbeitsplatz Übersicht"
                  className="w-full h-auto aspect-[3/4] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Column - Card with darker background */}
            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 h-full flex flex-col justify-center space-y-8">
              {/* Title - Centered */}
              <div className="space-y-4 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#002d4a]">
                  Karriere bei Heß & Partner
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Werden Sie Teil unseres Erfolgs. Wir bieten Ihnen eine Karriere mit Perspektive in einer der modernsten Kanzleien Berlins.
                </p>
              </div>

              {/* Flexible Features Grid - 2 rows */}
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Moderne Arbeitsplätze",
                  "Flexible Arbeitsmodelle", 
                  "Fortbildungsmöglichkeiten",
                  "Berlin Mitte",
                  "Dynamisches Expertenteam"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/50 hover:bg-gray-50 hover:shadow-md transition-all duration-300 group flex-shrink-0">
                    <div className="p-1 bg-[#004595]/10 rounded-full group-hover:bg-[#004595]/20 transition-colors flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-foreground font-medium text-sm whitespace-nowrap">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Modern CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#004595] text-white hover:bg-[#003366] font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                  asChild
                >
                  <Link to="/stellenangebote" className="flex items-center justify-center gap-3">
                    <span>Jetzt bewerben</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
