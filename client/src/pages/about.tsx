import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <div className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="container-width relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Philosophy</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            We believe that extraordinary lives are built on ordinary habits.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-3xl font-serif text-foreground mb-8">Environment {">"} Willpower</h2>
            <p>
              In a world that constantly screams "try harder," we whisper "design better."
            </p>
            <p>
              Lolaum was born from burnout. Our founder spent years chasing productivity hacks and relying on grit, only to crash repeatedly. It wasn't until they stopped forcing themselves and started shaping their environment that things changed.
            </p>
            <p>
              When you design your environment—your space, your community, your triggers—the habit becomes the path of least resistance.
            </p>
            <div className="p-8 bg-secondary/30 rounded-2xl border border-secondary my-12">
              <h3 className="text-xl font-serif text-foreground mb-4">The Lolaum Promise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  <span>We will never shame you for missing a day.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  <span>We prioritize sustainability over intensity.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  <span>We focus on the system, not just the goal.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
