import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Repeat, ArrowRight, Leaf, Clock, Users } from "lucide-react";

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

        {/* Founder Story */}
        <section className="mb-16">
          <Card className="bg-muted/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">파운더 롤라의 이야기</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  저도 한때 일을 사랑했지만, 스스로를 잃어가는 사람이었습니다.
                  끊임없이 달리다 보니 어느새 지쳐 있었고, 
                  "왜 이렇게 열심히 사는데 행복하지 않지?"라는 질문에 답을 찾지 못했어요.
                </p>
                <p>
                  그러다 작은 리추얼을 시작했습니다. 아침 10분 독서, 잠들기 전 하루 기록.
                  처음엔 그저 해보자는 마음이었는데, 3주가 지나니 달라진 제 자신을 발견했어요.
                </p>
                <p>
                  4년간 리추얼을 이어오며, 3년 8개월 동안 커뮤니티를 운영하면서 깨달았습니다.
                  <strong className="text-foreground"> 의지의 문제가 아니라 환경의 문제</strong>라는 것을요.
                </p>
                <p className="text-foreground font-medium">
                  롤라움은 그렇게 시작됐습니다. 
                  혼자서는 힘들었던 것들을 함께, 그리고 시스템으로 해낼 수 있도록.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">롤라</p>
                  <p className="text-sm text-muted-foreground">롤라움 파운더 · 4년차 리추얼러</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
          <Link href="/challenges">
            <Button size="lg" data-testid="button-about-to-challenges">
              챌린지 둘러보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
