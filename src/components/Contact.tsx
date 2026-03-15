"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "기계공학 강의",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        console.warn(
          "NEXT_PUBLIC_GOOGLE_SCRIPT_URL이 설정되지 않았습니다. .env.local 파일을 확인하세요."
        );
        setStatus("success");
        setFormData({ name: "", email: "", category: "기계공학 강의", message: "" });
        return;
      }

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      setStatus("success");
      setFormData({ name: "", email: "", category: "기계공학 강의", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel
            label="Contact"
            title="문의하기"
            description="강의, 과외, 기업 출강, 기술 컨설팅 등 문의사항을 남겨주세요. 빠르게 답변드리겠습니다."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl">
            {status === "success" ? (
              <div className="bg-card border border-emerald-500/30 rounded-2xl p-8 text-center">
                <CheckCircle
                  size={48}
                  className="text-emerald-400 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  문의가 접수되었습니다
                </h3>
                <p className="text-text-secondary mb-6">
                  빠른 시일 내에 이메일로 답변드리겠습니다.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-accent hover:underline"
                >
                  새 문의 작성
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      이름 <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      이메일 <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    문의 유형
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  >
                    <option>기계공학 강의</option>
                    <option>소프트웨어 개발 강의</option>
                    <option>AI 활용 교육</option>
                    <option>기업 출강</option>
                    <option>이력서 코칭</option>
                    <option>기타 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    문의 내용 <span className="text-accent">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="강의 주제, 대상 인원, 희망 일정 등을 알려주세요."
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    문의 전송에 실패했습니다. 다시 시도해주세요.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
                >
                  {status === "loading" ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  {status === "loading" ? "전송 중..." : "문의 보내기"}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
