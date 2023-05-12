import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import { appendNumericProperty } from '@/modules/utils/utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const accomodationId = searchParams.get('accomodationId')
  const floor = searchParams.get('floor')
  const room = searchParams.get('room')

  let roomFilters: Record<string, number> = {}

  roomFilters = appendNumericProperty('accomodationId', accomodationId, roomFilters)
  roomFilters = appendNumericProperty('roomFloor', floor, roomFilters)
  roomFilters = appendNumericProperty('roomNumber', room, roomFilters)

  const whereClause = Object.keys(roomFilters).length
    ? {
        rooms: roomFilters,
      }
    : {}

  console.log(whereClause)

  const students = await prisma.students.findMany({
    where: whereClause,
    select: {
      studentId: true,
      users: {
        select: {
          email: true,
        },
      },
      faculty: true,
      rooms: {
        select: {
          roomLabel: true,
        },
      },
      userId: true,
      jmbag: true,
    },
  })

  return NextResponse.json({ data: students })
}
