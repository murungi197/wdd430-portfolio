interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <section className="mt-10 rounded-xl border border-[#e2e8e2] bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold tracking-tight text-[#18251f]">
        {title}
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-[#f0f3ef] px-3 py-1.5 text-sm font-medium text-[#53645a]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
