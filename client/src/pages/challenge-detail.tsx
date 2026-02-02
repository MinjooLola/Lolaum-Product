import { Link, useParams, Redirect } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock, Calendar, Users, CheckCircle, Sun, Dumbbell, BookOpen, Languages, PenLine, Wallet, BookOpenCheck } from "lucide-react";
import lauraProfileUrl from "@assets/image_1767247209890.png";
import rolaProfileUrl from "@assets/김민주_프로필_240525_1767243367580.png";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog";

interface LeaderInfo {
  name: string;
  title: string;
  image: string;
  description: string;
  credentials: string[];
}

const rolaLeader: LeaderInfo = {
  name: "롤라",
  title: "롤라움 파운더 · 리추얼 챌린지 리더",
  image: rolaProfileUrl,
  description: "2022년 모닝 리추얼로 시작한 새벽 기상 덕분에 삶이 완전히 달라지는 경험을 한 후, 4년간 누적 500명 이상이 참여하고 있는 리추얼 챌린지와 회사 밖 '나'를 회복하는 루틴 커뮤니티 리추얼클럽을 운영하고 있어요. 10분 리추얼로 하루를 원하는 방향으로 설계하는 법을 알려드릴게요!",
  credentials: [
    "리추얼 커뮤니티 '리추얼클럽' 파운더",
    "MBC 〈리추얼의 힘〉 캠페인 방송 출연",
    "리추얼 기반 강연·코칭 다수 진행",
    "",
    "로컬 스타트업 컨설팅 회사 대표",
    "서울국제고등학교 · 한국외국어대학교(스페인어)"
  ]
};

const lauraLeader: LeaderInfo = {
  name: "로라",
  title: "원서읽기 리추얼 리더",
  image: lauraProfileUrl,
  description: "원서읽기 덕후로 살아온 지 어느덧 16년. 작가의 언어 그대로를 읽어내는 원서읽기의 즐거움을 이제 여러분과 공유하고 싶어요. 영어 독해를 넘어 영어 독서의 세계가 펼쳐지도록 친절히 안내할게요!",
  credentials: [
    "성남외고 영어과 졸업",
    "서울대 경제학부 졸업",
    "2021년 후반기 육군 통역장교 선발시험 합격",
    "(전) 영어 라디오 채널 TBS eFM 객원 리포터",
    "(전) IT회사 글로벌 PR 매니저"
  ]
};

interface ChallengeData {
  slug: string;
  title: string;
  subtitle: string;
  icon: typeof Sun;
  description: string;
  details: string[];
  schedule: string;
  frequency: string;
  recommendations: string[];
  leader: LeaderInfo;
}

const challengesData: Record<string, ChallengeData> = {
  "morning": {
    slug: "morning",
    title: "모닝리추얼챌린지",
    subtitle: "하루의 주도권을 되찾는 아침 리추얼",
    icon: Sun,
    description: "모닝리추얼챌린지는 평일 아침, 정해진 시간에 온라인 Live로 함께 하루를 시작하는 챌린지입니다. 알람을 끄고 다시 눕는 대신, 카메라를 켜는 순간 하루가 시작되는 구조를 만듭니다.\n\n아침 시간을 회사 일정이나 급한 메시지가 아니라 '나를 위한 시간'으로 먼저 쓰는 경험을 통해 하루 전체의 리듬을 바꾸는 것을 목표로 합니다.",
    details: [
      "정해진 시간에 함께 접속",
      "각자의 리추얼을 조용히 진행",
      "'켜두기만 하는 미라클모닝'이 아닌, 실제로 움직이게 만드는 환경"
    ],
    schedule: "평일 아침 Live 진행",
    frequency: "주 5회",
    recommendations: [
      "항상 출근 시간에 맞춰 허겁지겁 하루를 시작하는 분",
      "미라클모닝을 여러 번 시도했지만 혼자서는 지속이 안 됐던 분",
      "하루의 리듬을 바꾸고 싶은 분"
    ],
    leader: rolaLeader
  },
  "exercise": {
    slug: "exercise",
    title: "운동리추얼챌린지",
    subtitle: "운동을 '해야 하는 일'이 아니라 '하는 사람'으로 만드는 챌린지",
    icon: Dumbbell,
    description: "운동리추얼챌린지는 완벽한 운동 루틴이 아니라 운동을 일상에 붙이는 것에 초점을 둡니다.\n\n하루 10분, 주 5회. 짧지만 자주 움직이는 경험을 통해 '운동을 하는 사람'이라는 정체성을 만드는 것이 목표입니다.",
    details: [
      "주 5회 10분 이상 운동",
      "주 2회는 식단 인증으로 대체 가능",
      "부담을 낮춰 포기하지 않게 설계"
    ],
    schedule: "리더 가이드, 꿀팁 제공",
    frequency: "주 5회, 10분 이상",
    recommendations: [
      "운동 계획은 항상 세우지만 오래 못 가는 분",
      "헬스장 등록만 반복했던 분",
      "체력과 컨디션을 바꾸고 싶은 분"
    ],
    leader: rolaLeader
  },
  "reading": {
    slug: "reading",
    title: "독서리추얼챌린지",
    subtitle: "읽는 것을 넘어, 삶에 남기는 독서 리추얼",
    icon: BookOpen,
    description: "독서리추얼챌린지는 단순히 책을 '읽는 것'이 아니라 읽고 남기는 독서 습관을 만드는 챌린지입니다.\n\n짧은 독서라도 매일 이어가고, 기록을 통해 생각을 정리하며 독서가 삶의 방향에 영향을 주는 경험을 목표로 합니다.",
    details: [
      "주 5회 10분 이상 독서",
      "독서 기록 필수",
      "양보다 지속과 정리에 집중"
    ],
    schedule: "리더 가이드, 꿀팁 제공",
    frequency: "주 5회, 10분 이상",
    recommendations: [
      "책을 사놓고 끝까지 못 읽는 분",
      "독서를 습관으로 만들고 싶은 분",
      "생각을 정리하고 싶은 분"
    ],
    leader: rolaLeader
  },
  "english": {
    slug: "english",
    title: "영어리추얼챌린지",
    subtitle: "영어 실력보다 '영어를 매일 접하는 환경'을 만드는 챌린지",
    icon: Languages,
    description: "영어리추얼챌린지는 공부 방법을 강요하지 않습니다.\n\n대신, 영어를 매일 접하게 만드는 환경을 만듭니다. 하루 10분이라도 영어 콘텐츠를 보고, 읽고, 쓰는 경험이 두려움을 낮추고 감각을 유지하게 합니다.",
    details: [
      "주 5회 10분 이상, 원하는 방식으로 영어 공부",
      "강의/영상/독해/쓰기 모두 가능",
      "중요한 건 끊기지 않는 노출"
    ],
    schedule: "리더 가이드, 꿀팁 제공",
    frequency: "주 5회, 10분 이상",
    recommendations: [
      "영어가 늘 부담스럽고 미뤄지는 분",
      "영어 공부를 시작했다가 자주 포기했던 분",
      "영어를 '일상의 언어'로 만들고 싶은 분"
    ],
    leader: rolaLeader
  },
  "spanish": {
    slug: "spanish",
    title: "제2언어리추얼챌린지",
    subtitle: "나만의 제2외국어를 일상에 고정하는 챌린지",
    icon: Languages,
    description: "제2언어리추얼챌린지는 영어 외에 나만의 제2외국어(스페인어, 프랑스어, 중국어, 일본어 등)를 자율적으로 선택해 공부하는 챌린지입니다.\n\n짧게라도 자주 접하며 언어 감각을 유지하고, '언젠가 다시'가 아니라 '지금도 하고 있다'는 상태를 만드는 것이 목표입니다.",
    details: [
      "주 5회 10분 이상",
      "제2외국어 자율 선택 (스페인어, 프랑스어, 중국어, 일본어 등)",
      "학습 방식 자유, 꾸준함 중심 설계"
    ],
    schedule: "리더 가이드, 꿀팁 제공",
    frequency: "주 5회, 10분 이상",
    recommendations: [
      "제2외국어를 시작하거나 다시 시작하고 싶은 분",
      "언어를 취미가 아닌 습관으로 만들고 싶은 분"
    ],
    leader: rolaLeader
  },
  "writing": {
    slug: "writing",
    title: "기록리추얼챌린지",
    subtitle: "쓰고 싶은 글을 매일 쓰며, 기록하는 사람이 되는 시간",
    icon: PenLine,
    description: "기록리추얼챌린지는 잘 쓰는 글이 아니라 계속 쓰는 사람이 되는 데 목적이 있습니다.\n\n일기, 에세이, 블로그, 업무 기록 등 각자 쓰고 싶은 글을 자유롭게 쓰면서 글쓰기를 일상으로 만드는 경험을 합니다.",
    details: [
      "주 5회 글쓰기",
      "주 2회는 글 읽기로 대체 가능",
      "쓰는 주제와 형식은 자유"
    ],
    schedule: "리더 가이드, 꿀팁 제공",
    frequency: "주 5회",
    recommendations: [
      "글쓰기를 습관으로 만들고 싶은 분",
      "블로그, 일기, 에세이 등 꾸준히 쓰고 싶은 분",
      "생각을 정리하고 기록으로 남기고 싶은 분"
    ],
    leader: rolaLeader
  },
  "finance": {
    slug: "finance",
    title: "자산관리리추얼챌린지",
    subtitle: "돈을 피하지 않는 연습부터 시작하는 자산관리 리추얼",
    icon: Wallet,
    description: "자산관리리추얼챌린지는 완벽한 재테크가 아니라 돈을 매일 바라보는 습관을 만드는 챌린지입니다.\n\n짧은 기록과 정리를 통해 소비 패턴을 인식하고 돈에 대한 감정적 부담을 낮추는 것을 목표로 합니다.",
    details: [
      "주 5회 지출 관리 & 돈 공부 기록",
      "가볍지만 꾸준한 구조",
      "'관리'보다 인식에 집중"
    ],
    schedule: "리더 가이드, 꿀팁 제공",
    frequency: "주 5회",
    recommendations: [
      "돈 관리를 미루고 있는 분",
      "소비 패턴을 바꾸고 싶은 분",
      "자산관리를 습관으로 만들고 싶은 분"
    ],
    leader: rolaLeader
  },
  "english-reading": {
    slug: "english-reading",
    title: "원서읽기리추얼챌린지",
    subtitle: "혼자서는 끝내기 어려운 원서읽기를 구조로 완주하는 챌린지",
    icon: BookOpenCheck,
    description: "원서읽기리추얼챌린지는 정해진 분량 + 질문 답변 인증을 통해 읽다 포기하지 않도록 설계된 챌린지입니다.\n\n전문가 가이드와 함께 이해하고, 생각하고, 정리하며 원서 읽기를 '시도'가 아닌 '완주 경험'으로 만듭니다.",
    details: [
      "주 5회 정해진 분량 원서 읽기",
      "질문 답변 인증 필수",
      "깊이 있는 독서 경험 제공"
    ],
    schedule: "전문가 가이드 함께 진행",
    frequency: "주 5회",
    recommendations: [
      "원서 읽기를 여러 번 포기했던 분",
      "깊이 있는 독서를 경험해보고 싶은 분",
      "혼자서는 동력이 부족했던 분"
    ],
    leader: lauraLeader
  }
};

export default function ChallengeDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  
  if (!slug || !challengesData[slug]) {
    return <Redirect to="/challenges" />;
  }
  
  const challenge = challengesData[slug];

  const Icon = challenge.icon;

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/challenges" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8" data-testid="link-back-challenges">
          <ArrowLeft className="w-4 h-4 mr-1" />
          챌린지 목록
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold" data-testid="text-challenge-title">
                {challenge.title}
              </h1>
              <p className="text-muted-foreground">{challenge.subtitle}</p>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{challenge.schedule}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{challenge.frequency}</span>
              </div>
            </div>

            <div className="prose prose-sm max-w-none dark:prose-invert">
              {challenge.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4">챌린지 구성</h2>
            <ul className="space-y-3">
              {challenge.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-muted/30">
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              이런 분께 추천해요
            </h2>
            <ul className="space-y-2">
              {challenge.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary">-</span>
                  {rec}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Leader Profile */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="font-semibold mb-6 text-center">리더 소개</h2>
            <div className="flex flex-col items-center text-center mb-6">
              <img 
                src={challenge.leader.image} 
                alt={`${challenge.leader.name} 프로필`}
                className="w-24 h-24 rounded-full object-cover mb-4"
                data-testid="img-leader-profile"
              />
              <h3 className="text-lg font-bold">{challenge.leader.name}</h3>
              <p className="text-sm text-primary">{challenge.leader.title}</p>
            </div>
            <p className="text-muted-foreground mb-4 text-center">
              {challenge.leader.description}
            </p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              {challenge.leader.credentials.map((cred, i) => (
                cred ? <p key={i}>{cred}</p> : <div key={i} className="h-2" />
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted/30 rounded-lg p-6 text-center mb-8">
          <p className="text-sm text-muted-foreground mb-4">
            롤라움의 모든 챌린지는 공통적으로<br />
            <strong className="text-foreground">"하루 10분부터, 꾸준히 할 수 있는 구조"</strong>를 기준으로 설계되어 있습니다.<br />
            중요한 것은 잘하는 것이 아니라, 0으로 만들지 않는 것입니다.
          </p>
        </div>

        <div className="flex justify-center">
          <Button size="lg" asChild data-testid="button-challenge-apply">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              챌린지 신청하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
