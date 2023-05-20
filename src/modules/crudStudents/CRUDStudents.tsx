'use client'
import { useState } from 'react'
import { getAllStudents } from './api/repository'

export default async function CRUDStudents() {
  const [studentId, setStudentId] = useState<number>(-1)

  const studentList = (await getAllStudents()).data

  return (

    <main className={'container p1-2'}>
      <h1 className={'text-center'}>CRUD Students</h1>
      <hr />

      <div className='table-responsive'>
        <table className='table'>
          <thead>
          <tr>
            <th>JMBAG</th>
            <th>email</th>
            <th>Accomodation</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {studentList.length > 0 &&
            studentList.map(student => (
              <tr key={student.studentId}>
                <td width='220px'>{student.jmbag}</td>
                <td width='400px'>{student.users.email}</td>
                <td width='400px'>{student.rooms.accomodations.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}