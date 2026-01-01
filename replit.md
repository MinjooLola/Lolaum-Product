# Lolaum - Ritual Challenge Platform

## Overview

Lolaum (롤라움) is a Korean ritual/habit-building brand website that helps users build sustainable routines through community-based challenges. The platform emphasizes "environment and systems over willpower" to help busy professionals maintain daily habits like morning routines, exercise, reading, and language learning. The website serves as a marketing and conversion funnel for 3-week challenge programs, featuring challenge listings, pricing packages, testimonials, and application forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom warm color palette (amber/neutral tones)
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with hot module replacement

The frontend follows a page-based structure with shared layout components. Pages include: Home, About, Challenges, Challenge Detail, Pricing, Reviews, FAQ, and Apply.

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints defined in `shared/routes.ts`
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas shared between client and server

The backend serves both the API and static files in production. Development uses Vite's dev server with HMR.

### Data Models
Four main entities defined in `shared/schema.ts`:
- **Challenges**: Ritual programs (morning, exercise, reading, etc.) with pricing and scheduling
- **Reviews**: User testimonials with highlights
- **FAQs**: Frequently asked questions with ordering
- **Applications**: User signups for challenges with package selection

### Code Organization
```
client/src/          # React frontend
  ├── components/    # UI components (shadcn/ui)
  ├── pages/         # Route pages
  ├── hooks/         # Custom React hooks
  └── lib/           # Utilities and query client

server/              # Express backend
  ├── index.ts       # Entry point
  ├── routes.ts      # API route handlers
  ├── storage.ts     # Database operations
  └── db.ts          # Database connection

shared/              # Shared code
  ├── schema.ts      # Drizzle schema + Zod types
  └── routes.ts      # API route definitions
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries
- **connect-pg-simple**: Session storage (available but sessions not currently implemented)

### Third-Party Services
- **Google Forms**: External application form (linked via URL, not embedded)
- **Google Fonts**: DM Sans, Geist Mono, Fira Code, Architects Daughter

### Key NPM Packages
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **drizzle-orm / drizzle-zod**: Database ORM with Zod integration
- **wouter**: Client-side routing
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant styling

### Build & Development
- **Vite**: Frontend bundler with React plugin
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development
- **drizzle-kit**: Database migrations (`npm run db:push`)