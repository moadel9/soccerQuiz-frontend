import { QUESTION_LIST_FAIL, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS } from "../constants/questionConstants"

export const questionsListReducer = (state = { loading: true, questions: [] }, action) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return { loading: true }
    case QUESTION_LIST_SUCCESS:
      const newShuffle = action.payload.sort(() => Math.random() - 0.5)

      return { loading: false, questions: newShuffle }
    case QUESTION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
