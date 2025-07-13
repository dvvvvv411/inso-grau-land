import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UeberUns from "./pages/UeberUns";
import News from "./pages/News";
import NewsArticle1 from "./pages/NewsArticle1";
import NewsArticle2 from "./pages/NewsArticle2";
import NewsArticle3 from "./pages/NewsArticle3";
import NewsArticle4 from "./pages/NewsArticle4";
import NewsArticle5 from "./pages/NewsArticle5";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/20-schadensersatz-gegenueber-der-bank-bei-kreditkartenmissbrauch" element={<NewsArticle1 />} />
          <Route path="/news/meldefristen-beim-datenschutzvorfall" element={<NewsArticle2 />} />
          <Route path="/news/bargeschaeft-insolvenz" element={<NewsArticle3 />} />
          <Route path="/news/datenuebertragung" element={<NewsArticle4 />} />
          <Route path="/news/coronahilfe-rueckforderung" element={<NewsArticle5 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
