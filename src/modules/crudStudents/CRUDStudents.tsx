'use client'
import { useEffect, useState } from 'react'
import { students } from '@prisma/client'

export default async function CRUDStudents() {
  const [studentList, setStudentsList] = useState<students[]>(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await (fetch(`http://localhost:3000/api/students`).then(res => res.json()))
      console.log('respons', response)
      const data = await response.data
      console.log(data)
      setStudentsList(data)
    }
    if (!studentList) fetchData()
  }, [])

  return (

    <main className={'container p1-2'}>
      <h1 className={'text-center'}>CRUD Students</h1>
      <hr />

      <div className='table-responsive'>
        <table className='table'>
          <thead>
          <tr>
            <th>id</th>
            <th>JMBAG</th>
            <th>email</th>
            <th>Accomodation</th>
            <th> </th>
            <th> </th>
          </tr>
          </thead>
          <tbody>
          {studentList &&
            studentList.map(student => (
              <tr key={student.studentId}>
                <td width='50px'>{student.studentId}</td>
                <td width='220px'>{student.jmbag}</td>
                <td width='400px'>{student.users.email}</td>
                <td width='400px'>{student.rooms.accomodations ? student.rooms.accomodations.name : 'loading'}</td>
                <td><a href={'/editStudent?studentId=' + student.studentId}>Edit Student</a></td>
                <td>
                  <button onClick={e => {
                    const options = {
                      method: 'DELETE',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        userId: student.users.userId,
                        studentId: student.studentId,
                      }),
                    }
                    fetch('http://localhost:3000/api/students', options)
                    console.log('deleted')
                  }}>delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <a href={'/editStudent'}>Add a new student</a>
      </div>
    </main>
  )
}