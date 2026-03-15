"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const photos = [
  {
    src: "/images/gallery/cloud-instructor.png",
    alt: "클라우드 엔지니어링 강사",
    caption: "Cloud 강의",
    description: "AWS Cloud Engineering 강사",
  },
  {
    src: "/images/gallery/llm-chatbot-lecture.png",
    alt: "멋쟁이사자처럼 LLM + 챗봇 제작 강의",
    caption: "AI 챗봇 강의",
    description: "멋쟁이사자처럼 KDT — LLM + RAG 챗봇 제작",
  },
  {
    src: "/images/gallery/cloud-lecture-1.png",
    alt: "클라우드 강의 현장",
    caption: "클라우드 실습",
    description: "수강생 대상 클라우드 인프라 실습",
  },
  {
    src: "/images/gallery/cloud-lecture-2.png",
    alt: "클라우드 강의 현장 2",
    caption: "클라우드 강의",
    description: "클라우드 아키텍처 강의 현장",
  },
  {
    src: "/images/gallery/corporate-lecture.png",
    alt: "계림요업 유체역학 기업 출강",
    caption: "기업 출강",
    description: "계림요업 — 유체역학 현장 교육",
  },
  {
    src: "/images/gallery/mechanical-engineering.jpg",
    alt: "기계역학 강의",
    caption: "기계공학 강의",
    description: "기계역학 전공 강의 및 과외",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = () => setLightbox(null);
  const goNext = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % photos.length);
  };
  const goPrev = () => {
    if (lightbox !== null)
      setLightbox((lightbox - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <section id="gallery" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <SectionLabel
              label="Gallery"
              title="교육 현장"
              description="강의, 출강, 코칭의 현장 모습을 담았습니다."
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <PhotoCard
                  photo={photo}
                  index={i}
                  onOpen={() => setLightbox(i)}
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-center text-sm text-muted mt-8">
              사진을 클릭하면 크게 볼 수 있습니다
            </p>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
              aria-label="닫기"
            >
              <X size={28} />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="이전"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="다음"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-contain rounded-xl"
                sizes="90vw"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white font-semibold">
                  {photos[lightbox].caption}
                </p>
                <p className="text-white/60 text-sm mt-1">
                  {photos[lightbox].description}
                </p>
                <p className="text-white/30 text-xs mt-2">
                  {lightbox + 1} / {photos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PhotoCard({
  photo,
  index,
  onOpen,
}: {
  photo: (typeof photos)[number];
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card cursor-pointer"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
        priority={index < 2}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-sm font-semibold">{photo.caption}</p>
        <p className="text-white/70 text-xs mt-0.5">{photo.description}</p>
      </div>
    </button>
  );
}
