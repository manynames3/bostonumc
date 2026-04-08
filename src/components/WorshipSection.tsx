import { Car, Accessibility } from "lucide-react";

const WorshipSection = () => {
  return (
    <section id="worship">
      {/* Banner */}
      <div className="bg-primary text-primary-foreground py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">예배 안내</h2>
        <p className="text-sm opacity-90 max-w-xl mx-auto px-6">
          "이 백성은 내가 나를 위하여 지었나니 나의 찬송을 부르게 하려 함이니라" (이사야 43:21)
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Service Table */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">예배 안내</h3>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="py-3 px-4 text-left font-semibold">구분/SERVICE</th>
                  <th className="py-3 px-4 text-center font-semibold">시간/TIME</th>
                  <th className="py-3 px-4 text-center font-semibold">장소/WHERE</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                <tr className="border-t border-border">
                  <td className="py-4 px-4 text-foreground font-medium">주일 영어 예배 [English Service]</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    오전 10시반 (주일)<br />10:30AM (SUNDAY)
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    본당<br />SANCTUARY
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-4 px-4 text-foreground">
                    <p className="font-medium">진보적인 한국인의 한국어 예배 (K-Worship)</p>
                    <p className="text-muted-foreground mt-1">
                      <a
                        href="https://us06web.zoom.us/j/81766885232?pwd=dHhvWE92c0VIQ1hobVJpRS8zQVdlQT09#success"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        줌 예배 생중계를 원하시면 이 곳을 클릭해 주세요.
                      </a>
                      <br />
                      Passcode는 "3" 입니다.
                    </p>
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    오후 1 시 (주일)<br />1:00PM (SUNDAY)
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    본당<br />SANCTUARY
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Parking & Accessibility */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">주차 안내</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              뉴턴에서는 주차 공간을 찾기가 어렵습니다. 하지만 걱정하지 마세요! 저희 교회는 Newton North High School 맞은편에 위치해 있으며, 약 20대의 주차 공간이 마련되어 있습니다. 편하게 오세요!
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Accessibility className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">휠체어 접근 가능</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              교회에 경사로가 설치되어 있습니다. 엔지니어링 배경을 가진 4~6명의 교인이 직접 만들었습니다. 놀랍지 않나요? 당신도 멋진 분입니다. 저희가 당신을 알아가고 싶습니다!
            </p>
          </div>
        </div>

        {/* Directions */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">오시는 길</h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/5 rounded-lg overflow-hidden border border-border">
              <iframe
                title="Church Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.5!2d-71.2088!3d42.3512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382a3e3c7c8a7%3A0x1234567890abcdef!2s430+Walnut+St%2C+Newtonville%2C+MA+02460!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="lg:w-2/5 flex items-start">
              <div>
                <div className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded mb-4">
                  주소/Address
                </div>
                <p className="text-foreground font-normal">430 Walnut St, Newtonville, MA 02460</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Office Hours */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">연락처 / Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">이메일:</span>
                <a href="mailto:umc.newton@gmail.com" className="text-primary hover:underline font-medium">
                  umc.newton@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">전화:</span>
                <a href="tel:617-244-0275" className="text-foreground hover:text-primary font-medium">
                  617 - 244 - 0275
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Office Hours</h3>
            <div className="space-y-2 text-sm text-foreground">
              <p>Tue - Thu</p>
              <p>10 - 1 @ the church (430 Walnut St)</p>
              <p>2 - 4 &nbsp;@ Caffe Nero (28 Austin St)</p>
              <p>
                Or{" "}
                <a href="mailto:umc.newton@gmail.com" className="text-primary underline hover:opacity-80">
                  by appointment
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipSection;
