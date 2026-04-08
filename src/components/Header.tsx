import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#worship", label: "예배안내" },
  { href: "#sermons", label: "설교" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="보스톤 감리교회 로고" className="h-10 w-auto" />
          <div>
            <div className="font-heading font-bold text-foreground text-lg tracking-tight">보스톤 감리교회</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-card border-t border-border px-6 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
