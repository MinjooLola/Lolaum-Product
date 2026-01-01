import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Repeat, ArrowRight, Leaf, Clock, Users, BookOpen } from "lucide-react";
import rolaProfileUrl from "@assets/김민주_프로필_240525_1767243367580.png";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog";

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
            롤라움에 대하여
          </h1>
          <p className="text-lg text-muted-foreground">
            '~다움'을 회복하는 것, 그것이 우리의 목표입니다
          </p>
        </div>

        {/* Brand Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">브랜드 철학</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">'~다움'의 회복</h3>
                <p className="text-sm text-muted-foreground">
                  남들의 기준이 아닌, 나만의 리듬과 페이스를 찾아가는 여정
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">나만의 리듬</h3>
                <p className="text-sm text-muted-foreground">
                  빠르지 않아도 괜찮아요. 나에게 맞는 속도를 찾는 것이 중요합니다
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Repeat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">작은 반복의 힘</h3>
                <p className="text-sm text-muted-foreground">
                  거창한 변화보다 매일의 작은 실천이 진짜 변화를 만듭니다
                </p>
              </CardContent>
            </Card>
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
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-12 h-12 text-primary" />
                  </div>
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

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">우리가 믿는 것</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <Target className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-medium mb-1">동기부여는 하지 않습니다</h3>
                <p className="text-sm text-muted-foreground">
                  일시적인 감정에 기대지 않아요. 대신 환경을 설계합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <Users className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-medium mb-1">함께의 힘을 믿습니다</h3>
                <p className="text-sm text-muted-foreground">
                  혼자보다 함께할 때 더 멀리 갈 수 있어요.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <Repeat className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-medium mb-1">실패해도 괜찮습니다</h3>
                <p className="text-sm text-muted-foreground">
                  완벽하지 않아도 돼요. 다시 시작할 수 있는 구조가 있으니까요.
                </p>
              </div>
            </div>
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
  );
}
