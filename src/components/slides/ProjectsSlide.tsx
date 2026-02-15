"use client";

import { Card } from "@/components/ui/Card";

const projects = [
  {
    name: "Sentiment Analyser",
    description:
      "Analyzes text and classifies sentiment (positive, negative, neutral) using NLP techniques.",
    tags: ["NLP", "Python", "Text Classification"],
    githubUrl: "https://github.com/Anubhav141205/sentimentanalyser"
  },
  {
    name: "AI Website Generator",
    description:
      "Generates complete responsive websites from user inputs like business type, purpose, and content preferences.",
    tags: ["Web", "AI", "Layouts", "UI Components"],
    githubUrl: "https://github.com/Anubhav141205/aiwebsite_generator"
  },
  {
    name: "Expense Tracker",
    description:
      "A Java-based expense tracking application for managing personal finances and monitoring spending patterns.",
    tags: ["Java", "Finance", "Desktop App"],
    githubUrl: "https://github.com/Anubhav141205/Javaproject"
  }
];

export function ProjectsSlide() {
  return (
    <div className="mx-auto min-h-full max-w-6xl px-4 pt-24 pb-20">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Projects</h2>
        <p className="mt-1 text-sm text-cyan-100/80">
          A selection of my recent projects.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card 
            key={p.name} 
            className="p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm"
          >
            <div className="text-lg font-bold text-white">{p.name}</div>
            <p className="mt-2 text-sm leading-relaxed text-cyan-50/90">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cyan-400/30 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-cyan-100"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              {p.githubUrl ? (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/10 transition-colors inline-block"
                >
                  GitHub
                </a>
              ) : (
                <button
                  className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-100/50 cursor-not-allowed"
                  type="button"
                  disabled
                >
                  GitHub (coming soon)
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

