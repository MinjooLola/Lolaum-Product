import { Link } from "wouter";
import { motion } from "framer-motion";
import { useChallenges } from "@/hooks/use-challenges";
import { useReviews } from "@/hooks/use-reviews";
import { ChallengeCard } from "@/components/challenge-card";
import { ReviewCard } from "@/components/review-card";
import { ArrowRight, Leaf, Shield, Sunrise } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const { data: challenges } = useChallenges();
  const { data: reviews } = useReviews();

  const featuredChallenges = challenges?.slice(0, 3) || [];
  const featuredReviews = reviews?.slice(0, 5) || [];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

        <div className="container-width relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
              Environment over Willpower
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground mb-6 leading-[1.1]">
              Design your routine, <br />
              <span className="italic text-primary">Reclaim your life.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Willpower is finite. Systems are forever. Join the community that builds sustainable rituals through structured environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/challenges">
                <button className="btn-primary min-w-[180px]">
                  Explore Rituals
                </button>
              </Link>
              <Link href="/about">
                <button className="btn-outline min-w-[180px]">
                  Our Philosophy
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              {/* Abstract illustration of struggle vs flow */}
              <div className="relative aspect-square rounded-full bg-secondary/30 overflow-hidden p-12">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop" 
                  alt="Calm Morning" 
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl mb-6">
                Why do we fail <br /> despite trying so hard?
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  We often blame ourselves. "I'm lazy." "I lack discipline."
                </p>
                <p>
                  But the truth is, <strong className="text-primary font-medium">willpower is a battery that runs out.</strong> Relying on it for daily habits is a strategy designed to fail.
                </p>
                <p>
                  Lolaum provides the <strong className="text-foreground">Environment</strong>—the community, the accountability, and the structure—so you don't have to rely on willpower alone.
                </p>
                <div className="pt-4">
                  <Link href="/about" className="text-primary font-semibold hover:underline inline-flex items-center">
                    Read our full story <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sunrise className="w-8 h-8 text-primary" />,
                title: "Small Starts",
                desc: "10 minutes a day. That's all it takes to start rewriting your identity."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Safe Environment",
                desc: "A supportive community that encourages progress over perfection."
              },
              {
                icon: <Leaf className="w-8 h-8 text-primary" />,
                title: "Sustainable Growth",
                desc: "No burnout. Just consistent, gentle steps forward."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform">
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section className="section-padding">
        <div className="container-width">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Join the movement</span>
              <h2 className="text-3xl md:text-4xl mt-2">Upcoming Rituals</h2>
            </div>
            <Link href="/challenges" className="hidden md:flex text-foreground hover:text-primary transition-colors font-medium items-center">
              View all <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/challenges">
              <button className="btn-outline w-full">View All Rituals</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Stories of Change</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Real stories from people who stopped trying harder and started designing better.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredReviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <ReviewCard review={review} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white/10 border-none text-white hover:bg-white/20" />
              <CarouselNext className="bg-white/10 border-none text-white hover:bg-white/20" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container-width">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to redesign your life?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Start with one small ritual. Join the next cohort today.
          </p>
          <Link href="/apply">
            <button className="btn-primary text-lg px-10 py-4 shadow-xl shadow-primary/30">
              Start Your Journey
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
