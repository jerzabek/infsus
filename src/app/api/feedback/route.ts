import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'Missing arguments' }, { status: 400 })
  }

  const students = await prisma.feedback.findMany({
    where: {
      userId: +userId,
    },
    select: {
      rooms: {
        select: {
          roomLabel: true,
        },
      },
      feedbackTopic: true,
      feedbackDesc: true,
      feedbackId: true,
    },
  })

  return NextResponse.json({ data: students })
}
