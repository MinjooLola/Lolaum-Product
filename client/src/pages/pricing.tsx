import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Shield, Heart, Gift, Star } from "lucide-react";

const packages = [
  {
    id: "single",
    name: "1개 챌린지",
    price: 50000,
    deposit: 15000,
    features: ["챌린지 1개 선택", "3주 프로그램", "커뮤니티 참여"],
    popular: false,
  },
  {
    id: "double",
    name: "2개 챌린지",
    price: 90000,
    deposit: 30000,
    features: ["챌린지 2개 선택", "3주 프로그램", "커뮤니티 참여", "10,000원 할인"],
    popular: false,
  },
  {
    id: "unlimited",
    name: "무제한",
    price: 120000,
    deposit: 30000,
    features: ["8개 챌린지 모두 참여 가능", "3주 프로그램", "커뮤니티 참여", "개당 15,000원꼴"],
    popular: true,
  },
  {
    id: "unlimited-coaching",
    name: "무제한 + 1:1 코칭",
    price: 150000,
    deposit: 30000,
    features: ["8개 챌린지 모두 참여 가능", "3주 프로그램", "1:1 루틴 진단 & 코칭", "맞춤형 케어 프로그램"],
    popular: false,
  },
];

const discounts = [
  { title: "친구 초대 이벤트", desc: "신규 멤버와 기존 멤버 모두", amount: 5000 },
  { title: "직전 기수 리추얼클럽 챌린저", desc: "", amount: 5000 },
  { title: "직전 기수 블로그 후기 작성", desc: "", amount: 5000 },
  { title: "직전 기수 어워즈 수상자", desc: "", amount: 5000 },
  { title: "블로그 모집 포스팅 공유", desc: "", amount: 5000 },
];

export default function Pricing() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">42기 리추얼 챌린지</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-pricing-title">
            패키지 & 가격
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            1/5(월) ~ 1/23(금) 3주간 진행
          </p>
        </div>

        {/* Packages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={pkg.popular ? "border-primary relative" : ""}
              data-testid={`card-package-${pkg.id}`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Star className="w-3 h-3 mr-1" />
                  추천
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{pkg.price.toLocaleString()}</span>
                  <span className="text-muted-foreground">원</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  + 보증금 {pkg.deposit.toLocaleString()}원
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                  data-testid={`button-select-${pkg.id}`}
                >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">선택하기</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Deposit System Explanation */}
        <Card className="bg-muted/30 mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">보증금 시스템 안내</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    보증금은 <strong className="text-foreground">챌린지 성공 시 전액 환급</strong>됩니다.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>미션 달성: 보증금 100% 환급</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 text-destructive mt-1 shrink-0">-</span>
                      <span>하루 인증 실패 시: 1,000원씩 차감</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>행복찬스 1회: 지각 or 결석 1회까지 보증금 차감 없음</span>
                    </li>
                  </ul>
                  <p className="pt-2">
                    차감된 보증금은 <strong className="text-foreground">참가자 모두의 이름으로 해피빈을 통해 전액 기부</strong>됩니다.
                  </p>
                  <p className="text-sm">
                    * 무제한 챌린지 참여 시 초과 차감된 보증금은 리추얼클럽에서 부담합니다.
                  </p>
                  <p className="text-sm">
                    * 끝까지 참여해주실 분들만 신청바랍니다. 중간에 포기하시더라도 참가비는 환급되지 않습니다.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Discounts */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">추가 할인 혜택</h2>
                <p className="text-sm text-muted-foreground mb-4">중복 할인 가능, 최대 3만원 할인</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {discounts.map((discount, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                      <div>
                        <p className="font-medium text-sm">{discount.title}</p>
                        {discount.desc && (
                          <p className="text-xs text-muted-foreground">{discount.desc}</p>
                        )}
                      </div>
                      <Badge variant="secondary">-{discount.amount.toLocaleString()}원</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild data-testid="button-pricing-to-apply">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              지금 신청하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            문의: <a href="https://pf.kakao.com/_xhQUHn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">롤라움 카카오톡 채널</a>
          </p>
        </div>
      </div>
    </div>
  );
}
