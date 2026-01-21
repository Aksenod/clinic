import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const feedbackSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  message: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = feedbackSchema.parse(body)

    // TODO: Сохранить в БД или отправить email

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Некорректные данные", details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: "Ошибка при отправке обратной связи" },
      { status: 500 }
    )
  }
}
