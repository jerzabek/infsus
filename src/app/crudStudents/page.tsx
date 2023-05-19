import StudentSearch from '@/modules/StudentSearch'
import prisma from '../../lib/prisma'

export default async function page() {

  return <StudentSearch accomodations={accomodations} />
}
