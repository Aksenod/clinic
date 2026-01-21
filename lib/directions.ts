export type Direction = {
  slug: string
  title: string
  description: string
  servicesCount: string
  isHighlighted?: boolean
  audience?: string
}

export const directions: Direction[] = [
  {
    slug: "beremennost",
    title: "Беременность и роды",
    description:
      "Ведение беременности по триместрам, диагностика, УЗИ, скрининги, консультации врачей. Сопровождение на всех этапах — от планирования до родов.",
    servicesCount: "5+ услуг",
    isHighlighted: true,
    audience: "Для будущих родителей",
  },
  {
    slug: "ginekologiya",
    title: "Гинекология",
    description:
      "Консультации гинеколога, диагностика, лечение заболеваний, профилактические осмотры.",
    servicesCount: "10+ услуг",
    audience: "Для женщин",
  },
  {
    slug: "pediatriya",
    title: "Педиатрия",
    description:
      "Детское здоровье, профилактические осмотры, вакцинация, лечение заболеваний у детей.",
    servicesCount: "8+ услуг",
    audience: "Для детей",
  },
  {
    slug: "urologiya",
    title: "Урология",
    description:
      "Диагностика и лечение заболеваний мочеполовой системы у мужчин и женщин.",
    servicesCount: "6+ услуг",
    audience: "Для мужчин и женщин",
  },
]

