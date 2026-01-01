import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ArrowRight } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog";

const reviews = [
  {
    id: 1,
    authorName: "주디",
    content: "리추얼이 주는 기분과 성취가 너무 소중해요. 밀도 있게 아침 시간을 보내면 성취감이 크고 높은 생산성으로 하루를 보낼 수 있을 것 같은 기분이 더욱 크게 들어요. 요즘은 목표한 바를 한 두 가지 정도 달성하지 못하더라도 제 삶의 최후 방어선인 모리를 지키려고 노력했음에 의의를 두고 있어요. 모리는 제 삶의 중심이자 꾸준함의 힘을 알려주고 있는 원동력이에요.",
    highlight: "모리는 제 삶의 중심이자 꾸준함의 힘을 알려주고 있는 원동력"
  },
  {
    id: 2,
    authorName: "한나",
    content: "영어 공부뿐만이 아니라 하루 루틴을 형성하는 데도 큰 도움이 되었어요. 원래는 출근시간에 겨우 맞춰 일어나 헐레벌떡 하루를 시작하는 게 일상이었는데, 하루를 보다 여유롭게, 그리고 자기주도적으로 이끌어가는, 한 마디로 주체적인 삶을 산다는 만족감이 굉장히 컸어요!",
    highlight: "주체적인 삶을 산다는 만족감이 굉장히 컸어요"
  },
  {
    id: 3,
    authorName: "지로",
    content: "무게 변화도 의미 있었지만, 몸의 가벼움을 직접 느낄 수 있었다는 점이 더 크게 다가왔습니다. 운동을 한 다음 날 아침은 확실히 기상하기가 한결 수월했고, 출근길 발걸음도 이전보다 가벼워졌다구요! 퇴근 후 운동을 하지 않으면 뭔가 하루가 빠진 듯 허전하고 죄책감이 드는 순간이 생겼습니다. 그만큼 운동이 일상의 한 부분으로 자연스럽게 자리 잡았다는 것을 체감할 수 있었습니다.",
    highlight: "운동이 일상의 한 부분으로 자연스럽게 자리 잡았어요"
  },
  {
    id: 4,
    authorName: "쨈",
    content: "예전에는 글을 쓸 때 구조를 크게 신경 쓰지 않고, 생각나는 대로 두서없이 적는 편이었습니다. 부끄럽지만, 작성한 글을 다시 읽어보는 습관도 거의 없었습니다. 하지만 매일 글을 쓰고, 다른 사람들이 읽는다는 전제를 두다 보니 글의 흐름을 어떻게 잡을지 고민하게 되었고, 업로드 전에 최소 한두 번은 다시 읽고 고치는 습관이 생겼습니다!",
    highlight: "글의 흐름을 어떻게 잡을지 고민하게 되었어요"
  },
  {
    id: 5,
    authorName: "재은",
    content: "일상의 리추얼을 만들기 전에는 하고 싶은 공부가 있어도 못하거나 미루게 되었었고 어쩔수없이 모든 생활이 일에 맞추어져 있었어요. 그런데 이제는 내가 하고싶은게 생활의 1순위가 되었어요. 목표를 하나하나 달성해나가다보니 이전에 못했던 것들이 내가 시간활용을 잘 못해서 그랬던 것인가? 생각하게 된 것 같아요. 환경과 시스템을 만드는 것이 중요하다는 것을 알게 되었어요.",
    highlight: "환경과 시스템을 만드는 것이 중요하다는 것을 알게 되었어요"
  },
  {
    id: 6,
    authorName: "그레이스",
    content: "이번 챌린지를 통해 '나를 소진하는 것이 아닌 채우는 귀한 것을 하는 시간을 갖게 되어서 좋았습니다. 덧붙여 예전부터 지금도 저의 귀감이 되는 롤라님의 실행력, 끈기, 긍정의 끌어당김 등등 롤라님의 매력을 가까이서 심층케어 받으며 느낄 수 있어서 좋았어요!",
    highlight: "나를 채우는 귀한 시간을 갖게 되어서 좋았어요"
  },
  {
    id: 7,
    authorName: "율무",
    content: "내가 건강한 삶을 살고 있다는 만족감과 뿌듯함이 생겼고, 살도 조금 빠졌어요! 내가 나를 잘 챙기고 있다는 느낌이 너무 좋았습니다.",
    highlight: "내가 나를 잘 챙기고 있다는 느낌이 너무 좋았어요"
  },
  {
    id: 8,
    authorName: "올리",
    content: "모리 이전에는 기분좋게 아침을 시작하지 못했는데, 그 이유가 하루를 자발적으로 시작하지 못했기 때문인 것 같아요. 함께 하는 친구와 나를 위한 시간이 있으니 아침이 즐거워요! 아침의 나를 믿는 마음이 생겨서, 나를 믿으면서 하루를 시작하는 느낌이 좋아요.",
    highlight: "나를 믿으면서 하루를 시작하는 느낌이 좋아요"
  },
  {
    id: 9,
    authorName: "모르페우스",
    content: "약 3개월 동안 매일 짤막한 영어 공부와 함께 영어 일기 쓰기를 해온 스스로가 대견한 것 같습니다. 무언가 만들고 싶은 습관이 있다면, 3개월 동안 반복해보라고 하셨던 게 기억나는데 3개월 동안 꾸준히 해보겠다는 마음가짐을 갖고 정말 실천한다면 성공확률 100%일 것 같습니다.",
    highlight: "3개월 동안 꾸준히 하면 성공확률 100%"
  },
  {
    id: 10,
    authorName: "니나",
    content: "러닝을 해보자고 해놓고 거의 10년이상 못했는데 처음으로 일주일에 최소 2번은 러닝을 하게 되었어요. 그것만으로도 정말 어마무시한 변화! 운동한 날은 확실히 에너지가 넘치고, 거의 4-5시까지는 긍정의 기운이 따라가는것 같아요.",
    highlight: "10년 이상 못했던 러닝을 일주일에 2번 하게 되었어요"
  },
  {
    id: 11,
    authorName: "민송",
    content: "규칙적인 독서 루틴으로 환경을 바꾸고 습관으로 만드는 느낌이 좋았어요. 단순하게 책을 읽는 것을 넘어서 기록을 하고 간직하는 습관이 배움을 풍요롭게 만들어 주는 것 같아요.",
    highlight: "기록을 하고 간직하는 습관이 배움을 풍요롭게 만들어줘요"
  },
  {
    id: 12,
    authorName: "톨부장",
    content: "지나치지 않고 매일 조금씩이라도 하게 되는 좋은 습관이 생겼고, 고요한 새벽시간의 매력을 알게된 것만으로도 인생의 큰 자산인 것 같아요. 늦잠, 음주, 자극적인 음식 등 욕망을 충족하는 짧은 행복보다 스스로 통제를 통해 얻는 성취감, 안정감이 더 오래가는 행복이라는 것을 알게 됐어요.",
    highlight: "스스로 통제를 통해 얻는 성취감이 더 오래가는 행복"
  },
  {
    id: 13,
    authorName: "롤라",
    content: "5개월 간 꾸준히 운동리추얼을 진행하면서 주 3회, 하루 30분씩만 투자했더니 몸무게 4kg 감량했고, 근육량은 오히려 늘었어요! 무엇보다 러닝의 재미를 알게 된 게 가장 큰 수확이에요 :)",
    highlight: "주 3회 30분으로 4kg 감량, 근육량은 늘었어요"
  },
  {
    id: 14,
    authorName: "데이지",
    content: "미라클모닝을 안 해본 건 아닌데, 항상 화면만 키고 제대로 하지 않았어요. 그런데 모리챌린지의 툴은 할 수밖에 없게 저를 이끌었어요.",
    highlight: "모리챌린지의 툴은 할 수밖에 없게 저를 이끌었어요"
  },
  {
    id: 15,
    authorName: "씬나",
    content: "스스로에게 집중하며 살아왔는데, 모리를 통해 타인을 감각하게 되었어요. 다른 분들의 목표, 노력, 변화를 알게 되는 경험이었고, 페이스를 잃었을때에도 다른 사람들을 보며 달려갈 수 있어요. 언제나 등대처럼, 길을 잃어도 다시 돌아올 수 있는 모리가 있어 좋아요.",
    highlight: "등대처럼, 길을 잃어도 다시 돌아올 수 있는 모리"
  },
  {
    id: 16,
    authorName: "디아나",
    content: "시스템의 중요성을 많이 느끼고 있어요. 한번 시스템을 구축해놓으니 무의식적으로 하는 일이 많아지더라고요. 함께 하는 분들을 통해 나만 힘든게 아니라는 위로, 그리고 나도 이들처럼 다시 힘을 내야지! 하는 긍정적인 동기부여를 얻어요.",
    highlight: "시스템을 구축해놓으니 무의식적으로 하게 되더라고요"
  },
  {
    id: 17,
    authorName: "호이",
    content: "삶의 적지 않은 부분에서 과정은 결과 못지 않게, 때로 결과보다도 더 진득하게 스스로를 규정한다고 생각해요. 모리는 제가 과정을 소중히 여기고 있다는 하나의 증명이라고 느껴요. 컨디션이 안 좋고 루틴이 무너졌을때 정상으로 돌아가는 방법을 꾸준히 함으로써 찾게된 것 같아요.",
    highlight: "모리는 제가 과정을 소중히 여기고 있다는 증명"
  },
  {
    id: 18,
    authorName: "향기",
    content: "아무것도 안하고 싶은 날들을 보내다가도 모리가 있어서 그나마 숨쉬고 삶을 지킬 수 있는 것 같아요. 삶의 Why가 흔들릴때도 습관으로 삶을 지탱해보고자 노력해요. 아직은 완벽하게 자동화(습관화)가 되지는 않았지만, 이 시간을 조금더 지속하면서 완전히 몸에 익숙해진다면, 삶의 든든한 기둥이 될것이라 기대해요.",
    highlight: "삶의 Why가 흔들릴때도 습관으로 삶을 지탱해요"
  },
  {
    id: 19,
    authorName: "지음",
    content: "일기를 쓰거나 요가를 할 때 내가 예전과 달라졌다고 종종 느낄 때가 있어요. 사고방식이 달라졌어요. 안되면 하면 되지, 지금이 아니라도 곧 될거야, 이렇게 생각하게 돼요. 마음 먹으면 할 수 있다, 라는 스스로에 대한 믿음을 키워가는 날들이라 좋고 앞으로 더 튼튼하게 만들고 싶어요.",
    highlight: "마음 먹으면 할 수 있다는 믿음을 키워가고 있어요"
  },
  {
    id: 20,
    authorName: "수수",
    content: "조금씩 꾸준히 하는 것의 힘을 알게 되었어요. 모리 시간에 조금이라도 자주 하는 것을 목표로 하니 무리하지 않는 선에서 성취감을 느끼게 되고, 시간을 활용하면서 느끼는 효용감이 큰 것 같아요.",
    highlight: "조금씩 꾸준히 하는 것의 힘을 알게 되었어요"
  }
];


export default function Reviews() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-reviews-title">
            참여자 후기
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "의지 → 시스템" 변화를 경험한 분들의 이야기
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} data-testid={`card-review-${review.id}`}>
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {review.highlight && (
                  <p className="text-lg font-medium mb-4">
                    "{review.highlight}"
                  </p>
                )}
                
                <p className="text-muted-foreground mb-6 text-sm">
                  {review.content}
                </p>

                <div className="flex items-center pt-4 border-t">
                  <span className="font-medium">- {review.authorName}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-primary/10 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            다음 후기의 주인공은 당신입니다
          </h2>
          <p className="text-muted-foreground mb-6">
            42기 리추얼 챌린지에 함께하세요
          </p>
          <Button size="lg" asChild data-testid="button-reviews-apply">
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
