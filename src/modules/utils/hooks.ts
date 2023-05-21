export const FER = 'Fakultet elektrotehnike i računarstva'
export const FSB = 'Fakultet strojarstva i brodogradnje'
export const PF = 'Pravni fakultet'

/**
 * For certain faculties, the JMBAG is used to validate the faculty.
 * We do not condone students that have transfered faculties from the list defined bellow.
 */
export const useValidateFaculty = (faculty: string, jmbag: string) => {
  console.log(faculty, jmbag)
  if (faculty.includes(FER)) {
    if (`${jmbag}`.startsWith('0036')) {
      return true
    }
    return false
  } else if (faculty.includes(FSB)) {
    if (`${jmbag}`.startsWith('0035')) {
      return true
    }
    return false
  } else if (faculty.includes(PF)) {
    if (`${jmbag}`.startsWith('0066')) {
      return true
    }
    return false
  }

  return true
}
