import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-20 w-20 text-accent/50" />
        </div>
        <h1 className="text-4xl font-serif text-foreground">404 Page Not Found</h1>
        <p className="text-muted-foreground text-lg">
          The path you are looking for doesn't exist. Let's get you back on track.
        </p>
        <Link href="/">
          <button className="btn-primary w-full">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
