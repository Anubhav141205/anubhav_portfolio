"use client";

import { Card } from "@/components/ui/Card";

const certificates = [
  {
    org: "JPMorgan Chase (Forage)",
    title: "Software Engineering Job Simulation",
    date: "Feb 2026",
    bullets: [
      "Built a Spring Boot microservice integrating Kafka for high-volume transaction processing",
      "Implemented validation and persistence using Spring Data JPA with H2 database",
      "Integrated external REST APIs and exposed endpoints for user balance queries",
      "Tested and debugged workflows using Maven test suites"
    ]
  },
  {
    org: "Finlatics",
    title: "Data Science with Python",
    date: "Feb 2025",
    bullets: [
      "Hands-on work in preprocessing, EDA, visualization, and statistical analysis",
      "Applied ML techniques on real-world datasets to extract insights"
    ]
  },
  {
    org: "Vityarthi",
    title: "Python Essentials",
    date: "Jan 2025",
    bullets: [
      "Strong foundation in Python data types, control structures, and functions",
      "Practiced writing, testing, and debugging Python code"
    ]
  }
];

export function CertificatesSlide() {
  return (
    <div className="mx-auto min-h-full max-w-6xl px-4 pt-24 pb-20">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Certificates
        </h2>
        <p className="mt-1 text-sm text-cyan-100/80">
          Highlights from training and simulations.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {certificates.map((c) => (
          <Card 
            key={`${c.org}-${c.title}`} 
            className="p-5 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-cyan-200">
                  {c.org}
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  {c.title}
                </div>
              </div>
              <div className="shrink-0 rounded-full border border-cyan-400/30 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-cyan-100">
                {c.date}
              </div>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-cyan-50/90">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

