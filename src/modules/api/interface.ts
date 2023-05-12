import type { rooms, students, users } from '@prisma/client'

export type StudentSearchResult = students & {
  users: Pick<users, 'email'>
  rooms: Pick<rooms, 'roomLabel'>
}

export type StudentSearchResponse = {
  data: Array<StudentSearchResult>
}
