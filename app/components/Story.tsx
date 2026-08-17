import Image from "next/image";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="oficio" className="relative py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto  p-8">
              <Image
                src="/denio.png"
                alt="Dénio Abreu, fundador da BarberShop Abreu"
                width={300}
                height={300}
                className="object-cover  w-full h-full"
              />
            <p className="eyebrow mt-6 text-center">O Fundador</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow mb-5">A Missão</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] text-parchment sm:text-5xl">
              Dénio Abreu começou a cortar cabelo aos 34 anos.
              <span className="text-brass"> Nunca mais parou.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-5 text-balance text-parchment/70">
              <p>
                O que começou como uma paixão tardia tornou-se numa missão: fazer
                de cada corte um ofício levado a sério, com técnica clássica de
                barbearia tradicional e o respeito de quem estudou o métier em
                cursos e eventos por toda a Europa.
              </p>
              <p>
                Mais do que uma barbearia, a BarberShop Abreu é um ponto de
                encontro — cavalheiros clássicos, roqueiros, motoqueiros e
                amantes do pop dividem a mesma cadeira, a mesma navalha, o
                mesmo respeito pelo ofício.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <blockquote className="mt-9 border-l-2 border-brass/60 pl-6 font-display text-xl font-semibold text-parchment/85">
              &ldquo;Corto o cabelo com o Dénio desde antes de ele ter loja
              própria. Sempre um trabalhador dedicado ao ofício.&rdquo;
              <footer className="mt-3 text-sm font-sans not-italic tracking-wide text-smoke">
                — Luan Faria, cliente há mais de 3 anos
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
