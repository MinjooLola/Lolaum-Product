import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Calendar, Sun, Dumbbell, BookOpen, Languages, PenLine, Wallet, BookOpenCheck, Star, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const challenges = [
  {
    id: 1,
    slug: "morning",
    title: "모닝리추얼챌린지",
    shortDescription: "평일(월~금) 아침 6:00~6:30 온라인 Live 진행",
    category: "아침",
    icon: Sun,
    frequency: "주 5회",
    duration: "30분",
  },
  {
    id: 2,
    slug: "exercise",
    title: "운동리추얼챌린지",
    shortDescription: "주 5회 10분 이상 운동 (주 2회 식단 인증 대체 가능)",
    category: "운동",
    icon: Dumbbell,
    frequency: "주 5회",
    duration: "10분 이상",
  },
  {
    id: 3,
    slug: "reading",
    title: "독서리추얼챌린지",
    shortDescription: "주 5회 10분 이상 책 읽기 + 독서 기록",
    category: "독서",
    icon: BookOpen,
    frequency: "주 5회",
    duration: "10분 이상",
  },
  {
    id: 4,
    slug: "english",
    title: "영어리추얼챌린지",
    shortDescription: "주 5회 10분 이상 원하는 방식으로 영어 공부",
    category: "언어",
    icon: Languages,
    frequency: "주 5회",
    duration: "10분 이상",
  },
  {
    id: 5,
    slug: "spanish",
    title: "스페인어리추얼챌린지",
    shortDescription: "주 5회 10분 이상 원하는 방식으로 스페인어 공부",
    category: "언어",
    icon: Languages,
    frequency: "주 5회",
    duration: "10분 이상",
  },
  {
    id: 6,
    slug: "writing",
    title: "기록리추얼챌린지",
    shortDescription: "주 5회 글쓰기 (주 2회 글 읽기 대체 가능)",
    category: "기록",
    icon: PenLine,
    frequency: "주 5회",
    duration: "자유",
  },
  {
    id: 7,
    slug: "finance",
    title: "자산관리리추얼챌린지",
    shortDescription: "주 5회 지출 관리 & 돈(경제) 공부 기록",
    category: "재테크",
    icon: Wallet,
    frequency: "주 5회",
    duration: "자유",
  },
  {
    id: 8,
    slug: "english-reading",
    title: "원서읽기리추얼챌린지",
    shortDescription: "주 5회 정해진 분량 원서읽기 후 질문 답변 인증 (with.전문가 가이드)",
    category: "독서",
    icon: BookOpenCheck,
    frequency: "주 5회",
    duration: "자유",
  },
];

export default function Challenges() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">43기 리추얼 챌린지</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-challenges-title">
            리추얼 챌린지 리스트
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2/9(월) ~ 2/27(금) 3주간 진행
          </p>
        </div>

        {/* Challenge Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
            <Calendar className="w-4 h-4" />
            <span>3주 과정</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
            <Clock className="w-4 h-4" />
            <span>주 5회 / 하루 10분 이상</span>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-primary/10 rounded-lg p-6 mb-12 text-center">
          <p className="text-lg font-medium">
            다년간의 리추얼클럽 노하우를 바탕으로, <span className="text-primary font-bold">안 할 수 없는 환경</span>을 만들어드려요.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <Card key={challenge.id} className="overflow-hidden hover-elevate h-full" data-testid={`card-challenge-${challenge.id}`}>
                <Link href={`/challenges/${challenge.slug}`} className="block h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-3">{challenge.category}</Badge>
                    <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{challenge.shortDescription}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{challenge.duration}</span>
                      </div>
                      <span>·</span>
                      <span>{challenge.frequency}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Pricing, Reviews, FAQ integrated from other pages */}
        <section className="space-y-24">
          {/* Pricing Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">참가 비용</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="relative overflow-hidden border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <Badge className="absolute top-4 right-4">추천</Badge>
                  <h3 className="text-xl font-bold mb-2">1개 챌린지</h3>
                  <div className="text-3xl font-bold text-primary mb-4">29,000원</div>
                  <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                    <li className="flex items-center gap-2">✓ 3주간의 리추얼 리듬 설계</li>
                    <li className="flex items-center gap-2">✓ 리더의 밀착 가이드 & 피드백</li>
                    <li className="flex items-center gap-2">✓ 멤버 전용 커뮤니티 초대</li>
                  </ul>
                  <Button className="w-full" asChild>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">신청하기</a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">2개 패키지</h3>
                  <div className="text-3xl font-bold text-primary mb-4">49,000원</div>
                  <div className="text-sm text-muted-foreground mb-4 line-through">58,000원</div>
                  <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                    <li className="flex items-center gap-2">✓ 시너지 리추얼 조합</li>
                    <li className="flex items-center gap-2">✓ 패키지 할인 적용 (15% OFF)</li>
                    <li className="flex items-center gap-2">✓ 3주 습관 형성 보장</li>
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">신청하기</a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">3개 패키지</h3>
                  <div className="text-3xl font-bold text-primary mb-4">69,000원</div>
                  <div className="text-sm text-muted-foreground mb-4 line-through">87,000원</div>
                  <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                    <li className="flex items-center gap-2">✓ 완벽한 하루 루틴 완성</li>
                    <li className="flex items-center gap-2">✓ 최대 할인율 적용 (20% OFF)</li>
                    <li className="flex items-center gap-2">✓ 롤라움 특별 굿즈 증정</li>
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">신청하기</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">멤버들의 변화</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "김OO 님",
                  challenge: "모닝 리추얼",
                  text: "혼자라면 절대 못 일어났을 시간인데, 줌 켜고 함께하니 가능해졌어요. 아침의 30분이 하루 전체의 에너지를 바꿔놓았습니다.",
                  rating: 5
                },
                {
                  name: "이OO 님",
                  challenge: "독서 리추얼",
                  text: "1년에 한 권 읽기도 힘들었는데, 3주 동안 매일 조금씩 읽다 보니 벌써 두 권을 완독했어요. 인증 시스템의 힘이 큽니다.",
                  rating: 5
                }
              ].map((review, i) => (
                <Card key={i} className="bg-muted/30 border-none">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <p className="text-lg mb-6 leading-relaxed italic">"{review.text}"</p>
                    <div className="flex items-center justify-between border-t pt-4">
                      <span className="font-bold">{review.name}</span>
                      <Badge variant="outline">{review.challenge}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">자주 묻는 질문</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "인증은 어떻게 하나요?", a: "카카오톡 오픈채팅방을 통해 매일 정해진 방식(사진, 글 등)으로 인증합니다. 모닝 리추얼은 줌(Zoom) Live로 함께합니다." },
                { q: "중간에 포기하면 어떻게 되나요?", a: "롤라움은 완벽보다 지속을 중요하게 생각합니다. 하루 이틀 빠지더라도 다시 돌아올 수 있도록 리더와 동료들이 응원해 드려요." },
                { q: "여러 개를 동시에 신청해도 될까요?", a: "네, 많은 분들이 2~3개의 리추얼을 패키지로 신청하여 자신만의 하루 루틴을 만들고 계십니다." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">어떤 챌린지부터 시작할지 고민되시나요?</h2>
          <p className="text-muted-foreground mb-6">
            1:1 루틴 진단 & 코칭으로 나에게 맞는 챌린지를 찾아보세요.<br />
            <span className="text-sm">무제한+코칭 패키지 선택 시 맞춤형 상담이 포함됩니다.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild data-testid="button-apply-now">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                42기 마감 | 지금 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
