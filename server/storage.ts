import { db } from "./db";
import {
  challenges,
  reviews,
  faqs,
  applications,
  type Challenge,
  type InsertChallenge,
  type Review,
  type InsertReview,
  type Faq,
  type InsertFaq,
  type Application,
  type InsertApplication,
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Challenges
  getChallenges(): Promise<Challenge[]>;
  getChallenge(id: number): Promise<Challenge | undefined>;
  createChallenge(challenge: InsertChallenge): Promise<Challenge>;

  // Reviews
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;

  // FAQs
  getFaqs(): Promise<Faq[]>;
  createFaq(faq: InsertFaq): Promise<Faq>;

  // Applications
  createApplication(app: InsertApplication): Promise<Application>;
}

export class DatabaseStorage implements IStorage {
  // Challenges
  async getChallenges(): Promise<Challenge[]> {
    return await db.select().from(challenges);
  }

  async getChallenge(id: number): Promise<Challenge | undefined> {
    const [challenge] = await db.select().from(challenges).where(eq(challenges.id, id));
    return challenge;
  }

  async createChallenge(challenge: InsertChallenge): Promise<Challenge> {
    const [newChallenge] = await db.insert(challenges).values(challenge).returning();
    return newChallenge;
  }

  // Reviews
  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews);
  }

  async createReview(review: InsertReview): Promise<Review> {
    const [newReview] = await db.insert(reviews).values(review).returning();
    return newReview;
  }

  // FAQs
  async getFaqs(): Promise<Faq[]> {
    return await db.select().from(faqs).orderBy(faqs.order);
  }

  async createFaq(faq: InsertFaq): Promise<Faq> {
    const [newFaq] = await db.insert(faqs).values(faq).returning();
    return newFaq;
  }

  // Applications
  async createApplication(app: InsertApplication): Promise<Application> {
    const [newApp] = await db.insert(applications).values(app).returning();
    return newApp;
  }
}

export const storage = new DatabaseStorage();
