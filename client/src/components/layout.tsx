import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoUrl from "@assets/Lolaum_logo_영문_y_1767238392580.png";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "About" },
  { href: "/challenges", label: "챌린지" },
  { href: "/pricing", label: "가격" },
  { href: "/reviews", label: "후기" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" data-testid="link-logo">
          <img src={logoUrl} alt="Lolaum" className="h-6" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm rounded-md transition-colors hover-elevate ${
                location === link.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
              data-testid={`nav-link-${link.href.slice(1) || "home"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button size="sm" asChild data-testid="nav-button-apply">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">신청하기</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-lg rounded-md transition-colors ${
                    location === link.href
                      ? "text-primary font-medium bg-primary/5"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${link.href.slice(1) || "home"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-4" asChild data-testid="mobile-nav-button-apply">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZmfv55kMjciu_PBe2E-HXXJ5KnZdNDuNpU6eHjrH39F2veQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>신청하기</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoUrl} alt="Lolaum" className="h-5" />
          <p className="text-sm text-muted-foreground text-center">
            의지가 아니라 환경으로, 당신의 루틴을 완성하는 곳
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a 
              href="https://pf.kakao.com/_xhQUHn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              data-testid="footer-link-kakao"
            >
              카카오톡
            </a>
            <a 
              href="https://www.instagram.com/lolaum_ritual/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              data-testid="footer-link-instagram"
            >
              인스타그램
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
