'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { students } from '@prisma/client'
import EditForm from '@/modules/editStudent/components/editForm'

export default function EditStudent({accomodations, getRoom}) {
  const [student, setStudent] = useState<students>(null)
  const [allStudents, setAllStudents] = useState<students[]>([])
  const [fetched, setFetched] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const id = searchParams.get('studentId')

  useEffect(() => {
    // console.log("filteram po id", id )
    const fetchData = async () => {
      const response = await (fetch(`http://localhost:3000/api/students`).then(res => res.json()))
      // console.log('respons', response)
      const data = await response.data
      setAllStudents(data)
      // console.log("neFilterani", data)
      let theStudent = data.filter(student => student.studentId == id)
      // console.log("Filterani", theStudent)
      if(theStudent && theStudent.length > 0){
        setStudent(theStudent[0])
      }

      setFetched(true)
    }
    if (!student) fetchData()
  }, [])

  return (
    <div className={'container p1-2'}>
      <h1 className={'text-center'}>{student ? "Edit student" : "Add student"}</h1>
      <hr />
      {fetched && <EditForm student={student} allStudents={allStudents} accomodations={accomodations}/>}
    </div>
  )
}