'use client'
import { useEffect, useState } from 'react'

type Student = {
  studentId: number
  jmbag: number
  users: {
    userId: number
    email: string
  }
  faculty: string
  rooms: {
    roomNumber: number
    roomFloor: number
    roomLabel: string
    roomId: number
    accomodations: {
      name: string
      address: string
      accomodationId: number
    }
  }
}

export default function CRUDStudents() {
  const [studentList, setStudentsList] = useState<Student[]>()
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetch(`http://localhost:3000/api/students`).then(res => res.json())
      setStudentsList(data)
    }
    if (!studentList) fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className={'container p1-2'}>
      <h1 className={'text-center'}>CRUD Students</h1>
      <hr />

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>JMBAG</th>
              <th>email</th>
              <th>Accomodation</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {studentList &&
              studentList.map(student => (
                <tr key={student.studentId}>
                  <td width="50px">{student.studentId}</td>
                  <td width="220px">{student.jmbag}</td>
                  <td width="400px">{student.users.email}</td>
                  <td width="400px">{student.rooms.accomodations ? student.rooms.accomodations.name : 'loading'}</td>
                  <td>
                    <a href={'/editStudent?studentId=' + student.studentId}>Edit Student</a>
                  </td>
                  <td>
                    <button
                      onClick={e => {
                        const options = {
                          method: 'DELETE',
                        }
                        fetch(
                          `http://localhost:3000/api/students?studentId=${student.studentId}&userId=${student.users.userId}`,
                          options
                        )
                        window.location.reload()
                      }}
                    >
                      delete
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
