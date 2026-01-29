import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Clock, ArrowRight, Calendar, Sun, Dumbbell, BookOpen, Languages, PenLine, Wallet, BookOpenCheck, Check, Shield, Heart, Gift, Star, Quote, ExternalLink, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import type { Faq } from "@shared/schema";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog";

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

const packages = [
  {
    id: "single",
    name: "1개 챌린지",
    price: 50000,
    deposit: 15000,
    dailyCost: "하루 2,381원",
    dailyHint: "커피 한 잔보다 저렴해요",
    features: ["챌린지 1개 선택", "3주 프로그램", "커뮤니티 참여"],
    popular: false,
  },
  {
    id: "double",
    name: "2개 챌린지",
    price: 90000,
    deposit: 30000,
    dailyCost: "하루 4,286원",
    dailyHint: "아메리카노 한 잔 가격",
    features: ["챌린지 2개 선택", "3주 프로그램", "커뮤니티 참여", "10,000원 할인"],
    popular: false,
  },
  {
    id: "unlimited",
    name: "무제한",
    price: 120000,
    deposit: 30000,
    dailyCost: "하루 5,714원",
    dailyHint: "라떼 한 잔 가격으로 8개 챌린지!",
    features: ["8개 챌린지 모두 참여 가능", "3주 프로그램", "커뮤니티 참여", "개당 15,000원꼴"],
    popular: true,
  },
  {
    id: "unlimited-coaching",
    name: "무제한 + 1:1 코칭",
    price: 150000,
    deposit: 30000,
    dailyCost: "하루 7,143원",
    dailyHint: "점심값으로 인생 루틴 만들기",
    features: ["8개 챌린지 모두 참여 가능", "3주 프로그램", "1:1 루틴 진단 & 코칭", "맞춤형 케어 프로그램"],
    popular: false,
  },
];

const discounts = [
  { title: "친구 초대 이벤트", desc: "신규 멤버와 기존 멤버 모두", amount: 5000 },
  { title: "직전 기수 리추얼클럽 챌린저", desc: "", amount: 5000 },
  { title: "직전 기수 블로그 후기 작성", desc: "", amount: 5000 },
  { title: "직전 기수 어워즈 수상자", desc: "", amount: 5000 },
  { title: "블로그 모집 포스팅 공유", desc: "", amount: 5000 },
];

const blogLinks = [
  {
    url: "https://blog.naver.com/minjoo_lola/223495565888",
    title: "직장에 다니면서도 하고 싶은 일들 다 하면서 살 수 있어요"
  },
  {
    url: "https://blog.naver.com/minjoo_lola/223830499174",
    title: "프로 작심삼일러도 매일 영어공부를 할 수 있어요"
  },
  {
    url: "https://blog.naver.com/minjoo_lola/224032460766",
    title: "매일 리추얼로 책을 읽으면 생기는 변화"
  },
  {
    url: "https://blog.naver.com/gamzzang-/224062220609",
    title: "큰 노력이나 압박감 없이도 목표를 이뤄나갈 수 있어요"
  },
  {
    url: "https://blog.naver.com/gamzzang-/223988087412",
    title: "단순한 습관 형성을 넘어 실제 결과와 보람까지 얻어가요"
  },
  {
    url: "https://blog.naver.com/heavenlee63/224061871122",
    title: "내가 찾던 글쓰기 모임, 리추얼 챌린지"
  },
];

const reviews = [
  {
    id: 1,
    authorName: "주디",
    highlight: "리추얼클럽은 제 삶의 중심이자 꾸준함의 힘을 알려주고 있는 원동력"
  },
  {
    id: 2,
    authorName: "한나",
    highlight: "주체적인 삶을 산다는 만족감이 굉장히 컸어요"
  },
  {
    id: 3,
    authorName: "지로",
    highlight: "운동이 일상의 한 부분으로 자연스럽게 자리 잡았어요"
  },
  {
    id: 4,
    authorName: "쨈",
    highlight: "매일 읽는 책이 제 인생을 바꾸고 있다고 확신합니다"
  },
  {
    id: 5,
    authorName: "재은",
    highlight: "환경과 시스템을 만드는 것이 중요하다는 것을 알게 되었어요"
  },
  {
    id: 6,
    authorName: "그레이스",
    highlight: "나를 채우는 귀한 시간을 갖게 되어서 좋았어요"
  },
  {
    id: 7,
    authorName: "율무",
    highlight: "내가 나를 잘 챙기고 있다는 느낌이 너무 좋았어요"
  },
  {
    id: 8,
    authorName: "올리",
    highlight: "나를 믿으면서 하루를 시작하는 느낌이 좋아요"
  },
];

export default function Challenges() {
  const { data: faqs } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        {/* ===== PRICING SECTION ===== */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">패키지 & 가격</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">나에게 맞는 패키지 선택</h2>
            <p className="text-muted-foreground">2/9(월) ~ 2/27(금) 3주간 진행</p>
          </div>

          {/* Packages */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={pkg.popular ? "border-primary relative" : ""}
                data-testid={`card-package-${pkg.id}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Star className="w-3 h-3 mr-1" />
                    추천
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{pkg.price.toLocaleString()}</span>
                    <span className="text-muted-foreground">원</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    + 보증금 {pkg.deposit.toLocaleString()}원
                  </p>
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-sm font-medium text-primary">{pkg.dailyCost}</p>
                    <p className="text-xs text-muted-foreground">{pkg.dailyHint}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                    data-testid={`button-select-${pkg.id}`}
                  >
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">선택하기</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Deposit System Explanation */}
          <Card className="bg-muted/30 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">보증금 시스템 안내</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      보증금은 <strong className="text-foreground">챌린지 성공 시 전액 환급</strong>됩니다.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>미션 달성: 보증금 100% 환급</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 text-destructive mt-1 shrink-0">-</span>
                        <span>하루 인증 실패 시: 1,000원씩 차감</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>행복찬스 1회: 지각 or 결석 1회까지 보증금 차감 없음</span>
                      </li>
                    </ul>
                    <p className="pt-2">
                      차감된 보증금은 <strong className="text-foreground">참가자 모두의 이름으로 해피빈을 통해 전액 기부</strong>됩니다.
                    </p>
                    <p className="text-sm">
                      * 무제한 챌린지 참여 시 초과 차감된 보증금은 리추얼클럽에서 부담합니다.
                    </p>
                    <p className="text-sm">
                      * 끝까지 참여해주실 분들만 신청바랍니다. 중간에 포기하시더라도 참가비는 환급되지 않습니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Discounts */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">추가 할인 혜택</h3>
                  <p className="text-sm text-muted-foreground mb-4">중복 할인 가능, 최대 3만원 할인</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {discounts.map((discount, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                        <div>
                          <p className="font-medium text-sm">{discount.title}</p>
                          {discount.desc && (
                            <p className="text-xs text-muted-foreground">{discount.desc}</p>
                          )}
                        </div>
                        <Badge variant="secondary">-{discount.amount.toLocaleString()}원</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ===== REVIEWS SECTION ===== */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">참여자 후기</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">"의지 → 시스템" 변화를 경험한 분들</h2>
          </div>

          {/* Blog Links */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">실제 리추얼챌린지 참여자들의 후기입니다.</h3>
              <p className="text-sm text-muted-foreground">제목을 클릭하면 원문으로 이동합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {blogLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  data-testid={`link-blog-${i}`}
                >
                  <Card className="h-full hover-elevate transition-all duration-200">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-medium text-sm leading-relaxed mb-2">{link.title}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        <span>원문 보기</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Reviews */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {reviews.map((review) => (
              <Card key={review.id} className="h-full" data-testid={`card-review-${review.id}`}>
                <CardContent className="p-5">
                  <Quote className="w-6 h-6 text-primary/30 mb-3" />
                  <p className="text-sm font-medium leading-relaxed mb-3">"{review.highlight}"</p>
                  <Badge variant="secondary" className="text-xs">{review.authorName}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild data-testid="button-view-all-reviews">
              <Link href="/reviews">
                후기 전체 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">자주 묻는 질문</h2>
            <p className="text-muted-foreground">궁금한 점이 있으시면 확인해보세요</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs && faqs.length > 0 && (
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
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

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                더 궁금한 점이 있으신가요? <a href="https://pf.kakao.com/_xhQUHn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">카카오톡 채널</a>로 문의해주세요
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-primary/10 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">어떤 챌린지부터 시작할지 고민되시나요?</h2>
          <p className="text-muted-foreground mb-6">
            1:1 루틴 진단 & 코칭으로 나에게 맞는 챌린지를 찾아보세요.<br />
            <span className="text-sm">무제한+코칭 패키지 선택 시 맞춤형 상담이 포함됩니다.</span>
          </p>
          <Button size="lg" asChild data-testid="button-apply-now">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              42기 마감 | 지금 신청하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            문의: <a href="https://pf.kakao.com/_xhQUHn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">롤라움 카카오톡 채널</a>
          </p>
        </div>
      </div>
    </div>
  );
}
