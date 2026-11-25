import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studio';

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'glass-panel border-b border-hairline'
          : 'bg-canvas/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#inicio"
          onClick={handleLinkClick}
          className="font-display text-2xl font-semibold tracking-tight text-ink whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quartz"
        >
          {STUDIO_INFO.brandShort}
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-normal text-ink-muted"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-ink after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-quartz after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quartz"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-quartz px-5 py-2.5 text-xs font-bold tracking-wide text-quartz-ink whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-quartz-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Entrar em contato
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink md:hidden transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quartz"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegação móvel"
          className="border-b border-hairline bg-canvas px-5 pb-6 pt-3 md:hidden"
        >
          <div className="flex flex-col divide-y divide-hairline">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-3.5 text-base font-normal text-ink transition-colors hover:text-quartz-deep"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contato"
            onClick={handleLinkClick}
            className="mt-4 flex min-h-11 w-full items-center justify-center rounded-full bg-quartz px-6 py-3 text-sm font-bold text-quartz-ink transition-colors hover:bg-quartz-hover"
          >
            Entrar em contato
          </a>
        </nav>
      )}
    </header>
  );
}
