import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Check, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import type { Challenge } from "@shared/schema";

const packages = [
  { id: "single", name: "1개 챌린지", price: 30000, deposit: 10000, maxChallenges: 1 },
  { id: "double", name: "2개 챌린지", price: 50000, deposit: 20000, maxChallenges: 2 },
  { id: "unlimited", name: "무제한", price: 80000, deposit: 30000, maxChallenges: 999 },
  { id: "unlimited-coaching", name: "무제한 + 1:1", price: 150000, deposit: 30000, maxChallenges: 999 },
];

const formSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  phone: z.string().min(10, "전화번호를 입력해주세요"),
  challengeId: z.number().optional(),
  packageType: z.string().min(1, "패키지를 선택해주세요"),
});

type FormData = z.infer<typeof formSchema>;

export default function Apply() {
  const [step, setStep] = useState(1);
  const [selectedChallenges, setSelectedChallenges] = useState<number[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const { toast } = useToast();

  const { data: challenges } = useQuery<Challenge[]>({
    queryKey: ["/api/challenges"],
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      packageType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("POST", "/api/applications", {
        ...data,
        challengeId: selectedChallenges[0] || null,
      });
    },
    onSuccess: () => {
      setStep(4);
    },
    onError: () => {
      toast({
        title: "신청 실패",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const currentPackage = packages.find((p) => p.id === selectedPackage);

  const handleChallengeToggle = (challengeId: number) => {
    const maxAllowed = currentPackage?.maxChallenges || 1;
    
    if (selectedChallenges.includes(challengeId)) {
      setSelectedChallenges(selectedChallenges.filter((id) => id !== challengeId));
    } else if (selectedChallenges.length < maxAllowed) {
      setSelectedChallenges([...selectedChallenges, challengeId]);
    }
  };

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-apply-title">
            리추얼 챌린지 신청
          </h1>
          <p className="text-muted-foreground">
            {step === 4 ? "신청이 완료되었습니다!" : `Step ${step} / 3`}
          </p>
        </div>

        {/* Progress */}
        {step < 4 && (
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-16 h-1 rounded-full ${
                  s <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        )}

        {/* Step 1: Select Package */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>패키지 선택</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedPackage}
                onValueChange={(value) => {
                  setSelectedPackage(value);
                  form.setValue("packageType", value);
                  setSelectedChallenges([]);
                }}
                className="space-y-3"
              >
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedPackage === pkg.id ? "border-primary bg-primary/5" : ""
                    }`}
                    onClick={() => {
                      setSelectedPackage(pkg.id);
                      form.setValue("packageType", pkg.id);
                      setSelectedChallenges([]);
                    }}
                  >
                    <RadioGroupItem value={pkg.id} id={pkg.id} data-testid={`radio-package-${pkg.id}`} />
                    <Label htmlFor={pkg.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{pkg.name}</span>
                        <span className="text-primary font-semibold">
                          {pkg.price.toLocaleString()}원
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        + 보증금 {pkg.deposit.toLocaleString()}원
                      </p>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <Button
                className="w-full mt-6"
                disabled={!selectedPackage}
                onClick={() => setStep(2)}
                data-testid="button-next-step-1"
              >
                다음
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Select Challenges */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>
                챌린지 선택
                {currentPackage && currentPackage.maxChallenges < 999 && (
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    ({selectedChallenges.length}/{currentPackage.maxChallenges})
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {challenges?.map((challenge) => {
                  const isSelected = selectedChallenges.includes(challenge.id);
                  const isUnlimited = (currentPackage?.maxChallenges || 0) >= 999;

                  return (
                    <div
                      key={challenge.id}
                      className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                        isSelected ? "border-primary bg-primary/5" : ""
                      } ${isUnlimited ? "opacity-50 cursor-not-allowed" : ""}`}
                      onClick={() => !isUnlimited && handleChallengeToggle(challenge.id)}
                    >
                      {!isUnlimited && (
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => handleChallengeToggle(challenge.id)}
                          data-testid={`checkbox-challenge-${challenge.id}`}
                        />
                      )}
                      {isUnlimited && <Check className="w-5 h-5 text-primary" />}
                      <div className="flex-1">
                        <p className="font-medium">{challenge.title}</p>
                        <p className="text-sm text-muted-foreground">{challenge.shortDescription}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {currentPackage && currentPackage.maxChallenges >= 999 && (
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  무제한 패키지는 모든 챌린지에 자동 참여됩니다
                </p>
              )}

              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setStep(1)} data-testid="button-back-step-2">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  이전
                </Button>
                <Button
                  className="flex-1"
                  disabled={!currentPackage || (currentPackage.maxChallenges < 999 && selectedChallenges.length === 0)}
                  onClick={() => setStep(3)}
                  data-testid="button-next-step-2"
                >
                  다음
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: User Info */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>정보 입력</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이메일</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="example@email.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>전화번호</FormLabel>
                        <FormControl>
                          <Input placeholder="010-1234-5678" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Summary */}
                  <div className="p-4 bg-muted/30 rounded-lg mt-6">
                    <h3 className="font-medium mb-3">신청 내역</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">패키지</span>
                        <span>{currentPackage?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">참가비</span>
                        <span>{currentPackage?.price.toLocaleString()}원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">보증금</span>
                        <span>{currentPackage?.deposit.toLocaleString()}원</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t font-medium">
                        <span>총 결제 금액</span>
                        <span className="text-primary">
                          {((currentPackage?.price || 0) + (currentPackage?.deposit || 0)).toLocaleString()}원
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button type="button" variant="outline" onClick={() => setStep(2)} data-testid="button-back-step-3">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      이전
                    </Button>
                    <Button type="submit" className="flex-1" disabled={mutation.isPending} data-testid="button-submit">
                      {mutation.isPending ? "신청 중..." : "신청하기"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">신청이 완료되었습니다!</h2>
              <p className="text-muted-foreground mb-6">
                입력하신 연락처로 결제 안내가 발송됩니다.
                <br />
                카카오톡 채널을 추가해주세요.
              </p>
              <Button asChild data-testid="button-kakao-after-apply">
                <a href="https://pf.kakao.com/_xoLxaG" target="_blank" rel="noopener noreferrer">
                  카카오톡 채널 추가하기
                </a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
