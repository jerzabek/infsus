'use client'

import { accomodations } from '@prisma/client'
import SearchForm from './components/SearchForm'
import { useState } from 'react'
import { StudentSearchForm } from './interface'
import { getStudentSearch } from './api/repository'
import { StudentSearchResult } from '../api/interface'
import StudentList from './components/StudentList/StudentList'

export default function StudentSearch({ accomodations }: { accomodations: accomodations[] }) {
  const [students, setStudents] = useState<StudentSearchResult[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const handleFormSubmit = ({ accomodationId, floor, room }: StudentSearchForm) => {
    setLoading(true)

    getStudentSearch({ accomodationId, floor, room }).then(({ data }) => {
      setStudents(data)
      setLoading(false)
    })
  }

  return (
    <main className="container py-2">
      <h1 className="text-center">Search students</h1>

      <hr />

      <SearchForm accomodations={accomodations} handleSubmit={handleFormSubmit} />

      <div className="mt-4">
        {loading ? (
          <p className="text-center text-secondary">Loading...</p>
        ) : students.length === 0 ? (
          <p className="text-center text-secondary">No students available.</p>
        ) : (
          <StudentList students={students} />
        )}
      </div>
    </main>
  )
}
