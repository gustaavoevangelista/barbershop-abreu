import Reveal from "./Reveal";
import { IconVinyl, IconWhatsapp } from "./icons";
import { WHATSAPP_URL } from "../content";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <IconVinyl className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-brass/[0.05]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow mb-6">Sem Marcação Não Há Cadeira</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight text-parchment sm:text-6xl">
            Reserva a tua hora
            <span className="text-brass"> antes que a agenda feche.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-brass px-9 py-4 text-base font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-brass-bright"
          >
            <IconWhatsapp className="h-5 w-5" />
            Marcar Pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
