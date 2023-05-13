'use client'

import { accomodations } from '@prisma/client'
import { useState } from 'react'
import { StudentSearchForm } from '../../interface'

export default function SearchForm({
  accomodations,
  handleSubmit,
}: {
  accomodations: accomodations[]
  handleSubmit: (data: StudentSearchForm) => void
}) {
  const [accomodationId, setAccomodationId] = useState<string | undefined>(undefined)
  const [floor, setFloor] = useState<string | undefined>(undefined)
  const [room, setRoom] = useState<string | undefined>(undefined)

  const _handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    handleSubmit({
      accomodationId,
      floor,
      room,
    })
  }

  const handleReset = () => {
    setAccomodationId('')
    setFloor('')
    setRoom('')
  }

  return (
    <form onSubmit={_handleSubmit} className="row g-3">
      <div className="col-md-6">
        <label htmlFor="accomodations" className="form-label">
          Accomodations
        </label>
        <select
          id="accomodations"
          value={accomodationId}
          onChange={e => setAccomodationId(e.target.value)}
          className="form-select"
        >
          <option value="all">All</option>
          {accomodations.map(accomodation => (
            <option key={accomodation.accomodationId} value={accomodation.accomodationId}>
              {accomodation.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <label htmlFor="floor" className="form-label">
          Floor:
        </label>
        <input
          type="number"
          id="floor"
          value={floor}
          onChange={e => setFloor(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="room" className="form-label">
          Room:
        </label>
        <input type="number" id="room" value={room} onChange={e => setRoom(e.target.value)} className="form-control" />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary me-2">
          Search
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  )
}
