import Link from "next/link";
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    number: "01",
    title: "Movie Planner",
    description:
      "Search for movies and save their trailers to a favorites list for later.",
    technologies: ["JavaScript", "Node.js", "TypeScript", "Vite", "Cloud database"],
    link: "https://movie-planner-wdd330-final.netlify.app/",
    artwork: "planner" as const,
  },
  {
    number: "02",
    title: "DevTrack",
    description:
      "A project manager for organizing projects, tracking progress, filtering by status or technology, and managing skills. Project data is saved in browser storage.",
    technologies: ["TypeScript", "Vite", "Node.js", "Browser local storage"],
    link: "https://sunny-faloodeh-3fda7f.netlify.app",
    artwork: "portfolio" as const,
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero page-width" aria-labelledby="intro-title">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          WDD 430 · Student developer
        </p>
        <h1 id="intro-title">
          Thoughtful code.
          <br />
          <span>Useful experiences.</span>
        </h1>
        <p className="hero-copy">
          I&apos;m learning to turn ideas into clear, accessible web
          experiences. This is where I share what I&apos;m building and what
          I&apos;m learning along the way.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="#projects">
            Explore my work <span aria-hidden="true">↓</span>
          </Link>
          <Link className="button button-secondary" href="/about">
            A little about me
          </Link>
        </div>
        <div className="hero-note">
          <span className="note-line" aria-hidden="true" />
          <p>Currently exploring full-stack web development</p>
        </div>
      </section>

      <ProjectList projects={projects} />

      <section className="contact-band page-width" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">What&apos;s next</p>
          <h2 id="contact-title">Let&apos;s make something meaningful.</h2>
        </div>
        <Link className="text-link" href="/about">
          Get to know me <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
