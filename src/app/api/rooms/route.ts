import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import { appendNumericProperty } from '@/modules/utils/utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const floor = searchParams.get('roomFloor')
  const room = searchParams.get('roomNumber')
  const accomodationId = searchParams.get('accomodationId')

  let roomFilters: Record<string, number> = {}
  roomFilters = appendNumericProperty('roomFloor', floor, roomFilters)
  roomFilters = appendNumericProperty('roomNumber', room, roomFilters)
  roomFilters = appendNumericProperty('accomodationId', accomodationId, roomFilters)

  const whereClause = Object.keys(roomFilters).length
    ? roomFilters
    :
    {}


  let theRoom = await prisma.rooms.findFirst({
    where: whereClause,
  })

  return NextResponse.json({ data: theRoom })
}

export async function POST(request: Request) {
  const res = await request.json()
  let { roomFloor, roomNumber, accomodationId } = res
  let roomLabel = roomFloor + "-" + roomNumber
  const newRoom = await prisma.rooms.create({
    data: {
      roomFloor: parseInt(roomFloor),
      roomNumber: parseInt(roomNumber),
      roomLabel,
      accomodations: {
        connect: {
          accomodationId,
        },
      },
    },
  })

  return NextResponse.json({ data: newRoom })
}
