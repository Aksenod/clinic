import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Создаём первого администратора
  const adminPassword = await hash("admin123", 10)
  const admin = await prisma.user.upsert({
    where: { email: "admin@mesedclinic.ru" },
    update: {},
    create: {
      email: "admin@mesedclinic.ru",
      password: adminPassword,
      name: "Администратор",
    },
  })

  console.log("Администратор создан:", admin.email)

  // Можно добавить начальные данные для тестирования
  // Например, создать филиалы, направления и т.д.
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
