import citySkyline from "@/assets/city-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-stretch gap-0">
        {/* Image */}
        <div className="lg:w-3/5 flex-shrink-0">
          <img
            src={citySkyline}
            alt="City Skyline View"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Welcome Text */}
        <div className="lg:w-2/5 bg-secondary flex items-center">
          <div className="p-8 lg:p-12">
            <h1 className="font-script text-4xl lg:text-5xl text-foreground mb-8 italic">
              Welcome
            </h1>
            <div className="space-y-1 text-foreground text-sm leading-relaxed">
              <p>보스톤 감리교회는</p>
              <p className="text-primary font-medium">2026 2월 15일부터</p>
              <p>
                <a
                  href="http://umcnewton.org/"
                  className="text-primary font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Newton United Methodist Church
                </a>
                {" "}에서
              </p>
              <p>
                <a
                  href="https://maps.google.com/?q=430+Walnut+St+Newtonville+MA+02460"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (430 Walnut St, Newtonville, MA 02460)
                </a>
              </p>
              <p className="pt-2">오후 1시 한국어 주일예배를 드립니다!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
