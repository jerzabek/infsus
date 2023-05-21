import { UserFeedbackResponse } from '../../interface'

export const mockStudentFeedbackResponse: UserFeedbackResponse = {
  data: [
    {
      rooms: {
        roomLabel: '5-89',
      },
      feedbackTopic: 'Osvjetljenje',
      feedbackDesc: 'Potrebna zamjena svjetiljke u sobi 5-89.',
      feedbackId: 1,
    },
  ],
}
