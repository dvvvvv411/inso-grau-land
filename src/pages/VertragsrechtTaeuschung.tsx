import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const VertragsrechtTaeuschung = () => {
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
            <Link to="/rechtsgebiete/Vertragsrecht" className="hover:text-white transition-colors">Vertragsrecht</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Täuschung bei Vertragsschluss</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Täuschung bei Vertragsschluss
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Es gibt verschiedene Arten der Täuschung einer Vertragspartei. Wir versuchen, unseren Mandanten die jeweiligen Voraussetzungen und Konsequenzen zumindest anzureißen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  „Ich habe mich getäuscht" – Irrtum einer Vertragspartei
                </h2>
                <p className="mb-4">
                  Hier hat eine Vertragspartei den Vertrag gar nicht oder jedenfalls nicht so abschließen wollen. Für den Empfänger der Erklärung – und für außenstehende Dritte – sah es aber so aus, als würde der Vertrag so zustande kommen.
                </p>
                <p className="mb-4">
                  Hierbei sind dann einige Unterfälle zu unterscheiden. In den meisten Fällen kann der Erklärende, der sich getäuscht hat, zwar anfechten. Er muss dem anderen allerdings den Schaden ersetzen, den dieser deshalb erlitten hat, weil er auf das Zustandekommen des Geschäfts vertraut hat.
                </p>
                <p>
                  Im Falle eines Motivirrtums – „ja, ich wollte schon eine Hochzeitstorte kaufen, aber doch nur, weil ich gedacht habe, es gäbe auch eine Hochzeit…" ist sogar keine Anfechtung möglich.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  „Wir haben uns beide getäuscht. Jeder hat etwas anderes gemeint, wir haben aneinander vorbei geredet."
                </h2>
                <p>
                  In diesem Fall kam gar kein Vertrag zustande. Ein Dritter, der beiden zuhört, erkennt nämlich, dass beide von zwei verschiedenen Dingen reden, sich nie geeinigt haben. Entscheidend ist wiederum nicht, was gesagt werden sollte, sondern wie es Dritte aufgenommen haben.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  „Ich wurde getäuscht."
                </h2>
                <p>
                  Hier beruht der Irrtum auf einer Täuschung durch andere, häufig durch den anderen Vertragsteilnehmer. Hier hängt es von weiteren Faktoren ab, etwa möglicherweise einer Arglist, ob sie den Vertrag anfechten können. Sehr wichtig ist in diesem Zusammenhang eine Betrachtung der Beweissituation. Die Beweislast bei einer arglistigen Täuschung liegt in der Regel beim Getäuschten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Fazit: Hier ist sehr sinnvoll, fachkundigen Rat einzuholen
                </h2>
                <p className="mb-4">
                  Es gibt etliche Situation, in denen wir der Ansicht sind, dass eine Rechtsfrage mit kurzem googlen selbst beantwortet werden kann. Täuschungen bei Vertragsschluss zählen eindeutig nicht dazu. Wir hoffen daher, dass wir mit unseren Ausführungen darlegen konnten, dass es hier Rechtsunkundigen in der Regel schwer fallen wird, die Rechtslage – was passiert bei einer Täuschung beim Vertragsschluss – belastbar einzuschätzen. Entsprechend unserer Absicht, für unsere Mandanten möglichst ohne Fachbegriffe wie offener / versteckter Dissens oder „objektivem Empfängerhorizont" auszukommen (die Beiträge sollen keine Vorlesung ersetzen), ist die Darstellung sehr verkürzt und ungenau.
                </p>
                <p className="mb-4">
                  Vertragsrecht in Form von Kaufverträgen ist erfreulicherweise in den meisten Rechtsschutzversicherungsverträgen als Baustein enthalten. Und es reicht aus, dass sie glauben, dass jemand einen Rechtsverstoß begangen hat, indem sie getäuscht wurden. Wie Ihre Aussichten sind, ist ja dann das Ergebnis der Beratung, die Rechtsschutz wird die Kosten der Beratung bei uns übernehmen.
                </p>
                <p>
                  Falls Sie nicht rechtsschutzversichert sind, fragen Sie uns nach den Kosten einer Erstberatung. Gespräche über Kosten kosten nichts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VertragsrechtTaeuschung;