import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { mockGetStudentSearchResponse } from '../../mock'
import StudentList from './StudentList'
import { getUserFeedback } from '../../api/repository'
import { mockStudentFeedbackResponse } from './mock'

jest.mock('../../api/repository', () => ({
  getUserFeedback: jest.fn(),
}))

describe('<StudentList />', () => {
  it('should render a table with students', () => {
    render(<StudentList students={mockGetStudentSearchResponse.data} />)

    const {
      users: { email },
      faculty,
      rooms: { roomLabel },
    } = mockGetStudentSearchResponse.data[0]

    screen.getByText(email)
    screen.getByText(faculty)
    screen.getByText(roomLabel)
  })

  it('should display user feedback when details are clicked', async () => {
    //@ts-ignore
    getUserFeedback.mockImplementation(() => Promise.resolve(mockStudentFeedbackResponse))

    render(<StudentList students={mockGetStudentSearchResponse.data} />)

    userEvent.click(screen.getByText(/details/i))

    await screen.findByText(/student details/i)

    const {
      feedbackDesc,
      feedbackTopic,
      rooms: { roomLabel },
    } = mockStudentFeedbackResponse.data[0]

    await waitFor(() => screen.getByText(feedbackTopic))
    screen.getByText(feedbackDesc)
    screen.getByText(`room: ${roomLabel}`)
  })
})
