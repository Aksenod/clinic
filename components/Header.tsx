"use client"

import Link from "next/link"

import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white/80 backdrop-blur">
      <div className="px-5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3">
          <Logo />

          <form
            action="/search"
            method="GET"
            className="hidden flex-1 items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-3 py-2 text-sm shadow-sm sm:flex"
            role="search"
            aria-label="Поиск по сайту"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-neutral-400"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 13.48 3.5 10.49 3.5S5 6.01 5 9.5 7.51 15.5 10.5 15.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 19.49 20.49 18 15.5 14Zm-5 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14Z"
              />
            </svg>
            <input
              type="search"
              name="q"
              placeholder="Найти врача, услугу или клинику"
              className="w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            />
          </form>

          <div className="flex items-center gap-3">
            <div className="hidden flex-col items-end text-right text-xs sm:flex">
              <a
                href="tel:+79991234567"
                className="flex items-center gap-1.5 font-semibold text-neutral-900"
              >
                <MediaPlaceholder variant="icon" ariaLabel="Иконка телефона" className="h-4 w-4" />
                +7 (999) 123-45-67
              </a>
              <span className="text-[11px] text-neutral-500">
                Пн-Вс: 9:00–21:00
              </span>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

