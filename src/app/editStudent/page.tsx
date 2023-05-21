import EditStudent from '@/modules/editStudent'
import prisma from '@/lib/prisma'

export default async function page() {
  const accomodations = await prisma.accomodations.findMany()
  return <EditStudent accomodations={accomodations} />
}
