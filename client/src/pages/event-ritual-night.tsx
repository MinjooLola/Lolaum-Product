import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, ChevronDown, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

const APPLY_URL = "https://forms.gle/E6AMemjUnkH1tZ618";
const KAKAO_URL = "https://pf.kakao.com/_xxxx";
const MAP_URL = "https://naver.me/502MT5HC";

const faqData = [
  {
    question: "계획을 잘 못 세우는데 괜찮나요?",
    answer: "걱정하지 마세요! 이 모임은 계획을 잘 세우는 분들을 위한 곳이 아닙니다. 오히려 매년 계획 세우기가 어렵거나 작심삼일로 끝났던 분들을 위해 만들었어요. 90분 동안 단계별로 안내해드리니 따라오시기만 하면 됩니다."
  },
  {
    question: "준비물이 있나요?",
    answer: "필기구만 가져오시면 됩니다. 워크시트는 현장에서 제공해드려요. 노트북이나 태블릿이 있으면 더 편하게 작성하실 수 있어요."
  },
  {
    question: "늦게 도착하면 참여가 어렵나요?",
    answer: "프로그램이 순서대로 진행되기 때문에 가능하면 시작 시간에 맞춰 와주시면 좋겠어요. 부득이하게 늦으실 경우 미리 연락 주시면 입장을 도와드릴게요."
  },
  {
    question: "참가비에는 뭐가 포함되나요?",
    answer: "참가비 10,000원에는 간단한 식사와 음료, 그리고 워크시트가 포함되어 있습니다. 장소 대관 및 운영비로 사용됩니다."
  }
];

const testimonials = [
  "환경과 시스템을 만드는 것이 중요하다는 것을 알게 되었어요",
  "매일 읽는 책이 제 인생을 바꾸고 있다고 확신합니다",
  "운동이 일상의 한 부분으로 자연스럽게 자리 잡았어요"
];

export default function EventRitualNight() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent)]" />
        <div className="container-width relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6" data-testid="badge-urgency">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            선착순 마감 · 조기 마감될 수 있어요
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">
            롤라움 1월 모임<br />
            <span className="text-white/90">리추얼 나잇 : 신년계획 뽀개기</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mt-6 mb-4">
            아직도 2026년 계획이 비어 있나요?<br />
            1월이 끝나기 전에 '완성'하세요.
          </p>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            혼자서는 흐지부지 끝나는 신년계획,<br className="md:hidden" />
            정해진 시간·공간·사람들과 90분 안에 완성합니다.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-waguri text-lg px-8 py-6"
            onClick={() => window.open(APPLY_URL, '_blank')}
            data-testid="button-apply-top"
          >
            지금 신청하기
          </Button>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 text-center">행사 안내</h2>
            
            <div className="space-y-4">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">일시</div>
                      <div className="text-muted-foreground">2026년 1월 27일(화) 19:30 – 21:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground mb-1">장소</div>
                      <div className="text-muted-foreground mb-2">디캠프 선릉 6층 세미나실</div>
                      <div className="text-sm text-muted-foreground/70">강남구 역삼동 선릉로 551 새롬빌딩</div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3"
                        onClick={() => window.open(MAP_URL, '_blank')}
                        data-testid="button-map"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        지도 열기
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">참가비</div>
                      <div className="text-muted-foreground">10,000원 <span className="text-sm text-muted-foreground/70">(간단한 식사 및 음료 / 운영비)</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-width px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 text-center">90분 프로그램</h2>
            
            <div className="space-y-4">
              {[
                { step: "1", title: "2026년 나의 키워드 정하기", desc: "올해를 관통할 핵심 키워드를 찾습니다" },
                { step: "2", title: "연간 목표 수립", desc: "Work & Life 영역별로 목표를 정리합니다" },
                { step: "3", title: "올해의 리추얼 설계", desc: "Do / Don't / 실행계획을 구체화합니다" },
                { step: "4", title: "2026년 신년 계획 선언", desc: "함께 모인 자리에서 계획을 선언합니다" }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button 
                size="lg" 
                className="font-waguri text-lg px-8 py-6"
                onClick={() => window.open(APPLY_URL, '_blank')}
                data-testid="button-apply-middle"
              >
                지금 신청하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 text-center">이런 분께 추천해요</h2>
            
            <div className="space-y-4">
              {[
                "매년 신년 계획을 세우긴 했지만 금방 흐지부지됐던 분",
                "해야 할 일은 많은데 방향이 정리되지 않아 답답한 분",
                "올해만큼은 계획 → 실행 구조를 만들고 싶은 분"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="container-width px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Before / After</h2>
            <p className="text-muted-foreground mb-10">90분 후, 당신은 달라져 있을 거예요</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">Before</div>
                  <p className="text-foreground">"올해도 바쁘기만 하고<br />방향은 그대로"</p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">After</div>
                  <p className="text-foreground">"키워드 / 목표 / 리추얼까지<br />정리된 상태로 1월을 마무리"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 text-center">롤라움이 걸어온 길</h2>
            <p className="text-muted-foreground text-center mb-10">
              "의지가 아니라 환경으로, 당신의 루틴을 완성하는 곳"
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "4년", label: "운영 기간" },
                { value: "120+", label: "누적 참가자" },
                { value: "512+", label: "누적 챌린지 참여" },
                { value: "60%+", label: "재참여율" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-secondary/30 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-width px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 text-center">참여자 후기</h2>
            
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-foreground italic">"{testimonial}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 text-center">자주 묻는 질문</h2>
            
            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-border rounded-xl overflow-hidden"
                  data-testid={`faq-item-${index}`}
                >
                  <button
                    className="w-full flex items-center justify-between p-4 text-left hover-elevate"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    data-testid={`button-faq-${index}`}
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="container-width px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 bg-white rounded-2xl border border-border">
              <p className="text-lg text-muted-foreground mb-2">완벽할 필요는 없습니다.</p>
              <p className="text-lg text-muted-foreground mb-6">다만 끝까지 함께할 준비만 해주세요.</p>
              <p className="font-medium text-foreground mb-8">
                이 모임의 목표는 하나:<br />
                <span className="text-primary">90분 안에 계획을 완성하고 돌아가는 것.</span>
              </p>
              
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                좌석 한정(선착순)으로 마감됩니다
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  className="font-waguri text-lg px-8 py-6"
                  onClick={() => window.open(APPLY_URL, '_blank')}
                  data-testid="button-apply-bottom"
                >
                  지금 신청하기
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6"
                  onClick={() => window.open(KAKAO_URL, '_blank')}
                  data-testid="button-kakao"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  문의하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
