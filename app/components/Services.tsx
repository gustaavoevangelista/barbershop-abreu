import Reveal from "./Reveal";
import { IconScissorsComb } from "./icons";
import { SERVICES, WHATSAPP_URL } from "../content";

export default function Services() {
  return (
    <section id="servicos" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">O Menu</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-4xl font-bold text-parchment sm:text-5xl">
                Serviços
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <IconScissorsComb className="h-12 w-12 text-brass/50" />
          </Reveal>
        </div>

        <ul className="divide-y divide-steel/30 border-y border-steel/30">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 60}>
              <div className="group flex items-center justify-between gap-6 py-6 transition-colors">
                <div>
                  <p className="font-display text-xl font-bold text-parchment transition-colors group-hover:text-brass-bright sm:text-2xl">
                    {service.name}
                  </p>
                  <p className="mt-1 text-sm text-smoke">{service.detail}</p>
                </div>
                <p className="shrink-0 font-display text-xl font-bold text-brass sm:text-2xl">
                  {service.price}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-sm italic text-smoke">
            * Preços de referência — confirme o valor exato na marcação.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-brass-bright"
          >
            Marcar Horário
          </a>
        </div>
      </div>
    </section>
  );
}
