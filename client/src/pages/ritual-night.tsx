import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Clock, Users, Check, X, MessageCircle, Sparkles, Target, RefreshCw } from "lucide-react";

import dcampLogo from "@assets/dcamp_Logo_RGB_Orange_1768478039647.png";
import heroImage from "@assets/KakaoTalk_20251214_094412042_17_1768483168651.jpg";

const GOOGLE_FORM_URL = "https://forms.gle/hAvpEQpEYZa7TGv48";
const KAKAO_CHAT_URL = "https://pf.kakao.com/_xhQUHn/chat";

export default function RitualNight() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero - 긴급성 헤더 */}
      <section className="relative py-20 px-4 md:py-28">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-3 h-3 mr-1" />
            단 한 번의 밤
          </Badge>
          <p className="text-lg md:text-xl text-white/80 mb-4">
            아직도 2026년 계획이 비어 있나요?
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" data-testid="text-ritual-night-headline">
            1월이 끝나기 전에,
            <br />
            <span className="text-primary">올해의 방향을 '확정'할 수 있는</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            리추얼 나잇 : 신년계획 뽀개기
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
              <Calendar className="w-4 h-4" />
              <span>2026.01.27 (화) 19:30–21:00</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
              <MapPin className="w-4 h-4" />
              <span>디캠프 선릉</span>
            </div>
          </div>

          <p className="text-lg text-white/80 mb-8">
            혼자 미루다 끝내는 신년계획,
            <br />
            이번엔 정해진 시간 안에 <span className="font-semibold text-white">'완성'</span>하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-ritual-night-apply">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                리추얼 나잇 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-ritual-night-contact">
              <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                문의하기
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: 공감 섹션 */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-pain-points">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" data-testid="text-pain-points-title">
            이런 생각, 한 번쯤 해보셨죠?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "계획은 세워야 하는데… 어디서부터 시작하지?",
              "작년에도 다짐은 거창했는데, 2월 되니까 흐지부지…",
              "해야 할 건 많은데, 방향이 정리되지 않아 답답하다",
              "이번엔 진짜 잘 해보고 싶은데, 또 혼자라 불안하다"
            ].map((text, i) => (
              <Card key={i} className="bg-background" data-testid={`card-pain-point-${i+1}`}>
                <CardContent className="p-5">
                  <p className="text-muted-foreground">"{text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center p-6 bg-primary/10 rounded-lg">
            <p className="text-lg font-medium">
              문제는 <span className="text-primary font-bold">의지가 아니라 '환경'</span>입니다.
            </p>
            <p className="text-muted-foreground mt-2">
              혼자 세우는 계획은, 혼자 무너지기 쉽습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: 문제 + 해결책 */}
      <section className="py-16 px-4" data-testid="section-problem-solution">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" data-testid="text-problem-title">
            왜 신년 계획은 항상 실패할까요?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/20 bg-destructive/5" data-testid="card-problem">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">기존 방식의 문제</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span>목표는 추상적이고</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span>실행 구조는 없고</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span>점검해 줄 사람도 없기 때문</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5" data-testid="card-solution">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">롤라움의 해결책</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>정해진 시간</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>집중 가능한 공간</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>함께 몰입하는 사람들</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-lg mt-8 text-muted-foreground">
            계획을 '생각'에서 끝내지 않고 <span className="text-primary font-semibold">'실행 가능한 구조'</span>로 바꿉니다.
          </p>
        </div>
      </section>

      {/* Section 4: 스토리텔링 */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-story">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-destructive/5 border-destructive/20" data-testid="card-story-before">
              <CardContent className="p-6 text-center">
                <p className="text-2xl mb-2">Before</p>
                <p className="text-muted-foreground text-sm">
                  매년 노트만 바뀌고, 삶은 그대로
                  <br />
                  "올해는 다를 거야"라고 말만 반복
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/30 border-accent" data-testid="card-story-turning">
              <CardContent className="p-6 text-center">
                <p className="text-2xl mb-2">Turning Point</p>
                <p className="text-muted-foreground text-sm">
                  같은 고민을 가진 사람들과 한 공간에서
                  <br />
                  내 삶을 진지하게 들여다본 단 한 번의 시간
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20" data-testid="card-story-after">
              <CardContent className="p-6 text-center">
                <p className="text-2xl mb-2">After</p>
                <ul className="text-muted-foreground text-sm space-y-1 text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>올해의 키워드가 명확해지고</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>해야 할 것 / 하지 말 것이 정리되고</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>나만의 리추얼이 생긴 상태로 1월을 마무리</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-lg mt-8 font-medium">
            이 밤이, 당신의 <span className="text-primary">2026년 출발점</span>이 됩니다.
          </p>
        </div>
      </section>

      {/* Section 5: 프로그램 구성 */}
      <section className="py-16 px-4" data-testid="section-program">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" data-testid="text-program-title">
            리추얼 나잇 진행 내용
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { num: "1", title: "2026년 나의 키워드 정하기" },
              { num: "2", title: "연간 목표 수립 (Work & Life)" },
              { num: "3", title: "실행 전략 설계", sub: "Don't & Do & 실행계획 프레임워크" },
              { num: "4", title: "2026 신년 계획 선언" },
            ].map((item) => (
              <Card key={item.num} data-testid={`card-program-step-${item.num}`}>
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    {item.sub && <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Check className="w-3 h-3 mr-1" />
              워크시트 제공
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Check className="w-3 h-3 mr-1" />
              퍼실리테이션 진행
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Check className="w-3 h-3 mr-1" />
              끝까지 '완성'하는 구조
            </Badge>
          </div>
        </div>
      </section>

      {/* Section 6: 사회적 증거 */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" data-testid="text-social-proof-title">
            롤라움은 이미 검증된 시스템입니다
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { value: "120+명", label: "누적 참가자", id: "participants" },
              { value: "512+회", label: "누적 챌린지 참여", id: "challenges" },
              { value: "70%+", label: "재참여율", id: "retention" },
              { value: "42기+", label: "현재까지 운영 기수", id: "cohorts" },
            ].map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.id}`}>
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-background" data-testid="card-testimonial-1">
              <CardContent className="p-5">
                <p className="text-muted-foreground italic">
                  "의지가 아니라, 환경이 사람을 바꾼다는 걸 처음 느꼈어요."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background" data-testid="card-testimonial-2">
              <CardContent className="p-5">
                <p className="text-muted-foreground italic">
                  "이제 하고 싶은 게 제 삶의 1순위가 됐어요."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: 권위 구축 */}
      <section className="py-16 px-4" data-testid="section-authority">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-2">
            의지가 아니라 환경으로
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8" data-testid="text-authority-title">
            당신의 루틴을 완성하는 곳, <span className="text-primary">롤라움</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">
              2022년부터 4년간 운영
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              리추얼 챌린지 & 커뮤니티 기반 성장
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              오프라인 모임 + 실행 시스템 결합
            </Badge>
          </div>
        </div>
      </section>

      {/* Section 8: 사용성 강조 */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-ease">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" data-testid="text-ease-title">
            정말 어렵지 않습니다
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-destructive/5 border-destructive/20" data-testid="card-not-needed">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-muted-foreground">필요 없는 것들</h3>
                <div className="space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span>미리 준비할 것</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span>완벽한 계획</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span>의지력 테스트</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20" data-testid="card-just-do">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-muted-foreground">이것만 하세요</h3>
                <div className="space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>따라오면 됩니다</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>질문하면 됩니다</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>함께 완성합니다</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 9: 혜택 + 보너스 */}
      <section className="py-16 px-4" data-testid="section-benefits">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" data-testid="text-benefits-title">
            참가하시면 얻는 것
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card data-testid="card-benefit-1">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">2026년 연간 목표 로드맵</h3>
              </CardContent>
            </Card>
            <Card data-testid="card-benefit-2">
              <CardContent className="p-6 text-center">
                <RefreshCw className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">나만의 실행 전략 설계안</h3>
                <p className="text-sm text-muted-foreground">Don't & Do & 실행계획</p>
              </CardContent>
            </Card>
            <Card data-testid="card-benefit-3">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">함께 시작하는 동기와 에너지</h3>
              </CardContent>
            </Card>
          </div>
          <div className="text-center p-6 bg-accent/20 rounded-lg" data-testid="section-pricing">
            <p className="text-sm text-muted-foreground mb-1">정가 20,000원</p>
            <p className="text-2xl font-bold text-primary mb-1" data-testid="text-price">얼리버드 10,000원</p>
            <p className="text-sm text-primary font-medium mb-2">(1월 22일까지)</p>
            <p className="text-sm text-muted-foreground">간단한 식사 & 음료 제공</p>
          </div>
        </div>
      </section>

      {/* Section 10: 리스크 제거 */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-risk">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-4">
            "괜히 갔다가 시간만 버리는 거 아니야?"
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" data-testid="text-risk-title">
            아닙니다.
          </h2>
          <p className="text-lg mb-8">
            이 모임의 목표는 단 하나.
            <br />
            <span className="text-primary font-semibold">'계획을 완성하고 돌아가게 하는 것'</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              구조화된 진행
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              퍼실리테이션
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              검증된 롤라움 방식
            </Badge>
          </div>
        </div>
      </section>

      {/* Section 11: Before/After */}
      <section className="py-16 px-4" data-testid="section-comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" data-testid="text-comparison-title">
            1년 뒤, 어떤 말을 하고 싶으신가요?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-destructive/5 border-destructive/20" data-testid="card-comparison-no">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-medium mb-4">아무 것도 바꾸지 않는다면</p>
                <p className="text-muted-foreground">
                  "올해도 비슷했어…"라는 말
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20" data-testid="card-comparison-yes">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-medium mb-4">이 밤을 선택한다면</p>
                <p className="text-muted-foreground">
                  "그때 방향을 잡았던 게 진짜 컸어"
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-lg mt-8 font-medium">
            선택은 단 <span className="text-primary font-bold">90분</span>입니다.
          </p>
        </div>
      </section>

      {/* Section 12: 타겟 필터링 */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-target">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div data-testid="list-target-yes">
              <h2 className="text-xl font-bold mb-4 text-primary" data-testid="text-target-yes">이런 분께 추천합니다</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>신년 계획을 세우다 늘 포기했던 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>방향 없이 바쁜 하루가 답답한 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>계획 → 실행 구조를 만들고 싶은 분</span>
                </li>
              </ul>
            </div>
            <div data-testid="list-target-no">
              <h2 className="text-xl font-bold mb-4 text-muted-foreground" data-testid="text-target-no">이런 분께는 맞지 않을 수 있어요</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>아무 생각 없이 듣기만 원하는 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>실행 의지가 전혀 없는 분</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: 최종 CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-final-cta-title">
            2026년을 미루지 마세요
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            정해진 시간, 정해진 공간, 함께하는 사람들
            <br />
            이번엔 끝까지 완성해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" asChild data-testid="button-ritual-night-apply-bottom">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                리추얼 나잇 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-ritual-night-contact-bottom">
              <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                문의하기
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2026.01.27 (화) 19:30–21:00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>디캠프 선릉</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>90분</span>
            </div>
          </div>

          {/* 공간후원 */}
          <div className="flex items-center justify-center gap-3" data-testid="sponsor-dcamp">
            <span className="text-xs text-muted-foreground">공간후원</span>
            <img src={dcampLogo} alt="디캠프" className="h-6" />
          </div>
        </div>
      </section>
    </div>
  );
}
