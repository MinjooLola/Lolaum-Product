import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Calendar, Sun, Dumbbell, BookOpen, Languages, PenLine, Wallet, BookOpenCheck } from "lucide-react";

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

export default function Challenges() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">42기 리추얼 챌린지</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-challenges-title">
            리추얼 챌린지 리스트
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            1/5(월) ~ 1/23(금) 3주간 진행
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">어떤 챌린지부터 시작할지 고민되시나요?</h2>
          <p className="text-muted-foreground mb-6">
            1:1 루틴 진단 & 코칭으로 나에게 맞는 챌린지를 찾아보세요.<br />
            <span className="text-sm">무제한+코칭 패키지 선택 시 맞춤형 상담이 포함됩니다.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild data-testid="button-view-pricing">
              <Link href="/pricing">
                패키지 가격 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild data-testid="button-apply-now">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                지금 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
