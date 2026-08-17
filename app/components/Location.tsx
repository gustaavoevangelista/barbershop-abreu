import Reveal from "./Reveal";
import { IconClock, IconPin, IconWhatsapp } from "./icons";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  HOURS,
  MAPS_EMBED_SRC,
  MAPS_LINK,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "../content";

export default function Location() {
  return (
    <section id="localizacao" className="relative bg-ink-2 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:px-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Onde Nos Encontrar</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold text-parchment sm:text-5xl">
              Localização
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 flex gap-4">
              <IconPin className="h-6 w-6 shrink-0 text-brass" />
              <div>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment/85 underline decoration-steel/50 underline-offset-4 transition-colors hover:text-brass-bright hover:decoration-brass"
                >
                  {ADDRESS_LINE1}
                  <br />
                  {ADDRESS_LINE2}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex gap-4">
              <IconClock className="h-6 w-6 shrink-0 text-brass" />
              <table className="w-full max-w-xs text-sm text-parchment/75">
                <tbody>
                  {HOURS.map((row) => (
                    <tr key={row.day}>
                      <td className="py-1 pr-4 text-parchment/60">
                        {row.day}
                      </td>
                      <td className="py-1 text-right font-medium text-parchment/85">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-3 text-xs italic text-smoke">
              * Horário sujeito a confirmação — contacte para marcações fora
              deste intervalo.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-brass-bright"
            >
              <IconWhatsapp className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="h-[420px] lg:h-full">
          <div className="relative h-full min-h-[380px] overflow-hidden border border-steel/30">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 mix-blend-luminosity"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,17,14,0.35), rgba(20,17,14,0.05) 30%, rgba(20,17,14,0.35))",
              }}
            />
            <iframe
              title="Mapa — BarberShop Abreu, Lagos"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              className="h-full w-full grayscale invert-[0.92] contrast-[1.05]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
