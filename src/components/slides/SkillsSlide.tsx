"use client";

import { Card } from "@/components/ui/Card";

const languages = [
  "Python",
  "JavaScript (React.js)",
  "HTML/CSS",
  "SQL (PostgreSQL, MySQL)"
];

const internship = {
  company: "Yuga Yatra Retail (OPC) Pvt. Ltd.",
  position: "Software Engineer Intern",
  duration: "Feb 2026 - Apr 2026",
  responsibilities: [
    "Developing websites/apps using Cursor AI, Firebase Studio, AI Technologies",
    "Designing using Canva",
    "Doing real-time projects freelancing on upwork.com",
    "Working on seller portals on amazon.com/flipkart.com",
    "Collaborating with team members using Google Workspace"
  ]
};

function Chip({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-cyan-400/30 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-cyan-100">
      {text}
    </span>
  );
}

export function SkillsSlide() {
  return (
    <div className="mx-auto min-h-full max-w-6xl px-4 pt-24 pb-20">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Skills</h2>
        <p className="mt-1 text-sm text-cyan-100/80">
          Languages and internship experience.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card className="p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm">
          <div className="text-sm font-bold text-white">Languages</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {languages.map((l) => (
              <Chip key={l} text={l} />
            ))}
          </div>
        </Card>

        <Card className="p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm">
          <div className="text-sm font-bold text-white">Internship</div>
          <div className="mt-3">
            <div className="text-lg font-semibold text-cyan-200">{internship.company}</div>
            <div className="text-sm text-white">{internship.position}</div>
            <div className="mt-1 text-xs text-cyan-100/80">{internship.duration}</div>
          </div>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-cyan-50/90">
            {internship.responsibilities.map((resp) => (
              <li key={resp}>{resp}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

