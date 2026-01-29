import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, ArrowRight, Quote, CheckCircle, XCircle, MessageCircle, Gift } from "lucide-react";

import communityImg1 from "@assets/모자이크_1767252651725.jpg";
import communityImg2 from "@assets/KakaoTalk_20251214_094412042_27_1767252651728.jpg";
import communityImg3 from "@assets/KakaoTalk_20251214_094440900_05_1767252651730.jpg";

import morningImg from "@assets/stock_images/sunrise_morning_rout_f42444d6.jpg";
import exerciseImg from "@assets/stock_images/fitness_exercise_wor_f6f7eaf8.jpg";
import readingImg from "@assets/stock_images/reading_book_cozy_li_b3f5e8d1.jpg";
import englishImg from "@assets/stock_images/english_language_lea_6e33ecce.jpg";
import spanishImg from "@assets/stock_images/spain_barcelona_sagr_ed389981.jpg";
import writingImg from "@assets/stock_images/writing_journal_diar_ea8c7133.jpg";
import financeImg from "@assets/stock_images/money_cash_bills_cur_20815930.jpg";
import englishReadingImg from "@assets/stock_images/english_book_reading_6c1dae52.jpg";

const KAKAO_URL = "https://pf.kakao.com/_xhQUHn";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog";

const challenges = [
  { id: 1, title: "모닝리추얼", image: morningImg, slug: "morning" },
  { id: 2, title: "운동리추얼", image: exerciseImg, slug: "exercise" },
  { id: 3, title: "독서리추얼", image: readingImg, slug: "reading" },
  { id: 4, title: "영어리추얼", image: englishImg, slug: "english" },
  { id: 5, title: "스페인어리추얼", image: spanishImg, slug: "spanish" },
  { id: 6, title: "기록리추얼", image: writingImg, slug: "writing" },
  { id: 7, title: "자산관리리추얼", image: financeImg, slug: "finance" },
  { id: 8, title: "원서읽기리추얼", image: englishReadingImg, slug: "english-reading" },
];

const featuredReviews = [
  {
    id: 1,
    authorName: "재은",
    highlight: "환경과 시스템을 만드는 것이 중요하다는 것을 알게 되었어요",
    content: "일상의 리추얼을 만들기 전에는 하고 싶은 공부가 있어도 못하거나 미루게 되었었고 어쩔수없이 모든 생활이 일에 맞추어져 있었어요. 그런데 이제는 내가 하고싶은게 생활의 1순위가 되었어요.",
    category: "모닝"
  },
  {
    id: 2,
    authorName: "쨈",
    highlight: "매일 읽는 책이 제 인생을 바꾸고 있다고 확신합니다",
    content: "내가 지금 무언가 바꾸고 싶다면, 더 나아지고 싶은 어떤 방향이 있다면, 혹은 그 방향을 알고 싶다면, 새로운 경험을 하거나 책을 읽거나 둘 중 하나는 꼭 해야 한다고 생각해요.",
    category: "독서"
  },
  {
    id: 3,
    authorName: "지로",
    highlight: "운동이 일상의 한 부분으로 자연스럽게 자리 잡았어요",
    content: "운동을 한 다음 날 아침은 확실히 기상하기가 한결 수월했고, 출근길 발걸음도 이전보다 가벼워졌어요!",
    category: "운동"
  }
];

const communityBenefitsWithPhotos = [
  {
    image: communityImg1,
    title: "분기별 회고 모임",
    description: "정기적인 회고 모임에서 함께 성장을 나눕니다"
  },
  {
    image: communityImg2,
    title: "오프라인 번개 & 네트워킹",
    description: "각종 챌린지 오프라인 번개에서 멋진 멤버들을 만나세요"
  },
  {
    image: communityImg3,
    title: "리추얼 리더 지원 자격",
    description: "경험을 쌓고 리추얼 리더로 성장할 기회가 열립니다"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 bg-gradient-to-b from-accent/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-3 h-3 mr-1" />
            43기 모집 기간: 2/1(일)~2/5(목)
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" data-testid="text-hero-headline">
            의지가 아니라 환경으로
            <br />
            <span className="text-primary">당신의 루틴을 완성하는 곳</span>, 롤라움
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto" data-testid="text-hero-subheadline">
            매일 10분, 30분의 작은 리추얼이
            결국 '해내는 사람'을 만듭니다.
          </p>
          <div className="text-sm text-muted-foreground mb-8 space-y-2">
            <p className="text-base font-semibold text-foreground">43기 챌린지 기간: 2/9(월)~2/27(금)</p>
            <p className="text-xs">* 43기 오리엔테이션: 2/8(일) 밤 10시-11시</p>
            <p className="text-xs">* 43기 Final 나의변화공유회: 2/27(금) 밤 10시-11시</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-hero-apply">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                리추얼 챌린지 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-hero-contact">
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                문의하기
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            왜 루틴은 항상 무너질까요?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-destructive" />
                  <h3 className="font-semibold text-lg">의지로 버티는 방식</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">-</span>
                    도파민이 사라지면 습관도 무너진다
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">-</span>
                    "오늘 하루쯤은 괜찮겠지"를 이기기 어렵다
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">-</span>
                    실패 → 자기혐오 → 포기의 반복
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">롤라움의 방식</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">+</span>
                    환경을 설계해서 '안 할 수 없게' 만든다
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">+</span>
                    실패해도 다시 돌아올 수 있는 구조
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">+</span>
                    커뮤니티와 시스템이 함께 지탱
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">8개 리추얼 챌린지</h2>
            <p className="text-muted-foreground mb-2">
              모닝루틴, 운동, 독서, 글쓰기, 영어..<br />
              좋은 습관이 삶을 바꾼다는 걸 알지만<br />
              계속 이어가는 건 늘 어려웠다면
            </p>
            <p className="text-muted-foreground font-medium">
              주 5회, 하루 10분<br />
              이제 나만의 리추얼로 하루를 설계해보세요.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {challenges.map((challenge) => (
              <Link key={challenge.id} href={`/challenges/${challenge.slug}`}>
                <Card className="overflow-hidden hover-elevate group cursor-pointer" data-testid={`card-challenge-${challenge.id}`}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={challenge.image} 
                      alt={challenge.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/80 group-hover:via-black/50 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2">
                      <h3 className="font-bold text-base md:text-lg text-center drop-shadow-lg">{challenge.title}</h3>
                      <div className="flex items-center gap-1 text-xs mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>자세히 보기</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild data-testid="button-view-all-challenges">
              <Link href="/challenges">
                챌린지 상세 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Verified Performance Stats */}
      <section className="py-16 px-4 bg-primary/5 border-y border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">검증된 성과</h2>
            <p className="text-muted-foreground">2022년부터 4년간 체계적으로 운영된 프로그램</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center p-6 bg-background rounded-lg min-w-[140px]">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500명+</div>
              <div className="text-sm text-muted-foreground">누적 참가자</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg min-w-[140px]">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">70%+</div>
              <div className="text-sm text-muted-foreground">재참여율</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg min-w-[140px]">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">42기+</div>
              <div className="text-sm text-muted-foreground">현재까지 운영 기수</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Gift className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">챌린지 참여 혜택</h2>
            </div>
            <p className="text-muted-foreground">챌린지에 참여하시면 리추얼클럽 커뮤니티 멤버로 초대됩니다</p>
          </div>

          {/* Community Photos with Benefits */}
          <div className="grid grid-cols-3 gap-4">
            {communityBenefitsWithPhotos.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">참여자 후기</h2>
            <p className="text-muted-foreground">"의지 → 시스템" 변화를 경험한 분들</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <Card key={review.id} data-testid={`card-review-${review.id}`}>
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-lg font-medium mb-4">"{review.highlight}"</p>
                  <p className="text-sm text-muted-foreground mb-4">{review.content}</p>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{review.authorName}</span>
                    <Badge variant="outline" className="ml-auto">{review.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild data-testid="button-view-all-reviews">
              <Link href="/reviews">
                후기 전체 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            완벽해질 필요는 없습니다
          </h2>
          <p className="text-lg opacity-90 mb-8">
            다만, 끝까지 함께할 준비만 해주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild data-testid="button-cta-apply">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild data-testid="button-cta-contact">
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                문의하기
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
