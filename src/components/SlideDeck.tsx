"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  id: string;
  label: string;
  node: React.ReactNode;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function SlideDeck({
  initialId,
  slides
}: {
  initialId?: string;
  slides: Slide[];
}) {
  const initialIndex = useMemo(() => {
    if (!initialId) return 0;
    const idx = slides.findIndex((s) => s.id === initialId);
    return idx >= 0 ? idx : 0;
  }, [initialId, slides]);

  const [index, setIndex] = useState(initialIndex);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  const goTo = (next: number) => setIndex(clamp(next, 0, slides.length - 1));
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const scrollToIndex = (i: number) => {
    const el = sectionRefs.current[i];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    goTo(i);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // allow both left/right and up/down to navigate slides
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") scrollToIndex(index - 1);
      if (e.key === "ArrowRight" || e.key === "ArrowDown")
        scrollToIndex(index + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    // on first render, snap to initial slide (if provided)
    const el = sectionRefs.current[initialIndex];
    if (!el) return;
    el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    setIndex(initialIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      {/* top nav */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="pointer-events-auto select-none text-sm font-semibold tracking-wide text-cyan-200/90">
            Anubhav Ranjan
          </div>
          <div className="pointer-events-auto hidden gap-2 md:flex">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollToIndex(i)}
                className={[
                  "rounded-full px-3 py-1 text-xs font-medium transition",
                  i === index
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-cyan-400/30 text-cyan-100/90 hover:bg-cyan-400/10"
                ].join(" ")}
                aria-current={i === index ? "page" : undefined}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* vertical slide scroller */}
      <div
        ref={scrollerRef}
        className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory overscroll-contain"
        onScroll={() => {
          const root = scrollerRef.current;
          if (!root) return;
          const top = root.scrollTop;
          const viewport = root.clientHeight || 1;
          const i = clamp(Math.round(top / viewport), 0, slides.length - 1);
          if (i !== index) setIndex(i);
        }}
      >
        {slides.map((s, i) => (
          <section
            key={s.id}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="min-h-screen snap-start"
          >
            {s.node}
          </section>
        ))}
      </div>

      {/* arrows */}
      <div className="fixed inset-y-0 left-0 z-20 flex items-center px-2">
        <button
          onClick={() => scrollToIndex(index - 1)}
          disabled={index === 0}
          className={[
            "rounded-full border border-cyan-400/30 bg-slate-950/40 px-3 py-2 text-cyan-100 backdrop-blur transition",
            "hover:bg-cyan-400/10 disabled:opacity-30 disabled:hover:bg-slate-950/40"
          ].join(" ")}
          aria-label="Previous section"
        >
          ↑
        </button>
      </div>
      <div className="fixed inset-y-0 right-0 z-20 flex items-center px-2">
        <button
          onClick={() => scrollToIndex(index + 1)}
          disabled={index === slides.length - 1}
          className={[
            "rounded-full border border-cyan-400/30 bg-slate-950/40 px-3 py-2 text-cyan-100 backdrop-blur transition",
            "hover:bg-cyan-400/10 disabled:opacity-30 disabled:hover:bg-slate-950/40"
          ].join(" ")}
          aria-label="Next section"
        >
          ↓
        </button>
      </div>

      {/* dots */}
      <div className="fixed inset-x-0 bottom-5 z-20 flex justify-center">
        <div className="flex gap-2 rounded-full border border-cyan-400/20 bg-slate-950/40 px-3 py-2 backdrop-blur">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => scrollToIndex(i)}
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                i === index ? "bg-cyan-400" : "bg-cyan-200/30 hover:bg-cyan-200/60"
              ].join(" ")}
              aria-label={`Go to ${s.label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

