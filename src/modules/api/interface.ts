import type { rooms, students, users } from '@prisma/client'

export type StudentSearchResult = Omit<students, 'roomId'> & {
  users: {
    email: string
  }
  rooms: {
    roomLabel: string
    roomId: number
    accomodations: {
      name: string
      address: string
    }
  }
}

export type StudentSearchResponse = {
  data: Array<StudentSearchResult>
}
