import Header from "../components/Header";
import Footer from "../components/Footer";
import StandardHero from "../components/StandardHero";

const Impressum = () => {
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Impressum" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Header />
      
      <StandardHero
        title="Impressum"
        description="Rechtliche Angaben und Informationen zu unserer Kanzlei"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Angaben gemäß § 5 TMG</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Heß & Partner Rechtsanwälte PartG</p>
              <p>Marienstr. 19/20</p>
              <p>10117 Berlin</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Kontakt</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p>Telefon: +49 (0) 30 75420496</p>
              <p>Fax: +49 (0) 30 75420497</p>
              <p>E-Mail: info@hess-anwaltskanzlei.de</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)</p>
              <p>Zuständige Kammer: Rechtsanwaltskammer Berlin</p>
              <p>Berufsrechtliche Regelungen: Bundesrechtsanwaltsordnung (BRAO), Berufsordnung für Rechtsanwälte (BORA), Rechtsanwaltsvergütungsgesetz (RVG), Fachanwaltsordnung (FAO)</p>
              <p>Diese Regelungen können eingesehen werden unter: <a href="http://www.brak.de" className="text-primary hover:underline">www.brak.de</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Umsatzsteuer-ID</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>DE788399140</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p>Dr. Kai Henrik Heß</p>
              <p>Marienstr. 19/20</p>
              <p>10117 Berlin</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Haftung für Inhalte</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Haftung für Links</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
              <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Urheberrecht</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Impressum;