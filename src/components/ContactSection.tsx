import { useEffect, useRef, useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import {
  STUDIO_INFO,
  STUDIO_SERVICES,
  buildWhatsAppUrl,
} from '../data/studio';

interface ContactSectionProps {
  selectedService: string;
  onSelectService: (serviceName: string) => void;
}

const SHIFT_OPTIONS = [
  'Terça a Sexta · Manhã (07h30 às 12h)',
  'Terça a Sexta · Tarde (12h às 17h)',
  'Terça a Sexta · Fim do dia (17h às 20h)',
  'Sábado · (09h às 18h)',
];

function formatPhoneMask(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({
  selectedService,
  onSelectService,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [audience, setAudience] = useState<'Feminino' | 'Masculino'>('Feminino');
  const [shift, setShift] = useState(SHIFT_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const whatsappTriggerRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    setSubmittedUrl(null);
  }, [selectedService]);

  const directWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Gostaria de agendar um horário de depilação com Fernanda Martins.'
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { name?: string; phone?: string } = {};
    const trimmedName = name.trim();
    const phoneDigits = phone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      nextErrors.name = 'Informe seu nome para o atendimento.';
    }
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um WhatsApp válido com DDD.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmittedUrl(null);
      return;
    }

    setErrors({});
    const chosenService = selectedService || STUDIO_SERVICES[0].name;
    const messageLines = [
      `Olá, Fernanda Martins! Gostaria de agendar um horário:`,
      `• Nome: ${trimmedName}`,
      `• WhatsApp: ${phone}`,
      `• Atendimento: ${audience}`,
      `• Serviço: ${chosenService}`,
      `• Preferência: ${shift}`,
      ...(notes.trim() ? [`• Observação: ${notes.trim()}`] : []),
    ];

    const url = buildWhatsAppUrl(messageLines.join('\n'));
    setSubmittedUrl(url);

    // Trigger anchor in next frame without calling window.open
    requestAnimationFrame(() => {
      whatsappTriggerRef.current?.click();
    });
  };

  return (
    <section id="contato" className="bg-surface py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column: Verified Location, Hours & Direct WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="mb-4 text-xs font-bold tracking-[0.16em] uppercase text-quartz-deep">
              Contato & Localização
            </p>
            <h2
              className="font-display font-medium tracking-[-0.02em] text-ink"
              style={{
                fontSize: 'clamp(2.15rem, 3.6vw, 3.35rem)',
                lineHeight: 1.06,
              }}
            >
              Agende seu horário com tranquilidade.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              Preencha o pré-agendamento ao lado ou chame diretamente pelo WhatsApp para
              confirmar o melhor horário para você.
            </p>

            {/* Hairline-divided contact facts */}
            <dl className="mt-10 divide-y divide-hairline border-y border-hairline">
              <div className="flex items-start gap-4 py-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-quartz-deep" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold tracking-wider uppercase text-ink-muted">
                    Endereço
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink">
                    {STUDIO_INFO.address}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-quartz-deep" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold tracking-wider uppercase text-ink-muted">
                    Telefone / WhatsApp
                  </dt>
                  <dd className="mt-1 tabular-nums text-sm font-bold text-ink">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-quartz-deep"
                    >
                      {STUDIO_INFO.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-quartz-deep" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold tracking-wider uppercase text-ink-muted">
                    Horário de funcionamento
                  </dt>
                  <dd className="mt-1 space-y-1 text-sm text-ink">
                    {STUDIO_INFO.hoursShort.map((item) => (
                      <div key={item.days} className="flex flex-wrap gap-x-2">
                        <span className="font-bold">{item.days}:</span>
                        <span className="tabular-nums text-ink-muted">{item.time}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-dark-canvas px-7 py-3.5 text-sm font-bold text-ink-on-dark whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-dark-surface hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <MessageCircle className="h-4 w-4 text-quartz" aria-hidden="true" />
                <span>Chamar direto no WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right column: Online Booking Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl border border-hairline p-6 sm:p-10">
              <div className="mb-8 border-b border-hairline pb-5">
                <h3 className="font-display text-3xl font-medium text-ink">
                  Agendamento Online
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted">
                  Pré-selecione seu procedimento e envie os dados prontos para confirmação.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="mb-2 block text-xs font-bold tracking-wider uppercase text-ink"
                    >
                      Seu nome
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Como gostaria de ser chamado(a)"
                      aria-invalid={Boolean(errors.name)}
                      className="min-h-12 w-full rounded-xl border border-hairline bg-surface-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-colors focus:border-quartz-deep focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-quartz-deep">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="mb-2 block text-xs font-bold tracking-wider uppercase text-ink"
                    >
                      WhatsApp para retorno
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      inputMode="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(formatPhoneMask(e.target.value));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="(31) 99999-9999"
                      aria-invalid={Boolean(errors.phone)}
                      className="tabular-nums min-h-12 w-full rounded-xl border border-hairline bg-surface-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-colors focus:border-quartz-deep focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-quartz-deep">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Audience Toggle */}
                <div>
                  <span className="mb-2 block text-xs font-bold tracking-wider uppercase text-ink">
                    Atendimento
                  </span>
                  <div
                    role="group"
                    aria-label="Tipo de atendimento"
                    className="grid grid-cols-2 gap-2 rounded-xl border border-hairline bg-surface-elevated p-1.5"
                  >
                    {(['Feminino', 'Masculino'] as const).map((option) => {
                      const active = audience === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setAudience(option)}
                          aria-pressed={active}
                          className={`min-h-10 rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quartz ${
                            active
                              ? 'bg-quartz text-quartz-ink'
                              : 'text-ink-muted hover:text-ink'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Service & Preferred Shift */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="mb-2 block text-xs font-bold tracking-wider uppercase text-ink"
                    >
                      Serviço desejado
                    </label>
                    <select
                      id="booking-service"
                      value={selectedService}
                      onChange={(e) => onSelectService(e.target.value)}
                      className="min-h-12 w-full rounded-xl border border-hairline bg-surface-elevated px-4 py-3 text-sm text-ink transition-colors focus:border-quartz-deep focus:outline-none"
                    >
                      {STUDIO_SERVICES.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-shift"
                      className="mb-2 block text-xs font-bold tracking-wider uppercase text-ink"
                    >
                      Melhor turno
                    </label>
                    <select
                      id="booking-shift"
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      className="min-h-12 w-full rounded-xl border border-hairline bg-surface-elevated px-4 py-3 text-sm text-ink transition-colors focus:border-quartz-deep focus:outline-none"
                    >
                      {SHIFT_OPTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="mb-2 block text-xs font-bold tracking-wider uppercase text-ink"
                  >
                    Preferência de método ou observação (opcional)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex.: preferência pela cera caseira de açúcar, método TNT ou combinar mais de uma região."
                    className="w-full rounded-xl border border-hairline bg-surface-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-colors focus:border-quartz-deep focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-quartz px-8 py-3.5 text-sm font-bold text-quartz-ink whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-quartz-hover hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Enviar agendamento no WhatsApp</span>
                  </button>

                  <span className="text-xs text-ink-muted">
                    Atendimento por ordem de reserva
                  </span>
                </div>
              </form>

              {/* Confirmation Banner & Hidden Safe Anchor */}
              {submittedUrl && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 rounded-2xl border border-hairline bg-surface-elevated p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-quartz-deep"
                      aria-hidden="true"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-ink">
                        Mensagem preparada para o WhatsApp
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                        Se a conversa não abriu automaticamente em uma nova aba, toque no
                        botão abaixo para concluir seu agendamento.
                      </p>
                      <a
                        ref={whatsappTriggerRef}
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-dark-canvas px-5 py-2 text-xs font-bold text-ink-on-dark transition-colors hover:bg-dark-surface"
                      >
                        <span>Abrir conversa no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
