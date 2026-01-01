import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Shield, Heart } from "lucide-react";

const packages = [
  {
    id: "single",
    name: "1개 챌린지",
    price: 30000,
    deposit: 10000,
    features: ["챌린지 1개 선택", "3주 프로그램", "커뮤니티 참여"],
    popular: false,
  },
  {
    id: "double",
    name: "2개 챌린지",
    price: 50000,
    deposit: 20000,
    features: ["챌린지 2개 선택", "3주 프로그램", "커뮤니티 참여", "10,000원 할인"],
    popular: false,
  },
  {
    id: "unlimited",
    name: "무제한",
    price: 80000,
    deposit: 30000,
    features: ["모든 챌린지 참여", "3주 프로그램", "커뮤니티 참여", "최대 할인 혜택"],
    popular: true,
  },
  {
    id: "unlimited-coaching",
    name: "무제한 + 1:1",
    price: 150000,
    deposit: 30000,
    features: ["모든 챌린지 참여", "3주 프로그램", "커뮤니티 참여", "1:1 코칭 세션 포함"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-pricing-title">
            패키지 & 가격
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            나에게 맞는 패키지를 선택하세요
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
                <Link href="/apply">
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    data-testid={`button-select-${pkg.id}`}
                  >
                    선택하기
                  </Button>
                </Link>
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
                      <span>미션 실패: 1회당 1,000원 차감</span>
                    </li>
                  </ul>
                  <p className="pt-2">
                    차감된 금액은 <strong className="text-foreground">해피빈을 통해 기부</strong>됩니다.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Deposit */}
        <div className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg">
          <Heart className="w-5 h-5 text-primary mt-1 shrink-0" />
          <div>
            <h3 className="font-medium mb-1">왜 보증금이 있나요?</h3>
            <p className="text-sm text-muted-foreground">
              강요가 아닌, 최소한의 '약속'입니다. 
              작은 강제성이 의지보다 강력하다는 것을 경험해보세요.
              성공하면 전액 돌려받고, 실패해도 좋은 일에 쓰입니다.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/apply">
            <Button size="lg" data-testid="button-pricing-to-apply">
              지금 신청하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
