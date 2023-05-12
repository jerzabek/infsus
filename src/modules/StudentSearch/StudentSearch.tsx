'use client'

import { accomodations } from '@prisma/client'
import SearchForm from './components/SearchForm'
import { useState } from 'react'
import { StudentSearchForm } from './interface'
import { getStudentSearch } from './api/repository'
import { StudentSearchResult } from '../api/interface'

export default function StudentSearch({ accomodations }: { accomodations: accomodations[] }) {
  const [students, setStudents] = useState<StudentSearchResult[]>([])

  const handleFormSubmit = ({ accomodationId, floor, room }: StudentSearchForm) => {
    console.log(accomodationId, floor, room)

    getStudentSearch({ accomodationId, floor, room }).then(({ data }) => {
      console.log(data)
      setStudents(data)
    })
  }

  return (
    <main>
      <h1>Search students</h1>

      <hr />

      <SearchForm accomodations={accomodations} handleSubmit={handleFormSubmit} />

      {students.length > 0 &&
        students.map(student => (
          <div key={student.studentId}>
            <h2>{student.users.email}</h2>
            <p>{student.jmbag}</p>
            <p>{student.faculty}</p>
            <p>{student.rooms.roomLabel}</p>
          </div>
        ))}
    </main>
  )
}
