import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Challenges
  app.get(api.challenges.list.path, async (req, res) => {
    const challenges = await storage.getChallenges();
    res.json(challenges);
  });

  app.get(api.challenges.get.path, async (req, res) => {
    const challenge = await storage.getChallenge(Number(req.params.id));
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    res.json(challenge);
  });

  // Reviews
  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  // FAQs
  app.get(api.faqs.list.path, async (req, res) => {
    const faqs = await storage.getFaqs();
    res.json(faqs);
  });

  // Applications
  app.post(api.applications.create.path, async (req, res) => {
    try {
      const input = api.applications.create.input.parse(req.body);
      const application = await storage.createApplication(input);
      res.status(201).json({ success: true, id: application.id });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data function (Internal use or auto-run)
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingChallenges = await storage.getChallenges();
  if (existingChallenges.length === 0) {
    console.log("Seeding database...");

    // Seed Challenges
    const challengesData = [
      {
        slug: 'miracle-morning',
        title: '미라클 모닝 챌린지',
        description: '하루를 지배하는 30분, 당신의 아침을 깨우세요.',
        shortDescription: '매일 아침 6시 기상 인증',
        category: 'Morning',
        duration: '3주',
        frequency: '주 5회',
        price: 30000,
        deposit: 10000,
        imageUrl: 'https://images.unsplash.com/photo-1506784335131-d6959dece4f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      },
      {
        slug: 'daily-reading',
        title: '하루 10분 독서',
        description: '매일 10분씩 읽고 기록하며 성장하는 습관.',
        shortDescription: '매일 10분 독서 인증',
        category: 'Reading',
        duration: '3주',
        frequency: '주 5회',
        price: 30000,
        deposit: 10000,
        imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      },
      {
        slug: 'daily-exercise',
        title: '매일 운동하기',
        description: '건강한 몸에 건강한 정신이 깃듭니다.',
        shortDescription: '30분 운동 인증',
        category: 'Exercise',
        duration: '3주',
        frequency: '주 5회',
        price: 30000,
        deposit: 10000,
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      },
      {
        slug: 'english-writing',
        title: '영어 필사 챌린지',
        description: '좋은 문장을 손으로 쓰며 영어를 내 것으로 만듭니다.',
        shortDescription: '매일 영어 문장 필사',
        category: 'Language',
        duration: '3주',
        frequency: '주 5회',
        price: 35000,
        deposit: 10000,
        imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      }
    ];

    for (const c of challengesData) {
      await storage.createChallenge(c);
    }

    // Seed FAQs
    const faqsData = [
      { question: "진짜 효과가 있나요?", answer: "네, 의지가 아닌 환경을 설계하기 때문에 지속 가능합니다. 많은 참가자들이 3주 후 변화를 경험했습니다.", order: 1 },
      { question: "바빠서 못 따라가면 어떡하죠?", answer: "하루 10분이면 충분합니다. 완벽함보다 꾸준함을 목표로 설계되었습니다.", order: 2 },
      { question: "보증금은 왜 있나요?", answer: "최소한의 강제성을 부여하기 위함입니다. 성공 시 전액 환급되며, 실패금은 기부됩니다.", order: 3 },
      { question: "중간에 포기하면 어떻게 되나요?", answer: "언제든 다시 시작할 수 있습니다. 하지만 환급은 미션 달성률에 따라 결정됩니다.", order: 4 },
    ];

    for (const f of faqsData) {
      await storage.createFaq(f);
    }

    // Seed Reviews
    const reviewsData = [
      { authorName: "김민지", content: "매번 작심삼일이었는데, 롤라움 덕분에 3주를 채웠습니다. 환경 설정의 중요성을 깨달았어요!", highlight: "환경 설정의 중요성을 깨달았어요!", rating: 5, category: "Morning" },
      { authorName: "이준호", content: "혼자 하면 힘들었을 텐데, 같이 하니 서로 자극이 되어 좋았습니다. 아침이 달라졌어요.", highlight: "아침이 달라졌어요.", rating: 5, category: "Morning" },
      { authorName: "Park S.", content: "영어 필사 챌린지, 생각보다 재미있고 부담 없어서 좋았습니다. 다음 기수도 참여할래요.", highlight: "부담 없어서 좋았습니다.", rating: 4, category: "Language" },
    ];

    for (const r of reviewsData) {
      await storage.createReview(r);
    }

    console.log("Database seeded successfully.");
  }
}
