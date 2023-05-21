import { FER, FSB, PF, useValidateFaculty } from './hooks'

describe('hooks', () => {
  it('correctly validates FER', () => {
    expect(useValidateFaculty(FER, '0012345678')).toBeFalsy()
    expect(useValidateFaculty(FER, '0036526653')).toBeTruthy()
  })

  it('correctly validates FSB', () => {
    expect(useValidateFaculty(FSB, '0012345678')).toBeFalsy()
    expect(useValidateFaculty(FSB, '0035678901')).toBeTruthy()
  })

  it('correctly validates PF', () => {
    expect(useValidateFaculty(PF, '0012345678')).toBeFalsy()
    expect(useValidateFaculty(PF, '0066678901')).toBeTruthy()
  })
})
