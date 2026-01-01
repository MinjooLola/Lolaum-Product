import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import About from "@/pages/about";
import Challenges from "@/pages/challenges";
import ChallengeDetail from "@/pages/challenge-detail";
import Pricing from "@/pages/pricing";
import Reviews from "@/pages/reviews";
import FAQ from "@/pages/faq";
import Apply from "@/pages/apply";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/challenges" component={Challenges} />
        <Route path="/challenges/:slug" component={ChallengeDetail} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/faq" component={FAQ} />
        <Route path="/apply" component={Apply} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
