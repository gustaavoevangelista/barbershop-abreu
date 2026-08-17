import Reveal from "./Reveal";
import { IconStar } from "./icons";
import { REVIEWS } from "../content";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-4 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-xl">
          <Reveal>
            <p className="eyebrow mb-5">A Palavra de Quem Lá Vai</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold text-parchment sm:text-5xl">
              Avaliações
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <div className="flex h-full flex-col border border-steel/30 bg-ink-2 p-7 transition-colors hover:border-brass/40">
                <div className="mb-5 flex items-center gap-1 text-brass-bright">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <IconStar key={j} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <p className="flex-1 text-balance text-parchment/80">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-steel/30 pt-4">
                  <p className="font-display text-lg font-bold text-parchment">
                    {review.name}
                  </p>
                  <p className="text-xs tracking-wide text-smoke">
                    {review.tag}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
