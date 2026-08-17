import Image from "next/image";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "../content";
import { IconInstagram, IconWhatsapp } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-steel/30 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <Image
              src="/logo.jpg"
              alt="BarberShop Abreu"
              width={120}
              height={120}
              className="h-16 w-16 shrink-0 rounded-xl ring-1 ring-brass/25 sm:h-20 sm:w-20"
            />
            <p className="max-w-xs text-sm text-smoke">
              Barbearia clássica com alma rock&apos;n&apos;roll em Lagos,
              Algarve.
            </p>
          </div>

          <div className="text-sm text-parchment/70">
            <p>{ADDRESS_LINE1}</p>
            <p>{ADDRESS_LINE2}</p>
            <p className="mt-3">{PHONE_DISPLAY}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-steel/40 text-parchment/70 transition-colors hover:border-brass hover:text-brass-bright"
            >
              <IconWhatsapp className="h-5 w-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-steel/40 text-parchment/70 transition-colors hover:border-brass hover:text-brass-bright"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="rule-brass mt-12" />
        <p className="mt-6 text-xs tracking-wide text-smoke">
          © {new Date().getFullYear()} BarberShop Abreu. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
