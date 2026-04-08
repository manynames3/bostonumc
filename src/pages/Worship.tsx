import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const Worship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-secondary py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl font-bold text-foreground">예배안내</h1>
            <p className="text-muted-foreground mt-2">Worship Services</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 주일예배 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  주일예배
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">한국어 주일예배</p>
                  <p className="text-muted-foreground text-sm">매주 일요일 오후 1:00</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold text-foreground">주일학교</p>
                  <p className="text-muted-foreground text-sm">매주 일요일 오후 1:00 (예배 중)</p>
                </div>
              </CardContent>
            </Card>

            {/* 기도회 / 성경공부 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  주중 모임
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">수요 기도회</p>
                  <p className="text-muted-foreground text-sm">매주 수요일 저녁 7:30</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold text-foreground">금요 성경공부</p>
                  <p className="text-muted-foreground text-sm">매주 금요일 저녁 7:30</p>
                </div>
              </CardContent>
            </Card>

            {/* 예배 장소 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  예배 장소
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Newton United Methodist Church</p>
                  <p className="text-muted-foreground text-sm">430 Walnut St, Newtonville, MA 02460</p>
                </div>
                <a
                  href="https://maps.google.com/?q=430+Walnut+St+Newtonville+MA+02460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-primary hover:underline font-medium"
                >
                  Google Maps에서 보기 →
                </a>
                <div className="mt-4 rounded-lg overflow-hidden border border-border">
                  <iframe
                    title="Church Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.5!2d-71.2088!3d42.3512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382a3e3c7c8a7%3A0x1234567890abcdef!2s430+Walnut+St%2C+Newtonville%2C+MA+02460!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 연락처 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  연락처
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">전화</p>
                    <a href="tel:617-916-1039" className="text-foreground hover:text-primary text-sm font-medium">
                      617-916-1039
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">이메일</p>
                    <a href="mailto:info@bostonumc.org" className="text-foreground hover:text-primary text-sm font-medium">
                      info@bostonumc.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Worship;
