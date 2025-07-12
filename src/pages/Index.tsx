import { Check, Star } from "lucide-react";

const Index = () => {
  const features = [
    "20+ Jahre Erfahrung",
    "9 Standorte", 
    "schnell & kompetent",
    "digitale Kanzlei"
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Name - hidden on small screens */}
          <p className="text-lg text-muted-foreground mb-4 hidden sm:block">
            Steinbock & Partner
          </p>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Rechtsanwälte und Steuerberater
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Ein starkes Team. Wenn's drauf ankommt!
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Rating Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Ausgezeichnet</h3>
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  className="w-6 h-6 fill-yellow-400 text-yellow-400" 
                />
              ))}
            </div>
            
            {/* Reviews Count */}
            <p className="text-muted-foreground font-medium">974+ Bewertungen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
