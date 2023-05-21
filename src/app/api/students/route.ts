import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import bcrypt from 'bcrypt'
import { appendNumericProperty } from '@/modules/utils/utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const accomodationId = searchParams.get('accomodationId')
  const floor = searchParams.get('floor')
  const room = searchParams.get('room')
  const userId = searchParams.get('userId')

  let roomFilters: Record<string, number> = {}

  roomFilters = appendNumericProperty('accomodationId', accomodationId, roomFilters)
  roomFilters = appendNumericProperty('roomFloor', floor, roomFilters)
  roomFilters = appendNumericProperty('roomNumber', room, roomFilters)

  const whereClause = Object.keys(roomFilters).length
    ? {
      rooms: roomFilters,
    }
    :
    {}

  const students = await prisma.students.findMany({
    where: whereClause,
    select: {
      studentId: true,
      users: {
        select: {
          userId: true,
          email: true,
        },
      },
      faculty: true,
      rooms: {
        select: {
          roomNumber: true,
          roomFloor: true,
          roomLabel: true,
          roomId: true,
          accomodations: {
            select: {
              name: true,
              address: true,
              accomodationId: true,
            },
          },
        },
      },
      userId: true,
      jmbag: true,
    },
  })

  return NextResponse.json({ data: students })
}

export async function POST(request: Request) {
  const res = await request.json()
  let { roomId, email, password, jmbag, faculty } = res

  let salt = await bcrypt.genSalt(10)
  let hash = await bcrypt.hash(password, salt)

  const newUser = await prisma.users.create(
    {
      data: {
        email,
        password: hash,
        userTypeId: 1,
      },
    },
  )
  const newStudent = await prisma.students.create({
    data: {
      faculty,
      jmbag,
      rooms: {
        connect: {
          roomId,
        },
      },
      users: {
        connect: {
          userId: newUser.userId,
        },
      },
    },
  })

  return NextResponse.json({ data: newStudent })
}

export async function PUT(request: Request) {
  const res = await request.json()
  let { roomId, email, jmbag, faculty, userId, studentId } = res

  const newUser = await prisma.users.update(
    {
      where: {
        userId: userId,
      },
      data: {
        email,
      },
    },
  )
  const newStudent = await prisma.students.update({
    where: {
      studentId: studentId,
    },
    data: {
      faculty,
      jmbag,
      rooms: {
        connect: {
          roomId,
        },
      },
      users: {
        connect: {
          userId: newUser.userId,
        },
      },
    },
  })

  return NextResponse.json({ data: newStudent })
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const studentId = searchParams.get('studentId') + ''
  const userId = searchParams.get('userId') + ''

  await prisma.students.delete(
    {
      where: {
        studentId: parseInt(studentId),
      },
    },
  )

  await prisma.users.delete(
    {
      where: {
        userId: parseInt(userId),
      },
    },
  )

  return NextResponse.json({ deleted: true })
}
