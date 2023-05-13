import { rooms } from '@prisma/client'

export interface StudentSearchForm {
  accomodationId?: string
  floor?: string
  room?: string
}

export interface UserFeedbackParams {
  userId: string
}

export interface UserFeedback {
  rooms: Pick<rooms, 'roomLabel'>
  feedbackTopic: string
  feedbackDesc: string
  feedbackId: number
}

export interface UserFeedbackResponse {
  data: Array<UserFeedback>
}
