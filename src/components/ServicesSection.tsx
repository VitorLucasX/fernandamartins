import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  SERVICE_FILTERS,
  STUDIO_IMAGES,
  STUDIO_SERVICES,
  type ServiceCategory,
  type StudioService,
} from '../data/studio';
import { EditorialImage } from './EditorialImage';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'todos' | ServiceCategory>('todos');

  const filteredServices =
    activeFilter === 'todos'
      ? STUDIO_SERVICES
      : STUDIO_SERVICES.filter((service) => service.category === activeFilter);

  const handleBookService = (service: StudioService) => {
    onSelectService(service.name);
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="servicos"
      className="bg-dark-canvas text-ink-on-dark py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Top Asymmetric Split: Sugar Wax + TNT craft */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="mb-4 text-xs font-bold tracking-[0.16em] uppercase text-quartz">
              Serviços · Masculino & Feminino
            </p>
            <h2
              className="font-display font-medium tracking-[-0.02em] text-ink-on-dark"
              style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3.35rem)',
                lineHeight: 1.06,
              }}
            >
              Técnica artesanal para cada parte do corpo.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-on-dark-muted">
              Unimos a suavidade da cera caseira de açúcar à precisão e higiene do método TNT,
              respeitando o ritmo de cada pele.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl border border-dark-hairline bg-dark-surface p-2.5">
              <EditorialImage
                src={STUDIO_IMAGES.sugarWax.src}
                alt={STUDIO_IMAGES.sugarWax.alt}
                darkSurface
                className="aspect-[4/3] w-full rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Interactive Filter Bar */}
        <div className="mt-16 border-t border-dark-hairline pt-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-2xl font-medium text-ink-on-dark sm:text-3xl">
              Carta completa de procedimentos
            </h3>

            <div
              role="tablist"
              aria-label="Filtrar serviços por categoria"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-dark-hairline bg-dark-surface p-1.5"
            >
              {SERVICE_FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`min-h-9 rounded-lg px-3.5 py-1.5 text-xs font-bold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quartz ${
                      isActive
                        ? 'bg-quartz text-quartz-ink'
                        : 'text-ink-on-dark-muted hover:text-ink-on-dark'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Curated Editorial Directory */}
          <div className="mt-10 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group border-b border-dark-hairline py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="tabular-nums text-xs font-bold tracking-wider text-quartz">
                        {service.number}
                      </span>
                      <h4 className="font-display text-2xl font-medium text-ink-on-dark transition-colors group-hover:text-quartz">
                        {service.name}
                      </h4>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 pl-7 text-xs text-ink-on-dark-muted">
                      <span>{service.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.audience}</span>
                    </div>

                    <p className="mt-2 pl-7 text-sm leading-relaxed text-ink-on-dark-muted/90">
                      {service.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBookService(service)}
                    aria-label={`Agendar ${service.name}`}
                    className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark-hairline text-ink-on-dark-muted transition-all duration-150 hover:border-quartz hover:bg-quartz hover:text-quartz-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quartz"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facial & Design de Sobrancelhas Spotlight (Asymmetric Editorial Break) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-1 items-center gap-10 rounded-3xl border border-dark-hairline bg-dark-surface p-6 sm:p-10 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-5">
            <EditorialImage
              src={STUDIO_IMAGES.facialBrow.src}
              alt={STUDIO_IMAGES.facialBrow.alt}
              darkSurface
              className="aspect-[3/4] w-full rounded-2xl"
            />
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-quartz">
              Acabamento Facial & Olhar
            </p>
            <h3
              className="mt-4 font-display font-medium text-ink-on-dark"
              style={{
                fontSize: 'clamp(1.85rem, 3vw, 2.75rem)',
                lineHeight: 1.08,
              }}
            >
              Design de sobrancelhas com harmonia natural.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-on-dark-muted">
              Da remoção delicada de buço, orelha e pescoço ao alinhamento sob medida das
              sobrancelhas, cada detalhe valoriza o seu rosto sem exageros.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => {
                  onSelectService('Design de sobrancelhas');
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-quartz px-6 py-3 text-sm font-bold text-quartz-ink whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-quartz-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-on-dark"
              >
                Agendar Design de Sobrancelhas
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
