import Link from "next/link"

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Mesedclinic — главная страница"
      className="flex items-center gap-2"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-900">
        M
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold leading-tight text-neutral-900">
          Mesedclinic
        </span>
        <span className="text-[11px] leading-tight text-neutral-500">
          сеть медицинских клиник
        </span>
      </div>
    </Link>
  )
}

