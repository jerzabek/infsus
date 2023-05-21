import { StudentSearchResponse } from '../api/interface'

export const mockGetStudentSearchResponse: StudentSearchResponse = {
  data: [
    {
      studentId: 1,
      users: {
        email: 'emilywilson@studentmail.com',
      },
      faculty: 'Sveučilište u Zagrebu, Fakultet elektrotehnike i računarstva',
      rooms: {
        roomLabel: '4-7',
        roomId: 12,
        accomodations: {
          name: 'SD Stjepan radić',
          address: 'Jarunska 2, 10000 Zagreb',
        },
      },
      userId: 7,
      jmbag: '0098357004',
    },
  ],
}
