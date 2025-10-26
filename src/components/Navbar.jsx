import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">My Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-sm text-white/80 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
