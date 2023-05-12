import StudentSearch from '@/modules/StudentSearch'
import prisma from '../../lib/prisma'

export default async function page() {
  const accomodations = await prisma.accomodations.findMany()

  return <StudentSearch accomodations={accomodations} />
}
