import { students } from '@prisma/client'

export const getStudents = (): Promise<{ data: students[] }> =>
  fetch(`http://localhost:3000/api/students`).then(res => res.json())
