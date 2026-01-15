import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const plans = [
    {
      name: "Single Ritual",
      price: "30,000",
      description: "Perfect for starting your journey with one focus.",
      features: [
        "1 Challenge Access",
        "Community Access",
        "Standard Support",
        "Deposit Refund System"
      ],
      popular: false
    },
    {
      name: "Double Ritual",
      price: "50,000",
      description: "Build synergy by stacking two habits together.",
      features: [
        "2 Challenges Access",
        "Priority Community Access",
        "Weekly Check-ins",
        "Deposit Refund System"
      ],
      popular: true
    },
    {
      name: "Unlimited",
      price: "90,000",
      description: "For the dedicated bio-hacker ready to transform.",
      features: [
        "Unlimited Challenges",
        "Private Accountability Group",
        "Monthly 1:1 Coaching Call",
        "Deposit Refund System"
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Invest in Yourself</h1>
          <p className="text-muted-foreground text-lg">
            Transparent pricing. The only thing you can lose is your bad habits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-white rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105 z-10' 
                  : 'border-border/50 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">KRW / mo</span>
              </div>
              <p className="text-muted-foreground mb-8 text-sm">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, f) => (
                  <li key={f} className="flex items-center text-sm">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/apply">
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}>
                  Choose {plan.name}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-border text-center shadow-sm">
          <h3 className="text-2xl font-serif mb-4">How the Deposit System Works</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We believe in skin in the game. When you sign up, you pay a deposit. 
            Check in daily, and you get it back. Miss a day, and a small fee is deducted.
            Successful graduates often get a full refund plus rewards.
          </p>
        </div>
      </div>
    </div>
  );
}
