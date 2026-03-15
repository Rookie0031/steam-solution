"use client";

import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const categories = [
  {
    label: "기계공학",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    skills: [
      "재료역학",
      "열역학",
      "유체역학",
      "설비 데이터 분석",
      "Python / Pandas",
      "Ansys Fluent",
    ],
  },
  {
    label: "웹 / 백엔드",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    skills: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Go",
      "Python",
      "Bash",
    ],
  },
  {
    label: "모바일",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    skills: [
      "Swift",
      "UIKit",
      "SwiftUI",
      "iOS 앱 4종 출시",
      "WWDC 2022 수상",
    ],
  },
  {
    label: "AI / LLM",
    color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    skills: [
      "LLM API",
      "RAG",
      "n8n 자동화",
      "Datadog LLM Observability",
    ],
  },
  {
    label: "Cloud / DevOps",
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    skills: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitLab CI",
      "ArgoCD",
      "Datadog",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel
            label="Tech Stack"
            title="기술 스택 & 도구"
          />
        </AnimatedSection>

        <div className="space-y-8">
          {categories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <span
                  className={`text-xs font-mono font-medium px-3 py-1 rounded-full border w-fit ${cat.color}`}
                >
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="text-sm bg-card border border-border rounded-lg px-3 py-1.5 text-text-secondary hover:text-foreground hover:border-accent/30 transition-colors"
                    >
                      {skill}
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
