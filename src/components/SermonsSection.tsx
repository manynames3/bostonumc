const SermonsSection = () => {
  return (
    <section id="sermons">
      {/* Banner */}
      <div className="bg-primary text-primary-foreground py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">설교</h2>
        <p className="text-sm opacity-90 max-w-xl mx-auto px-6 mb-6">
          최근 설교는 매주 업데이트 됩니다. 더 많은 설교들은 교회 유튜브 채널에서 보실 수 있습니다.
        </p>
        <a
          href="https://www.youtube.com/@BOSTONKOREANCHURCH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-8 py-2.5 rounded hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          유튜브 채널 바로가기
        </a>
      </div>

      {/* Recent Sermon Video */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-xl font-bold text-foreground mb-6">최근 설교</h3>
        <div className="aspect-video rounded-lg overflow-hidden border border-border">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3t4F3rMHSLY"
            title="최근 설교 - 주일예배 (2025년 3월 23일)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SermonsSection;
