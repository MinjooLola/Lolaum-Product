import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(), // e.g., 'morning-ritual'
  title: text("title").notNull(),
  description: text("description").notNull(),
  shortDescription: text("short_description"),
  category: text("category").notNull(), // 'miracle-morning', 'exercise', 'reading', etc.
  duration: text("duration").notNull(), // '3 weeks'
  frequency: text("frequency").notNull(), // '5 times a week'
  price: integer("price").notNull(),
  deposit: integer("deposit").notNull(),
  startDate: timestamp("start_date"),
  isPopular: boolean("is_popular").default(false),
  imageUrl: text("image_url"),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  authorName: text("author_name").notNull(),
  content: text("content").notNull(),
  highlight: text("highlight"), // Short quote for cards
  rating: integer("rating").default(5),
  category: text("category"), // Matches challenge category
  createdAt: timestamp("created_at").defaultNow(),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  order: integer("order").default(0),
});

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  challengeId: integer("challenge_id").references(() => challenges.id),
  packageType: text("package_type").notNull(), // 'single', 'double', 'unlimited'
  status: text("status").default("pending"), // 'pending', 'paid', 'confirmed'
  createdAt: timestamp("created_at").defaultNow(),
});

// === SCHEMAS ===

export const insertChallengeSchema = createInsertSchema(challenges).omit({ id: true });
export const insertReviewSchema = createInsertSchema(reviews).omit({ id: true, createdAt: true });
export const insertFaqSchema = createInsertSchema(faqs).omit({ id: true });
export const insertApplicationSchema = createInsertSchema(applications).omit({ id: true, createdAt: true, status: true });

// === TYPES ===

export type Challenge = typeof challenges.$inferSelect;
export type InsertChallenge = z.infer<typeof insertChallengeSchema>;

export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;

export type Faq = typeof faqs.$inferSelect;
export type InsertFaq = z.infer<typeof insertFaqSchema>;

export type Application = typeof applications.$inferSelect;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
