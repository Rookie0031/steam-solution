"use client";

import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import {
  GraduationCap,
  FileText,
  Users,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "교육 · 강의",
    description:
      "기업 출강, KDT 부트캠프, 대학 전공 과외, 1:1 멘토링 등 대상과 레벨에 맞춘 맞춤형 강의를 제공합니다.",
    tags: ["기업 출강", "부트캠프 강사", "전공 과외", "1:1 멘토링"],
    color: "blue",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    tagColor: "bg-blue-500/10 text-blue-400",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: FileText,
    title: "자료 제작",
    description:
      "교재 집필, 기출문제 검수·제작, 전자책 출판, 교육 커리큘럼 설계 등 교육 콘텐츠를 전문적으로 제작합니다.",
    tags: ["교재 집필", "기출문제 검수", "전자책", "커리큘럼 설계"],
    color: "emerald",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    tagColor: "bg-emerald-500/10 text-emerald-400",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    icon: Users,
    title: "자문 · 컨설팅",
    description:
      "기술 자문위원, 교육 과정 컨설팅, 채용 기술 검증, 이력서·포트폴리오 코칭 등 전문 자문 서비스를 제공합니다.",
    tags: ["기술 자문위원", "교육 컨설팅", "채용 검증", "이력서 코칭"],
    color: "violet",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    tagColor: "bg-violet-500/10 text-violet-400",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
  },
  {
    icon: Lightbulb,
    title: "콘텐츠 기획",
    description:
      "온라인 강의 기획, 교육 콘텐츠 제작, 워크샵·해커톤 설계 등 교육 프로그램을 기획하고 운영합니다.",
    tags: ["온라인 강의 기획", "콘텐츠 제작", "워크샵 설계", "해커톤 운영"],
    color: "amber",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    tagColor: "bg-amber-500/10 text-amber-400",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel
            label="Services"
            title="서비스"
            description="강의뿐 아니라 자료 제작, 자문, 콘텐츠 기획까지 폭넓은 교육 서비스를 제공합니다."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`bg-card border ${s.borderColor} rounded-2xl p-6 h-full transition-colors group`}
              >
                <div
                  className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <s.icon size={24} className={s.iconColor} />
                </div>

                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {s.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${s.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
