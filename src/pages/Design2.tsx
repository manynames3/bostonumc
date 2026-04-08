import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import churchBuilding from "@/assets/church-building.jpg";
import worshipBanner from "@/assets/worship-banner.jpg";
import pastorFamily from "@/assets/pastor-family.png";
import logo from "@/assets/logo.png";
import { Mail, Phone, Clock, MapPin, Car, Accessibility, Play, ExternalLink, Menu, X } from "lucide-react";

/* ───── Fade-in on scroll ───── */
const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const FadeIn = ({ children, className = "", delay = "" }: { children: React.ReactNode; className?: string; delay?: string }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${delay} ${className}`}>
      {children}
    </div>
  );
};

/* ───── Header ───── */
const D2Header = () => (
  <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20 lg:h-24">
      <Link to="/design2" className="flex items-center gap-3 group">
        <img src={logo} alt="로고" className="h-10 lg:h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
        <div>
          <span className="font-bold text-d2-dark text-base lg:text-lg tracking-tight block">보스톤 감리교회</span>
          <span className="text-d2-brown/60 text-[11px] lg:text-xs tracking-wide hidden sm:block">Newton United Methodist Church</span>
        </div>
      </Link>
      <nav className="hidden md:flex items-center gap-1.5">
        {[
          { href: "#about", label: "소개" },
          { href: "#worship", label: "예배" },
          { href: "#sermons", label: "설교" },
          { href: "#contact", label: "연락처" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-d2-brown/80 hover:text-d2-dark hover:bg-d2-warm/60 transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
        <Link
          to="/"
          className="ml-3 px-6 py-2.5 rounded-full text-sm font-medium text-d2-gold border border-d2-gold/30 hover:bg-d2-gold hover:text-white transition-all duration-300"
        >
          Design 1
        </Link>
      </nav>
    </div>
  </header>
);

/* ───── Hero (Floral Banner) ───── */
const D2Hero = () => (
  <section className="relative pt-20 lg:pt-24">
    <div className="relative w-full">
      <img src={worshipBanner} alt="교회 예배안내 배너" className="w-full h-auto object-cover" />
    </div>
  </section>
);

/* ───── About / Pastor ───── */
const D2About = () => (
  <section id="about" className="bg-d2-cream py-24 lg:py-32">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <FadeIn>
        <div className="text-center mb-20">
          <p className="text-d2-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">About Our Pastor</p>
          <h2 className="text-3xl md:text-5xl font-bold text-d2-dark tracking-tight">담임목사 인사</h2>
          <div className="w-16 h-[2px] bg-d2-gold mx-auto mt-6" />
        </div>
      </FadeIn>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <FadeIn className="lg:w-5/12">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-d2-tan/40 to-d2-warm rounded-3xl" />
            <img
              src={pastorFamily}
              alt="조선민 목사 가족"
              className="relative w-full rounded-2xl shadow-xl"
            />
          </div>
        </FadeIn>
        <FadeIn className="lg:w-7/12">
          <div className="space-y-6">
            <p className="text-d2-deep leading-[2] text-[15px]">
              안녕하세요! 저는 보스톤 감리교회 담임목사 조선민입니다. 아내는 Wayland의 Community United Methodist Church에서 사역하고 있으며, 저희에게는 세 자녀가 있습니다.
            </p>
            <p className="text-d2-deep leading-[2] text-[15px]">
              저희 교회는 어떤 배경을 가진 분이든 진심으로 환영합니다. 인종, 문화, 신앙의 여정이 어디쯤이든 상관없이 주 예수 그리스도 안에서 모두에게 열려 있는 곳입니다.
            </p>
            <p className="text-d2-deep leading-[2] text-[15px]">
              매주 일요일 오전 10:30, 현대 찬양과 전통 예배 음악이 어우러진 예배를 드립니다. 완벽하게 준비되지 않아도 괜찮습니다. 있는 그대로 오세요.
            </p>
            <p className="text-d2-gold italic font-medium text-[15px] pt-2">
              하나님의 은혜와 축복이 여러분 모두에게 함께하길 기도합니다.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <a href="mailto:newtonUMCpastor@gmail.com" className="inline-flex items-center gap-2 text-d2-brown hover:text-d2-gold text-sm transition-colors duration-300 group">
                <div className="w-9 h-9 rounded-full bg-d2-warm flex items-center justify-center group-hover:bg-d2-tan/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                newtonUMCpastor@gmail.com
              </a>
              <a href="tel:617-244-0275" className="inline-flex items-center gap-2 text-d2-brown hover:text-d2-gold text-sm transition-colors duration-300 group">
                <div className="w-9 h-9 rounded-full bg-d2-warm flex items-center justify-center group-hover:bg-d2-tan/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                617-244-0275
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ───── Scripture Banner ───── */
const D2ScriptureBanner = () => (
  <section className="relative py-20 bg-d2-warm overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
    <FadeIn>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-d2-deep text-lg md:text-xl italic leading-relaxed font-light">
          "이 백성은 내가 나를 위하여 지었나니<br className="hidden sm:block" /> 나의 찬송을 부르게 하려 함이니라"
        </p>
        <p className="text-d2-brown text-sm mt-4 tracking-wide">— 이사야 43:21</p>
      </div>
    </FadeIn>
  </section>
);

/* ───── Worship ───── */
const D2Worship = () => (
  <section id="worship" className="bg-d2-cream py-24 lg:py-32">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <FadeIn>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:w-1/2">
            <img src={churchBuilding} alt="교회 건물" className="w-full rounded-2xl shadow-xl" />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-d2-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Service Information</p>
            <h2 className="text-3xl md:text-5xl font-bold text-d2-dark tracking-tight">예배 안내</h2>
            <div className="w-16 h-[2px] bg-d2-gold mt-6 mx-auto lg:mx-0" />
          </div>
        </div>
      </FadeIn>

      {/* Service Cards */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* English */}
          <div className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl border border-d2-tan/15 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-d2-gold" />
              <span className="text-d2-gold text-xs font-semibold tracking-[0.2em] uppercase">English Service</span>
            </div>
            <h3 className="text-d2-dark text-2xl font-bold mb-5">주일 영어 예배</h3>
            <div className="space-y-3 text-d2-brown text-sm">
              <p className="flex items-center gap-3"><Clock className="w-4 h-4 text-d2-gold" /> 오전 10:30 (매주 일요일)</p>
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-d2-gold" /> 본당 Sanctuary</p>
            </div>
          </div>
          {/* Korean */}
          <div className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl border border-d2-tan/15 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-d2-gold" />
              <span className="text-d2-gold text-xs font-semibold tracking-[0.2em] uppercase">Korean Worship</span>
            </div>
            <h3 className="text-d2-dark text-2xl font-bold mb-5">한국어 예배 (K-Worship)</h3>
            <div className="space-y-3 text-d2-brown text-sm">
              <p className="flex items-center gap-3"><Clock className="w-4 h-4 text-d2-gold" /> 오후 1:00 (매주 일요일)</p>
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-d2-gold" /> 본당 Sanctuary</p>
            </div>
            <a
              href="https://us06web.zoom.us/j/81766885232?pwd=dHhvWE92c0VIQ1hobVJpRS8zQVdlQT09#success"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-6 bg-d2-gold/10 border border-d2-gold/30 text-d2-gold font-semibold text-sm px-6 py-3 rounded-full hover:bg-d2-gold hover:text-white transition-all duration-300"
            >
              <Play className="w-4 h-4" /> 줌 생중계 참여하기 (Passcode: 3) <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Parking & Accessibility */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="flex gap-5 p-8 rounded-2xl bg-d2-warm border border-d2-tan/10">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Car className="w-6 h-6 text-d2-gold" />
            </div>
            <div>
              <h4 className="text-d2-dark font-bold text-lg mb-2">주차 안내</h4>
              <p className="text-d2-brown text-sm leading-relaxed">
                Newton North High School 맞은편에 위치하며, 약 20대의 주차 공간이 마련되어 있습니다.
              </p>
            </div>
          </div>
          <div className="flex gap-5 p-8 rounded-2xl bg-d2-warm border border-d2-tan/10">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Accessibility className="w-6 h-6 text-d2-gold" />
            </div>
            <div>
              <h4 className="text-d2-dark font-bold text-lg mb-2">휠체어 접근 가능</h4>
              <p className="text-d2-brown text-sm leading-relaxed">
                교회에 경사로가 설치되어 있습니다. 모든 분들을 진심으로 환영합니다.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Map & Directions */}
      <FadeIn>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-3/5 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.5!2d-71.2088!3d42.3512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382a3e3c7c8a7%3A0x1234567890abcdef!2s430+Walnut+St%2C+Newtonville%2C+MA+02460!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:w-2/5 flex flex-col justify-center">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-d2-tan/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-d2-warm flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-d2-gold" />
                </div>
                <h4 className="text-d2-dark font-bold text-lg">오시는 길</h4>
              </div>
              <p className="text-d2-deep text-sm leading-relaxed mb-5">
                430 Walnut St,<br />Newtonville, MA 02460
              </p>
              <a
                href="https://maps.google.com/?q=430+Walnut+St+Newtonville+MA+02460"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-d2-gold text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-d2-gold-light transition-all duration-300 shadow-sm"
              >
                Google Maps에서 보기 <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ───── Sermons ───── */
const D2Sermons = () => (
  <section id="sermons" className="bg-d2-warm py-24 lg:py-32">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-d2-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Sermons</p>
          <h2 className="text-3xl md:text-5xl font-bold text-d2-dark tracking-tight mb-4">설교</h2>
          <div className="w-16 h-[2px] bg-d2-gold mx-auto mb-6" />
          <p className="text-d2-brown text-sm max-w-lg mx-auto leading-relaxed">
            최근 설교는 매주 업데이트 됩니다. 더 많은 설교들은 유튜브 채널에서 보실 수 있습니다.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto mb-12 ring-1 ring-d2-tan/20">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3t4F3rMHSLY"
            title="최근 설교"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </FadeIn>
      <FadeIn>
        <div className="text-center">
          <a
            href="https://www.youtube.com/@BOSTONKOREANCHURCH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-d2-dark text-white font-semibold text-sm px-10 py-4 rounded-full hover:bg-d2-deep transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide"
          >
            <Play className="w-4 h-4" />
            유튜브 채널 바로가기
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ───── Contact ───── */
const D2Contact = () => (
  <section id="contact" className="bg-d2-cream py-24 lg:py-32">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <FadeIn>
        <div className="text-center mb-20">
          <p className="text-d2-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-d2-dark tracking-tight">연락처</h2>
          <div className="w-16 h-[2px] bg-d2-gold mx-auto mt-6" />
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-10 rounded-2xl bg-white shadow-sm border border-d2-tan/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-d2-warm flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-d2-gold" />
            </div>
            <h4 className="text-d2-dark font-bold text-lg mb-3">이메일</h4>
            <a href="mailto:umc.newton@gmail.com" className="text-d2-brown text-sm hover:text-d2-gold transition-colors">
              umc.newton@gmail.com
            </a>
          </div>
          <div className="text-center p-10 rounded-2xl bg-white shadow-sm border border-d2-tan/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-d2-warm flex items-center justify-center mx-auto mb-6">
              <Phone className="w-7 h-7 text-d2-gold" />
            </div>
            <h4 className="text-d2-dark font-bold text-lg mb-3">전화</h4>
            <a href="tel:617-244-0275" className="text-d2-brown text-sm hover:text-d2-gold transition-colors">
              617-244-0275
            </a>
          </div>
          <div className="text-center p-10 rounded-2xl bg-white shadow-sm border border-d2-tan/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-d2-warm flex items-center justify-center mx-auto mb-6">
              <Clock className="w-7 h-7 text-d2-gold" />
            </div>
            <h4 className="text-d2-dark font-bold text-lg mb-3">Office Hours</h4>
            <div className="text-d2-brown text-sm space-y-2">
              <p className="font-medium">Tue - Thu</p>
              <p>10 - 1 @ the Church<br /><span className="text-xs opacity-75">430 Walnut St, Newtonville</span></p>
              <p>2 - 4 @ Caffe Nero<br /><span className="text-xs opacity-75">28 Austin St, Newtonville</span></p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ───── Footer ───── */
const D2Footer = () => (
  <footer className="bg-d2-dark py-14">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-start">
        <div className="flex items-center gap-4">
          <img src={logo} alt="로고" className="h-14 w-auto brightness-200" />
          <div>
            <div className="font-bold text-white text-lg leading-tight">보스톤 감리교회</div>
            <div className="text-d2-tan text-xs tracking-wide mt-1">Newton United Methodist Church</div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-white font-medium text-xs uppercase tracking-widest mb-3">Address</p>
          <p className="text-d2-tan text-sm leading-relaxed">430 Walnut St,<br />Newtonville, MA 02460</p>
        </div>
        <div className="space-y-2">
          <p className="text-white font-medium text-xs uppercase tracking-widest mb-3">Contact</p>
          <p className="text-d2-tan text-sm">
            <a href="tel:617-244-0275" className="hover:text-d2-gold transition-colors">617-244-0275</a>
          </p>
          <p className="text-d2-tan text-sm">
            <a href="mailto:umc.newton@gmail.com" className="hover:text-d2-gold transition-colors">umc.newton@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
        <div className="flex items-center gap-6">
          <a href="https://www.youtube.com/@BOSTONKOREANCHURCH" target="_blank" rel="noopener noreferrer" className="text-d2-tan hover:text-d2-gold transition-colors duration-300" aria-label="YouTube">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" className="text-d2-tan hover:text-d2-gold transition-colors duration-300" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="#" className="text-d2-tan hover:text-d2-gold transition-colors duration-300" aria-label="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
        <p className="text-d2-tan/60 text-xs">© 2026 보스톤 감리교회. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

/* ───── Page ───── */
const Design2 = () => (
  <div className="bg-d2-cream min-h-screen">
    <D2Header />
    <main>
      <D2Hero />
      
      <D2About />
      <D2ScriptureBanner />
      <D2Worship />
      <D2Sermons />
      <D2Contact />
    </main>
    <D2Footer />
  </div>
);

export default Design2;
