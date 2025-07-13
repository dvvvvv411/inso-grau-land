import Header from "../components/Header";
import Footer from "../components/Footer";
import StandardHero from "../components/StandardHero";

const AGBs = () => {
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "AGBs" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Header />
      
      <StandardHero
        title="Allgemeine Geschäftsbedingungen"
        description="Unsere Geschäftsbedingungen für die Rechts- und Steuerberatung"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 1 Geltungsbereich</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Rechts- und Steuerberatungsleistungen der Kanzlei Heß & Partner. Sie werden Bestandteil aller Verträge über die Erbringung anwaltlicher und steuerberatender Leistungen.</p>
              <p>Entgegenstehende oder abweichende Bedingungen des Mandanten werden nur dann Vertragsbestandteil, wenn wir diesen ausdrücklich schriftlich zustimmt haben.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 2 Vertragsschluss und Mandatsübernahme</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Der Anwaltsvertrag kommt durch ausdrückliche Erklärung oder durch die Aufnahme der anwaltlichen Tätigkeit zustande. Ein Anspruch auf Mandatsübernahme besteht nicht.</p>
              <p>Wir behalten uns vor, ein Mandat abzulehnen, insbesondere bei Interessenkonflikten, unzureichender Erfolgsaussicht oder anderen wichtigen Gründen.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 3 Leistungsumfang</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Der Umfang der zu erbringenden Leistungen bestimmt sich nach dem jeweiligen Mandatsvertrag. Soweit nicht ausdrücklich vereinbart, umfasst das Mandat nur die konkret übertragene Angelegenheit.</p>
              <p>Eine Erfolgsgarantie wird nicht übernommen. Wir verpflichten uns zur gewissenhaften und sachkundigen Wahrnehmung der übertragenen Aufgaben nach dem Stand der Rechtsprechung und Lehre zum Zeitpunkt der Leistungserbringung.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 4 Mitwirkungspflichten des Mandanten</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Der Mandant ist verpflichtet, alle für die Bearbeitung seiner Angelegenheit erforderlichen Unterlagen vollständig und rechtzeitig zur Verfügung zu stellen sowie alle erheblichen Tatsachen mitzuteilen.</p>
              <p>Änderungen der Anschrift, der Telefonnummer oder anderer Kontaktdaten sind uns unverzüglich mitzuteilen.</p>
              <p>Der Mandant hat uns über alle Umstände zu informieren, die für die Bearbeitung der Angelegenheit von Bedeutung sein können.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 5 Vergütung</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Die Vergütung richtet sich nach dem Rechtsanwaltsvergütungsgesetz (RVG), der Steuerberatervergütungsverordnung (StBVV) oder nach gesonderter Vereinbarung.</p>
              <p>Sofern nicht anders vereinbart, sind Abschlagszahlungen zu leisten. Die Vergütung ist bei Rechnungsstellung fällig.</p>
              <p>Bei Verzug werden Zinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 6 Aufrechnung und Zurückbehaltungsrecht</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Der Mandant kann gegen Forderungen nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen.</p>
              <p>Ein Zurückbehaltungsrecht kann nur wegen Gegenansprüchen aus demselben Auftragsverhältnis geltend gemacht werden.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 7 Verschwiegenheit und Datenschutz</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Wir sind zur Verschwiegenheit über alle Angelegenheiten des Mandanten verpflichtet. Dies gilt auch für unsere Mitarbeiter.</p>
              <p>Die Verarbeitung personenbezogener Daten erfolgt nach den Bestimmungen der DSGVO und den einschlägigen Berufsgesetzen.</p>
              <p>Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 8 Haftung</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Wir haften für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Bei einfacher Fahrlässigkeit haften wir nur bei der Verletzung wesentlicher Vertragspflichten.</p>
              <p>Die Haftung ist der Höhe nach begrenzt auf den Betrag, den unsere Berufshaftpflichtversicherung im konkreten Fall ersetzt.</p>
              <p>Für mittelbare Schäden, Folgeschäden und entgangenen Gewinn haften wir nur bei Vorsatz.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 9 Beendigung des Mandats</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Das Mandat kann von beiden Seiten jederzeit gekündigt werden. Die Kündigung sollte schriftlich erfolgen.</p>
              <p>Bei Kündigung durch den Mandanten ist die Vergütung für die bis dahin erbrachten Leistungen zu zahlen.</p>
              <p>Wir sind berechtigt, das Mandat aus wichtigem Grund fristlos zu kündigen.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">§ 10 Schlussbestimmungen</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Es gilt deutsches Recht. Erfüllungsort und Gerichtsstand ist Berlin, sofern der Mandant Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
              <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
              <p>Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AGBs;