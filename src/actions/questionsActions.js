import Axios from "axios"
import { QUESTION_LIST_FAIL, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS } from "../constants/questionConstants"

const url = "https://quiz-soccer.herokuapp.com"

export const listQuestions = () => async (dispatch) => {
  dispatch({
    type: QUESTION_LIST_REQUEST,
  })
  try {
    const { data } = await Axios.get(`${url}/questions`)
    dispatch({ type: QUESTION_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: QUESTION_LIST_FAIL, payload: error.message })
  }
}
