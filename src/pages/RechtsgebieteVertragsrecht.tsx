import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHero from "@/components/StandardHero";

const RechtsgebieteVertragsrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StandardHero
        title="Vertragsrecht"
        description="Expertenberatung für rechtssichere Vertragsgestaltung und -prüfung. Wir schützen Ihre Interessen bei Vertragsverhandlungen, setzen Ansprüche durch und entwickeln maßgeschneiderte Vertragslösungen."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rechtsgebiete", href: "/" },
          { label: "Vertragsrecht" }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/a90d4293-73bd-4088-893a-fd787049c2e7.png" 
                alt="Team Vertragsrecht" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004595]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ihre Vertragsrechtsexperten für rechtssichere Lösungen
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Als spezialisierte Vertragsrechtsexperten von Heß & Partner entwickeln wir maßgeschneiderte Lösungen für alle vertraglichen Herausforderungen:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="list-disc">
                  <strong>Vertragsprüfung:</strong> Wir analysieren Ihre Verträge gründlich, damit Sie genau verstehen, welche Rechte und Pflichten entstehen und potenzielle Risiken frühzeitig erkennen.
                </li>
                <li className="list-disc">
                  <strong>Vertragsgestaltung:</strong> Wir entwickeln rechtssichere Vertragstexte, die Ihre Interessen optimal schützen und alle rechtlichen Anforderungen erfüllen.
                </li>
                <li className="list-disc">
                  <strong>Vertragsverhandlungen:</strong> Wir begleiten Sie strategisch bei Verhandlungen und kombinieren Verhandlungsgeschick mit juristischer Präzision für optimale Ergebnisse.
                </li>
                <li className="list-disc">
                  <strong>Rechtsdurchsetzung:</strong> Wir setzen Ihre vertraglichen Ansprüche konsequent durch - von anwaltlichen Schreiben über Vertragsstrafen bis hin zur Klage vor Gericht.
                </li>
                <li className="list-disc">
                  <strong>Vertragsauflösung:</strong> Wir beraten Sie zu Kündigungen, Anfechtung, Widerruf und einvernehmlichen Vertragsauflösungen und prüfen alle rechtlichen Möglichkeiten.
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Vermeidung kostspieliger Vertragsfallen durch Expertenwissen
              </h3>
              <p>
                Mangelhafte Vertragsgestaltung kann erhebliche finanzielle Schäden verursachen. Unsere Rechtsexperten schützen Sie vor versteckten Risiken und rechtlichen Fallen, die sich oft erst Jahre später zeigen. Drei typische Risikobereiche:
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Für viele Verträge bestehen keine Formvorschriften – sie gelten auch ohne ausformulierten Vertragstext
              </h4>
              <p>
                In vielen Fällen ist es möglich, dass ein Vertrag ohne schriftliches Dokument zustande kommt, etwa durch E-Mails, Chat-Nachrichten oder rein mündlich. Bindend ist so eine vertragliche Vereinbarung, etwa ein Kaufvertrag, dann trotzdem. Sogar wortlos, nur durch „konkludentes" Handeln, können Sie Verträge abschließen.
              </p>
              <p>
                Wenn der Vertrag schnell und informell zustande kommt, bleiben viele Punkte offen. Über nicht im Vertrag geregelte Details kann man später vor Gericht trefflich streiten. Oder es gelten die Regeln des Bürgerlichen Gesetzbuchs, quasi als Standardeinstellung, zum Beispiel zur Gewährleistung und Haftung. Die Vorgaben des BGB müssen jedoch keineswegs den eigenen Interessen entsprechen. Deutlich besser: Alle wichtigen Aspekte vorher klären und in einem schriftlichen, anwaltlich geprüften Vertragsdokument festhalten. Jede Klausel ist zu prüfen und jedes relevante Zukunftsszenario zu berücksichtigen.
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Für bestimmte Verträge gelten bestimmte Formvorschriften
              </h4>
              <p>
                Es gibt auch andere Fälle. Je nach Rechtsgebiet und den Beteiligten wird für bestimmte Verträge eine Schrift- oder Textform verlangt. Zudem kann eine notarielle Beglaubigung erforderlich sein. Wenn Schriftformerfordernis besteht, ist der Vertrag schriftlich und mit eigenhändiger Unterschrift vorzulegen, um gültig zu sein. In manchen Fällen ist auch eine „qualifizierte digitale Signatur" möglich. Schriftform ist unter anderem bei Arbeitsverträgen und Verbraucherdarlehensverträgen vorzulegen, ebenso bei befristeten Gewerbemietverträgen. Auch der Vertrag selbst kann eine Schriftformklausel enthalten. Änderungen oder eine Kündigung sind dann in Schriftform zu erfolgen. Zur Schriftform gehört zudem die Einheitlichkeit der Urkunde. Damit ist eine spätere Vertragsergänzung, die auf einem eigenen Dokument steht, rechtlich nur wirksam, wenn sie auf den ursprünglichen Vertrag korrekt Bezug nimmt.
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Nicht jede vorteilhafte Vertragsklausel ist auch wirksam
              </h4>
              <p>
                Grundsätzlich herrscht Vertragsfreiheit. Die Vertragspartner haben die Option, ihre Sache so regeln, wie sie es wollen. Doch in der Praxis sorgen Gesetze und Rechtsprechung für klare Grenzen. Ein Beispiel: Für Verträge mit vorformulierten Vertragsbedingungen gelten besondere Anforderungen. „Überraschende und mehrdeutige Klauseln" etwa sind in Formularverträgen untersagt. Außerdem unterliegen sie einer „Inhaltskontrolle": Sind die Rechte und Pflichten, die sich aus einer Klausel ergeben, nicht wirklich klar und verständlich, kann die Bestimmung schnell unwirksam sein. An den Rest des Vertrags bleibt man jedoch gebunden.
              </p>
              <p>
                Für viele Vertragstypen sind Kenntnisse des jeweiligen Rechtsgebiets notwendig. Um Verträge optimal aufzusetzen, muss man wissen, welche besonderen Vorschriften für die vorliegende Vertragsart gelten und wie die Rechtsprechung zu der Materie aussieht. Sonst ist beispielsweise im Mietvertrag die Klausel zu den Schönheitsreparaturen unwirksam oder im Arbeitsvertrag die Regelung zum Wettbewerbsverbot. Gerade Klauseln, die viel Spielraum lassen, erweisen sich im Streitfall oft als wirkungslos.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Anwälte mit Erfahrung in Vertragsverhandlungen
              </h3>
              <p>
                Nicht nur die Vertragsgestaltung selbst profitiert von vertragsrechtlichem Fachwissen. Das gilt auch für Vertragsverhandlungen.
              </p>
              <p>
                Um ein optimales Verhandlungsergebnis zu gewährleisten, müssen die rechtlichen Rahmenbedingungen und die eigene Situation analysiert werden. Wo liegen die eigenen Interessen, welche Ziele verfolgt der Vertragspartner? Welchen Spielraum an Zugeständnissen räumt man ein, wo zieht man die Grenze? Welche späteren Konflikte sind möglich, wie lässt sich eine Lösung vorwegnehmen? Die Anwälte von Heß & Partner begleiten Ihre Vertragsverhandlungen mit viel Erfahrung und dem Blick für die Praxis.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Raus aus dem Vertrag? Auch dabei kann der Anwalt helfen
              </h3>
              <p>
                Grundsätzlich gilt zwar: Abgeschlossene Verträge, binden einen auch. Trotzdem gibt es in vielen Fällen Möglichkeiten, sich von einem unvorteilhaften Vertrag zu verabschieden:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="list-disc">
                  Die Anfechtung eines Vertrags ist möglich, wenn er unter nicht ordnungsgemäßen Umständen zustande gekommen ist. Allerdings liegen die Voraussetzungen nur in wenigen Fällen vor. Zum Beispiel haben Sie die Möglichkeit einen Vertrag anzufechten, wenn man mit Drohungen zur Unterschrift genötigt wurde. Andere Gründe für eine Anfechtung sind der Inhaltsirrtum oder ein Eigenschaftsirrtum in Bezug auf das Geschäft, um das es im Vertrag ging.
                </li>
                <li className="list-disc">
                  Der Widerruf eines Vertrags ist nur in bestimmten Fällen und bei Verbrauchern möglich. So hat ein Verbraucher ein Widerrufsrecht, wenn er beim Online-Shopping eine Bestellung über das Internet abschloss. Es gilt nur während bestimmter Fristen. Auch bei Kreditverträgen, Bauverträgen und Versicherungsverträgen haben Verbraucher ein Widerrufsrecht. Der Vertragspartner muss über die Widerrufsfrist korrekt informieren, sonst dauert die Widerrufsmöglichkeit unbefristet.
                </li>
                <li className="list-disc">
                  Die Möglichkeit zur ordentlichen Kündigung eines Vertrags hängt von der Vertragsart und den Vertragsbestimmungen ab. Sie kann auch ausgeschlossen sein, etwa bei befristeten Verträgen. Dagegen ist eine außerordentliche Kündigung immer möglich. Sie setzt jedoch voraus, dass die Vertragsbeziehung nicht länger zumutbar ist.
                </li>
              </ul>
              <p>
                Nicht jeder Vertrag lässt sich zu Fall bringen. Wenn es dafür keine rechtliche Handhabe gibt, bleibt als Möglichkeit, über eine Vertragsauflösung zu verhandeln. Als Rechtsanwälte haben wir sehr viele Vertrags- und Vertragsauflösungsverhandlungen begleitet und können Sie dabei gezielt beraten.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Vertragsrecht prägt unsere Lebenswelt
              </h3>
              <p>
                Ohne Anwalt ist ein typischer Vertrag kaum in seiner vollen Tragweite zu verstehen. Und dennoch haben wir alle ständig mit Verträgen zu tun, nicht nur Juristen. Selbst wenn uns das häufig nicht klar ist: Vertragsrecht prägt das moderne Leben.
              </p>
              <ul className="space-y-4 ml-6">
                <li className="list-disc">
                  Viele unserer persönlichen, privaten Beziehungen erhalten eine Vertragsbasis. Vereinbarungen zu ganz privaten Fragen hält beispielsweise der Ehevertrag oder auch ein Erbvertrag fest.
                </li>
                <li className="list-disc">
                  Auch unsere Wohnung hat in der Regel eine Vertragsgrundlage – einen Wohnmietvertrag oder einen Immobilienkaufvertrag zum Beispiel. Die Teilungserklärung der Wohneigentumsanlage ist ebenfalls ein Vertrag.
                </li>
                <li className="list-disc">
                  Dass wir etwas unser Eigentum nennen, ein bestimmtes Einkommen beanspruchen oder auf unsere finanzielle Sicherung vertrauen können, beruht auf vielen unterschiedlichen Verträgen: Kaufverträgen wie dem Immobilienkaufvertrag, dem Arbeitsvertrag, dem Kontoführungsvertrag mit der Bank, dem Versicherungsvertrag über die Lebensversicherung oder dem Vertrag mit einer Fonds-Verwaltung, um nur einige zu nennen.
                </li>
                <li className="list-disc">
                  Dass es ohne Verträge kein Geschäftsleben gibt, ist ohnehin klar: Eine Personen- oder Kapitalgesellschaft basiert auf einem Vertrag. Jeder Kauf, jede Transaktion, jede Bestellung und jedes Angebot hat eine vertragsrechtliche Seite. Das Einstellen von Mitarbeitern und Aufträge an Dienstleister und Zulieferer beruhen auf Verträgen. Selbst der Verkauf oder die Übergabe eines Betriebs als Abschluss einer erfolgreichen geschäftlichen Laufbahn wird vertraglich geregelt.
                </li>
                <li className="list-disc">
                  Verträge bestimmen auch unseren Alltag. Die Liste der Beispiele ist endlos. Den Sport nach Feierabend ermöglicht der Fitnessstudio-Vertrag, das Telefonieren erfordert einen Handy-Vertrag, das Shoppen im Internet ist ohne Vertragsabschluss unmöglich. Selbst beim Einkauf im Supermarkt kommt ein Vertrag zustande – auch wenn uns das meist erst bewusst wird, wenn wir eine Reklamation haben.
                </li>
              </ul>
            </div>
          </div>

          {/* Vertragsrecht A-Z Card */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Vertragsrecht von A-Z
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Umfassendes Expertenwissen zu allen Aspekten des Vertragsrechts. Wir erläutern komplexe Rechtssituationen verständlich und entwickeln praktische Lösungsstrategien für Ihre vertraglichen Herausforderungen.
                  </p>
                  <Button asChild className="bg-[#004595] hover:bg-blue-700 text-white">
                    <Link to="/vertragsrecht/a-z/" className="inline-flex items-center">
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

export default RechtsgebieteVertragsrecht;