"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"

const navItems = [
  { href: "/admin/dashboard", label: "Дашборд" },
  { href: "/admin/services", label: "Услуги" },
  { href: "/admin/directions", label: "Направления" },
  { href: "/admin/symptoms", label: "Что мы лечим" },
  { href: "/admin/clinics", label: "Клиники" },
  { href: "/admin/doctors", label: "Врачи" },
  { href: "/admin/promotions", label: "Акции" },
  { href: "/admin/articles", label: "Статьи" },
  { href: "/admin/leads", label: "Заявки" },
]

export default function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Сайт
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
