import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';
import { Settings, Shield, Eye, Target, Cog } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const { 
    showBanner, 
    acceptAll, 
    acceptNecessary, 
    acceptCustom 
  } = useCookieConsent();

  const [showDetails, setShowDetails] = useState(false);
  const [customPreferences, setCustomPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytical: false,
    marketing: false,
  });

  if (!showBanner) return null;

  const handleCustomPreferenceChange = (category: keyof CookiePreferences, checked: boolean) => {
    if (category === 'necessary') return; // Can't change necessary cookies
    
    setCustomPreferences(prev => ({
      ...prev,
      [category]: checked,
    }));
  };

  const handleAcceptCustom = () => {
    acceptCustom(customPreferences);
    setShowDetails(false);
  };

  const cookieCategories = [
    {
      key: 'necessary' as const,
      title: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      icon: Shield,
      required: true,
    },
    {
      key: 'functional' as const,
      title: 'Funktionale Cookies',
      description: 'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung der Website.',
      icon: Cog,
      required: false,
    },
    {
      key: 'analytical' as const,
      title: 'Analytische Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
      icon: Eye,
      required: false,
    },
    {
      key: 'marketing' as const,
      title: 'Marketing Cookies',
      description: 'Diese Cookies werden verwendet, um relevante Werbung anzuzeigen.',
      icon: Target,
      required: false,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t">
      <div className="max-w-6xl mx-auto">
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Cookie-Einstellungen
                </h3>
                <p className="text-sm text-muted-foreground mb-4 lg:mb-0">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. 
                  Einige sind notwendig, andere helfen uns, die Website zu verbessern. Sie können Ihre 
                  Einstellungen jederzeit anpassen.{' '}
                  <a 
                    href="/datenschutz" 
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mehr erfahren
                  </a>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                <Dialog open={showDetails} onOpenChange={setShowDetails}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <Settings className="w-4 h-4 mr-2" />
                      Einstellungen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Cookie-Einstellungen</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <p className="text-sm text-muted-foreground">
                        Wählen Sie aus, welche Arten von Cookies Sie akzeptieren möchten. 
                        Notwendige Cookies sind immer aktiviert.
                      </p>
                      
                      {cookieCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <div key={category.key} className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="flex items-center space-x-2 mt-1">
                                <Checkbox
                                  id={category.key}
                                  checked={customPreferences[category.key]}
                                  onCheckedChange={(checked) => 
                                    handleCustomPreferenceChange(category.key, checked as boolean)
                                  }
                                  disabled={category.required}
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <Icon className="w-4 h-4 text-primary" />
                                  <label 
                                    htmlFor={category.key}
                                    className="text-sm font-medium cursor-pointer"
                                  >
                                    {category.title}
                                    {category.required && (
                                      <span className="text-xs text-muted-foreground ml-1">
                                        (erforderlich)
                                      </span>
                                    )}
                                  </label>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {category.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                      <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
                        <Button 
                          onClick={handleAcceptCustom}
                          variant="blue"
                          className="flex-1"
                        >
                          Auswahl speichern
                        </Button>
                        <Button 
                          variant="blue-outline" 
                          onClick={acceptAll}
                          className="flex-1"
                        >
                          Alle akzeptieren
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={acceptNecessary}
                  className="w-full sm:w-auto"
                >
                  Nur notwendige
                </Button>
                
                <Button 
                  onClick={acceptAll}
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookieConsent;