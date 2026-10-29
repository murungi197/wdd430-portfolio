import Link from "next/link";
import SkillCard from "@/components/SkillCard";

export default function AboutPage() {
  return (
    <main className="page-width">
      <article className="about-content">
        <p className="eyebrow">About this portfolio</p>
        <h1>
          Building with curiosity,
          <br />
          <span>one project at a time.</span>
        </h1>
        <p>
          I&apos;m a WDD 430 student developing my skills in modern web
          development. I enjoy taking a rough idea, breaking it into manageable
          pieces, and shaping it into an experience that feels simple to use.
        </p>
        <p>
          This portfolio is built with Next.js, React, TypeScript, and Tailwind
          CSS. I&apos;m using it to practice server-rendered pages, reusable
          components, and a responsive interface.
        </p>
        <SkillCard
          title="Current toolkit"
          skills={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
        />
        <Link className="button button-primary" href="/#projects">
          Browse the projects <span aria-hidden="true">↓</span>
        </Link>
      </article>
    </main>
  );
}
