import { useRoute, Link } from "wouter";
import { useChallenge } from "@/hooks/use-challenges";
import { Loader2, Calendar, Clock, CheckCircle, ShieldCheck } from "lucide-react";

export default function ChallengeDetail() {
  const [, params] = useRoute("/challenges/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: challenge, isLoading } = useChallenge(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif mb-4">Challenge Not Found</h1>
        <Link href="/challenges" className="text-primary hover:underline">
          Back to all challenges
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="container-width py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                {challenge.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                {challenge.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {challenge.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8 text-sm font-medium">
                <div className="flex items-center text-foreground/80">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  {challenge.duration}
                </div>
                <div className="flex items-center text-foreground/80">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  {challenge.frequency}
                </div>
                <div className="flex items-center text-foreground/80">
                  <ShieldCheck className="w-5 h-5 mr-2 text-primary" />
                  Refund Guarantee
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Link href="/apply">
                  <button className="btn-primary text-lg px-8 py-3">
                    Join for {challenge.price.toLocaleString()} KRW
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {challenge.imageUrl ? (
                <img 
                  src={challenge.imageUrl} 
                  alt={challenge.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                  No Image Available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-width py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-serif mb-6">What to expect</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  This ritual is designed to help you build consistency without the pressure of perfection. 
                  You'll join a cohort of like-minded individuals all working towards the same goal.
                </p>
                <ul className="space-y-4 mt-6 list-none pl-0">
                  {[
                    "Daily check-in prompts",
                    "Community support group",
                    "Expert guidance videos",
                    "Progress tracking dashboard"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-serif text-xl mb-4">Deposit System</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                To help you stay committed, we use a deposit system.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span>Price</span>
                  <span className="font-semibold">{challenge.price.toLocaleString()} KRW</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span>Deposit</span>
                  <span className="font-semibold text-accent">{challenge.deposit.toLocaleString()} KRW</span>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">
                  * Full refund upon 100% completion. <br/>
                  * -1,000 KRW per missed day.
                </div>
              </div>
              <Link href="/apply">
                <button className="w-full btn-primary mt-6">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
