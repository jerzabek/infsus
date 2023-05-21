import { StudentSearchResult } from '@/modules/api/interface'
import { useEffect, useState } from 'react'
import { getUserFeedback } from '../../api/repository'
import { UserFeedback } from '../../interface'
import { useValidateFaculty } from '@/modules/utils/hooks'

const StudentList = ({ students }: { students: StudentSearchResult[] }) => {
  const [activeStudent, setActiveStudent] = useState<StudentSearchResult | undefined>(undefined)
  const [feedback, setFeedback] = useState<UserFeedback[] | undefined>()

  useEffect(() => {
    if (!activeStudent) return

    getUserFeedback({
      userId: activeStudent.userId.toString(),
    }).then(({ data }) => setFeedback(data))
  }, [activeStudent])

  const isValid = useValidateFaculty(activeStudent?.faculty || '', activeStudent?.jmbag || '')

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Faculty</th>
            <th>Room</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 &&
            students.map(student => (
              <tr key={student.studentId}>
                <td width="220px">{student.users.email}</td>
                <td width="500px">{student.faculty}</td>
                <td width="100px">{student.rooms.roomLabel}</td>
                <td width="100px">
                  <button className="btn btn-success" onClick={() => setActiveStudent(student)}>
                    Details
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {!!activeStudent && (
        <div className="modal show" tabIndex={-1} style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Student Details</h5>
                <button type="button" className="btn-close" onClick={() => setActiveStudent(undefined)} />
              </div>
              <div className="modal-body">
                {isValid === false && (
                  <p className="text-danger">
                    Student breaks business condition to not have transfered from one of our partnered faculties.
                  </p>
                )}
                <p className="text-secondary" style={{ fontSize: '0.8em' }}>
                  <b>User ID:</b> {activeStudent.userId} <b>Student ID:</b> {activeStudent.studentId}
                </p>
                <p>
                  <b>JMBAG:</b> {activeStudent.jmbag}
                </p>
                <p>
                  <b>Email:</b> {activeStudent.users.email}
                </p>
                <p>
                  <b>Faculty:</b> {activeStudent.faculty}
                </p>
                <p>
                  <b>Room label:</b> {activeStudent.rooms.roomLabel}
                </p>
                <hr />
                {feedback === undefined ? (
                  <p>Loading...</p>
                ) : feedback.length === 0 ? (
                  <p className="text-secondary text-center">User submitted no feedback.</p>
                ) : (
                  <>
                    <p>List of feedback provided by user:</p>
                    {feedback.map(feedback => (
                      <div key={feedback.feedbackId}>
                        <div className="d-flex align-items-center justify-content-between">
                          <h4 className="m-0">
                            <b>{feedback.feedbackTopic}</b>
                          </h4>
                          <p className="text-secondary m-0" style={{ fontSize: '0.8em' }}>
                            room: {feedback.rooms.roomLabel}
                          </p>
                        </div>
                        <p>{feedback.feedbackDesc}</p>
                        <hr />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentList
