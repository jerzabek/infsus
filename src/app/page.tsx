import Link from 'next/link'

export default async function Home() {
  return (
    <main className="container py-2">
      <h1 className='text-center'>Home</h1>
      <ul>
        <li>
          <Link href="/studentSearch">Find students</Link>
        </li>
      </ul>
    </main>
  )
}
