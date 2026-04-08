import pastorFamily from "@/assets/pastor-family.png";

const PastorSection = () => {
  return (
    <section id="pastor" className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-2/5 flex-shrink-0">
          <img
            src={pastorFamily}
            alt="조선민 목사 가족"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-3/5 space-y-4">
          <h2 className="text-2xl font-bold text-foreground">담임목사 인사</h2>
          <p className="text-foreground leading-relaxed text-sm">
            안녕하세요! 저는 보스톤 감리교회 담임목사 조선민입니다. 아내는 Wayland의 Community United Methodist Church에서 사역하고 있으며, 저희에게는 세 자녀가 있습니다.
          </p>
          <p className="text-foreground leading-relaxed text-sm">
            저희 교회는 어떤 배경을 가진 분이든 진심으로 환영합니다. 인종, 문화, 신앙의 여정이 어디쯤이든 상관없이 — 주 예수 그리스도 안에서 모두에게 열려 있는 곳입니다.
          </p>
          <p className="text-foreground leading-relaxed text-sm">
            매주 일요일 오전 10:30 (영어예배)와 오후 1시 (한국어 예배)가 있습니다. 현대 찬양과 전통 예배 음악이 어우러진 예배를 드립니다.
          </p>
          <p className="text-foreground text-sm font-medium italic pt-2">
            하나님의 은혜와 축복이 여러분 모두에게 함께하길 기도합니다.
          </p>
          <p className="text-sm pt-1">
            <a href="mailto:newtonUMCpastor@gmail.com" className="text-primary hover:underline font-medium">
              📧 newtonUMCpastor@gmail.com
            </a>
            {" "}
            <a href="tel:617-244-0275" className="text-primary hover:underline font-medium">
              📞 617-244-0275
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastorSection;
