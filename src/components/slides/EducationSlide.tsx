"use client";

import { Card } from "@/components/ui/Card";

export function EducationSlide() {
  return (
    <div className="mx-auto min-h-full max-w-6xl px-4 pt-24 pb-20">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Education</h2>
        <p className="mt-1 text-sm text-cyan-100/80">
          Current degree and academic highlights.
        </p>
      </header>

      <div className="space-y-5">
        <Card className="p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-cyan-200">
                VIT Bhopal University
              </div>
              <div className="mt-1 text-lg font-bold text-white">
                Bachelor in Computer Science Core
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-400/30 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-cyan-100">
                Sep 2024 – Sep 2028
              </span>
              <span className="rounded-full border border-cyan-400/30 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-cyan-100">
                CGPA: 8.5
              </span>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-sm font-bold text-white">Coursework</div>
            <p className="mt-2 text-sm text-cyan-50/90">
              Data Structures, Algorithms, Databases, Computer Systems, Machine
              Learning
            </p>
          </div>
        </Card>

        <Card className="p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-cyan-200">
                Ursuline Convent School
              </div>
              <div className="mt-1 text-lg font-bold text-white">
                Schooling
              </div>
            </div>
            <span className="rounded-full border border-cyan-400/30 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-cyan-100">
              2011 – 2024
            </span>
          </div>
          <div className="mt-4">
            <div className="text-sm font-bold text-white">Marks</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-cyan-50/90">
              <li>Class X: 90%</li>
              <li>Class XII: 85%</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}

