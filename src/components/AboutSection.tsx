import { motion } from 'motion/react';
import { STUDIO_IMAGES, STUDIO_INFO } from '../data/studio';
import { EditorialImage } from './EditorialImage';

const PILLARS = [
  {
    value: '20+ anos',
    label: 'Tradição e confiança em Contagem',
  },
  {
    value: 'Cera caseira & TNT',
    label: 'Temperatura suave e higiene rigorosa',
  },
  {
    value: 'Feminino & Masculino',
    label: 'Atendimento reservado para todos',
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column: Portrait visual (inverted rhythm) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-t-[7rem] rounded-b-2xl border border-hairline bg-surface p-2.5">
              <EditorialImage
                src={STUDIO_IMAGES.specialistDetail.src}
                alt={STUDIO_IMAGES.specialistDetail.alt}
                className="aspect-[3/4] w-full rounded-t-[6.35rem] rounded-b-xl"
              />
            </div>
          </motion.div>

          {/* Right column: Editorial narrative & concise facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="mb-4 text-xs font-bold tracking-[0.16em] uppercase text-quartz-deep">
              Sobre o espaço
            </p>

            <h2
              className="font-display font-medium tracking-[-0.02em] text-ink"
              style={{
                fontSize: 'clamp(2.15rem, 3.6vw, 3.4rem)',
                lineHeight: 1.06,
              }}
            >
              Mais de 20 anos de acolhimento e cuidado.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              No coração do bairro {STUDIO_INFO.neighborhood.split('·')[0].trim()}, em Contagem,
              o estúdio Fernanda Martins une experiência prática e ambiente tranquilo para tornar
              a depilação um momento leve.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              Com cera caseira preparada para aderir apenas aos fios e o método TNT de aplicação
              rápida e descartável, atendemos mulheres e homens com respeito, pontualidade e atenção
              a cada detalhe da pele.
            </p>

            {/* Hairline-divided typographic highlights */}
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-hairline pt-8 sm:grid-cols-3">
              {PILLARS.map((pillar) => (
                <div key={pillar.value}>
                  <p className="tabular-nums font-display text-2xl font-semibold text-ink">
                    {pillar.value}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-ink-muted">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
