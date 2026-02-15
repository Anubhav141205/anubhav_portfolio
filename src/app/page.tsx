"use client";

import { SlideDeck } from "@/components/SlideDeck";
import { CertificatesSlide } from "@/components/slides/CertificatesSlide";
import { ContactSlide } from "@/components/slides/ContactSlide";
import { EducationSlide } from "@/components/slides/EducationSlide";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { ProjectsSlide } from "@/components/slides/ProjectsSlide";
import { SkillsSlide } from "@/components/slides/SkillsSlide";

export default function HomePage() {
  return (
    <main>
      <SlideDeck
        slides={[
          { id: "about", label: "About", node: <HeroSlide /> },
          {
            id: "certificates",
            label: "Certificates",
            node: <CertificatesSlide />
          },
          { id: "projects", label: "Projects", node: <ProjectsSlide /> },
          { id: "education", label: "Education", node: <EducationSlide /> },
          { id: "skills", label: "Skills", node: <SkillsSlide /> },
          { id: "contact", label: "Contact", node: <ContactSlide /> }
        ]}
      />
    </main>
  );
}

