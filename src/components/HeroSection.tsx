import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { STUDIO_IMAGES, STUDIO_INFO } from '../data/studio';
import { EditorialImage } from './EditorialImage';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-canvas pt-24 pb-12 sm:pt-28 sm:pb-16 lg:min-h-[calc(100vh-3.5rem)] lg:flex lg:items-center lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Headline, single supportive line, and primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <p className="mb-5 text-xs font-bold tracking-[0.16em] uppercase text-ink-muted">
              {STUDIO_INFO.neighborhood}
            </p>

            <h1
              className="font-display font-medium tracking-[-0.02em] text-ink"
              style={{
                fontSize: 'clamp(2.65rem, 4.5vw, 4.35rem)',
                lineHeight: 1.03,
              }}
            >
              Pele macia, cuidado que atravessa gerações.
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              Depilação masculina e feminina com cera caseira e método TNT há mais de 20 anos.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#contato"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-quartz px-7 py-3.5 text-sm font-bold text-quartz-ink whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-quartz-hover hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <span>Entrar em contato</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#servicos"
                className="relative py-2 text-sm font-bold text-ink whitespace-nowrap shrink-0 transition-colors hover:text-quartz-deep after:absolute after:bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-hairline hover:after:bg-quartz focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quartz"
              >
                Conhecer serviços
              </a>
            </div>
          </motion.div>

          {/* Right column: Single dominant architectural studio visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative h-full min-h-[300px] sm:min-h-[420px] lg:min-h-[520px] rounded-t-[4rem] sm:rounded-t-[7rem] rounded-b-2xl border border-hairline p-2 sm:p-3 bg-surface-elevated">
              <EditorialImage
                src={STUDIO_IMAGES.heroStudio.src}
                alt={STUDIO_IMAGES.heroStudio.alt}
                priority
                className="h-full w-full rounded-t-[3.5rem] sm:rounded-t-[6.35rem] rounded-b-xl aspect-[16/10] lg:aspect-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
