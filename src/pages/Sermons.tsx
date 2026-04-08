import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const sermons = [
  {
    id: 1,
    title: "믿음의 여정",
    speaker: "담임목사",
    date: "2026년 4월 5일",
    scripture: "히브리서 11:1-6",
    description: "믿음이란 바라는 것들의 실상이요 보이지 않는 것들의 증거니...",
  },
  {
    id: 2,
    title: "사랑의 능력",
    speaker: "담임목사",
    date: "2026년 3월 29일",
    scripture: "고린도전서 13:1-13",
    description: "내가 사람의 방언과 천사의 말을 할지라도 사랑이 없으면...",
  },
  {
    id: 3,
    title: "소망 가운데 기뻐하라",
    speaker: "담임목사",
    date: "2026년 3월 22일",
    scripture: "로마서 12:9-21",
    description: "소망 중에 즐거워하며 환난 중에 참으며 기도에 항상 힘쓰라...",
  },
  {
    id: 4,
    title: "새로운 시작",
    speaker: "담임목사",
    date: "2026년 3월 15일",
    scripture: "이사야 43:18-19",
    description: "보라 내가 새 일을 행하리니 이제 나타낼 것이라...",
  },
  {
    id: 5,
    title: "하나님의 은혜",
    speaker: "담임목사",
    date: "2026년 3월 8일",
    scripture: "에베소서 2:4-10",
    description: "너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니...",
  },
  {
    id: 6,
    title: "평안을 너희에게",
    speaker: "담임목사",
    date: "2026년 3월 1일",
    scripture: "요한복음 14:27",
    description: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라...",
  },
];

const Sermons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-secondary py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl font-bold text-foreground">설교</h1>
            <p className="text-muted-foreground mt-2">Sermons</p>
          </div>
        </div>

        {/* Sermon List */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid gap-6">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h2 className="text-lg font-semibold text-foreground">
                          {sermon.title}
                        </h2>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {sermon.date}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">
                        {sermon.scripture}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {sermon.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {sermon.speaker}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;
