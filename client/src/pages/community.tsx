import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Instagram, MessageCircle } from "lucide-react";

export default function Community() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">Community</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            롤라움의 커뮤니티, <span className="text-primary">&lt;리추얼클럽&gt;</span>을 소개합니다
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            회사 밖의 나를 회복하며, 일상을 건강하게 설계해가는 루틴 커뮤니티
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">리추얼클럽은</h2>
            <p className="text-muted-foreground leading-relaxed">
              일을 잘해내느라 바쁜 사람들이 회사 밖의 나를 다시 돌보는 연습을 함께하는 커뮤니티입니다.<br />
              성과와 역할에서 잠시 벗어나 지금의 나를 점검하고, 앞으로의 일상을 무리 없이 설계할 수 있도록 돕습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. 왜 리추얼클럽인가요</h2>
            <p className="text-muted-foreground leading-relaxed">
              건강한 루틴을 만들고자 하는 많은 사람들이 “조금만 여유가 생기면 다시 챙기면 되지”라고 말하지만, 현실에서는 그 ‘나중’이 쉽게 오지 않습니다. 일상을 돌보는 방식은 저절로 생기지 않기 때문입니다.<br /><br />
              리추얼클럽은 의지나 각오 대신, 구조와 리듬으로 변화를 만듭니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. 리추얼클럽은 이런 커뮤니티예요</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">• 목표를 증명하는 곳이 아니라 상태를 점검하는 공간</li>
              <li className="flex items-center gap-2">• 완벽한 루틴이 아니라 지속 가능한 리듬을 만드는 곳</li>
              <li className="flex items-center gap-2">• 혼자서 애쓰지 않고 느슨하게 연결되는 커뮤니티</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. 리추얼클럽에서 할 수 있는 것</h2>
            <div className="grid gap-4">
              {[
                "건강한 일과 삶(Work & Life)을 위한 '리추얼 나잇'(계획/회고/네트워킹 등) 모임 기획/참여",
                "멤버가 리딩하는 다양한 주제의 '리추얼 소모임' 기획/참여",
                "롤라움 유료 프로그램 ‘리추얼 챌린지’ 리더 지원 자격 부여",
                "건강한 루틴 만들기에 진심인 멋진 멤버들과의 연결"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
              <p className="text-sm text-muted-foreground text-center">※ 리추얼클럽은 무료 커뮤니티입니다.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. 이런 분께 잘 맞아요</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "회사 밖의 나를 다시 만들고 싶은 분",
                "일상 리듬이 무너졌다는 감각이 있는 분",
                "혼자보다는, 가볍게라도 함께 가고 싶은 분",
                "꼭 만들고 싶은 루틴/리추얼이 있는 분"
              ].map((item, idx) => (
                <li key={idx} className="p-3 border rounded-md text-center">{item}</li>
              ))}
            </ul>
          </div>

          <Card className="bg-primary/5 border-primary/20 mt-12">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-2xl font-bold">5. 리추얼클럽 가입 안내</h2>
              <p className="text-muted-foreground">
                리추얼클럽은 회사 밖의 나를 회복하며, 일상을 건강하게 설계해가고 싶은 모든 분들에게 열려 있는 커뮤니티입니다.<br /><br />
                특정한 직업, 나이, 성별, 소속, 현재의 상태는 중요하지 않습니다. 리추얼클럽이 지향하는 방향과 분위기에 공감하신다면 누구나 함께하실 수 있어요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="https://www.instagram.com/lolaum_ritual" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background border rounded-full hover:bg-muted transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  인스타그램 DM 문의
                </a>
                <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full">
                  <MessageCircle className="w-5 h-5" />
                  기존 멤버에게 문의
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                커뮤니티 참여 카카오톡 톡방 링크를 전달드립니다.<br />
                함께할수록 단단해지는 구조를 지향합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
