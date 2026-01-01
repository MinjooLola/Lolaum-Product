import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import type { Challenge } from "@shared/schema";

export default function Challenges() {
  const { data: challenges, isLoading } = useQuery<Challenge[]>({
    queryKey: ["/api/challenges"],
  });

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-challenges-title">
            리추얼 챌린지
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3주간의 작은 습관이 당신을 바꿉니다.
            원하는 챌린지만 선택해서 참여하세요.
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

        {/* Challenges Grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <Skeleton className="h-48 rounded-t-lg" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-20 mb-3" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges?.map((challenge) => (
              <Card key={challenge.id} className="overflow-hidden" data-testid={`card-challenge-${challenge.id}`}>
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${challenge.imageUrl})` }}
                >
                  {challenge.isPopular && (
                    <Badge className="absolute top-3 right-3">인기</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{challenge.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground mb-4">{challenge.shortDescription}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{challenge.duration}</span>
                    </div>
                    <span>·</span>
                    <span>{challenge.frequency}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">참가비</p>
                      <p className="font-semibold">{challenge.price.toLocaleString()}원</p>
                    </div>
                    <Link href="/apply">
                      <Button data-testid={`button-apply-${challenge.id}`}>
                        신청하기
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">어떤 챌린지부터 시작할지 고민되시나요?</h2>
          <p className="text-muted-foreground mb-6">
            무제한 패키지로 원하는 모든 챌린지에 참여해보세요
          </p>
          <Link href="/pricing">
            <Button variant="outline" data-testid="button-view-pricing">
              패키지 가격 보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
