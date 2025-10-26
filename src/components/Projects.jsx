import { useMemo } from 'react';
import { Rocket } from 'lucide-react';

function ProjectCard({ title, description, tags, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 transition"
    >
      <div className="aspect-video w-full rounded-xl bg-white/5 mb-4 flex items-center justify-center">
        <Rocket className="h-8 w-8 text-white/60" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-[11px] uppercase tracking-wide rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: 'Realtime Dashboard',
        description: 'Streaming analytics with crisp UI and millisecond updates.',
        tags: ['React', 'WebSockets', 'Tailwind'],
        link: '#',
      },
      {
        title: 'Design System',
        description: 'Composable components and tokens powering multiple apps.',
        tags: ['Design Tokens', 'Accessibility', 'Docs'],
        link: '#',
      },
      {
        title: '3D Product Teaser',
        description: 'Interactive Spline scene embedded in a marketing site.',
        tags: ['Spline', 'Framer Motion', 'Vite'],
        link: '#',
      },
    ],
    []
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A curated selection of things I’ve built recently. Each project balances performance, elegance, and maintainability.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
