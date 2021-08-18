import { PLAYER_SUBMIT_FAIL, PLAYER_SUBMIT_REQUEST, PLAYER_SUBMIT_SUCCESS, SCORE_UPDATE_FAIL, SCORE_UPDATE_REQUEST, SCORE_UPDATE_SUCCESS } from "../constants/playerConstants"

export const playerSubmitReducer = (state = { loading: true, user: {} }, action) => {
  switch (action.type) {
    case PLAYER_SUBMIT_REQUEST:
      return { loading: true }
    case PLAYER_SUBMIT_SUCCESS:
      return { loading: false, user: action.payload }
    case PLAYER_SUBMIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const updateScoreReducer = (state = { loading: true, user: {} }, action) => {
  switch (action.type) {
    case SCORE_UPDATE_REQUEST:
      return { loading: true }
    case SCORE_UPDATE_SUCCESS:
      return { loading: false, user: action.payload }
    case SCORE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case "SCORE_UPDATE_RESET":
      return { loading: false, user: {} }
    default:
      return state
  }
}
