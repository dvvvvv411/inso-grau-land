import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StandardHero from "../components/StandardHero";
import newsImage1 from "../assets/news-placeholder-1.jpg";

const NewsArticle1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <StandardHero
        title="20 % Schadensersatz gegenüber der Bank bei Kreditkartenmissbrauch"
        description="Das Oberlandesgericht (OLG) Dresden hat am 5. Mai 2025 (Az. 8 U 1482/24) ein bedeutendes Urteil zur Haftung von Banken bei Phishing-Angriffen gefällt."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: "20 % Schadensersatz gegenüber der Bank bei Kreditkartenmissbrauch" }
        ]}
      />

      {/* Article Content */}
      <article className="py-20 px-4 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src={newsImage1}
              alt="20 % Schadensersatz gegenüber der Bank bei Kreditkartenmissbrauch"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Das Oberlandesgericht (OLG) Dresden hat am 5. Mai 2025 (Az. 8 U 1482/24) ein bedeutendes Urteil zur Haftung von Banken bei Phishing-Angriffen gefällt.
            </p>

            <p className="mb-6">
              Im Mittelpunkt stand das pushTAN-Verfahren der Sparkassen und die Frage, ob dieses den Anforderungen an eine „starke Kundenauthentifizierung" gemäß § 55 des Zahlungsdiensteaufsichtsgesetzes (ZAG) und der zweiten Zahlungsdiensterichtlinie (PSD2) entspricht.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Hintergrund der Entscheidung
            </h2>

            <p className="mb-6">
              Ein Kunde der Sparkasse nutzte das Online-Banking über das S-pushTAN-Verfahren. Nach Erhalt einer Phishing-E-Mail und anschließenden Anrufen von Betrügern, die sich als Sparkassenmitarbeiter ausgaben, genehmigte er mehrere Freigaben in der App. Diese umfassten die Erhöhung des Tageslimits und zwei Echtzeitüberweisungen, was zu einem Gesamtschaden von über 49.000 Euro führte. Der Kunde gab an, dass ihm in der S-pushTAN-App keine spezifischen Empfängerdaten oder Beträge angezeigt wurden, sondern lediglich allgemeine Freigabeaufforderungen für „Aufträge".
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Rechtliche Einordnung
            </h2>

            <p className="mb-6">
              Gemäß § 55 ZAG in Verbindung mit Art. 97 PSD2 ist bei Zugriff auf sensible Zahlungsdaten und bei der Auslösung von Zahlungsvorgängen eine starke Kundenauthentifizierung erforderlich. Diese muss mindestens zwei der folgenden Elemente umfassen:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Wissen (z.B. Passwort, PIN)</li>
              <li>Besitz (z.B. Mobilgerät mit TAN-Apps)</li>
              <li>Inhärenz (z.B. Fingerabdruck, Gesichtserkennung)</li>
            </ul>

            <p className="mb-6">
              Ausnahmen gelten nur eingeschränkt und nicht bei Einsicht in weiterführende Zahlungsinformationen.
            </p>

            <p className="mb-6">
              Das OLG Dresden stellte fest, dass der Sparkasse ein Mitverschulden anzulasten ist, da das verwendete pushTAN-Verfahren nicht den Anforderungen an eine starke Kundenauthentifizierung entsprach. Der Login zum Online-Banking erfolgte nur mit Anmeldename und PIN – ohne dass eine zweite vorgeschriebene Authentifizierungskomponente verwendet worden ist.
            </p>

            <p className="mb-8">
              Trotz eines grob fahrlässigen Verhaltens des Kunden wurde der Bank ein anteiliger Schadensersatz von 20 % der Schadenssumme zugesprochen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Empfehlung für Banken und Verbraucher
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-semibold">Banken</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">Verbraucher</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4">starken Kundenauthentifizierung (SKA) bereits beim Login statt erst bei Transaktionen</td>
                    <td className="border border-gray-300 p-4">Bewusstsein für Phishing-Risiken – kritische Prüfung verdächtiger Anfragen</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">Transparente TAN-Nachrichten mit detaillierten Zahlungsdaten</td>
                    <td className="border border-gray-300 p-4">Anzeichnung bei Betrug und sofortige Sperrung betroffener Konten</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">Kontinuierliche Sicherheitsupdates für Authentifizierungsmethoden</td>
                    <td className="border border-gray-300 p-4">Sofortsicherung von Beweisen (Screenshots, Meldedokumente)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Phishing: Wie ein Anwalt Ihnen helfen kann
            </h2>

            <p className="mb-6">
              Wenn Sie Opfer von Phishing oder einem anderen Betrugsfall geworden sind, ist es ratsam, schnellstmöglich rechtliche Hilfe in Anspruch zu nehmen. Hierbei unterstützen wir Sie wie folgt:
            </p>

            <ul className="list-disc list-inside mb-8 space-y-3">
              <li><strong>Überprüfung der Rechtmäßigkeit der Abbuchung:</strong> Wurde die Abbuchung ohne Ihre Zustimmung durchgeführt, steht Ihnen grundsätzlich eine Rückerstattung zu.</li>
              <li><strong>Durchsetzung Ihre Ansprüche gegenüber der Bank:</strong> Insbesondere Banken zögern manchmal, Rückzahlungen vorzunehmen bzw. weisen diese aufgrund eines groben Fahrlässigkeitsverstoßes / Mitverschulden zurück. Ein Anwalt kann in solchen Fällen durch rechtlichen Druck eine schnellere Bearbeitung erreichen.</li>
              <li><strong>Beweismittel sichern:</strong> Wir sorgt dafür, dass alle relevanten Beweismittel – wie E-Mail-Kommunikation oder Transaktionsübersichten – gesichert werden, um Ihre Ansprüche zu untermauern.</li>
              <li><strong>Stellung eines Strafantrags:</strong> Unter Umständen ist es zudem ratsam eine Strafanzeige gegen die Täter zu stellen, damit der Kreditkartenbetrug von der Polizei und Staatsanwaltschaft verfolgt werden kann.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#004595] p-6 mt-8">
              <p className="mb-4">
                Sollten auch Sie von einem Kreditkartenbetrug betroffen sein, können Sie sich direkt und unkompliziert über unsere digitale Mandatsannahme – abrufbar unter{" "}
                <a 
                  href="https://dima.hess-partner-berlin.de/allgemeine-mandatsannahme" 
                  className="text-[#004595] hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://dima.hess-partner-berlin.de/allgemeine-mandatsannahme
                </a>
                {" "}– vertrauensvoll an uns wenden.
              </p>
              
              <p>
                Alternativ können Sie uns jedoch auch direkt kontaktieren, um einen persönlichen oder auch einen Telefon-Termin zu vereinbaren oder um uns sonstige Fragen zu stellen. Als Full Service-Kanzlei deckt die Beratung von Heß & Partner nicht nur die gesamte Bandbreite des IT-Rechts sowie Datenschutzrechts ab, sondern auch die Vertretung von Mandanten in Gerichtsverfahren.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle1;