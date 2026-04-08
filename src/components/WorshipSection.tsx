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
                  <td className="py-4 px-4 text-foreground font-medium">주일 한국어 예배 [Korean Service]</td>
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
                <p className="text-foreground">– 340 Walnut St, Newtonville, MA 02460</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipSection;
