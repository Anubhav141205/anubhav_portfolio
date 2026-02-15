"use client";

import Image from "next/image";
import { Card } from "@/components/ui/Card";

export function HeroSlide() {
  return (
    <div className="relative min-h-full">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-full max-w-4xl flex-col items-center px-4 pt-20 pb-20 md:pt-24">
        {/* Photo centered on desktop */}
        <div className="flex flex-col items-center">
          <div className="relative transition-transform duration-300 ease-out hover:scale-110">
            <div className="absolute inset-0 -z-10 rounded-full bg-cyan-500/15 blur-2xl" />
            <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-cyan-400 shadow-2xl md:h-56 md:w-56">
              <Image
                src="/profile.png"
                width={224}
                height={224}
                alt="Anubhav Ranjan"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="text-cyan-400">Anubhav</span> Ranjan
          </h1>
          <p className="mt-2 text-center text-cyan-100/90">
            Software Engineering • React • Python • SQL
          </p>
        </div>

        {/* About me – more content */}
        <div className="mt-8 w-full max-w-2xl space-y-4">
          <Card className="p-5 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-cyan-50/90">
              I’m a Computer Science student at VIT Bhopal, building modern web
              apps and data-driven projects. I enjoy turning ideas into clean
              code—from full-stack features to NLP and ML experiments.
            </p>
          </Card>
          <Card className="p-5 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-cyan-50/90">
              I’ve worked on Spring Boot microservices (JPMorgan Forage), data
              science with Python (Finlatics), and built tools like a Sentiment
              Analyser and an AI Website Generator. I’m comfortable with React,
              Python, SQL, and tools like Figma, Jira, and GitHub.
            </p>
          </Card>
          <Card className="p-5 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-900/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_70px_rgba(0,0,0,0.45)] hover:backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-cyan-50/90">
              I’m always up for collaboration on software engineering or data
              science—reach out below or scroll through the sections to see
              certificates, projects, and skills.
            </p>
          </Card>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <a
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anubhav.ranjan141@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/10"
              href="tel:+91830268036"
            >
              Call
            </a>
            <a
              className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/10"
              href="https://www.linkedin.com/in/anubhav-ranjan-a4663432a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-center text-xs text-cyan-100/60">
            Scroll down or use ↑↓ to move between sections
          </p>
        </div>
      </div>
    </div>
  );
}

