import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Repeat, ArrowRight, Leaf, Clock, Users, BookOpen } from "lucide-react";
import rolaProfileUrl from "@assets/김민주_프로필_240525_1767243367580.png";
import lauraProfileUrl from "@assets/image_1767247209890.png";
import aboutBgUrl from "@assets/stock_images/morning_sunrise_peac_c8a895ae.jpg";

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
        <div className="max-w-3xl mx-auto">
          {/* Philosophy Content */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">롤라움</strong>은 의지나 동기부여에 기대지 않습니다.<br />
                  대신, 매일 10분·30분의 작은 리추얼이<br />
                  자연스럽게 반복될 수 있도록<br />
                  <strong className="text-foreground">지속 가능한 환경과 구조</strong>를 설계합니다.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  아침을 나만의 리추얼로 시작하면<br />
                  하루의 주도권은 자연스럽게 나에게 돌아옵니다.<br />
                  작은 실천이 쌓이며<br />
                  삶의 방향은 점점 더 선명해지고,<br />
                  일과 삶의 균형도 조금씩 회복됩니다.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground leading-relaxed mb-0">
                  롤라움이 믿는 변화는 거창하지 않습니다.<br />
                  눈에 띄지 않는 작은 리추얼이<br />
                  어느 순간 <strong className="text-foreground">'놀라운 변화'</strong>로 이어진다는 것.<br />
                  그리고 사람은<br />
                  자신만의 리듬을 되찾을 때<br />
                  비로소 성장하고 행복해질 수 있다는 것입니다.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">롤라움</strong>은<br />
                  성장하고 싶은 사람들이 머물며<br />
                  서로를 지지받을 수 있는 <strong className="text-foreground">커뮤니티</strong>이자,<br />
                  일상의 리추얼을 설계하는 <strong className="text-foreground">브랜드</strong>입니다.
                </p>
              </div>

              <div className="text-center py-4">
                <p className="text-lg font-medium text-primary">
                  오늘의 작은 리추얼이<br />
                  당신의 내일을 바꾸는 시작이 되기를 바랍니다.
                </p>
              </div>
            </div>
          </section>

          {/* Leader Profiles */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">리더 소개</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Rola */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <img 
                      src={rolaProfileUrl} 
                      alt="롤라 프로필" 
                      className="w-32 h-32 rounded-full object-cover mb-4"
                      data-testid="img-rola-profile"
                    />
                    <h3 className="text-xl font-bold">롤라</h3>
                    <p className="text-sm text-primary">롤라움 파운더 · 리추얼 챌린지 리더</p>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    2022년 모닝 리추얼로 새벽 기상을 시작한 후 삶이 완전히 달라지는 경험을 하고, 
                    4년간 120명이 넘는 멤버들이 500회 이상 참여하고 있는 리추얼 챌린지를 운영하고 있어요. 
                    하루 10분 리추얼로 내 하루하루를 원하는 방향으로 설계하는 법을 알려드릴게요!
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>서울국제고 졸업</p>
                    <p>한국외대 스페인어과 졸업</p>
                    <p>4년차 리추얼 챌린지 리더</p>
                    <p>리추얼 커뮤니티 '리추얼클럽' 파운더</p>
                    <p>MBC 리추얼의힘 캠페인 방송 출연</p>
                    <p>리추얼 관련 각종 강연&코칭 진행</p>
                    <p>로컬 스타트업 컨설팅 회사 대표</p>
                  </div>
                </CardContent>
              </Card>

              {/* Laura */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <img 
                      src={lauraProfileUrl} 
                      alt="로라 프로필" 
                      className="w-32 h-32 rounded-full object-cover mb-4"
                      data-testid="img-laura-profile"
                    />
                    <h3 className="text-xl font-bold">로라</h3>
                    <p className="text-sm text-primary">원서읽기 리추얼 리더</p>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    원서읽기 덕후로 살아온 지 어느덧 16년. 
                    작가의 언어 그대로를 읽어내는 원서읽기의 즐거움을 이제 여러분과 공유하고 싶어요. 
                    영어 '독해'가 아닌 영어 '독서'의 세계가 펼쳐지도록 친절히 안내할게요!
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>성남외고 영어과 졸업</p>
                    <p>서울대 경제학부 졸업</p>
                    <p>2021년 후반기 육군 통역장교 선발시험 합격</p>
                    <p>(전) 영어 라디오 채널 TBS eFM 객원 리포터</p>
                    <p>(전) IT회사 글로벌 PR 매니저</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" asChild data-testid="button-about-to-apply">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                리추얼 챌린지 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
