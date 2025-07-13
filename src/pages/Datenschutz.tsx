import Header from "../components/Header";
import Footer from "../components/Footer";
import StandardHero from "../components/StandardHero";

const Datenschutz = () => {
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Datenschutz" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Header />
      
      <StandardHero
        title="Datenschutzerklärung"
        description="Informationen zum Schutz Ihrer persönlichen Daten"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Datenschutz auf einen Blick</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground">Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Hosting</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Externes Hosting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Datenschutz</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="text-muted-foreground leading-relaxed">
                <p>Heß & Partner Rechtsanwälte PartG</p>
                <p>Marienstr. 19/20</p>
                <p>10117 Berlin</p>
                <p>Telefon: +49 (0) 30 75420496</p>
                <p>E-Mail: info@hess-anwaltskanzlei.de</p>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Datenerfassung auf dieser Website</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground">Server-Log-Dateien</h3>
              <p className="text-muted-foreground leading-relaxed">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground">Kontaktformular</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. Ihre Rechte</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
              <p>Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
              <p>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Datenschutz;