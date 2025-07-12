import heroImage from "../assets/law-firm-hero.jpg";
import partnerImage from "../assets/partner-team.png";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Briefcase, Building, Home, Key, Calculator, FileText, Heart } from "lucide-react";

const Index = () => {
  const features = [
    "20+ Jahre Erfahrung",
    "9 Standorte", 
    "schnell & kompetent",
    "digitale Kanzlei"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Header */}
      <Header />
      
      {/* Optimized Hero Container - Fixed 650px Height */}
      <div className="hero-content" style={{ backgroundColor: '#ebf4ff' }}>
        <div className="w-full max-w-7xl mx-auto">
          {/* 50/50 Layout - Increased Height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 h-[800px]">
            
            {/* Left Column - Content (50%) */}
            <div className="flex flex-col justify-center space-y-8 px-8 lg:px-12">
              
              {/* Company Name */}
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium tracking-wide uppercase">
                  Steinbock & Partner
                </p>
                <div className="w-16 h-1 bg-[#004595] rounded"></div>
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Rechtsanwälte und <span className="text-[#004595]">Steuerberater</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                  Ein starkes Team. Wenn's drauf ankommt!
                </p>
              </div>
              
              {/* Features Grid - USP Section */}
              <div className="home-hero-usp">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                      <div className="p-1 bg-[#004595]/10 rounded-full group-hover:bg-[#004595]/20 transition-colors">
                        <CheckIcon />
                      </div>
                      <span className="text-foreground font-semibold text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rating Section - No Card, Horizontal Layout */}
              <div className="flex items-center gap-6">
                <h3 className="text-lg font-bold text-foreground">Ausgezeichnet</h3>
                
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                
                <p className="text-base font-bold text-foreground">974+ Bewertungen</p>
              </div>
            </div>
            
            {/* Right Column - Image (50%) with reduced margin - 20% wider */}
            <div className="relative flex items-center justify-end pr-[5%]">
              <div className="w-[95%] h-[800px] shadow-2xl overflow-hidden relative">
                <img 
                  src={heroImage} 
                  alt="Professionelle Anwaltskanzlei - Steinbock & Partner"
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

      {/* About Section - Same height as Hero Section */}
      <div className="h-[650px]" style={{ backgroundColor: '#004595' }}>
        <div className="w-full max-w-7xl mx-auto px-8 h-full flex flex-col justify-center pt-16">
          {/* Section Title - More spacing from top */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12 leading-tight max-w-4xl mx-auto mt-8">
            Willkommen bei Steinbock & Partner, einem erfahrenen Team von Anwälten und Steuerexperten.
          </h2>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
            
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <img 
                  src={partnerImage} 
                  alt="Steinbock & Partner Team"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="text-white/90 text-base leading-relaxed space-y-4">
                <p>
                  Unsere Mission ist es, unseren Klienten eine kompetente und effektive Rechts- und Steuerberatung zu bieten. Wir verstehen, dass rechtliche und steuerliche Angelegenheiten komplex sein können und dass eine gründliche Beratung von entscheidender Bedeutung ist.
                </p>
                <p>
                  Deshalb sind wir bestrebt, für jeden Klienten eine maßgeschneiderte Lösung zu finden, die seine individuellen Bedürfnisse erfüllt. Wir setzen uns engagiert für die Rechte unserer Klienten ein und arbeiten hart, um ihre Interessen zu schützen.
                </p>
                <p>
                  Lassen Sie uns gemeinsam eine Lösung für Ihre rechtlichen und steuerlichen Herausforderungen finden.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Button 
                  size="lg" 
                  className="bg-white text-[#004595] hover:bg-gray-100 font-semibold px-6 py-3 text-base rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Mehr über Steinbock & Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tätigkeitsbereiche Section */}
      <div className="py-20 bg-gray-100">
        <div className="w-full max-w-7xl mx-auto px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unsere Tätigkeitsbereiche
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir bieten umfassende Rechts- und Steuerberatung in verschiedenen Fachbereichen
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Arbeitsrecht", icon: Briefcase, description: "Umfassende Beratung in allen arbeitsrechtlichen Angelegenheiten" },
              { name: "Insolvenzrecht", icon: Building, description: "Professionelle Unterstützung bei Insolvenzverfahren" },
              { name: "Immobilienrecht", icon: Home, description: "Rechtssichere Abwicklung Ihrer Immobiliengeschäfte" },
              { name: "Mietrecht", icon: Key, description: "Kompetente Beratung für Mieter und Vermieter" },
              { name: "Steuerrecht", icon: Calculator, description: "Optimale steuerliche Gestaltung und Beratung" },
              { name: "Vertragsrecht", icon: FileText, description: "Sichere Vertragsgestaltung und -prüfung" },
              { name: "Erbrecht", icon: Heart, description: "Vorsorge und Nachlassregelung professionell gestaltet" }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-[#004595]/20 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-[#004595]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#004595] transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#004595] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center group-hover:text-[#004595] transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-6 flex justify-center">
                    <div className="w-8 h-1 bg-gray-200 rounded-full group-hover:bg-[#004595] transition-colors duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-8">
              Haben Sie Fragen zu einem unserer Tätigkeitsbereiche?
            </p>
            <Button 
              size="lg" 
              className="bg-[#004595] hover:bg-[#003875] text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Beratungstermin vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
