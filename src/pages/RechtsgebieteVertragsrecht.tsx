import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RechtsgebieteVertragsrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#004595] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <div className="flex items-center text-blue-200 mb-6 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Rechtsgebiete</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Vertragsrecht</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Vertragsrecht
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Die Rechtsanwälte und Fachanwälte von Steinbock & Partner sind Fachleute für Vertragsfragen und Vertragstexte aller Art. Wenn Sie eine Vertragsformulierung benötigen, einen Vertrag auf seine Folgen prüfen lassen wollen oder Vertragskonflikte bestehen, sind unsere Anwälte für Vertragsrecht für Sie da.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/api/placeholder/400/300" 
                alt="Team Vertragsrecht" 
                className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sie suchen einen Rechtsanwalt für Vertragsrecht?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Die Rechtsanwälte von Steinbock & Partner sind Fachleute, wenn es um Verträge, Vertragsklauseln und vertragliche Ansprüche geht:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="list-disc">
                  Wir prüfen Ihren Vertrag – damit Sie genau wissen, wozu die Vertragsvereinbarungen Sie und die Gegenseite verpflichten und ob in den Klauseln rechtliche Probleme lauern.
                </li>
                <li className="list-disc">
                  Wir formulieren hieb- und stichfeste Vertragstexte, die Ihre Interessen mit der geltenden Rechtslage optimal in Übereinstimmung bringen.
                </li>
                <li className="list-disc">
                  Wir beraten Sie bei Vertragsverhandlungen. Verhandlungsgeschick und Rechtskompetenz in Kombination bringen in Vertragsfragen den Erfolg.
                </li>
                <li className="list-disc">
                  Wir setzen Ihre Rechte durch und vertreten Sie bei Auseinandersetzungen. Dafür wenden wir, stets in Absprache mit Ihnen, das gesamte Instrumentarium an: Anwaltliche Schreiben, eine mögliche Vertragsstrafe, wenn nötig auch eine Klage vor Gericht. Gemeinsam gewährleisten wir Ihre vertraglich gesicherten Ansprüche und wehren unberechtigte Forderungen ab.
                </li>
                <li className="list-disc">
                  Wir beraten Sie zur Kündigung, zur Möglichkeit einer Anfechtung, dem Widerruf bei Verbraucherverträgen und der Auflösung von Verträgen durch einen Aufhebungsvertrag. Als Rechtsanwälte für Vertragsrecht wissen wir genau, wann die jeweiligen Voraussetzungen vorliegen. Wir sagen Ihnen, ob Sie aus einem Vertrag wieder herauskommen und unterstützen Sie beim Verhandeln über eine einvernehmliche Vertragsauflösung.
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Im Vertragsrecht lauern viele Fallen – vor denen Sie unsere Anwälte bewahren
              </h3>
              <p>
                Mangelhafte Vertragsgestaltungen richten viel Schaden an. Vertragsrechtliche Bestimmungen können unverhofft zum Bumerang werden. Manchmal zeigt sich das Risiko erst nach vielen Jahren. Nur drei Beispiele:
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
                Um ein optimales Verhandlungsergebnis zu gewährleisten, müssen die rechtlichen Rahmenbedingungen und die eigene Situation analysiert werden. Wo liegen die eigenen Interessen, welche Ziele verfolgt der Vertragspartner? Welchen Spielraum an Zugeständnissen räumt man ein, wo zieht man die Grenze? Welche späteren Konflikte sind möglich, wie lässt sich eine Lösung vorwegnehmen? Die Anwälte von Steinbock & Partner begleiten Ihre Vertragsverhandlungen mit viel Erfahrung und dem Blick für die Praxis.
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
                    Wir möchten Ihnen die Möglichkeit geben, verschiedene Situationen aus dem Blickwinkel eines Anwaltes mit Schwerpunkt im Vertragsrecht kennen zu lernen. Aus diesem Grund erklären wir Anwältinnen und Anwälte zahlreiche Fachbegriffen aus dem Vertragsrecht mit verständlicher Sprache.
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