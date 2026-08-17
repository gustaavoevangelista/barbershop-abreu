import Reveal from "./Reveal";
import { IconStar } from "./icons";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "../content";

export default function TicketDivider() {
  return (
    <div className="relative bg-ink px-6 py-10 md:py-14">
      <Reveal className="mx-auto max-w-2xl">
        <div className="relative bg-brass text-ink">
          <div className="ticket-perf h-2.5 w-full -translate-y-px" />
          <div className="flex flex-col items-center gap-3 px-8 py-9 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-2xl font-bold">
                {GOOGLE_RATING} de 5 estrelas
              </p>
              <p className="mt-1 text-sm font-medium tracking-wide">
                {GOOGLE_REVIEW_COUNT} avaliações verificadas no Google
              </p>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-6 w-6" />
              ))}
            </div>
          </div>
          <div className="ticket-perf h-2.5 w-full translate-y-px" />
        </div>
      </Reveal>
    </div>
  );
}
