import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STEAM Solution | 인문학 × 소프트웨어 × 하드웨어 융합 교육",
  description:
    "인문학, 소프트웨어, 하드웨어를 두루 아우르는 융합형 STEAM 교육 솔루션. 기계공학 3역학, 풀스택 웹 개발, AI 활용 교육, 기업 출강.",
  keywords: [
    "STEAM 교육",
    "기계공학 강의",
    "풀스택 개발 강의",
    "AI 교육",
    "기업 출강",
    "융합 교육",
  ],
  openGraph: {
    title: "STEAM Solution | 융합형 STEAM 교육",
    description:
      "인문학, 소프트웨어, 하드웨어를 두루 아우르는 융합형 STEAM 교육 솔루션",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
