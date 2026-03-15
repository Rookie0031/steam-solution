"use client";

import AnimatedSection from "./AnimatedSection";
import { Calendar, Clock, Video, ExternalLink } from "lucide-react";

export default function Meeting() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "";

  return (
    <section id="meeting" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-card to-accent-secondary/10 border border-border rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-accent text-sm font-mono font-medium tracking-widest uppercase mb-3">
                  Book a Meeting
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  미팅 예약
                </h2>
                <p className="text-text-secondary text-lg mb-8">
                  교육 기획, 기업 출강, 커리큘럼 상담 등<br />
                  30분 무료 화상 미팅을 예약하세요.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Clock, text: "30분 무료 상담" },
                    { icon: Video, text: "Google Meet 화상 미팅" },
                    { icon: Calendar, text: "원하는 날짜·시간 선택 가능" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <item.icon size={16} className="text-accent shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>

                {calLink ? (
                  <a
                    href={calLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
                  >
                    <Calendar size={18} />
                    미팅 예약하기
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <p className="text-sm text-muted">
                      미팅 예약 기능은 준비 중입니다.
                      <br />
                      <span className="text-text-secondary">
                        jisu3002@naver.com
                      </span>
                      으로 직접 문의해주세요.
                    </p>
                  </div>
                )}
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-sm bg-card border border-border rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">ST</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">STEAM Solution</p>
                      <p className="text-xs text-muted">교육 상담</p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <Clock size={14} className="text-muted" />
                      30분
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <Video size={14} className="text-muted" />
                      Google Meet
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 pt-2">
                    {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
                      <div
                        key={d}
                        className="text-center text-xs text-muted py-1"
                      >
                        {d}
                      </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                      <div
                        key={i}
                        className={`text-center text-xs py-1.5 rounded ${
                          i === 14
                            ? "bg-accent text-white"
                            : i > 5 && i < 30 && i % 7 !== 0 && i % 7 !== 6
                            ? "text-text-secondary hover:bg-card-hover cursor-pointer"
                            : "text-muted/30"
                        }`}
                      >
                        {((i + 1) % 31) + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
