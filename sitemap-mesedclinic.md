## Sitemap Mesedclinic (3 филиала) — MVP + расширение

Цель: структура сайта, которая одновременно:
- даёт **релевантные посадочные** под **контекст/таргет** (быстрые заявки);
- наращивает **SEO** через кластеры “направление → услуга → проблема/аудитория”;
- аккуратно учитывает **3 филиала** без генерации дублей.

---

## 0) Правила структуры (чтобы работало в SEO и в рекламе)

### URL-схема (рекомендуемая)
- **Направления (hub)**: `/napravleniya/<slug>/`
- **Услуги (leaf)**: `/uslugi/<slug>/` или `/uslugi/<hub>/<slug>/`
- **Проблемы/симптомы (“что лечим”)**: `/chto-my-lechim/<slug>/`
- **Врачи**: `/vrachi/` и `/vrachi/<slug>/`
- **Филиалы**: `/kliniki/` и `/kliniki/<slug>/`
- **Акции**: `/akcii/` и `/akcii/<slug>/`
- **Онлайн-консультации (продукт)**: `/online/`
- **Блог/статьи**: `/stati/` и `/stati/<slug>/`
- **Цены-агрегатор**: `/ceny/` (цены должны жить и на услугах)

### Гео-правило (важно)
- Делайте отдельные страницы **филиалов** (локальное SEO + доверие).
- Не плодите массово “**услуга × филиал**” страницы без уникального контента.
  - Исключение: 10–20 самых “покупаемых” услуг, где реально можно дать уникальность (врачи/расписание/оборудование/условия).

### Канальный принцип
- **SEO**: направленческие hub + услуги + “что лечим” + статьи.
- **Контекст**: услуги + акции (лендинги-офферы) + часть “диагностика/цены”.
- **Таргет**: акции/офферы + страницы под аудитории + ретаргет на просмотренные hub/услуги.

---

## 1) MVP sitemap (30–40 страниц) — чтобы быстро стартовать рост

### 1.1. База (конверсия + доверие)
1. `/` — Главная (маршрутизатор сценариев)
2. `/zapis/` — Запись (в клинике / онлайн)
3. `/online/` — Онлайн-консультации (продукт)
4. `/kontakty/` — Контакты сети + общая карта
5. `/o-klinike/` — О клинике (позиционирование, конфиденциальность)
6. `/licenzii/` — Лицензии и реквизиты (E‑E‑A‑T)
7. `/otzyvy/` — Отзывы (если есть юридически корректная подача)

### 1.2. Филиалы (локальное SEO)
8. `/kliniki/`
9. `/kliniki/butovo/`
10. `/kliniki/arbatskaya/`
11. `/kliniki/balashiha/`

На каждой странице филиала: адрес/метро, часы, телефоны, карта, как добраться, врачи филиала, популярные услуги, кнопка записи.

### 1.3. Врачи (ключ к медицине)
12. `/vrachi/` (фильтры: специальность, филиал)
13. `/vrachi/<top-1>/`
14. `/vrachi/<top-2>/`
15. `/vrachi/<top-3>/`

Минимум 3 профиля “лидеров спроса” (акушер‑гинеколог, стоматолог/имплантолог, врач УЗД).

### 1.4. Направления (hub) — ядро бизнеса
16. `/napravleniya/beremennost/` — Беременность (hub) **SEO+реклама**
17. `/napravleniya/ginekologiya/` — Гинекология / женское здоровье (hub) **SEO+реклама**
18. `/napravleniya/muzhskoe-zdorovye/` — Мужское здоровье (hub) **SEO+реклама**
19. `/napravleniya/stomatologiya/` — Стоматология (hub) **SEO+реклама**
20. `/napravleniya/uzi/` — УЗИ и диагностика (hub) **SEO+реклама**

### 1.5. Услуги (leaf) — самые “денежные” и покупаемые
Беременность/гинекология:
21. `/uslugi/vedenie-beremennosti/` **контекст+SEO**
22. `/uslugi/diagnostika-beremennosti/` (комплекс УЗИ+ХГЧ+приём) **контекст+SEO**
23. `/uslugi/pervichnyj-priem-ginekologa/` (если есть как продукт) **контекст**
24. `/uslugi/chekap-profilaktika-raka-shejki-matki/` **контекст+SEO**
25. `/uslugi/pajpel-biopsiya-endometriya/` (пайпель-биопсия) **SEO+контекст**
26. `/uslugi/vpch-21-tip-pcr/` (HPV 21 тип количественно) **SEO**
27. `/uslugi/nipt/` (НИПТ как категория) **контекст+SEO**

Стоматология:
28. `/uslugi/implantaciya-pod-klyuch/` **контекст+SEO**
29. `/uslugi/professionalnaya-gigiena/` **контекст+SEO**
30. `/uslugi/rentgen-rvg/` (визиограф) **контекст+SEO**

УЗИ/диагностика (входящий поток):
31. `/uslugi/uzi-kompleks-3-vida/` (если есть пакет) **контекст**
32. `/uslugi/uzi-pochek-i-mochevogo-puzyrya/` **контекст+SEO**

Мужское здоровье:
33. `/uslugi/chekap-muzhskoe-zdorovye/` **контекст+SEO**

### 1.6. Акции (performance-лендинги)
34. `/akcii/`
35. `/akcii/diagnostika-beremennosti-4100/`
36. `/akcii/pervichnyj-priem-ginekologa-900/`
37. `/akcii/gigiena-2000/`
38. `/akcii/implant-pod-klyuch-30000/`

### 1.7. Контент (минимальный SEO-слой)
39. `/stati/`
40. `/chto-my-lechim/` (каталог проблем; в MVP можно начать с 3–5 страниц ниже)

---

## 2) Расширение (до ~100+ страниц) — чтобы доминировать в поиске

### 2.1. “Что мы лечим” (по ядру спроса)
Добавить 15–30 страниц проблем. Примеры:
- `/chto-my-lechim/nevynashivanie-beremennosti/`
- `/chto-my-lechim/zamershaya-beremennost/`
- `/chto-my-lechim/besplodie/`
- `/chto-my-lechim/tsistit/`
- `/chto-my-lechim/uretrit/`
- `/chto-my-lechim/bol-vnizu-zhivota/`

Правило страницы: “что это / причины / когда к врачу / как диагностируем у нас / какие услуги / какие врачи / в каких филиалах / запись”.

### 2.2. Услуги по беременности (дробление под спрос)
- `/uslugi/vedenie-beremennosti/<paket>/` (2–3 пакета: базовый/стандарт/премиум 24/7)
- `/uslugi/uzi-pri-beremennosti/` (категория)
- `/uslugi/skrining-1-trimestr/`
- `/uslugi/skrining-2-trimestr/`
- `/uslugi/analizy-pri-beremennosti/` (пакеты)
- `/uslugi/konsultaciya-genetika/` (если есть)
- `/uslugi/nipt-veracity-standart/`
- `/uslugi/nipt-veracity-rasshirennyj/`
- `/uslugi/nipt-veragen/`

### 2.3. Гинекология (коммерческие услуги + диагностика)
- `/uslugi/kolposkopiya/` (если есть)
- `/uslugi/citologiya-pap-test/` (если есть)
- `/uslugi/analizy-na-infekcii/` (пакеты)
- `/uslugi/ultrazvuk-malogo-taza/` (если есть)
- `/uslugi/konsultaciya-ginekologa/` (отдельно от “первичный приём”)
- `/uslugi/lechenie-vospalenij/` (если предоставляете как продукт/пакет)

### 2.4. Мужское здоровье
- `/uslugi/konsultaciya-urologa-androloga/` (если есть)
- `/uslugi/analizy-dlya-muzhchin/` (пакеты)
- `/chto-my-lechim/prostatit/` (если реально лечите и есть компетенция)

### 2.5. УЗИ/диагностика (структурирование)
- `/uslugi/uzi/` (каталог видов УЗИ)
- `/uslugi/uzi/shchitovidnoj-zhelezy/` (если есть по акциям)
- `/uslugi/uzi/bryushnoj-polosti/` (если есть)
- `/uslugi/analizy/` (каталог анализов)
- `/uslugi/analizy/gormony/` (АМГ, прогестерон и т.п.)
- `/uslugi/analizy/infekcii/` (HBsAg, anti‑HCV, ВИЧ и т.п.)

### 2.6. Стоматология (кластер “деньги + спрос”)
- `/uslugi/stomatologiya/implantaciya/` (категория)
- `/uslugi/stomatologiya/implantaciya/1-zub/`
- `/uslugi/stomatologiya/implantaciya/neskolko-zubov/`
- `/uslugi/stomatologiya/gigiena/` (категория)
- `/uslugi/stomatologiya/rvg/`

### 2.7. Хвост направлений (только если реально продаёте и есть спрос)
Решение: либо **одним hub + 3–5 ключевых услуг**, либо не выносить в топ-меню.
- `/napravleniya/lor/` + 3 услуги
- `/napravleniya/oftalmologiya/` + 3 услуги
- `/napravleniya/hirurgiya/` + 3 услуги (амбулаторные)
- `/napravleniya/massazh/` + топ‑программы
- `/napravleniya/estetika/` (если развиваете: PRP, эпиляция и т.п.)

### 2.8. Страницы под аудитории (для таргета и части SEO)
5–10 лендингов:
- `/dlya-vas/planiruyu-beremennost/`
- `/dlya-vas/beremennost-podtverzhdena-chto-delat/`
- `/dlya-vas/zhenskij-chekap-30/`
- `/dlya-vas/muzhskoj-chekap-35/`
- `/dlya-vas/net-vremeni-online-priem/`

### 2.9. Сервисные/юридические (must-have)
- `/dokumenty/`
- `/oms/`
- `/strahovka/`
- `/vozvrat-naloga/`
- `/vakansii/`
- `/politika-konfidencialnosti/`
- `/soglasie-na-obrabotku-pd/`

---

## 3) Привязка страниц к каналам (коротко)

- **SEO-ядро**: все `/napravleniya/*`, `/uslugi/*`, `/chto-my-lechim/*`, профили врачей, филиалы, статьи.
- **Контекст**: “услуги с чеком” + “акции” + “запись” + (опционально) “цены”.
- **Таргет**: “акции/офферы” + “страницы аудиторий” + ретаргет на hub/услуги.

---

## 4) Что нужно от вас, чтобы довести sitemap до финальной версии (10 минут)
1) Подтвердите 5 вещей: **есть ли у вас реально** ЛОР/офтальмо/хирургия/массаж/эпиляция как полноценные направления или это “хвост прайса”.
2) Стоматология: имплантация — какие технологии/форматы продаёте (например, “под ключ” = что входит).
3) Беременность: есть ли **пакеты** (и сколько) или только “ведение” как одна услуга.
4) УЗИ: какие 5 видов УЗИ — топ по спросу у вас.
5) Какие 3 врача — “лица бренда” (мы их используем как E‑E‑A‑T-опоры).

