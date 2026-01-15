import { useReviews } from "@/hooks/use-reviews";
import { ReviewCard } from "@/components/review-card";
import { Loader2 } from "lucide-react";

export default function Reviews() {
  const { data: reviews, isLoading } = useReviews();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Community Stories</h1>
          <p className="text-muted-foreground text-lg">
            Hear from people who transformed their mornings, health, and minds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
