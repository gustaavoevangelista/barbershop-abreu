export const PHONE_DISPLAY = "966 715 356";
export const PHONE_INTL = "+351 966 715 356";
export const WHATSAPP_URL = "https://wa.me/351966715356";
export const ADDRESS_LINE1 = "R. Prof. Joaquim Alberto Taquelim 2";
export const ADDRESS_LINE2 = "8600-760 Lagos, Portugal";
export const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=R.+Prof.+Joaquim+Alberto+Taquelim+2,+8600-760+Lagos,+Portugal&output=embed";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=R.+Prof.+Joaquim+Alberto+Taquelim+2,+8600-760+Lagos,+Portugal";
export const INSTAGRAM_URL = "https://www.instagram.com/barbershopabreu/";
export const GOOGLE_RATING = "4.7";
export const GOOGLE_REVIEW_COUNT = "338";

export const SERVICES = [
  {
    name: "Corte Clássico",
    detail: "Tesoura e máquina, acabamento à navalha",
    price: "18€",
  },
  {
    name: "Degradê",
    detail: "Fade de precisão, do zero ao contorno",
    price: "20€",
  },
  {
    name: "Barba na Navalha",
    detail: "Toalha quente, navalha e óleos de acabamento",
    price: "15€",
  },
  {
    name: "Corte + Barba",
    detail: "O ritual completo, cabelo e barba",
    price: "30€",
  },
  {
    name: "Sobrancelha",
    detail: "Aparado e definição",
    price: "6€",
  },
  {
    name: "Acabamento (Pezinho)",
    detail: "Contorno entre cortes",
    price: "8€",
  },
] as const;

export const TEAM = [
  {
    name: "Rafael Costa",
    role: "Barbeiro Sénior",
    initials: "RC",
  },
  {
    name: "Miguel Santos",
    role: "Especialista em Navalha",
    initials: "MS",
  },
  {
    name: "André Silva",
    role: "Barbeiro",
    initials: "AS",
  },
  {
    name: "Bruno Ferreira",
    role: "Barbeiro Júnior",
    initials: "BF",
  },
] as const;

export const RITUAL_STEPS = [
  {
    n: "01",
    title: "Receção",
    text: "Uma bebida, uma conversa. Escolhe-se o estilo com calma, sem pressa.",
  },
  {
    n: "02",
    title: "Toalha Quente",
    text: "Vapor e preparação da pele antes de qualquer lâmina tocar a barba.",
  },
  {
    n: "03",
    title: "Navalha & Tesoura",
    text: "Corte de precisão e barba desenhada à navalha, traço a traço.",
  },
  {
    n: "04",
    title: "Acabamento",
    text: "Óleos, styling final e o espelho — o momento da verdade.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Luan Faria",
    tag: "Guia Local · 13 avaliações",
    quote:
      "Corto o cabelo com o Dénio Abreu desde os primeiros tempos, antes de ele ter loja própria. Sempre uma boa pessoa e trabalhador — já fez inúmeros cursos e eventos profissionais de barbearia.",
  },
  {
    name: "G Esvelt",
    tag: "Guia Local · 7 avaliações",
    quote:
      "Entrei para uma barba rápida, estava de férias e não tinha o meu material. Barbearia simpática, bom ambiente, equipa atenciosa.",
  },
  {
    name: "Mehmet Saygili",
    tag: "5 avaliações",
    quote:
      "Um excelente barbeiro — não sou fácil de agradar com cabelo e barba, mas fiquei genuinamente surpreendido. Marcações bem organizadas. Recomendo a 100%.",
  },
] as const;

export const HOURS = [
  { day: "Segunda", hours: "Encerrado" },
  { day: "Terça — Sexta", hours: "09:00 – 19:00" },
  { day: "Sábado", hours: "09:00 – 18:00" },
  { day: "Domingo", hours: "Encerrado" },
] as const;
