import { useState } from "react";
import { Upload, Mail, Phone, User, MessageSquare, Briefcase } from "lucide-react";
import StandardHero from "../components/StandardHero";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";

const Stellenangebote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    message: "",
    resume: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional form - just for demonstration
    console.log("Form submission:", formData);
  };

  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Stellenangebote" }
  ];

  return (
    <div className="min-h-screen">
      <StandardHero
        title="Stellenangebote"
        description="Werden Sie Teil unseres dynamischen Teams und gestalten Sie mit uns die Zukunft der Rechtsberatung."
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Verstärken Sie unser Team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Wir sind eine moderne Rechtsanwaltskanzlei mit Fokus auf Wirtschaftsrecht, 
              Steuerberatung und komplexe Rechtsberatung. Unser Team wächst stetig und wir 
              suchen motivierte Fachkräfte, die mit uns gemeinsam erfolgreich sein möchten.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Moderne Arbeitsplätze</h3>
                <p className="text-gray-600">State-of-the-art Büroausstattung und flexible Arbeitsmodelle für eine optimale Work-Life-Balance.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Weiterbildung</h3>
                <p className="text-gray-600">Kontinuierliche Fortbildungsmöglichkeiten und Unterstützung bei der beruflichen Entwicklung.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Teamgeist</h3>
                <p className="text-gray-600">Ein kollegiales Arbeitsumfeld mit flachen Hierarchien und direkter Kommunikation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Openings Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Aktuelle Stellenausschreibungen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Rechtsanwalt (m/w/d) - Wirtschaftsrecht
                </CardTitle>
                <CardDescription>Vollzeit | Unbefristet | Hamburg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Wir suchen einen erfahrenen Rechtsanwalt mit Schwerpunkt Wirtschaftsrecht 
                  für unser wachsendes Team. Ideale Kandidaten haben mindestens 3 Jahre Berufserfahrung.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Beratung von Unternehmen</li>
                  <li>• Vertragsgestaltung</li>
                  <li>• Prozessführung</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Steuerberater (m/w/d)
                </CardTitle>
                <CardDescription>Vollzeit | Unbefristet | Hamburg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Zur Verstärkung unserer Steuerberatungsabteilung suchen wir einen 
                  qualifizierten Steuerberater mit Expertise in Unternehmenssteuerrecht.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Steuerliche Beratung</li>
                  <li>• Jahresabschlüsse</li>
                  <li>• Steuerplanung</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Rechtsanwaltsfachangestellte (m/w/d)
                </CardTitle>
                <CardDescription>Vollzeit | Unbefristet | Hamburg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Für unser Sekretariat suchen wir eine erfahrene Rechtsanwaltsfachangestellte 
                  zur Unterstützung unserer Anwälte in allen administrativen Belangen.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Terminkoordination</li>
                  <li>• Schriftverkehr</li>
                  <li>• Aktenführung</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Praktikant Rechtswissenschaften (m/w/d)
                </CardTitle>
                <CardDescription>3-6 Monate | Befristet | Hamburg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Wir bieten Studierenden der Rechtswissenschaften die Möglichkeit, 
                  praktische Erfahrungen in einer modernen Kanzlei zu sammeln.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Recherche</li>
                  <li>• Schriftsätze erstellen</li>
                  <li>• Mandantenkontakt</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Bewerbung einreichen
              </CardTitle>
              <CardDescription className="text-lg">
                Senden Sie uns Ihre Bewerbungsunterlagen über das nachfolgende Formular
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Vollständiger Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Max Mustermann"
                        className="pl-10"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-Mail-Adresse *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="max@example.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Telefonnummer
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+49 40 123456789"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="areaOfInterest" className="text-sm font-medium">
                    Interessensbereich *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("areaOfInterest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wählen Sie einen Bereich aus" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="anwalt-wirtschaftsrecht">Rechtsanwalt - Wirtschaftsrecht</SelectItem>
                      <SelectItem value="steuerberater">Steuerberater</SelectItem>
                      <SelectItem value="rechtsanwaltsfachangestellte">Rechtsanwaltsfachangestellte</SelectItem>
                      <SelectItem value="praktikant">Praktikant Rechtswissenschaften</SelectItem>
                      <SelectItem value="initiativbewerbung">Initiativbewerbung</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Anschreiben / Nachricht *
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="message"
                      placeholder="Erzählen Sie uns etwas über sich und Ihre Motivation..."
                      className="pl-10 min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-sm font-medium">
                    Lebenslauf (PDF) *
                  </Label>
                  <div className="relative">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="resume"
                        className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-6 h-6 mb-2 text-gray-400" />
                          <p className="text-sm text-gray-500">
                            {formData.resume ? formData.resume.name : "PDF hochladen oder hier klicken"}
                          </p>
                        </div>
                        <input
                          id="resume"
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          onChange={handleFileChange}
                          required
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" className="flex-1">
                    Bewerbung absenden
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      areaOfInterest: "",
                      message: "",
                      resume: null
                    })}
                  >
                    Formular zurücksetzen
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nur für die Bearbeitung 
                  Ihrer Bewerbung verwendet.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Stellenangebote;