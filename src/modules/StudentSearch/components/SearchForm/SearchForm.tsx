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

  return (
    <form onSubmit={_handleSubmit}>
      <label htmlFor="accomodations">Accomodations</label>
      <select id="accomodations" value={accomodationId} onChange={e => setAccomodationId(e.target.value)}>
        <option value="all">All</option>
        {accomodations.map(accomodation => (
          <option key={accomodation.accomodationId} value={accomodation.accomodationId}>
            {accomodation.name}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="floor">Floor:</label>
      <input type="number" id="floor" value={floor} onChange={e => setFloor(e.target.value)} />

      <br />

      <label htmlFor="room">Room:</label>
      <input type="number" id="room" value={room} onChange={e => setRoom(e.target.value)} />

      <input type="submit" value="Search" />
    </form>
  )
}
