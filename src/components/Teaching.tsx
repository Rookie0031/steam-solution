"use client";

import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import {
  Users,
  BookOpen,
  Building,
  GraduationCap,
  FileCheck,
} from "lucide-react";

const teachings = [
  {
    icon: BookOpen,
    title: "기계공학 과외 · 멘토링",
    org: "크몽 (루시드루키)",
    period: "2022 ~ 현재",
    desc: "재료역학·열역학·유체역학 과외 및 기술 컨설팅, 공학 프로그래밍 전자책 집필·판매",
    highlight: "4.6점 / 15리뷰",
    highlightColor: "text-amber-400",
    category: "하드웨어",
    categoryColor: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: FileCheck,
    title: "기계공학 기출 검수 · 강의",
    org: "마킹PT",
    period: "2025 ~ 현재",
    desc: "고졸채용 공·대기업 전문 학원. 3역학 복원 기출 문제·해설 오류 검수 및 개념 강의",
    highlight: null,
    highlightColor: null,
    category: "하드웨어",
    categoryColor: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Building,
    title: "유체역학 기업 출강",
    org: "계림요업",
    period: "2024",
    desc: "현장 직원 대상 베르누이 원리 및 유체역학 전반 기업 맞춤 출강",
    highlight: "기업 출강",
    highlightColor: "text-emerald-400",
    category: "하드웨어",
    categoryColor: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: GraduationCap,
    title: "Cloud / AI KDT 강사",
    org: "멋쟁이사자처럼",
    period: "2024 ~ 2025",
    desc: "AWS Cloud Engineering, LLM API + RAG 기반 AI 챗봇 풀스택 개발 강의",
    highlight: "KDT 국비지원",
    highlightColor: "text-blue-400",
    category: "소프트웨어",
    categoryColor: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Users,
    title: "이력서 코치",
    org: "항해99",
    period: "2024 ~ 2025",
    desc: "웹·모바일 개발 부트캠프 수료생 이력서 코칭 (기술 키워드 강화, 정량적 성과, 프로젝트 구조화)",
    highlight: "300명+",
    highlightColor: "text-amber-400",
    category: "인문학",
    categoryColor: "bg-amber-500/10 text-amber-400",
  },
];

export default function Teaching() {
  return (
    <section id="teaching" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel
            label="Track Record"
            title="강의 · 코칭 실적"
            description="기계공학부터 AI까지, 다양한 레벨의 수강생에게 실무 기반 교육을 제공합니다."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachings.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-accent/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <t.icon size={20} className="text-accent" />
                  </div>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${t.categoryColor}`}
                  >
                    {t.category}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{t.title}</h3>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm text-accent">{t.org}</p>
                  {t.highlight && (
                    <>
                      <span className="text-border">·</span>
                      <span
                        className={`text-xs font-mono font-medium ${t.highlightColor}`}
                      >
                        {t.highlight}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs text-muted font-mono mb-3">{t.period}</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
