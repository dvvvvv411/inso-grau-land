import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, Clock, MapPin, Printer } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StandardHero from "../components/StandardHero";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { useToast } from "@/hooks/use-toast";
import contactOfficeImage from "../assets/contact-office.jpg";

const formSchema = z.object({
  salutation: z.string().min(1, "Bitte wählen Sie eine Anrede"),
  fullName: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(5, "Telefonnummer muss mindestens 5 Zeichen lang sein"),
  requestCallback: z.boolean().default(false),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Sie müssen den Datenschutzbestimmungen zustimmen",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salutation: "",
      fullName: "",
      email: "",
      phone: "",
      requestCallback: false,
      message: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Kontakt" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <StandardHero
        title="Kontakt"
        description="Kontaktieren Sie uns. Wir freuen uns, Sie persönlich kennenzulernen."
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={contactOfficeImage} 
              alt="Moderne Kanzleiräume" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent flex items-center">
              <div className="max-w-2xl mx-auto text-white p-8">
                <h2 className="text-3xl font-bold mb-4">Persönliche Beratung vor Ort</h2>
                <p className="text-lg text-blue-100">
                  Besuchen Sie uns in unseren modernen Kanzleiräumen und lassen Sie sich 
                  von unserem erfahrenen Team persönlich beraten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Information */}
            <div className="bg-gray-100 p-12">
              <div className="sticky top-8">
                <h3 className="text-2xl font-bold text-[#004595] mb-6">Kontaktdaten</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Heß & Partner</h4>
                    <p className="text-gray-600">Rechtsanwälte und Steuerberater</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#004595] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Anschrift</p>
                      <p className="text-gray-600 text-sm">
                        Marienstr. 19/20<br />
                        10117 Berlin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#004595] flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Telefon</p>
                      <p className="text-gray-600 text-sm">+49 (0) 30 75420496</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Printer className="w-5 h-5 text-[#004595] flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Fax</p>
                      <p className="text-gray-600 text-sm">+49 (0) 30 75420497</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#004595] flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">E-Mail</p>
                      <p className="text-gray-600 text-sm">info@hess-anwaltskanzlei.de</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#004595] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Öffnungszeiten</p>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Mo - Do: 8:00 - 18:00 Uhr</p>
                        <p>Fr: 8:00 - 16:00 Uhr</p>
                        <p>Sa, So: Geschlossen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12">
              <h3 className="text-2xl font-bold text-[#004595] mb-6">Nachricht senden</h3>
              <p className="text-gray-600 mb-8">
                Nutzen Sie unser Kontaktformular für eine schnelle und unkomplizierte Kontaktaufnahme. 
                Wir melden uns zeitnah bei Ihnen zurück.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="salutation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Anrede *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Bitte wählen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="herr">Herr</SelectItem>
                              <SelectItem value="frau">Frau</SelectItem>
                              <SelectItem value="divers">Divers</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vollständiger Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Vor- und Nachname" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-Mail-Adresse *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="ihre@email.de" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefonnummer *</FormLabel>
                          <FormControl>
                            <Input placeholder="+49 30 123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="requestCallback"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Rückruf gewünscht</FormLabel>
                          <p className="text-sm text-gray-600">
                            Bitte rufen Sie mich zurück, um einen Termin zu vereinbaren.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ihre Nachricht *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Beschreiben Sie Ihr Anliegen..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Datenschutzerklärung *</FormLabel>
                          <p className="text-sm text-gray-600">
                            Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung 
                            meiner Daten zur Bearbeitung meiner Anfrage zu. Die Einwilligung kann 
                            jederzeit widerrufen werden.
                          </p>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#004595] hover:bg-blue-700 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;