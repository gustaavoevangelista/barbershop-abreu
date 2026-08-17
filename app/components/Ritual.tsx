import Reveal from "./Reveal";
import {
  IconDrop,
  IconTowelSteam,
  IconRazor,
  IconScissorsComb,
} from "./icons";
import { RITUAL_STEPS } from "../content";

const ICONS = [IconDrop, IconTowelSteam, IconRazor, IconScissorsComb];

export default function Ritual() {
  return (
    <section id="ritual" className="relative bg-ink-2 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-xl">
          <Reveal>
            <p className="eyebrow mb-5">A Experiência</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-display text-4xl font-bold text-parchment sm:text-5xl">
              O Ritual
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-balance text-parchment/70">
              Quatro etapas, sempre pela mesma ordem — porque um bom corte não
              se atropela.
            </p>
          </Reveal>
        </div>

        <ol className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {RITUAL_STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal as="li" key={step.n} delay={i * 90}>
                <div className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-bold text-brass/50">
                      {step.n}
                    </span>
                    <div className="h-px flex-1 bg-steel/40" />
                    <Icon className="h-8 w-8 shrink-0 text-brass" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-parchment">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-parchment/65">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
