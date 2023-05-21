import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import EditStudent from './EditStudent'
import { mockAccomodations, mockGetStudents } from './mock'
import { getStudents } from './api/repository'
import { act } from 'react-dom/test-utils'

jest.mock('./api/repository', () => ({
  getStudents: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: () => '1',
  }),
}))

describe('<EditStudent />', () => {
  it('should render', async () => {
    jest.mock('next/navigation', () => ({
      useRouter: () => ({
        push: jest.fn(),
      }),
      useSearchParams: () => ({
        get: () => '1',
      }),
    }))

    //@ts-ignore
    getStudents.mockImplementation(() => Promise.resolve(mockGetStudents))

    render(<EditStudent accomodations={mockAccomodations} />)

    screen.getByText(/add student/i)
    await screen.findByDisplayValue('0098357004')
    screen.getByText(/edit student/i)
  })

  it('should ', async () => {
    jest.mock('next/navigation', () => ({
      useRouter: () => ({
        push: jest.fn(),
      }),
      useSearchParams: () => ({
        get: () => undefined,
      }),
    }))

    //@ts-ignore
    getStudents.mockImplementation(() => Promise.resolve(mockGetStudents))

    act(async () => {
      render(<EditStudent accomodations={mockAccomodations} />)

      await screen.findByText(/add student/i)

      expect(screen.getByTestId('jmbag-input')).not.toBeInTheDocument()
    })
  })
})
