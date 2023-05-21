export const mockAccomodations = [
  {
    accomodationId: 1,
    name: 'SD Stjepan radić',
    address: 'Jarunska 2, 10000 Zagreb',
  },
]

export const mockGetStudents = {
  data: [
    {
      studentId: 1,
      users: {
        userId: 1,
        email: 'emilywilson@studentmail.com',
      },
      faculty: 'Sveučilište u Zagrebu, Fakultet elektrotehnike i računarstva',
      rooms: {
        roomNumber: 7,
        roomFloor: 4,
        roomLabel: '4-7',
        roomId: 12,
        accomodations: {
          name: 'SD Stjepan radić',
          address: 'Jarunska 2, 10000 Zagreb',
          accomodationId: 1,
        },
      },
      userId: 1,
      jmbag: '0098357004',
    },
  ],
}
