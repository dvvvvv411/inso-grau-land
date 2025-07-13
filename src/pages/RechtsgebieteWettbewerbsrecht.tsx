import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteWettbewerbsrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Wettbewerbsrecht"
        description="Schutz Ihrer Wettbewerbsposition und Abwehr unlauterer Konkurrenzpraktiken. Wir beraten präventiv bei Werbemaßnahmen und verteidigen Sie erfolgreich gegen wettbewerbsrechtliche Abmahnungen."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Wettbewerbsrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/d91bbd96-5d56-4440-8616-e67a101236b7.png" 
                alt="IT-Recht Team" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Es gilt zwar im Wettbewerbsrecht der Grundsatz der Wettbewerbsfreiheit, dies bedeutet jedoch nicht, dass jeder werben kann, wie er möchte. Stets sind die wettbewerbsrechtlichen „Spielregeln" einzuhalten. So gilt z.B. das Verbot irreführender Werbung.
              </p>
              <p>
                Besondere Vorsicht ist im Internet geboten. Zwar eröffnet dieses Medium kostengünstig und vergleichsweise einfach überregionale Märkte, doch werden Unternehmenswebsites häufig von Konkurrenten argwöhnisch beobachtet, ob nicht irgendwelche abmahnfähigen Wettbewerbsverstöße zu finden sind. Hierbei ist an fehlerhafte Widerrufserklärungen, unwirksame AGBs und an irreführende Werbeaussagen zu denken. Eine präventive Überprüfung dieser Aspekte durch einen im Wettbewerbsrecht tätigen Anwalt ist deshalb jedem Unternehmen zu empfehlen.
              </p>
              <p>
                Gleiches gilt für PR- und Werbeagenturen, die häufig gefordert sind, möglichst kreative Werbemaßnahmen für ihre Kunden zu gestalten.
              </p>
              <p>
                Bestimmte Berufsgruppen (z.B. Ärzte) haben bei Werbemaßnahmen zudem ergänzende wettbewerbsrechtliche Spezialvorschriften wie etwa das Heilmittelwerbegesetz sowie zusätzlich bestimmte berufsrechtliche Vorgaben zu beachten.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                2. Abmahnungen
              </h2>
              <p>
                Bei Verletzung der wettbewerbs- und berufsrechtlichen „Spielregeln" droht unmittelbar eine kostenträchtige Abmahnung (z.B. durch einen Mitbewerber). Der Abgemahnte wird zur Abgabe einer (regelmäßig vorbereitet beiliegenden) Unterlassungserklärung aufgefordert und soll der Gegenseite die entstandenen Anwaltskosten zahlen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Was in einem solchen Fall tun?
              </h3>

              <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                a) Ignorieren – in der Hoffnung, dass nichts passiert?
              </h4>
              <p>
                Unternehmen Sie überhaupt nichts, droht Ihnen der Erlass einer einstweiligen Verfügung und/oder eine Klage mit weiteren hohen Kosten.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                b) Die Unterlassungserklärung unterschreiben und die Anwaltsrechnung voll zahlen?
              </h4>
              <p>
                Unterschreiben Sie die Unterlassungserklärung und zahlen die Anwaltsrechnung in voller Höhe, wissen Sie nicht, ob Sie tatsächlich wettbewerbswidrig geworben haben. Möglicherweise war auch die von Ihnen unterzeichnete Unterlassungserklärung viel zu weit gefasst und die Anwaltsgebühren überhöht.
              </p>

              <p className="font-semibold">
                Beides ist also nicht zu empfehlen!
              </p>

              <p>
                Verlassen Sie sich im Wettbewerbsrecht deshalb nicht auf Ihr Gefühl. Sobald Ihnen eine wettbewerbsrechtliche Abmahnung zugeht, sollten Sie zeitnah anwaltlichen Rat einholen.
              </p>

              <p>
                In solchen Fällen prüfen wir die ausgesprochene Abmahnung und stimmen das weitere Vorgehen mit Ihnen ab:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="list-disc">
                  <strong>Handelt es sich überhaupt um einen wettbewerbswidrigen Verstoß?</strong> Wir prüfen für Sie, ob das vorgeworfene Verhalten überhaupt wettbewerbswidrig ist.
                </li>
                <li className="list-disc">
                  <strong>Haben Sie tatsächlich den vorgeworfenen Rechtsverstoß begangen?</strong> Wir stellen fest, ob Sie für den Verstoß verantwortlich gemacht werden können.
                </li>
                <li className="list-disc">
                  <strong>Ist die vorbereitete Unterlassungserklärung zu weitgehend?</strong> Wir passen eine zu weitgehende Erklärung für Sie den rechtlichen Erfordernissen entsprechend an.
                </li>
                <li className="list-disc">
                  <strong>Ist die Anwaltsrechnung zu hoch,</strong> da vielleicht ein übermäßiger „Streitwert" angesetzt worden ist? Wir ermitteln, ob der angegebene Streitwert angemessen ist.
                </li>
                <li className="list-disc">
                  Falls die Abmahnung vollständig „zurückgewiesen" werden soll, klären wir Sie über das Prozessrisiko (Erfolgsaussichten, Anwalts- und Gerichtskosten) auf.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                3. Unser Angebot
              </h2>
              <p>
                Unser Angebot im Bereich des Wettbewerbsrechts umfasst neben der Verteidigung gegen Abmahnungen folgende Leistungen:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="list-disc">
                  Präventive Beratung von Unternehmen, Ärzten, PR- und Werbeagenturen insbesondere vor geplanten Werbemaßnahmen oder Webauftritten
                </li>
                <li className="list-disc">
                  Vertretung in wettbewerbsrechtlichen Auseinandersetzungen aller Art (Abmahnung, s.o., einstweiliges Verfügungsverfahren u.ä.)
                </li>
              </ul>

              <p>
                Mandate können aus dem gesamten Bundesgebiet wahrgenommen werden. Auf Wunsch kann die gesamte Abwicklung auch via Telefon, Fax und E-Mail erfolgen.
              </p>
            </div>
          </div>

          {/* Wettbewerbsrecht A-Z Card */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Wettbewerbsrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes mit Schwerpunkt im Wettbewerbsrecht kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Wettbewerbsrecht mit verständlicher Sprache.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/wettbewerbsrecht/a-z/" className="inline-flex items-center">
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

export default RechtsgebieteWettbewerbsrecht;