import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditForm({ student, allStudents, accomodations }) {
  const router = useRouter()
  const [jmbag, setJmbag] = useState<string | undefined>(undefined)
  const [accomodationId, setAccomodationId] = useState<number>(1)
  const [email, setEmail] = useState<string>('')
  const [floor, setFloor] = useState<string>('')
  const [room, setRoom] = useState<string>('')
  const [faculty, setFaculty] = useState<string>('')
  useEffect(() => {
    console.log(student)
    if (student) {
      console.log(student)
      setJmbag(student.jmbag)
      console.log(student.rooms.accomodations.accomodationId)
      setAccomodationId(student.rooms.accomodations.accomodationId)
      setEmail(student.users.email)
      setFloor(student.rooms.roomFloor)
      setRoom(student.rooms.roomNumber)
      setFaculty(student.faculty)
    }

  }, [])
  const _handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()


    let studentId = student ? student.studentId : -1

    let studentsNotThisStudent = allStudents.filter(student => student.studentId != studentId)
    console.log(studentsNotThisStudent)

    //unique jmbag
    if (studentsNotThisStudent.filter(student => student.jmbag == jmbag).length > 0) {
      alert('Jmbag not unique')
      return
    }
    //unique email
    if (studentsNotThisStudent.filter(student => student.email == email).length > 0) {
      alert('Email not unique')
      return
    }
    //unique room
    if (studentsNotThisStudent.filter(student =>
      student.rooms.accomodations.accomodationId == accomodationId
      && student.rooms.roomFloor == floor
      && student.rooms.roomNumber == room,
    ).length > 0) {
      alert('Room not unique')
      return
    }

    //if room doesn't exist create it
    let theRoom = await fetch(`http://localhost:3000/api/rooms?roomFloor=${floor}&roomNumber=${room}&accomodationId=${accomodationId}`).then(res => res.json()).then(res => res.data)
    if(!theRoom){
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomFloor: floor,
          roomNumber: room,
          accomodationId: accomodationId
        })
      };

      theRoom = await fetch("http://localhost:3000/api/rooms", options)
        .then(res => res.json())
        .then (res => res.data)

      // console.log("Created room", theRoom)
    }

    //update
    if (student) {
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: theRoom.roomId,
          email: email,
          jmbag: jmbag,
          faculty: faculty,
          userId: student.users.userId,
          studentId: student.studentId
        })
      };

      let theStudent = await fetch("http://localhost:3000/api/students", options)
        .then(res => res.json())
        .then (res => res.data)
      console.log(theStudent)

      router.push("/")
    }
    //insert
    else {
      let randomInitialPassword = Math.random().toString(36).slice(-8);
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: theRoom.roomId,
          jmbag: jmbag,
          email: email,
          password: randomInitialPassword,
          faculty: faculty
        })
      };

      let theStudent = await fetch("http://localhost:3000/api/students", options)
        .then(res => res.json())
        .then (res => res.data)

      console.log(theStudent)

      router.push("/")
    }


  }

  return (
    <form onSubmit={_handleSubmit} className='row g-3'>


      <div className='col-md-6'>
        <label htmlFor={'jmbag'}>
          JMBAG
        </label>
        <br />
        <input
          id='jmbag'
          defaultValue={jmbag}
          onChange={e => setJmbag(e.target.value)}
        />

        <br />

        <label htmlFor={'email'}>
          EMAIL
        </label>
        <br />
        <input
          id='email'
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
        />

        <br/>

        <label htmlFor={'faculty'}>
          FACULTY
        </label>
        <br />
        <input width={"100%"}
          id='faculty'
          defaultValue={faculty}
          onChange={e => setFaculty(e.target.value)}
        />
      </div>

      <div className='col-md-6'>
        <label htmlFor='accomodations' className='form-label'>
          Accomodations
        </label>
        <select
          id='accomodations'
          value={accomodationId}
          onChange={e => {
            setAccomodationId(parseInt(e.target.value))
            setFloor('')
            setRoom('')
          }}
          className='form-select'
        >
          {accomodations.map(accomodation => (
            <option key={accomodation.accomodationId} value={accomodation.accomodationId}>
              {accomodation.name}
            </option>
          ))}
        </select>


        <div className='col-md-6'>
          <label htmlFor={'floor'}>
            Floor
          </label>
          <br />
          <input
            id='floor'
            value={floor}
            onChange={e => {
              setFloor(e.target.value)
              console.log('Setting room')
              setRoom('')
            }}
          />

          <br />

          <label htmlFor={'room'}>
            Room number
          </label>
          <br />
          <input
            id='room'
            value={room}
            onChange={e => setRoom(e.target.value)}
          />
        </div>
      </div>

      <div className={'col-md-6'}>
        <input type={'submit'} value={student ? 'Update' : 'Add'} />
      </div>


    </form>
  )
}