import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { BookOpen } from "lucide-react";
import rolaProfileUrl from "@assets/김민주_프로필_240525_1767243367580.png";
import aboutBgUrl from "@assets/stock_images/notebook_pen_writing_794f0fdc.jpg";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section 
        className="relative py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBgUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-about-title">
            우리는 알고 있습니다
          </h1>
          <div className="text-lg md:text-xl leading-relaxed space-y-6 text-white/90">
            <p>
              좋은 습관이 중요하다는 사실을.<br />
              하지만 바쁜 일상 속에서<br />
              혼자 꾸준히 이어가는 일은 생각보다 훨씬 어렵다는 것도요.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Philosophy Content */}
          <section className="mb-16">
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                <strong className="text-foreground">롤라움</strong>은 의지나 동기부여에 기대지 않습니다.<br />
                대신, 매일 10분·30분의 작은 리추얼이<br />
                자연스럽게 반복될 수 있도록<br />
                <strong className="text-foreground">지속 가능한 환경과 구조</strong>를 설계합니다.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                아침을 나만의 리추얼로 시작하면<br />
                하루의 주도권은 자연스럽게 나에게 돌아옵니다.<br />
                작은 실천이 쌓이며<br />
                삶의 방향은 점점 더 선명해지고,<br />
                일과 삶의 균형도 조금씩 회복됩니다.
              </p>

              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary inline-block text-left">
                <p className="text-muted-foreground leading-relaxed">
                  롤라움이 믿는 변화는 거창하지 않습니다.<br />
                  눈에 띄지 않는 작은 리추얼이<br />
                  어느 순간 <strong className="text-foreground">'놀라운 변화'</strong>로 이어진다는 것.<br />
                  그리고 사람은<br />
                  자신만의 리듬을 되찾을 때<br />
                  비로소 성장하고 행복해질 수 있다는 것입니다.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                <strong className="text-foreground">롤라움</strong>은<br />
                성장하고 싶은 사람들이 머물며<br />
                서로를 지지받을 수 있는 <strong className="text-foreground">커뮤니티</strong>이자,<br />
                일상의 리추얼을 설계하는 <strong className="text-foreground">브랜드</strong>입니다.
              </p>

              <p className="text-xl font-medium text-primary py-4">
                오늘의 작은 리추얼이<br />
                당신의 내일을 바꾸는 시작이 되기를 바랍니다.
              </p>
            </div>
          </section>

          {/* Founder Profile */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">파운더 소개</h2>
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <img 
                  src={rolaProfileUrl} 
                  alt="롤라 프로필" 
                  className="w-32 h-32 rounded-full object-cover mb-4 mx-auto"
                  data-testid="img-rola-profile"
                />
                <h3 className="text-xl font-bold">롤라</h3>
                <p className="text-sm text-primary mb-4">롤라움 파운더 · 리추얼 챌린지 리더</p>
                <p className="text-muted-foreground mb-4">
                  2022년 모닝 리추얼로 시작한 새벽 기상 덕분에 삶이 완전히 달라지는 경험을 한 후, 4년간 120명이 넘는 멤버들이 500회 이상 참여하고 있는 리추얼 챌린지를 운영하고 있어요. 10분 리추얼로 하루를 원하는 방향으로 설계하는 법을 알려드릴게요!
                </p>
                <div className="text-sm text-muted-foreground space-y-1 mb-6">
                  <p>리추얼 커뮤니티 '리추얼클럽' 파운더</p>
                  <p>MBC 〈리추얼의 힘〉 캠페인 방송 출연</p>
                  <p>리추얼 기반 강연·코칭 다수 진행</p>
                  <p className="pt-2">로컬 스타트업 컨설팅 회사 대표</p>
                  <p>서울국제고등학교 · 한국외국어대학교(스페인어)</p>
                </div>
                <div className="flex justify-center gap-3">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/lolajjoo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="link-linkedin">
                      <SiLinkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.instagram.com/lola_jjoo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="link-instagram">
                      <SiInstagram className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://brunch.co.kr/@lolajjoo" target="_blank" rel="noopener noreferrer" aria-label="Brunch" data-testid="link-brunch">
                      <BookOpen className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div>
            <Button size="lg" asChild data-testid="button-about-to-apply">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                42기 마감 | 리추얼 챌린지 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
