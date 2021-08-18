import axios from "axios"
import { PLAYER_SUBMIT_FAIL, PLAYER_SUBMIT_REQUEST, PLAYER_SUBMIT_SUCCESS, SCORE_UPDATE_FAIL, SCORE_UPDATE_REQUEST, SCORE_UPDATE_SUCCESS } from "../constants/playerConstants"

const url = "https://quiz-soccer.herokuapp.com"

export const submitPlayer = (name, props) => async (dispatch) => {
  dispatch({
    type: PLAYER_SUBMIT_REQUEST,
  })
  try {
    const requestBody = {
      name,
    }
    const { data } = await axios.post(`${url}/player/submit`, requestBody)
    dispatch({ type: PLAYER_SUBMIT_SUCCESS, payload: data })
    props.history.push("/questions")
  } catch (error) {
    dispatch({ type: PLAYER_SUBMIT_FAIL, payload: error.message })
  }
}

export const updateScore = (id) => async (dispatch) => {
  dispatch({
    type: SCORE_UPDATE_REQUEST,
  })
  try {
    const { data } = await axios.put(`${url}/player/updatescore/${id}`)
    dispatch({ type: SCORE_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: SCORE_UPDATE_FAIL, payload: error.message })
  }
}
