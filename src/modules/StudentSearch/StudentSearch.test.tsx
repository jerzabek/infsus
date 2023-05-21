import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { getStudentSearch } from './api/repository'
import StudentSearch from './StudentSearch'
import { mockGetStudentSearchResponse } from './mock'

jest.mock('./api/repository', () => ({
  getStudentSearch: jest.fn(),
}))

describe('<StudentSearch />', () => {
  it('should render', () => {
    render(<StudentSearch accomodations={[]} />)

    screen.getByText(/no students available/i)
  })

  it('should call api on form submit', async () => {
    //@ts-ignore
    getStudentSearch.mockImplementation(() => Promise.resolve(mockGetStudentSearchResponse))

    render(<StudentSearch accomodations={[]} />)

    screen.getByText(/no students available/i)

    expect(getStudentSearch).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('button', { name: /search/i }))

    await waitFor(() => expect(getStudentSearch).toHaveBeenCalled())
  })
})
