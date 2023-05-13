import { buildQueryString } from '@/modules/utils/utils'
import { StudentSearchForm, UserFeedbackParams, UserFeedbackResponse } from '../interface'
import { StudentSearchResponse } from '@/modules/api/interface'

export const getStudentSearch = (formData: StudentSearchForm): Promise<StudentSearchResponse> =>
  fetch(`http://localhost:3000/api/students?${buildQueryString(formData)}`).then(res => res.json())

export const getUserFeedback = (formData: UserFeedbackParams): Promise<UserFeedbackResponse> =>
  fetch(`http://localhost:3000/api/feedback?${buildQueryString(formData)}`).then(res => res.json())
