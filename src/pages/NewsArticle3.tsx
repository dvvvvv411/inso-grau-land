import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage3 from "../assets/news-placeholder-3.jpg";

const NewsArticle3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Blue Hero Section */}
      <section className="bg-[#004595] py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-white/80 mb-8">
            <Link 
              to="/news" 
              className="hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              News
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white text-sm font-medium">
              Bargeschäftsprivileg bei Vorsatzanfechtung
            </span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Bargeschäftsprivileg bei Vorsatzanfechtung
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-4 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/6e97452c-72bf-4b8e-8b85-afa5d707bf2a.png"
              alt="BGH-Urteil zum Bargeschäft: Gerichtsszene mit Gesetzbuch, markiertem Dokument und Diskussion zwischen Anwalt und Insolvenzverwalter"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Neue Entscheidung des BGH gibt Klarheit zum Merkmal der Unlauterkeit im Rahmen des Bargeschäftsprivilegs bei Vorsatzanfechtung – BGH, Urteil vom 05.12.2024 – IX ZR 122/23
            </p>

            <p className="mb-6">
              In seiner Entscheidung vom 05.12.2024 (IX ZR 122/23) liefert der Bundesgerichtshof praxisgerechte Beispiele dafür, wann ein Bargeschäft im Sinn des § 142 InsO der Insolvenzanfechtung unterliegen kann und wann nicht. Dabei geht er gezielt auf den bislang undefinierten Begriff der unlauteren Handlung ein.
            </p>

            <p className="mb-8">
              Der Bundesgerichtshof hat die Auffassung eines Insolvenzverwalters zurückgewiesen, dass allein der Gläubigerbenachteiligungsvorsatz für unlauteres Verhalten ausreiche. Vielmehr bedarf es eines darüber hinausgehenden Verhaltens, das die gezielte Schädigung anderer Gläubiger zum Ziel hat. Dies ist beispielsweise der Fall, wenn ein Bargeschäft die Benachteiligung anderer Gläubiger beabsichtigt oder den Empfänger gezielt bevorzugt. Für Gläubiger bedeutet dies eine erhöhte Rechtssicherheit. Solange sie die Voraussetzungen eines Bargeschäfts erfüllen, sind sie von der Pflicht befreit, zu prüfen, ob der Geschäftspartner bei fortgeführtem Betrieb anhaltende Verluste erzielt.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Wann liegt unlauteres Handeln vor?
            </h2>

            <p className="mb-6">
              Der BGH führt exemplarische Beispiele auf, wann in der Regel unlauteres Handeln vorliegt und wann nicht. Nach dem BGH liegt demnach unlauteres Handeln durchs Bargeschäft vor, wenn:
            </p>

            <ul className="list-disc list-inside mb-8 space-y-3">
              <li>nicht betriebsnotwendige Leistungen bezahlt werden (z. B. Luxusgüter, private Ausgaben), die keinen Gläubigernutzen haben,</li>
              <li>betriebsnotwendiges Vermögen veräußert wird, um den Gegenwert den Gläubigern zu entziehen,</li>
              <li>Zahlungen erfolgen nicht zur Vertragserfüllung, sondern um einen bestimmten Gläubiger zu bevorzugen, z. B. zur Abwehr eines sonst drohenden Insolvenzantrags,</li>
              <li>Bargeschäfte im unmittelbaren Vorfeld eines geplanten Insolvenzantrags getätigt werden,</li>
              <li>Honorare für eine Sanierungsberatung gezahlt werden, obwohl der Sanierungsversuch von vornherein aussichtslos ist,</li>
              <li>Bargeschäfte mit nahestehenden Personen (§ 138 InsO) erfolgen und diese gezielt bevorzugt und anders als die übrigen Gläubiger behandelt werden,</li>
              <li>letzte Vermögenswerte gezielt an einzelne Gläubiger oder verbundene Unternehmen übertragen werden (z. B. durch verschleierte konzerninterne Verschiebungen).</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Wann liegt kein unlauteres Handeln vor?
            </h2>

            <p className="mb-6">
              Nach dem BGH liegt unlauteres Handeln hingegen nicht vor, wenn:
            </p>

            <ul className="list-disc list-inside mb-8 space-y-3">
              <li>der Schuldner fortlaufend Verluste erwirtschaftet, aber weiterhin betriebs­erhaltende Geschäfte tätigt,</li>
              <li>der Schuldner weiß, dass sein Betrieb dauerhaft nicht überlebensfähig ist, aber dennoch betriebsnotwendige Leistungen einkauft oder bezahlt,</li>
              <li>der Schuldner gegen § 15a InsO oder § 15b InsO verstößt.</li>
            </ul>

            <p className="mb-8">
              Insgesamt stärkt das Urteil die Position von Vertragspartnern insolventer Unternehmen, da Bargeschäfte nur noch unter strengeren Voraussetzungen anfechtbar sind und der BGH mit seiner aktuellen Entscheidung nun beispielhaft für mehr Klarheit gesorgt hat. Für Insolvenzverwalter bedeutet dies, dass sie detailliertere Nachweise für ein unlauteres Handeln des Schuldners und der Kenntnis des Gläubigers erbringen müssen, um eine Anfechtung erfolgreich durchzusetzen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Wir helfen weiter!
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#004595] p-6 mt-8">
              <p>
                Sind auch Sie mit einer Insolvenzanfechtung konfrontiert oder möchten sich absichern, ob ein Bargeschäft rechtssicher durchgeführt wurde? Dann können Sie sich direkt, unkompliziert und vertrauensvoll an uns wenden. Wir prüfen Ihre Situation sorgfältig, setzen Ihre Rechte durch und stehen Ihnen im Umgang mit dem Insolvenzverwalter zuverlässig zur Seite.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle3;