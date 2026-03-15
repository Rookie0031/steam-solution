"use client";

import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const experiences = [
  {
    role: "영업 엔지니어 (Sales Engineer)",
    company: "Datadog Korea",
    badge: "S&P 500",
    period: "2025.08 ~ 현재",
    items: [
      "고객 기술 컨설팅, APM·RUM·LLM Observability 솔루션 데모·PoC",
      "클라우드·IT 모니터링 솔루션 기술 테스트 및 영업 파이프라인 확장",
    ],
    current: true,
  },
  {
    role: "소프트웨어 엔지니어",
    company: "뤼튼테크놀로지스",
    badge: null,
    period: "2023.12 ~ 2025.08",
    items: [
      "EKS 기반 클라우드 인프라 운영, FinOps, CI/CD 관리",
      "Internal Developer Platform 개발, Datadog Observability 구축",
    ],
    current: false,
  },
  {
    role: "설비 엔지니어",
    company: "POSCO",
    badge: null,
    period: "2021.02 ~ 2022.03",
    items: [
      "노후 설비 교체 프로젝트, 투자 타당성 검토, 유체 설비 기술 검토",
      "Python 활용 설비 데이터 분석 소프트웨어 개발 · 운영비 연 10억 절감",
    ],
    current: false,
  },
];

const history = [
  { title: "연세대학교 기계공학과 졸업", period: "2015 ~ 2021" },
  {
    title: "한국 최초 Apple 개발자 양성 프로그램 이수",
    subtitle: "Apple Developer Academy @POSTECH",
    period: "2022 ~ 2023",
  },
  {
    title: "포항공대 창업 프로그램 이수",
    subtitle: "POSTECH Startup Program",
    period: "2022",
  },
  {
    title: "AI 스타트업 · 제조 대기업 · 미국 대기업 등 다양한 환경 근무",
    period: "2021 ~ 현재",
  },
  {
    title: "300명+ 수료생 면접·이력서 코칭 진행",
    subtitle: "부트캠프 및 취업 준비생 대상",
    period: "2024 ~ 현재",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel
            label="Background"
            title="경력 · 연혁"
            description="교육 콘텐츠의 기반이 되는 실무 경력과 주요 이력입니다."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="relative pl-8">
                      <div
                        className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
                          exp.current
                            ? "border-accent bg-accent/20"
                            : "border-border bg-card"
                        }`}
                      />
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                        {exp.badge && (
                          <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-accent mb-0.5">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted mb-3 font-mono">
                        {exp.period}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.items.map((item, j) => (
                          <li
                            key={j}
                            className="text-sm text-text-secondary flex items-start gap-2"
                          >
                            <span className="mt-2 w-1 h-1 rounded-full bg-accent/30 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          <div>
            <AnimatedSection delay={0.2}>
              <h3 className="text-sm font-mono text-accent tracking-widest uppercase mb-6">
                History
              </h3>
              <div className="space-y-4">
                {history.map((h, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-4 hover:border-accent/30 transition-colors"
                  >
                    <p className="font-medium text-sm mb-1">{h.title}</p>
                    {h.subtitle && (
                      <p className="text-xs text-text-secondary mb-1">
                        {h.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-muted font-mono">{h.period}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
