'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { accomodations, students } from '@prisma/client'
import EditForm from '@/modules/editStudent/components/editForm'
import { getStudents } from './api/repository'

export default function EditStudent({ accomodations }: { accomodations: accomodations[] }) {
  const [student, setStudent] = useState<students>()
  const [allStudents, setAllStudents] = useState<students[]>([])
  const [fetched, setFetched] = useState<boolean>(false)
  
  const searchParams = useSearchParams()

  const id = searchParams.get('studentId') || ''

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getStudents()
      setAllStudents(data)
      let theStudent = data.filter(student => student.studentId === +id)
      if (theStudent && theStudent.length > 0) {
        setStudent(theStudent[0])
      }

      setFetched(true)
    }
    if (!student) fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={'container p1-2'}>
      <h1 className={'text-center'}>{student ? 'Edit student' : 'Add student'}</h1>
      <hr />
      {fetched && <EditForm student={student} allStudents={allStudents} accomodations={accomodations} />}
    </div>
  )
}
