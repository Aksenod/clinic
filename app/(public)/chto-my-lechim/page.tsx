import Link from "next/link"

import { generateSEOMetadata } from "@/lib/seo"
import { getAllSymptoms } from "@/lib/symptoms-config"
import { SymptomsFiltersAndList } from "./SymptomsFiltersAndList"

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Что мы лечим в Mesedclinic: жалобы, симптомы и заболевания",
    description:
      "Раздел «Что мы лечим» Mesedclinic: разбираем частые жалобы и симптомы простым языком и показываем, к каким услугам и врачам они ведут.",
  })
}

export default async function SymptomsHubPage() {
  const symptoms = getAllSymptoms()

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="px-5">
        <div className="mx-auto max-w-6xl py-8 lg:py-12">
          <nav className="mb-6 text-sm text-neutral-500" aria-label="Хлебные крошки">
            <ol className="flex flex-wrap gap-2">
              <li className="flex items-center gap-2">
                <Link href="/" className="underline underline-offset-2">
                  Главная
                </Link>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                Что мы лечим
              </li>
            </ol>
          </nav>

          <section aria-label="О разделе" className="mb-8 lg:mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
              <div>
                <h1 className="mb-4 text-3xl font-semibold leading-tight sm:text-[34px]">Что мы лечим</h1>
                <p className="mb-3 text-sm text-neutral-700 sm:text-base">
                  Здесь мы собрали типичные жалобы, симптомы и ситуации, с которых пациенты чаще всего начинают поиск
                  помощи. У каждой проблемы есть понятный маршрут: какие обследования подойдут и к какому врачу
                  записаться.
                </p>
                <p className="text-xs text-neutral-500">
                  Материалы носят информационный характер и не заменяют очную консультацию. Окончательный диагноз и план
                  лечения определяет врач.
                </p>
              </div>

              <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
                <h2 className="mb-2 text-base font-semibold">Как пользоваться разделом</h2>
                <ol className="space-y-1 text-xs text-neutral-700">
                  <li>1. Найдите свою ситуацию по названию или через алфавит.</li>
                  <li>2. Посмотрите, когда важно обратиться и какие есть «красные флаги».</li>
                  <li>3. Изучите подходящие услуги и врачей — можно сразу записаться.</li>
                </ol>
              </aside>
            </div>
          </section>

          <SymptomsFiltersAndList symptoms={symptoms} />
        </div>
      </div>
    </main>
  )
}

