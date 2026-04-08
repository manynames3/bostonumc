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
            안녕하세요! 저는 조선민 목사입니다 (모자 쓴 사람). 사랑스러운 아내는 Wayland, MA에 있는 Community United Methodist Church의 목사이며, 세 자녀와 함께하고 있습니다.
          </p>
          <p className="text-foreground leading-relaxed text-sm">
            저희 교회는 피부색, 성별, 성적 지향, 또는 어떤 배경이든 상관없이 주 예수 그리스도의 이름으로 모든 분을 환영합니다.
          </p>
          <p className="text-foreground leading-relaxed text-sm">
            현대적이고 전통적인 아름다운 음악이 있습니다. 일요일 아침 (10:30-11:30)에 편하게 오셔서 음악을 즐기세요. 부담 없이 오세요!
          </p>
          <p className="text-foreground leading-relaxed text-sm">
            어떤 방식으로든 도움이 필요하시면 언제든지 연락 주세요.
          </p>
          <p className="text-sm">
            <a href="mailto:newtonUMCpastor@gmail.com" className="text-primary hover:underline font-medium">
              newtonUMCpastor@gmail.com
            </a>
            {" / "}
            <a href="tel:617-244-0275" className="text-primary hover:underline font-medium">
              617-244-0275
            </a>
          </p>
          <p className="text-foreground text-sm font-medium italic pt-2">
            하나님의 축복이 여러분 모두에게 함께하길 기도합니다!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastorSection;
