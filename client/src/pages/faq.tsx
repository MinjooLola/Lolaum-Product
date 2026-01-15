import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, HelpCircle } from "lucide-react";
import type { Faq } from "@shared/schema";

export default function FAQ() {
  const { data: faqs, isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
            자주 묻는 질문
          </h1>
          <p className="text-lg text-muted-foreground">
            궁금한 점이 있으시면 확인해보세요
          </p>
        </div>

        {/* FAQ List */}
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border rounded-lg p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            {faqs?.map((faq, index) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} data-testid={`faq-item-${faq.id}`}>
                <AccordionTrigger className="text-left">
                  <span className="flex items-start gap-3">
                    <span className="text-primary font-medium shrink-0">Q{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        {/* Contact */}
        <div className="mt-12 text-center p-8 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-muted-foreground mb-6">
            카카오톡 채널로 편하게 문의해주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="https://pf.kakao.com/_xhQUHn" target="_blank" rel="noopener noreferrer" data-testid="button-kakao-channel">
                카카오톡 문의하기
              </a>
            </Button>
            <Button asChild data-testid="button-faq-to-apply">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                42기 마감 | 챌린지 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
