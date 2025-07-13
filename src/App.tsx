import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CookieConsent from "@/components/CookieConsent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import UeberUns from "./pages/UeberUns";
import News from "./pages/News";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGBs from "./pages/AGBs";
import NewsArticle1 from "./pages/NewsArticle1";
import NewsArticle2 from "./pages/NewsArticle2";
import NewsArticle3 from "./pages/NewsArticle3";
import NewsArticle4 from "./pages/NewsArticle4";
import NewsArticle5 from "./pages/NewsArticle5";
import NewsArticle6 from "./pages/NewsArticle6";
import NewsArticle7 from "./pages/NewsArticle7";
import Downloads from "./pages/Downloads";
import RechtsgebieteInsolvenzrecht from "./pages/RechtsgebieteInsolvenzrecht";
import InsolvenzrechtAZ from "./pages/InsolvenzrechtAZ";
import Insolvenzanfechtung from "./pages/Insolvenzanfechtung";
import ForderungsanmeldungWiderspruchEigentumsvorbehalt from "./pages/ForderungsanmeldungWiderspruchEigentumsvorbehalt";
import Insolvenzantrag from "./pages/Insolvenzantrag";
import Privatinsolvenz from "./pages/Privatinsolvenz";
import RechtsgebieteGrundstuecksrecht from "./pages/RechtsgebieteGrundstuecksrecht";
import GrundstuecksrechtAZ from "./pages/GrundstuecksrechtAZ";
import RechtsgebieteKaufrecht from "./pages/RechtsgebieteKaufrecht";
import KaufrechtAZ from "./pages/KaufrechtAZ";
import KaufrechtAutokauf from "./pages/KaufrechtAutokauf";
import KaufrechtInternetversandhandel from "./pages/KaufrechtInternetversandhandel";
import RechtsgebieteMaklerrecht from "./pages/RechtsgebieteMaklerrecht";
import MaklerrechtAZ from "./pages/MaklerrechtAZ";
import MaklerrechtInformationen from "./pages/MaklerrechtInformationen";
import MaklerrechtProbleme from "./pages/MaklerrechtProbleme";
import RechtsgebieteSozialrecht from "./pages/RechtsgebieteSozialrecht";
import SozialrechtAZ from "./pages/SozialrechtAZ";
import SozialrechtSchwerbehinderung from "./pages/SozialrechtSchwerbehinderung";
import SozialrechtRechtsschutz from "./pages/SozialrechtRechtsschutz";
import SozialrechtUnfallversicherung from "./pages/SozialrechtUnfallversicherung";
import RechtsgebieteSteuerrecht from "./pages/RechtsgebieteSteuerrecht";
import SteuerrechtAZ from "./pages/SteuerrechtAZ";
import SteuerrechtAnzeigepflicht from "./pages/SteuerrechtAnzeigepflicht";
import SteuerrechtGestaltungsmissbrauch from "./pages/SteuerrechtGestaltungsmissbrauch";
import SteuerrechtStrafverfahren from "./pages/SteuerrechtStrafverfahren";
import SteuerrechtWegzugsbesteuerung from "./pages/SteuerrechtWegzugsbesteuerung";
import GrundstuecksrechtNachgenehmigung from "./pages/GrundstuecksrechtNachgenehmigung";
import GrundstuecksrechtUnberechtigteParkplatznutzung from "./pages/GrundstuecksrechtUnberechtigteParkplatznutzung";
import RechtsgebieteVertragsrecht from "./pages/RechtsgebieteVertragsrecht";
import VertragsrechtAZ from "./pages/VertragsrechtAZ";
import VertragsrechtTaeuschung from "./pages/VertragsrechtTaeuschung";
import RechtsgebieteVerwaltungsrecht from "./pages/RechtsgebieteVerwaltungsrecht";
import VerwaltungsrechtAZ from "./pages/VerwaltungsrechtAZ";
import VerwaltungsrechtZwangsgeldandrohung from "./pages/VerwaltungsrechtZwangsgeldandrohung";
import VerwaltungsrechtImpfpflicht from "./pages/VerwaltungsrechtImpfpflicht";
import RechtsgebieteWettbewerbsrecht from "./pages/RechtsgebieteWettbewerbsrecht";
import WettbewerbsrechtAZ from "./pages/WettbewerbsrechtAZ";
import WettbewerbsrechtEmailWerbung from "./pages/WettbewerbsrechtEmailWerbung";
import WettbewerbsrechtWerbenachrichten from "./pages/WettbewerbsrechtWerbenachrichten";
import SteuerberatungUnternehmenssteuern from "./pages/SteuerberatungUnternehmenssteuern";
import SteuerberatungPrivatsteuern from "./pages/SteuerberatungPrivatsteuern";
import SteuerberatungSteuerplanung from "./pages/SteuerberatungSteuerplanung";
import SteuerberatungJahresabschluss from "./pages/SteuerberatungJahresabschluss";
import Stellenangebote from "./pages/Stellenangebote";
import Team from "./pages/Team";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/20-schadensersatz-gegenueber-der-bank-bei-kreditkartenmissbrauch" element={<NewsArticle1 />} />
          <Route path="/news/meldefristen-beim-datenschutzvorfall" element={<NewsArticle2 />} />
          <Route path="/news/bargeschaeft-insolvenz" element={<NewsArticle3 />} />
          <Route path="/news/datenuebertragung" element={<NewsArticle4 />} />
          <Route path="/news/coronahilfe-rueckforderung" element={<NewsArticle5 />} />
          <Route path="/news/videoueberwachung-am-arbeitsplatz" element={<NewsArticle6 />} />
          <Route path="/news/ecommerce-und-barrierefreiheit" element={<NewsArticle7 />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/rechtsgebiete/insolvenzrecht" element={<RechtsgebieteInsolvenzrecht />} />
          <Route path="/insolvenzrecht/a-z/" element={<InsolvenzrechtAZ />} />
          <Route path="/insolvenzrecht/insolvenzanfechtung/" element={<Insolvenzanfechtung />} />
          <Route path="/insolvenzrecht/forderungsanmeldung-widerspruch-eigentumsvorbehalt/" element={<ForderungsanmeldungWiderspruchEigentumsvorbehalt />} />
          <Route path="/insolvenzrecht/insolvenzantrag/" element={<Insolvenzantrag />} />
          <Route path="/insolvenzrecht/privatinsolvenz/" element={<Privatinsolvenz />} />
            <Route path="/rechtsgebiete/Grundstuecksrecht" element={<RechtsgebieteGrundstuecksrecht />} />
            <Route path="/grundstuecksrecht/a-z/" element={<GrundstuecksrechtAZ />} />
            <Route path="/rechtsgebiete/Kaufrecht" element={<RechtsgebieteKaufrecht />} />
            <Route path="/kaufrecht/a-z/" element={<KaufrechtAZ />} />
            <Route path="/kaufrecht/autokauf-und-gewaehrleistung/" element={<KaufrechtAutokauf />} />
            <Route path="/kaufrecht/internetversandhandel/" element={<KaufrechtInternetversandhandel />} />
            <Route path="/rechtsgebiete/maklerrecht" element={<RechtsgebieteMaklerrecht />} />
            <Route path="/maklerrecht/a-z/" element={<MaklerrechtAZ />} />
            <Route path="/maklerrecht/rechtliche-informationen-fuer-makler/" element={<MaklerrechtInformationen />} />
            <Route path="/maklerrecht/probleme-mit-dem-makler-immobilien-versicherungsvertrag/" element={<MaklerrechtProbleme />} />
            <Route path="/rechtsgebiete/Sozialrecht" element={<RechtsgebieteSozialrecht />} />
            <Route path="/sozialrecht/a-z/" element={<SozialrechtAZ />} />
            <Route path="/sozialrecht/anerkennung-schwerbehinderung-hochstufung/" element={<SozialrechtSchwerbehinderung />} />
            <Route path="/sozialrecht/einstweiliger-rechtsschutz-zu-gunsten-einer-lebensverlaengernden-therapie/" element={<SozialrechtRechtsschutz />} />
            <Route path="/sozialrecht/gesetzliche-unfallversicherung/" element={<SozialrechtUnfallversicherung />} />
            <Route path="/rechtsgebiete/steuerrecht" element={<RechtsgebieteSteuerrecht />} />
            <Route path="/steuerrecht/a-z/" element={<SteuerrechtAZ />} />
            <Route path="/steuerrecht/anzeigepflicht-bei-erbschaft/" element={<SteuerrechtAnzeigepflicht />} />
            <Route path="/steuerrecht/gestaltungsmissbrauch/" element={<SteuerrechtGestaltungsmissbrauch />} />
            <Route path="/steuerrecht/steuerstrafverfahren/" element={<SteuerrechtStrafverfahren />} />
            <Route path="/steuerrecht/Wegzugsbesteuerung/" element={<SteuerrechtWegzugsbesteuerung />} />
          <Route path="/grundstuecksrecht/nachgenehmigung/" element={<GrundstuecksrechtNachgenehmigung />} />
          <Route path="/grundstuecksrecht/unberechtigte-parkplatznutzung/" element={<GrundstuecksrechtUnberechtigteParkplatznutzung />} />
          <Route path="/rechtsgebiete/Vertragsrecht" element={<RechtsgebieteVertragsrecht />} />
          <Route path="/vertragsrecht/a-z/" element={<VertragsrechtAZ />} />
          <Route path="/vertragsrecht/taeuschung/" element={<VertragsrechtTaeuschung />} />
          <Route path="/rechtsgebiete/Verwaltungsrecht" element={<RechtsgebieteVerwaltungsrecht />} />
          <Route path="/verwaltungsrecht/a-z/" element={<VerwaltungsrechtAZ />} />
          <Route path="/verwaltungsrecht/zwangsgeldandrohung/" element={<VerwaltungsrechtZwangsgeldandrohung />} />
          <Route path="/verwaltungsrecht/impfpflicht/" element={<VerwaltungsrechtImpfpflicht />} />
          <Route path="/rechtsgebiete/Wettbewerbsrecht" element={<RechtsgebieteWettbewerbsrecht />} />
          <Route path="/wettbewerbsrecht/a-z/" element={<WettbewerbsrechtAZ />} />
          <Route path="/wettbewerbsrecht/ist-eine-e-mail-werbung-zulaessig/" element={<WettbewerbsrechtEmailWerbung />} />
          <Route path="/wettbewerbsrecht/werbenachrichten/" element={<WettbewerbsrechtWerbenachrichten />} />
          <Route path="/steuerberatung/unternehmenssteuern" element={<SteuerberatungUnternehmenssteuern />} />
          <Route path="/steuerberatung/privatsteuern" element={<SteuerberatungPrivatsteuern />} />
          <Route path="/steuerberatung/steuerplanung" element={<SteuerberatungSteuerplanung />} />
          <Route path="/steuerberatung/jahresabschluss" element={<SteuerberatungJahresabschluss />} />
          <Route path="/stellenangebote" element={<Stellenangebote />} />
          <Route path="/team" element={<Team />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agbs" element={<AGBs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
