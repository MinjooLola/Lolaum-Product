import { Star } from "lucide-react";
import type { Review } from "@shared/schema";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-border/50 shadow-sm">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < (review.rating || 5) ? 'text-accent fill-accent' : 'text-muted'}`} 
          />
        ))}
      </div>
      
      {review.highlight && (
        <h4 className="text-lg font-bold font-serif mb-3 text-foreground">
          "{review.highlight}"
        </h4>
      )}
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {review.content}
      </p>

      <div className="flex items-center justify-between border-t border-border/50 pt-4">
        <span className="font-semibold text-sm">{review.authorName}</span>
        {review.category && (
          <span className="text-xs text-primary bg-primary/5 px-2 py-1 rounded-full">
            {review.category}
          </span>
        )}
      </div>
    </div>
  );
}
