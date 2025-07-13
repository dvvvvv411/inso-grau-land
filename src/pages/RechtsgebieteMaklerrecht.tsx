import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteMaklerrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Maklerrecht"
        description="Der Makler fordert seine Provision ein, aber der Kunde bezahlt nicht? Wie ist eine Maklerklausel zu beurteilen? Muss ein Vorkaufsberechtigter bei Ausübung seines Vorkaufsrechts die Maklerprovision bezahlen? Diese und zahlreiche weitere Rechtsfragen stellen sich im Maklerrecht."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Maklerrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div 
              className="w-full h-64 md:h-80 rounded-lg shadow-lg relative bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 69, 149, 0.6), rgba(0, 86, 179, 0.4)), url('/lovable-uploads/6f662738-736c-4ade-859f-1733b3ea9f0a.png')`
              }}
            >
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hilfe vom Rechtsanwalt, wenn es zum Rechtsstreit kommt
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Das Maklerrecht ist zwar in den §§ 652 bis 655 BGB gesetzlich geregelt. Trotzdem zeigen die Erfahrungen in der Praxis, dass die vorhandenen gesetzlichen Regelungen der auf dem zweiten Blick sehr komplexen Materie des Maklerrechts nicht gerecht werden. Vielmehr muss jeder Fall gesondert und unter Zugrundelegung der aktuellen Rechtsprechung betrachtet werden.
              </p>
              <p>
                Das Maklerrecht ist im Gesetz nur lückenhaft geregelt. Dies setzt beim beratenden Rechtsanwalt tiefgehende Kenntnisse der aktuellen Rechtsprechung und der Gesetzeslage voraus. Aufgrund unserer jahrelangen Erfahrungen mit dem Maklerrecht verfügen wir über die notwenige Kompetenz, Ihnen bei entsprechenden Rechtsfragen zur Seite zu stehen.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Was ist ein Maklervertrag und wie kommt er zustande?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Der Maklervertrag ist auf den Nachweis oder die Vermittlung eines Hauptvertrages gerichtet. Beteiligte des Maklervertrags sind somit der Makler und sein Auftraggeber, also der Kunde. In den meisten Fällen handelt es sich beim Hauptvertrag um einen Immobilienkauf- oder Mietvertrag zwischen dem Auftraggeber und einem Dritten. Dies ist aber nicht zwingend, ein Maklervertrag kann sich etwa auch auf den Nachweis oder die Vermittlung eines Ausbildungs-oder Arbeitsplatzes beziehen. Zu beachten ist, dass jeweils neben den §§ 652 ff. BGB auch noch spezialgesetzliche Regelungen zum Maklerrecht existieren, die das Verhältnis von Makler und seinem Auftraggeber konkretisieren. So gilt bei der Vermittlung bzw. dem Nachweis eines Mietvertrages auch das Wohnungsvermittlungsgesetz (WoVermG).
              </p>
              <p>
                Obwohl ein Formerfordernis grundsätzlich nicht besteht, sollte der Maklervertrag idealerweise eine Vereinbarung zur Höhe der Maklerprovision enthalten, weil gem. § 653 Absatz 2 BGB ansonsten die übliche Maklerprovision als vereinbart gilt. Die Beweislast für den Vertragsschluss liegt dabei beim Makler.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wann entsteht der Provisionsanspruch des Maklers?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Ist ein Maklervertrag wirksam zustande gekommen, ist der Auftraggeber im Falle des Erfolgs der Vermittlung bzw. des Nachweises eines wirksamen Hauptvertrages zur Zahlung der vereinbarten bzw. ansonsten üblichen Maklerprovision verpflichtet. Zu beachten ist, dass es den Beteiligten aufgrund ihrer Vertragsfreiheit auch zusteht, eine erfolgsunabhängige Provisionsvereinbarung zu treffen oder etwa den Maklervertrag unter einer Bedingung zu vereinbaren, etwa, dass der Provisionsanspruch nur ab einer bestimmten Kaufpreishöhe des zu vermittelnden bzw. nachzuweisenden Kaufvertrags zustande kommen soll.
              </p>
              <p>
                Die Tätigkeit des Maklers muss aufgrund der Erfolgsbezogenheit des Maklervertrags für den Abschluss des Hauptvertrags zumindest mitursächlich geworden sein, damit ihm ein Anspruch auf die Provision zusteht. Daher stehen mehreren Maklern nebeneinander jeweils die entsprechenden Provisionsansprüche zu, wenn deren Tätigkeiten jeweils mitursächlich für den Abschluss des Hauptvertrags waren.
              </p>
              <p>
                An den Nachweis der Mitursächlichkeit der Maklertätigkeit werden von der Rechtsprechung je nach der konkreten Fallgestaltung unterschiedliche Anforderungen gestellt. So gilt zugunsten des Maklers eine Vermutungsregelung für die Mitursächlichkeit seiner Tätigkeit, wenn der Hauptvertrag in einem angemessenen Zeitabstand nach dem Maklervertrag zustande kommt. In diesem Fall muss der Auftraggeber die Unterbrechung des Kausalzusammenhangs nachweisen.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Rechtsprechung zum Maklerrecht
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p><strong>Doppelmaklerschaft:</strong> AG München, Urteil vom 02.07.2010</p>
              <p><strong>Makler ist nicht Kostenschuldner des Notars:</strong> OLG Düsseldorf, Beschluss vom 27. April 2017</p>
              <p><strong>Vorkaufsberechtigter, Maklerklausel:</strong> Urteil des BGH's 14.12.1995</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kompetente Beratung durch unsere Rechtsanwälte für Maklerrecht
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In maklerrechtlichen Fragestellungen sind wir gerne mit unserem Team kompetent an Ihrer Seite. Sofern Sie Fragen zur Maklerprovision haben, klären wir Sie gerne darüber auf.
              </p>
              <p>
                Über ein Pauschalhonorar oder ein Stundenhonorar wird individuell mit Ihnen und abhängig von der rechtlichen Fragestellung, der Schwierigkeit und dem Umfang Ihrer Angelegenheit in einem gemeinsamen Beratungsgespräch entschieden. Vereinbaren Sie für Ihr Anliegen einfach ein Gespräch, das dank unserer technischen Ausstattung auch telefonisch oder online durchgeführt werden kann. Darüber hinaus können Sie auch gerne unseren kostenlosen „ Rückruf-Service " nutzen.
              </p>
            </div>
          </div>

          {/* Maklerrecht A-Z Card */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Maklerrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Maklerrecht mit verständlicher Sprache.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/maklerrecht/a-z/" className="inline-flex items-center">
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RechtsgebieteMaklerrecht;