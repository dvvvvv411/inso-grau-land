import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MaklerrechtProbleme = () => {
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
            <Link to="/rechtsgebiete/maklerrecht" className="hover:text-white transition-colors">Maklerrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Probleme mit dem Makler</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Probleme mit dem Makler
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Für Käufer von Immobilien aber auch bei der Vermittlung von Mietwohnungen oder Versicherungsverträgen stellt sich die Maklerprovision als doch erheblicher Kostenfaktor dar. Die üblichen drei Prozent vom Kaufpreis zzgl. Umsatzsteuer bei Immobilien machen nicht selten einen fünfstelligen Betrag aus. Vor diesem Hintergrund ist es wichtig zu wissen, wann die Provision eines Maklers tatsächlich anfällt und wann man sich gegen sie wehren kann.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Arten von Maklerverträgen / Vertragsprüfung
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Im ersten Schritt ist bereits bei der Vertragsanbahnung zur prüfen, dass auch der richtige Auftrag erteilt wird. Wurde der Vertrag bereits geschlossen empfiehlt es sich, diesen anwaltlich überprüfen zu lassen, damit man weiß, welche Rechte und Pflichten der Vertrag auslöst. In der Praxis haben sich verschiedene Formen des Maklervertrags durchgesetzt. Je nach den Interessen der Beteiligten, können insbesondere folgende Vertragsgestaltungen gewählt werden:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Der einfache Maklervertrag</h3>
              <p>
                Ausgangspunkt ist der einfache Maklervertrag, der dem gesetzlichen Leitbild entspricht und zustande kommt, wenn nichts Abweichendes vereinbart wurde. Bei diesem Vertragstyp wird der Makler nicht verpflichtet, in irgendeiner Weise tätig zu werden. Der einfache Maklervertrag begründet lediglich ein Treueverhältnis zwischen dem Kunden und dem Makler, aufgrund dessen der Makler verpflichtet ist, die Interessen des Kunden zu wahren. Der Kunde hat das Recht, noch weitere Makler zu beauftragen. Hat ein anderer Makler dem Kunden etwa erfolgreich eine Immobilie vermittelt, muss der Kunden dem jeweils anderen Makler darüber informieren, ansonsten macht er sich diesem gegenüber schadensersatzpflichtig.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Der qualifizierte Makler-Aleinauftrag</h3>
              <p>
                Daneben gibt es noch den qualifizierten Makler-Alleinauftrag. Hierfür ist eine individuelle Vereinbarung zwischen Makler und Kunden erforderlich. Hier wird geregelt, dass der Kunde nicht berechtigt sein soll, das Objekt ohne Einschaltung des Maklers zu verkaufen.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Der normale Makler Alleinauftrag</h3>
              <p>
                Dagegen behält der Kunde beim normalen Makler-Alleinauftrag das Recht, die Immobilie auch selbst zu verkaufen. Schaltet der Kunde dazu jedoch vertragswidrig einen anderen Makler ein, macht er sich schadensersatzpflichtig.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Abwehr von Provisionsansprüchen eines Maklers
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Es kommt immer wieder vor, dass ein Makler zur Zahlung von Provision auffordert, obwohl er diese gar nicht verdient hat. In der Praxis kommt dies z.B. vor, wenn seine Tätigkeit nicht „kausal" für den Abschluss war. Teilweise ist auch die Frage wie es sich auswirkt, wenn die Kaufsache Mängel hat oder nicht alle Informationen weiter gegeben wurden.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Widerrufsrecht Maklervertrag
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Wird der Vertrag zwischen dem Makler und einem Verbraucher z.B. per Mail oder Telefon geschlossen, so steht dem Kunden ein Widerrufsrecht zu. Wird hierüber nicht belehrt, so kann der Vertrag auch später noch widerrufen werden.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Schadensersatzpflicht vom Makler bei unvollständiger Information
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Zu beachten ist, dass der Makler, um einer eventuellen Schadensersatzpflicht gegenüber seinem Kunden zu entgehen, diesem alle ihm bekannten Tatsachen rechtlichen Umstände mitteilen muss, die sich auf den zu vermittelnden bzw. nachzuweisenden Vertragsschluss beziehen und für den Willensentschluss des Kunden für Bedeutung sind.
              </p>
              <p>
                Dabei haftet der Makler nicht für Informationen, die er von Dritten hat. Er ist, sofern nichts anderes mit seinem Kunden vereinbart nicht zu eigenen Nachforschungen verpflichtet. Erst wenn er etwa Kenntnis von Mängeln des zu vermittelnden Kaufobjekts erlangt, ist er verpflichtet, seinen Kunden darauf hinzuweisen. Jedoch ist der Makler verpflichtet, seinem Kunden auch jene Informationen mitzuteilen, die für den Vertragsschluss mit dem Dritten entscheidend sein können, etwa wenn der von ihm nachgewiesene Käufer in finanzielle Schwierigkeiten gerät.
              </p>
            </div>
          </div>

          <div className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ausschluss des Kausalitätserfordernisses und erfolgsunabhängige Provision
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Hauptpflicht des Kunden ist die Zahlung der vom Makler verdienten Provision. Aufwendungen des Maklers werden nur ersetzt, wenn dies wirksam vereinbart wurde. Grundsätzlich, d.h. wenn nichts Abweichendes vereinbart wurde, entsteht der Anspruch auf Provisionszahlung jedoch nur, wenn die Maklertätigkeit erfolgreich war, also der zustande gekommene Hauptvertrag nachgewissen bzw. vermittelt wurde. Die Beweislast hierfür trägt der Makler, wobei bei einem gewissen sachlichen und zeitlichen Zusammenhang (bis zu einem Jahr) zwischen der Tätigkeit des Maklers und dem Hauptvertragsabschluss beim Kauf einer Immobilie oder der Vermittlung einer Mietwohnung die Kausalität seiner Tätigkeit vermutet wird. Das Kausalitätserfordernis kann ebenso wie das Erfolgserfordernis der Maklertätigkeit nur durch eine entsprechende Individualvereinbarung ausgeschlossen werden.
              </p>
              <p>
                So hatten wir in der Vergangenheit Fälle bei denen „im Kleingedruckten" versteckt war, dass auch wenn es gar nicht zu einer erfolgreichen Vermittlung kommt eine erhebliche erfolgsunabhängige Aufwandspauschale zu zahlen sei. Dies ist nicht rechtens. So konnten wir zum Beispiel erreichen, dass eine entsprechende Klausel vom Amtsgericht Würzburg mit Urteil vom 28.02.2017, Aktenzeichen 30 C 2567/16 für unwirksam erklärt wurde.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Vertretung durch Fachanwalt für Handels- und Gesellschaftsrecht
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In maklerrechtlichen Fragestellungen sind wir gerne mit unserem Team kompetent an Ihrer Seite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaklerrechtProbleme;