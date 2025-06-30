
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClosetCategory from "./pages/ClosetCategory";
import RegisterClothes from "./pages/RegisterClothes";
import AIRecommendation from "./pages/AIRecommendation";
import OutfitResult from "./pages/OutfitResult";
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
          <Route path="/closet/:category" element={<ClosetCategory />} />
          <Route path="/register-clothes/:category" element={<RegisterClothes />} />
          <Route path="/ai-recommendation" element={<AIRecommendation />} />
          <Route path="/outfit-result" element={<OutfitResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
