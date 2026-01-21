# Структура проекта Mesedclinic

## Обзор

Проект построен на Next.js 14 с App Router, TypeScript, Prisma и TailwindCSS.

## Дерево файлов

```
mesedclinic/
│
├── app/                          # Next.js App Router
│   ├── (public)/                 # Публичная часть сайта
│   │   ├── layout.tsx           # Layout для публичных страниц
│   │   ├── page.tsx             # Главная страница (/)
│   │   ├── napravleniya/        # Направления
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Динамическая страница направления
│   │   ├── uslugi/              # Услуги
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Динамическая страница услуги
│   │   ├── chto-my-lechim/      # "Что мы лечим"
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Динамическая страница проблемы
│   │   ├── kliniki/             # Филиалы
│   │   │   ├── page.tsx         # Список клиник
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Страница клиники
│   │   ├── vrachi/              # Врачи
│   │   │   ├── page.tsx         # Список врачей
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Профиль врача
│   │   ├── akcii/               # Акции
│   │   │   ├── page.tsx         # Список акций
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Страница акции
│   │   ├── stati/               # Статьи/блог
│   │   │   ├── page.tsx         # Список статей
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Страница статьи
│   │   ├── online/              # Онлайн-консультации
│   │   │   └── page.tsx
│   │   └── zapis/               # Запись на приём
│   │       └── page.tsx
│   │
│   ├── (admin)/                 # Админ-панель (защищённая)
│   │   └── admin/
│   │       ├── layout.tsx       # Layout с проверкой авторизации
│   │       ├── dashboard/
│   │       │   └── page.tsx     # Главная панели (/admin/dashboard)
│   │       ├── services/
│   │       │   └── page.tsx     # Управление услугами
│   │       ├── directions/
│   │       │   └── page.tsx     # Управление направлениями
│   │       ├── symptoms/
│   │       │   └── page.tsx     # Управление "что лечим"
│   │       ├── clinics/
│   │       │   └── page.tsx     # Управление клиниками
│   │       ├── doctors/
│   │       │   └── page.tsx     # Управление врачами
│   │       ├── promotions/
│   │       │   └── page.tsx     # Управление акциями
│   │       ├── articles/
│   │       │   └── page.tsx     # Управление статьями
│   │       └── leads/
│   │           └── page.tsx     # Заявки/лиды
│   │
│   ├── (auth)/                  # Аутентификация
│   │   └── login/
│   │       └── page.tsx         # Страница входа (/login)
│   │
│   ├── api/                     # API Routes
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts     # NextAuth роуты
│   │   ├── record/
│   │   │   └── route.ts         # POST /api/record (запись на приём)
│   │   └── feedback/
│   │       └── route.ts         # POST /api/feedback (обратная связь)
│   │
│   ├── globals.css              # Глобальные стили (Tailwind)
│   └── layout.tsx               # Root layout
│
├── components/                  # React компоненты
│   ├── admin/
│   │   └── AdminNav.tsx         # Навигация админ-панели
│   └── ui/                      # UI компоненты (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
│
├── lib/                         # Утилиты и хелперы
│   ├── db.ts                    # Prisma Client (singleton)
│   ├── auth.ts                  # Экспорт authOptions
│   ├── seo.ts                   # Утилиты для SEO
│   ├── utils.ts                 # Общие утилиты (cn, и т.д.)
│   └── validations.ts           # Zod схемы валидации
│
├── prisma/                      # Prisma ORM
│   ├── schema.prisma            # Схема базы данных
│   └── seed.ts                  # Сидер для начальных данных
│
├── types/                       # TypeScript типы
│   └── next-auth.d.ts           # Расширение типов NextAuth
│
├── middleware.ts                # Next.js middleware (защита /admin/*)
│
├── package.json                 # Зависимости и скрипты
├── tsconfig.json                # TypeScript конфигурация
├── next.config.js               # Next.js конфигурация
├── tailwind.config.ts           # TailwindCSS конфигурация
├── postcss.config.js            # PostCSS конфигурация
├── .env.example                 # Пример переменных окружения
├── .gitignore                   # Git ignore
├── .eslintrc.json               # ESLint конфигурация
│
├── README.md                    # Документация проекта
└── PROJECT_STRUCTURE.md         # Этот файл
```

## Модели базы данных (Prisma)

### Основные сущности:
- `User` — администраторы
- `Clinic` — филиалы клиники
- `Doctor` — врачи
- `Direction` — направления (hub-страницы)
- `Service` — услуги
- `Symptom` — "что мы лечим" (проблемы/симптомы)
- `Promotion` — акции
- `Article` — статьи/блог
- `Lead` — заявки/лиды

### Связи многие-ко-многим:
- `DoctorClinic` — врачи ↔ клиники
- `ServiceClinic` — услуги ↔ клиники
- `DoctorService` — врачи ↔ услуги
- `SymptomService` — проблемы ↔ услуги
- `SymptomClinic` — проблемы ↔ клиники
- `SymptomDoctor` — проблемы ↔ врачи
- `PromotionService` — акции ↔ услуги

## Маршруты (Routes)

### Публичные:
- `/` — главная
- `/napravleniya/[slug]` — направление
- `/uslugi/[slug]` — услуга
- `/chto-my-lechim/[slug]` — что лечим
- `/kliniki` — список клиник
- `/kliniki/[slug]` — клиника
- `/vrachi` — список врачей
- `/vrachi/[slug]` — врач
- `/akcii` — список акций
- `/akcii/[slug]` — акция
- `/stati` — список статей
- `/stati/[slug]` — статья
- `/online` — онлайн-консультации
- `/zapis` — запись на приём

### Админ-панель (защищённая):
- `/admin/dashboard` — дашборд
- `/admin/services` — услуги
- `/admin/directions` — направления
- `/admin/symptoms` — что лечим
- `/admin/clinics` — клиники
- `/admin/doctors` — врачи
- `/admin/promotions` — акции
- `/admin/articles` — статьи
- `/admin/leads` — заявки

### Аутентификация:
- `/login` — вход

### API:
- `/api/auth/[...nextauth]` — NextAuth
- `/api/record` — запись на приём (POST)
- `/api/feedback` — обратная связь (POST)

## Следующие шаги

1. **Реализация CRUD в админ-панели**:
   - Создать формы для добавления/редактирования всех сущностей
   - Реализовать таблицы со списками (с пагинацией, фильтрами)
   - Добавить API роуты `/api/admin/*` для CRUD операций

2. **Загрузка файлов**:
   - Настроить хранение изображений (врачи, статьи)
   - Добавить компонент для загрузки файлов

3. **Публичная часть**:
   - Реализовать шаблоны всех страниц с данными из БД
   - Добавить SEO метаданные
   - Создать компоненты карточек (услуги, врачи, клиники)

4. **Формы записи**:
   - Реализовать многошаговую форму записи
   - Добавить валидацию
   - Интеграция с внешними системами (email, Telegram, CRM)
