import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Users, ArrowRight, Quote, CheckCircle, XCircle } from "lucide-react";
import type { Challenge, Review } from "@shared/schema";

export default function Home() {
  const { data: challenges } = useQuery<Challenge[]>({
    queryKey: ["/api/challenges"],
  });

  const { data: reviews } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 bg-gradient-to-b from-accent/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-3 h-3 mr-1" />
            리추얼 설계 브랜드
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" data-testid="text-hero-headline">
            의지가 아니라 환경으로
            <br />
            <span className="text-primary">당신의 루틴을 완성하는 곳</span>, 롤라움
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-subheadline">
            매일 10분, 30분의 작은 리추얼이
            결국 '해내는 사람'을 만듭니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" data-testid="button-hero-apply">
                리추얼 챌린지 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" data-testid="button-hero-about">
                롤라움이 궁금하다
              </Button>
            </Link>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">리추얼 챌린지</h2>
            <p className="text-muted-foreground">원하는 챌린지만 선택해서 참여하세요</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges?.slice(0, 4).map((challenge) => (
              <Card key={challenge.id} className="overflow-hidden hover-elevate" data-testid={`card-challenge-${challenge.id}`}>
                <div 
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${challenge.imageUrl})` }}
                />
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{challenge.category}</Badge>
                  <h3 className="font-semibold mb-1">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{challenge.shortDescription}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{challenge.duration}</span>
                    <span>·</span>
                    <span>{challenge.frequency}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/challenges">
              <Button variant="outline" data-testid="button-view-all-challenges">
                챌린지 전체 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">참여자 후기</h2>
            <p className="text-muted-foreground">"의지 → 시스템" 변화를 경험한 분들</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews?.slice(0, 3).map((review) => (
              <Card key={review.id} data-testid={`card-review-${review.id}`}>
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-lg font-medium mb-4">"{review.highlight}"</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{review.content}</p>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{review.authorName}</span>
                    {review.category && (
                      <Badge variant="outline" className="ml-auto">{review.category}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews">
              <Button variant="outline" data-testid="button-view-all-reviews">
                후기 전체 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
          <Link href="/apply">
            <Button size="lg" variant="secondary" data-testid="button-cta-apply">
              지금 시작하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
