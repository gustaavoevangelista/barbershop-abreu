import { IconStar, IconWhatsapp } from "./icons";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, WHATSAPP_URL } from "../content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88svh] items-center overflow-hidden pt-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(14,21,36,0.96) 0%, rgba(14,21,36,0.88) 32%, rgba(14,21,36,0.55) 58%, rgba(14,21,36,0.35) 100%), linear-gradient(0deg, rgba(14,21,36,0.9) 0%, rgba(14,21,36,0.1) 40%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-12 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-6">
        <div>
          <p className="eyebrow mb-6 opacity-0 animate-[fadeUp_0.8s_0.1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Barbearia Clássica · Lagos, Algarve
          </p>

          <h1 className="font-display text-balance text-[15vw] leading-[0.9] text-parchment sm:text-[10vw] lg:text-[6.2rem]">
            <span className="block overflow-hidden">
              <span className="inline-block font-normal tracking-wide opacity-0 animate-[revealUp_0.9s_0.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                Barbershop
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block font-extrabold text-brass opacity-0 animate-[revealUp_0.9s_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                Abreu
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-md text-balance text-lg text-parchment/75 opacity-0 animate-[fadeUp_0.8s_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Técnica clássica, navalha afiada e uma alma bem mais rock&apos;n&apos;roll.
            O corte que se leva a sério é o que se faz com tempo.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_0.8s_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-brass-bright"
            >
              <IconWhatsapp className="h-4 w-4" />
              Marcar Horário
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-parchment/25 px-7 py-3.5 text-sm font-medium tracking-wide text-parchment/85 transition-colors hover:border-parchment/60 hover:text-parchment"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 opacity-0 animate-[fadeUp_0.8s_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards] lg:justify-self-end lg:pb-2">
          <div className="flex items-center gap-1 text-brass-bright">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-4 w-4" />
            ))}
          </div>
          <div className="h-8 w-px bg-steel/60" />
          <p className="text-sm text-parchment/70">
            <span className="font-semibold text-parchment">
              {GOOGLE_RATING}
            </span>{" "}
            de {GOOGLE_REVIEW_COUNT} avaliações no Google
          </p>
        </div>
      </div>

      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          #top [class*="animate-"] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
