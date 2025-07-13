import { useState } from 'react';
import { Card } from './ui/card';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  rating: number;
  text: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Lennart Siebenmorgen",
      company: "",
      position: "",
      rating: 5,
      text: "Die rechtliche Unterstützung war über jeden Zweifel erhaben. In meinem komplexen Fall haben sie nicht nur den Überblick behalten, sondern aktiv nach Lösungen gesucht, wo andere längst aufgegeben hätten. Großartige Arbeit!",
      image: "/lovable-uploads/2a1a247b-c32b-475d-8df8-c4c0a88e9b0c.png"
    },
    {
      id: 2,
      name: "Friederike von Hardenfels",
      company: "",
      position: "",
      rating: 5,
      text: "Dr. Heß ist ein außergewöhnlicher Anwalt – fachlich brillant, strategisch scharf und zugleich menschlich absolut angenehm. Er hat sich mit beeindruckender Gründlichkeit in meinen Fall eingearbeitet und dabei stets das große Ganze im Blick behalten. Ein echter Fels in der Brandung!",
      image: "/lovable-uploads/d53c73d6-7522-47fe-9f86-4becc780b6ec.png"
    },
    {
      id: 3,
      name: "Albrecht Kronenberg",
      company: "",
      position: "",
      rating: 5,
      text: "Ich habe selten eine Kanzlei erlebt, die mit solcher Präzision und strategischem Weitblick agiert. Die juristische Beratung war nicht nur fachlich exzellent, sondern auch menschlich auf Augenhöhe. Mein Anliegen wurde bis ins Detail verstanden – das schafft Vertrauen.",
      image: "/lovable-uploads/1f12239c-78f4-4890-938f-a5f85430fd4d.png"
    },
    {
      id: 4,
      name: "Thilo Bernbruch",
      company: "",
      position: "",
      rating: 5,
      text: "Herr Dr. Heß hat mich mit seiner ruhigen, analytischen Art vollkommen überzeugt. Er nimmt sich Zeit, hört wirklich zu und liefert dann punktgenaue juristische Einschätzungen. Besonders in stressigen Situationen war seine souveräne Haltung für mich Gold wert. Ein Anwalt, wie man ihn sich wünscht.",
      image: "/lovable-uploads/c66c5011-3e4c-4916-9b5f-dcbb4706ab77.png"
    },
    {
      id: 5,
      name: "Benedikt Falkenried",
      company: "",
      position: "",
      rating: 5,
      text: "Diese Kanzlei vereint Expertise mit echter Verlässlichkeit. Ich habe mich selten so gut beraten gefühlt. Besonders die analytische Herangehensweise hat mir imponiert – jede Entscheidung wurde nachvollziehbar erklärt und transparent umgesetzt.",
      image: "/lovable-uploads/9fcb2666-2a40-4fb3-b71c-daf8c1c693cf.png"
    }
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial>(testimonials[0]);

  // Star SVG from the parent component
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" height="20" width="20">
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
    <div className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Das sagen unsere <span className="text-[#004595]">Mandanten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ihr Vertrauen ist unser Ansporn - Exzellenz in der Beratung ist unser Versprechen
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Featured Testimonial - Compact (3/5 width) */}
          <div className="lg:col-span-3">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="space-y-4">
                
                {/* Header with Client Info */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={selectedTestimonial.image}
                      alt={selectedTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 shadow-md"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{selectedTestimonial.name}</h3>
                      {selectedTestimonial.position && (
                        <p className="text-base text-[#004595] font-semibold">{selectedTestimonial.position}</p>
                      )}
                      {selectedTestimonial.company && (
                        <p className="text-sm text-muted-foreground">{selectedTestimonial.company}</p>
                      )}
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {[...Array(selectedTestimonial.rating)].map((_, index) => (
                        <StarIcon key={index} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="pt-2">
                  <blockquote className="text-base leading-relaxed text-foreground italic">
                    "{selectedTestimonial.text}"
                  </blockquote>
                </div>
              </div>
            </Card>
          </div>

          {/* Testimonial Selection List - Scrollable (2/5 width) */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <h3 className="text-lg font-bold text-foreground mb-4">Weitere Kundenstimmen</h3>
            
            <div className="space-y-3 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50 hover:scrollbar-thumb-blue-400 transition-colors duration-200 rounded-lg"
                 style={{
                   scrollbarWidth: 'thin',
                   scrollbarColor: '#93c5fd #eff6ff'
                 }}>
              {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id}
                  className={`p-3 cursor-pointer transition-all duration-300 hover:shadow-md ${
                    selectedTestimonial.id === testimonial.id 
                      ? 'bg-[#004595] text-white ring-2 ring-[#004595]' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold text-sm truncate ${
                          selectedTestimonial.id === testimonial.id ? 'text-white' : 'text-foreground'
                        }`}>
                          {testimonial.name}
                        </h4>
                        {testimonial.company && (
                          <p className={`text-xs truncate ${
                            selectedTestimonial.id === testimonial.id ? 'text-blue-100' : 'text-muted-foreground'
                          }`}>
                            {testimonial.company}
                          </p>
                        )}
                        
                        {/* Small Rating */}
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(testimonial.rating)].map((_, index) => (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" height="10" width="10">
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
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial Preview Text */}
                    <p className={`text-xs leading-relaxed line-clamp-2 ${
                      selectedTestimonial.id === testimonial.id ? 'text-blue-50' : 'text-muted-foreground'
                    }`}>
                      "{testimonial.text.length > 80 ? testimonial.text.substring(0, 80) + '...' : testimonial.text}"
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;