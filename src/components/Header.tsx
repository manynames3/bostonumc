import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="보스톤 감리교회 로고" className="h-10 w-auto" />
          <div>
            <div className="font-bold text-foreground text-sm">보스톤 감리교회</div>
            <div className="text-muted-foreground text-xs">Newton United Methodist Church</div>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#worship" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            예배안내
          </a>
          <a href="#worship" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            예배안내
          </a>
          <a href="#sermons" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            설교
          </a>
          <Link to="/design2" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Design 2
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
