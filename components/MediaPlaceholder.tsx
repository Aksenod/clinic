import React from "react"

type MediaVariant = "hero" | "card" | "avatar" | "map" | "icon"

interface MediaPlaceholderProps {
  variant?: MediaVariant
  ariaLabel?: string
  className?: string
}

const baseStyles =
  "relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"

const variantStyles: Record<MediaVariant, string> = {
  hero: "w-full h-56 sm:h-64 lg:h-80",
  card: "w-full h-32 sm:h-36",
  avatar: "w-full h-24 sm:h-28",
  map: "w-full h-40 sm:h-56",
  icon: "w-9 h-9 rounded-lg",
}

export function MediaPlaceholder({
  variant = "card",
  ariaLabel,
  className = "",
}: MediaPlaceholderProps) {
  const variantClass = variantStyles[variant]

  return (
    <div
      aria-label={ariaLabel}
      className={[baseStyles, variantClass, className].join(" ").trim()}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#f5f5f5_0,transparent_40%),radial-gradient(circle_at_100%_100%,#f5f5f5_0,transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="rounded-full border border-dashed border-neutral-300 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-neutral-400">
          media
        </span>
      </div>
    </div>
  )
}

