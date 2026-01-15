import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@shared/schema";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq) => (
        <AccordionItem 
          key={faq.id} 
          value={`item-${faq.id}`}
          className="bg-white rounded-xl border border-border/50 px-6 data-[state=open]:shadow-md transition-shadow"
        >
          <AccordionTrigger className="text-left font-medium text-lg hover:text-primary py-6">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
