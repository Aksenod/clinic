import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { z } from "zod"

const recordSchema = z.object({
  type: z.enum(["clinic", "online"]),
  clinicId: z.string().optional(),
  doctorId: z.string().optional(),
  serviceId: z.string().optional(),
  directionId: z.string().optional(),
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().optional(),
  comment: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = recordSchema.parse(body)

    const lead = await prisma.lead.create({
      data: {
        type: data.type,
        clinicId: data.clinicId,
        doctorId: data.doctorId,
        serviceId: data.serviceId,
        name: data.name,
        phone: data.phone,
        email: data.email,
        comment: data.comment,
        status: "new",
        source: "website",
      },
    })

    // TODO: Отправить уведомление (email, Telegram и т.д.)

    return NextResponse.json({ success: true, id: lead.id })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Некорректные данные", details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: "Ошибка при создании заявки" },
      { status: 500 }
    )
  }
}
