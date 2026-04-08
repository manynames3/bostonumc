import { Cross } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-accent">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4C16 4 12 8 12 14C12 18 14 22 16 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M16 4C16 4 20 8 20 14C20 18 18 22 16 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M6 16H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M8 10H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="font-bold text-foreground text-sm">보스톤 감리교회</div>
            <div className="text-muted-foreground text-xs">Newton United Methodist Church</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            예배안내
          </a>
          <a href="/sermons" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            설교
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
