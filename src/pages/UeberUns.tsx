import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { MapPin, Users, Briefcase, Award } from "lucide-react";

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Header */}
      <Header />
      
      {/* Section 1: Spezialisierte Beratung mit regionalen Wurzeln - Blue Background */}
      <div className="py-20 relative overflow-hidden" style={{ backgroundColor: '#004595' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white/90 font-medium">Seit 2000 in der Region verwurzelt</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
                Spezialisierte Beratung mit <br />
                <span className="text-accent-foreground/90 relative">
                  regionalen Wurzeln
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent/60 to-transparent rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto">
                Mit drei Rechtsanwälten eröffnete im Jahr 2000 die Anwaltskanzlei Steinbock & Partner in Randersacker bei Würzburg. Die Idee hinter unserer Kanzleigründung: auch in kleineren und mittleren Städten und auf dem Land besteht Bedarf an spezialisierter Rechtsberatung. 
                <span className="font-medium text-white"> Wer fundiertes anwaltliches Wissen auf unterschiedlichen Rechtsgebieten benötigt, soll dafür nicht nach Berlin, Frankfurt oder Nürnberg fahren müssen!</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Gray Background */}
      <div className="py-20 relative" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            {/* Growth stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group hover-scale">
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <Users className="w-8 h-8 text-[#004595] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#004595] mb-1">17</div>
                  <div className="text-sm text-muted-foreground">Rechtsanwälte</div>
                </div>
              </div>
              <div className="text-center group hover-scale">
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <MapPin className="w-8 h-8 text-[#004595] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#004595] mb-1">9</div>
                  <div className="text-sm text-muted-foreground">Standorte</div>
                </div>
              </div>
              <div className="text-center group hover-scale">
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <Briefcase className="w-8 h-8 text-[#004595] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#004595] mb-1">3000+</div>
                  <div className="text-sm text-muted-foreground">Mandate/Jahr</div>
                </div>
              </div>
            </div>

            <div className="text-foreground text-lg leading-relaxed space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border animate-fade-in">
                <p className="text-xl font-medium text-[#004595] mb-4">
                  Von 3 auf 17 Anwälte - unser Wachstum spricht für sich
                </p>
                <p>
                  Dieses Konzept hat sich von Beginn an bewährt. Schon ein Jahr später waren wir auf fünf Anwälte gewachsen.
                </p>
                <p className="mt-4">
                  Heute gehören siebzehn Rechtsanwältinnen und Rechtsanwälte zu unserer Kanzlei, viele davon mit Fachanwaltstitel.
                  Dazu kommen in der Steuerabteilung unter der Leitung des Steuerberaters Sebastian Egidy eine Steuerberaterin und ein weiterer Steuerberater.
                  Dank unserer Bandbreite an Fachkompetenz betreuen wir fast jedes rechtliche oder steuerliche Anliegen, mit dem Sie konfrontiert sind.
                  <span className="font-semibold text-[#004595]"> Unsere Kanzlei bearbeitet weit über 3.000 Mandate im Jahr.</span>
                </p>
                
                <div className="mt-6 p-4 bg-[#004595]/5 rounded-xl border-l-4 border-[#004595]">
                  <p className="text-sm text-muted-foreground mb-2">Unsere Standorte:</p>
                  <p className="font-medium">Würzburg (5x) • Bad Kissingen • Bamberg • Gotha • München</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-white to-accent/5 rounded-2xl p-8 shadow-sm border">
                <div className="flex items-start gap-4 mb-6">
                  <Award className="w-6 h-6 text-[#004595] mt-1 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Anwälte und Steuerberater aus Überzeugung
                  </h3>
                </div>
                
                <blockquote className="text-xl italic text-[#004595] mb-6 pl-4 border-l-3 border-[#004595]/30">
                  „Nur wer Anwalt werden will, wird ein guter Anwalt."
                </blockquote>
                
                <p className="mb-4">
                  Diese alte Weisheit unter Jura-Professoren bringt es auf den Punkt: Nur wer seinen Beruf aus Leidenschaft betreibt, ist wirklich gut darin.
                </p>
                
                <p className="mb-4">
                  Bei Steinbock & Partner arbeiten <span className="font-semibold text-[#004595]">„Überzeugungstäter"</span>: Wir lieben unsere Arbeit und identifizieren uns mit der Philosophie der Kanzlei. Wir haben uns bewusst und gerne für diese Kanzlei entschieden, auch wenn die Abschlussnoten den Weg zu einer Großkanzlei, zur Staatsanwaltschaft oder ins Richteramt ermöglicht hätten.
                </p>
                
                <p>
                  Diese Überzeugung zeigt sich in unserem Engagement für die Mandanten, im juristischen Qualitätsniveau und unserem hohen Anspruch an die eigene Arbeit. Das sind die Werte, die Steinbock & Partner in der alltäglichen Arbeit umsetzt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Eine Kanzlei auf aktuellem Stand - Blue Background */}
      <div className="py-20 relative overflow-hidden" style={{ backgroundColor: '#004595' }}>
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-40 h-40 border border-white/30 rotate-45"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 border border-white/20 rotate-12"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-white/90 font-medium">Innovation seit 2000</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
                Eine Kanzlei auf <br />
                <span className="text-accent-foreground/90 relative">
                  aktuellem Stand
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent/60 to-transparent rounded-full"></div>
                </span>
              </h2>
            </div>

            {/* Innovation timeline */}
            <div className="space-y-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <span className="text-white font-bold text-sm">2003</span>
                  </div>
                  <h3 className="text-white font-semibold">Multi-Standort Pioniere</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Steinbock & Partner hat keine Angst vor Neuem. Unsere Kanzlei nutzt gern moderne Mittel, um zum Erfolg zu kommen. Die Anwälte unserer Kanzlei haben sich bereits 2003 auf verschiedene Standorte aufgeteilt, als das Berufsrecht darauf noch nicht eingestellt war.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 rounded-full p-2">
                        <span className="text-white font-bold text-sm">2004-2015</span>
                      </div>
                      <h3 className="text-white font-semibold">Digitale Transformation</h3>
                    </div>
                    <ul className="text-white/90 space-y-2 text-sm">
                      <li>• 2004: Digitalisierung der Kanzlei-Abläufe</li>
                      <li>• 2008: Zentrale Wissensdatenbank</li>
                      <li>• 2015: Komplett papierlose Akten</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">11.000+</div>
                      <div className="text-white/70 text-sm">Einträge in der Wissensdatenbank</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl text-white/90 leading-relaxed font-light">
                <span className="font-medium text-white">Video-Meetings gehörten bei uns schon vor der Pandemie zum Arbeitsalltag.</span> Wir sind hervorragend vernetzt, ortsungebunden erreichbar und überall arbeitsfähig. Auch das ist Teil der Mandantenorientierung.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Unser Alleinstellungsmerkmal - Gray Background */}
      <div className="py-20 relative" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-[#004595]/10 rounded-full px-6 py-3 mb-6">
                <Award className="w-5 h-5 text-[#004595]" />
                <span className="text-[#004595] font-medium">Was uns auszeichnet</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                Unser <span className="text-[#004595] relative">
                  Alleinstellungsmerkmal
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#004595]/60 to-transparent rounded-full"></div>
                </span>
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Die Summe aus dem, was Steinbock & Partner ausmacht
              </p>
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  icon: <Briefcase className="w-6 h-6" />,
                  title: "Umfassende Kompetenz",
                  description: "Unsere Kanzlei bietet Ihnen kompetente, qualifizierte Unterstützung zu Ihren rechtlichen Anliegen unabhängig vom Rechtsgebiet, dazu auch Steuerberatung."
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Qualität auf höchstem Niveau",
                  description: "Unsere spezialisierte Rechtsberatung muss den Qualitätsvergleich mit großen Kanzleien nicht scheuen."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Vernetztes Team",
                  description: "Ihnen steht überall unser gesamtes Team zur Verfügung. Dank Vernetzung und moderner Technik wird an jedem Standort der richtige Anwalt oder Steuerberater für Ihren Fall hinzugezogen."
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Bodenständig & Nah",
                  description: "Die Beratung bei Steinbock & Partner ist nie akademisch oder abgehoben. Wir sind in mittelgroßen, kleinen und ganz kleinen Städten verwurzelt, Menschen zum Anfassen, die im Leben stehen und die pragmatische Perspektive unserer Mandanten teilen."
                }
              ].map((item, index) => (
                <div key={index} className="group hover-scale">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#004595]/10 rounded-xl p-3 text-[#004595] group-hover:bg-[#004595] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Final point as a special card */}
              <div className="bg-gradient-to-r from-[#004595] to-[#004595]/90 rounded-2xl p-8 text-white animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-xl p-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Leidenschaft & Erfolg</h3>
                    <p className="text-white/90 leading-relaxed">
                      Alle Mitglieder unseres Kanzleiteams – Rechtsanwälte, Steuerberater und Fachangestellte – sind aus Überzeugung und mit vollem Einsatz für Sie da. <span className="font-semibold">Wir lieben, was wir tun.</span> Als Mandant sehen Sie das am Erfolg unserer Arbeit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UeberUns;