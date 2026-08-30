"use client";

import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Building2, School, UserRound, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "기업 · 조직",
    desc: "사내 기술 교육, 신기술 도입 전 기술 검증, 채용 역량 검증이 필요한 팀을 위한 서비스입니다.",
    tags: ["기업 출강", "기술 자문위원", "채용 기술 검증"],
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: School,
    title: "교육기관 · 부트캠프",
    desc: "강사 섭외, 커리큘럼 설계, 교재·기출문제 제작이 필요한 교육기관을 위한 서비스입니다.",
    tags: ["부트캠프 강사", "커리큘럼 설계", "교재 집필"],
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: UserRound,
    title: "개인 (구직자 · 현직자)",
    desc: "전공 공부, 실무 역량 강화, 커리어 전환을 준비하는 개인을 위한 서비스입니다.",
    tags: ["전공 과외", "1:1 멘토링", "이력서 코칭"],
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel
            label="Who We Serve"
            title="누구를 위한 서비스인가요?"
            description="기업, 교육기관, 개인까지—필요에 맞는 교육·자문 서비스를 제공합니다."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <a
                href="#services"
                className="group block bg-card border border-border hover:border-accent/40 rounded-2xl p-6 h-full transition-colors"
              >
                <div
                  className={`w-12 h-12 ${a.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <a.icon size={24} className={a.iconColor} />
                </div>

                <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {a.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {a.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-foreground/5 text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
                  관련 서비스 보기
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
