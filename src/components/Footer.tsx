import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gradient-to-br from-accent to-accent-secondary rounded-lg flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">ST</span>
            </div>
            <span className="font-bold tracking-tight text-sm">
              STEAM<span className="text-accent ml-0.5">Solution</span>
            </span>
            <span className="text-sm text-muted">|</span>
            <span className="text-sm text-text-secondary">
              인문학 × 소프트웨어 × 하드웨어 교육
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:jisu3002@naver.com"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors"
            >
              <Mail size={14} />
              jisu3002@naver.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} STEAM Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
