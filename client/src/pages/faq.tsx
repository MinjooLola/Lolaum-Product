import { useFaqs } from "@/hooks/use-faqs";
import { FaqList } from "@/components/faq-accordion";
import { Loader2 } from "lucide-react";

export default function FAQ() {
  const { data: faqs, isLoading } = useFaqs();

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
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Common Questions</h1>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about the ritual process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqList faqs={faqs || []} />
        </div>
      </div>
    </div>
  );
}
