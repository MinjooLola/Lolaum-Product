import { Link } from "wouter";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { Challenge } from "@shared/schema";

interface ChallengeCardProps {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Link href={`/challenges/${challenge.id}`} className="group h-full">
      <div className="bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
          {challenge.imageUrl ? (
            <img 
              src={challenge.imageUrl} 
              alt={challenge.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/30">
              <span className="text-muted-foreground">Image Coming Soon</span>
            </div>
          )}
          {challenge.isPopular && (
            <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              POPULAR
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
            {challenge.category}
          </div>
          <h3 className="text-xl font-bold mb-3 text-foreground font-serif group-hover:text-primary transition-colors">
            {challenge.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 mb-6 flex-grow text-sm leading-relaxed">
            {challenge.shortDescription || challenge.description}
          </p>

          <div className="space-y-3 mb-6 pt-4 border-t border-border/50">
            <div className="flex items-center text-sm text-foreground/80">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              {challenge.duration}
            </div>
            <div className="flex items-center text-sm text-foreground/80">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              {challenge.frequency}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <span className="font-bold text-lg text-foreground">
              {challenge.price.toLocaleString()} KRW
            </span>
            <span className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
