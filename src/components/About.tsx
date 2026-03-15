"use client";

import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { BookOpen, Code2, Wrench, Zap } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "융합 교육",
    desc: "인문학적 사고 + 기술 실무를 연결하는 교육",
  },
  {
    icon: BookOpen,
    title: "실무 기반",
    desc: "현장 경험에서 나온 살아있는 지식 전달",
  },
  {
    icon: Code2,
    title: "소프트웨어",
    desc: "웹·모바일·AI·클라우드 풀스택 교육",
  },
  {
    icon: Wrench,
    title: "하드웨어",
    desc: "기계공학 3역학부터 설비 데이터 분석까지",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel label="About" title="STEAM Solution 소개" />
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <AnimatedSection className="md:col-span-3" delay={0.1}>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              <span className="text-foreground font-medium">
                STEAM Solution
              </span>
              은 인문학, 소프트웨어, 하드웨어를 두루 아우르는 융합형 교육
              솔루션입니다. 하나의 분야에 갇히지 않고, 서로 다른 영역의 지식을
              연결해 새로운 가치를 만들어내는 교육을 지향합니다.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              기계공학 전공 지식과 풀스택 소프트웨어 개발 실무, 그리고 창업·비즈니스
              경험까지—
              <span className="text-foreground font-medium">
                이론과 실전을 모두 경험한 교육자
              </span>
              가 학생, 현직자, 기업을 대상으로 맞춤형 강의를 제공합니다.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              대학 전공 과외부터 기업 출강, 부트캠프 강의, 이력서 코칭까지—다양한
              레벨과 포맷의 교육 경험을 보유하고 있습니다.
            </p>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-2" delay={0.2}>
            <div className="space-y-4">
              {values.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
