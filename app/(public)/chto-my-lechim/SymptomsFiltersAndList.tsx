"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import type { SymptomPageData } from "@/lib/symptoms-config"

const alphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Э",
  "Ю",
  "Я",
]

type SymptomsHubItem = SymptomPageData

interface SymptomsFiltersAndListProps {
  symptoms: SymptomsHubItem[]
}

export function SymptomsFiltersAndList({ symptoms }: SymptomsFiltersAndListProps) {
  const [search, setSearch] = useState("")
  const [letter, setLetter] = useState<string | null>(null)

  const items = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return symptoms
      .filter((item) => {
        if (!normalizedSearch) return true
        const haystack = `${item.title} ${item.intro} ${item.directionTitle}`.toLowerCase()
        return haystack.includes(normalizedSearch)
      })
      .filter((item) => {
        if (!letter) return true
        const first = item.title.trim().charAt(0).toUpperCase()
        return first === letter
      })
      .sort((a, b) => a.title.localeCompare(b.title, "ru"))
  }, [symptoms, search, letter])

  return (
    <section aria-label="Список проблем и симптомов" className="space-y-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div>
            <h2 className="text-base font-semibold">Найдите свою ситуацию</h2>
            <p className="text-xs text-neutral-600">
              Введите жалобу или выберите первую букву — мы покажем связанные материалы, услуги и врачей.
            </p>
          </div>
          <div className="relative max-w-md">
            <label className="sr-only" htmlFor="symptom-search">
              Поиск по разделу «Что мы лечим»
            </label>
            <input
              id="symptom-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Например, планирование беременности"
              className="w-full rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs" aria-label="Быстрый переход по алфавиту">
          {alphabet.map((ch) => {
            const isActive = letter === ch
            return (
              <button
                key={ch}
                type="button"
                onClick={() => setLetter((current) => (current === ch ? null : ch))}
                className={[
                  "inline-flex items-center rounded-full border px-2.5 py-1",
                  isActive
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300",
                ].join(" ")}
                aria-pressed={isActive}
                aria-label={`Буква ${ch}`}
              >
                {ch}
              </button>
            )
          })}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-neutral-600">
          По вашему запросу пока нет материалов. Попробуйте изменить формулировку или выбрать другую букву.
        </p>
      ) : (
        <div className="grid gap-3">
          {items.map((item) => (
            <article
              key={item.slug}
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-colors hover:border-neutral-300"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] text-neutral-600">
                      {item.directionTitle}
                    </span>
                  </div>
                  <p className="max-w-xl text-xs text-neutral-600">{item.intro}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs sm:justify-end">
                  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600">
                    Услуг: {item.services.length}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600">
                    Врачей: {item.doctors.length}
                  </span>
                  <Link
                    href={`/chto-my-lechim/${item.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1 text-xs font-medium text-white"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

