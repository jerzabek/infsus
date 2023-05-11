import prisma from '../lib/prisma'

export default async function Home() {
  const accomodations = await prisma.accomodations.findMany()

  return (
    <main>
      <h1>Hello world</h1>
      <hr />
      {accomodations.map(accomodation => (
        <div key={accomodation.accomodationId}>
          <h2>{accomodation.name}</h2>
          <p>{accomodation.address}</p>
        </div>
      ))}
    </main>
  )
}
