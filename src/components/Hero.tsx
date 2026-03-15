"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, BookOpen, Code2, Wrench } from "lucide-react";

const pillars = [
  { icon: BookOpen, label: "인문학", color: "text-amber-400" },
  { icon: Code2, label: "소프트웨어", color: "text-blue-400" },
  { icon: Wrench, label: "하드웨어", color: "text-emerald-400" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-text-secondary">
              교육 · 강의 · 기업 출강
            </span>
            <span className="w-px h-3.5 bg-border" />
            <span className="text-sm text-text-secondary">
              전문 교육 컨설팅
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center">
              <span className="text-white text-sm font-bold">ST</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="block">STEAM</span>
          <span className="block mt-2 bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            Solution
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          인문학, 소프트웨어, 하드웨어를 두루 아우르는
          <br className="hidden sm:block" />
          <span className="text-foreground font-medium">
            융합형 STEAM 교육 솔루션
          </span>
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 md:gap-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
                <p.icon size={22} className={p.color} />
              </div>
              <span className={`text-xs font-medium ${p.color}`}>
                {p.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            <Mail size={18} />
            교육 문의하기
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#about" aria-label="아래로 스크롤">
            <ArrowDown size={20} className="text-muted animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
