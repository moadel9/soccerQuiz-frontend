import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { playerSubmitReducer, updateScoreReducer } from "./reducers/playerReducer"
import { questionsListReducer } from "./reducers/questionsReducer"

const reducer = combineReducers({
  questionsList: questionsListReducer,
  playerSubmit: playerSubmitReducer,
  updatedPlayer: updateScoreReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
