import { STUDIO_INFO, buildWhatsAppUrl } from '../data/studio';

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Gostaria de informações sobre horários disponíveis.'
  );

  return (
    <footer className="border-t border-dark-hairline bg-dark-canvas text-ink-on-dark">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="font-display text-2xl font-semibold text-ink-on-dark transition-colors hover:text-quartz"
            >
              {STUDIO_INFO.brandShort}
            </a>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-on-dark-muted">
              Depilação Corporal, Masculina e Feminina com cera caseira e método TNT.
            </p>
          </div>

          <div className="md:col-span-4 space-y-1.5 text-sm text-ink-on-dark-muted">
            <p className="font-bold text-ink-on-dark">Estúdio em Contagem</p>
            <p>{STUDIO_INFO.address}</p>
            <p className="tabular-nums">{STUDIO_INFO.hoursSummary}</p>
            <p className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tabular-nums font-bold text-quartz transition-colors hover:text-ink-on-dark"
              >
                WhatsApp {STUDIO_INFO.phoneDisplay}
              </a>
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="md:col-span-3 flex flex-col gap-2.5 text-sm text-ink-on-dark-muted md:items-end"
          >
            <a href="#inicio" className="transition-colors hover:text-quartz">
              Início
            </a>
            <a href="#servicos" className="transition-colors hover:text-quartz">
              Serviços
            </a>
            <a href="#sobre" className="transition-colors hover:text-quartz">
              Sobre
            </a>
            <a href="#contato" className="transition-colors hover:text-quartz">
              Agendamento
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-dark-hairline pt-6 text-xs text-ink-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {STUDIO_INFO.brandFull}.
          </p>
          <p>Parque Duval de Barros · Contagem, MG</p>
        </div>
      </div>
    </footer>
  );
}
