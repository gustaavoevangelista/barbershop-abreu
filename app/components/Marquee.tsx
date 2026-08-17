const ITEMS = [
  "CORTE CLÁSSICO",
  "BARBA NA NAVALHA",
  "DEGRADÊ",
  "ALMA ROCK'N'ROLL",
  "LAGOS · ALGARVE",
];

export default function Marquee() {
  const content = (
    <span className="flex items-center">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-sm tracking-widest text-ink/80 sm:text-base">
            {item}
          </span>
          <span className="text-ink/40">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee-wrap overflow-hidden border-y border-ink/10 bg-brass py-3">
      <div className="marquee-track flex w-max">
        {content}
        {content}
      </div>
    </div>
  );
}
