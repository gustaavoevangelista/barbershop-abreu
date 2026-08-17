import Reveal from "./Reveal";
import { TEAM } from "../content";

const HEXAGON = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

export default function Team() {
  return (
    <section id="equipa" className="relative bg-ink-2 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 max-w-xl">
          <Reveal>
            <p className="eyebrow mb-5">Quem Corta</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold text-parchment sm:text-5xl">
              A Equipa
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-balance text-parchment/70">
              Cada barbeiro traz o seu traço — o respeito pelo ofício é
              sempre o mesmo.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal as="li" key={member.name} delay={i * 90}>
              <div className="flex flex-col items-center text-center">
                <div
                  className="flex h-28 w-28 items-center justify-center bg-gradient-to-br from-ink-3 to-ink-2 ring-1 ring-brass/25 md:h-32 md:w-32"
                  style={{ clipPath: HEXAGON }}
                >
                  <span className="font-display text-2xl font-extrabold text-brass-bright">
                    {member.initials}
                  </span>
                </div>
                <p className="mt-5 font-display text-lg font-bold text-parchment">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-smoke">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
