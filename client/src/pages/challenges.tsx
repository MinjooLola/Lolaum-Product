import { useChallenges } from "@/hooks/use-challenges";
import { ChallengeCard } from "@/components/challenge-card";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function Challenges() {
  const { data: challenges, isLoading } = useChallenges();
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(challenges?.map(c => c.category) || [])];
  
  const filteredChallenges = filter === "All" 
    ? challenges 
    : challenges?.filter(c => c.category === filter);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container-width section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Curated Rituals</h1>
          <p className="text-muted-foreground text-lg">
            Choose a habit you want to cultivate. We provide the structure to make it stick.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-muted-foreground border border-border hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChallenges?.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>

        {(!filteredChallenges || filteredChallenges.length === 0) && (
          <div className="text-center py-20 text-muted-foreground">
            No challenges found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
