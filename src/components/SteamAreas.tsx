"use client";

import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { BookOpen, Code2, Wrench } from "lucide-react";

const areas = [
  {
    icon: BookOpen,
    tag: "Humanities",
    title: "인문학 · 비즈니스",
    subtitle: "사고력과 소통, 그리고 실행력",
    items: [
      "창업 전략, VC 피칭, 고객 페르소나 설계 및 비즈니스 모델링",
      "아웃바운드 마케팅, 콜드콜, 세일즈 실전 경험 기반 교육",
      "이력서·포트폴리오 코칭 — 기술 키워드 강화, 정량적 성과, 구조화",
      "해커톤·프로젝트 리더십, 영어 발표 및 팀 빌딩",
      "Apple Developer Academy 창업 프로그램, Junction Asia 해커톤 경험",
    ],
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    tagBg: "bg-amber-500/10 text-amber-400",
    dotColor: "bg-amber-500/30",
  },
  {
    icon: Code2,
    tag: "Software",
    title: "소프트웨어 · AI",
    subtitle: "웹, 모바일, 클라우드, 인공지능",
    items: [
      "풀스택 웹 개발 — TypeScript, Node.js 기반 서비스 설계·구축",
      "iOS 모바일 앱 개발 — Swift, UIKit (앱 4종 출시, WWDC 2022 수상)",
      "AI 활용 교육 — LLM API + RAG 기반 챗봇 개발, n8n 자동화",
      "클라우드 인프라 — AWS, Kubernetes, Docker, CI/CD, Terraform",
      "Observability — Datadog APM, Log, RUM, LLM Monitoring",
    ],
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    tagBg: "bg-blue-500/10 text-blue-400",
    dotColor: "bg-blue-500/30",
  },
  {
    icon: Wrench,
    tag: "Hardware",
    title: "하드웨어 · 기계공학",
    subtitle: "역학, 설비, 공학 데이터 분석",
    items: [
      "기계공학 3역학 — 재료역학, 열역학, 유체역학 전공 강의 및 과외",
      "유체역학 기업 출강 — 베르누이 원리 등 현장 맞춤 교육",
      "설비 엔지니어링 — 노후 설비 교체, 투자 타당성 검토, 기술 검토",
      "기계공학 기출문제 검수 및 풀이 강의 (고졸채용 공·대기업)",
      "Python / Pandas 활용 설비 데이터 분석 및 소프트웨어 개발",
    ],
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    tagBg: "bg-emerald-500/10 text-emerald-400",
    dotColor: "bg-emerald-500/30",
  },
];

export default function SteamAreas() {
  return (
    <section id="steam" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel
            label="Education Areas"
            title="교육 영역"
            description="인문학, 소프트웨어, 하드웨어 — 세 가지 축의 실무 경험을 교육으로 연결합니다."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div
                className={`bg-card border ${area.borderColor} rounded-2xl p-6 md:p-8 h-full transition-colors`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 ${area.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <area.icon size={24} className={area.iconColor} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{area.title}</h3>
                    </div>
                    <p className="text-sm text-muted">{area.subtitle}</p>
                  </div>
                </div>

                <span
                  className={`inline-block text-xs font-mono px-3 py-1 rounded-full mb-5 ${area.tagBg}`}
                >
                  {area.tag}
                </span>

                <ul className="space-y-3">
                  {area.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full ${area.dotColor} shrink-0`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
