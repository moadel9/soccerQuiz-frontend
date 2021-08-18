import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateScore } from "../actions/playerActions"
import { listQuestions } from "../actions/questionsActions"

const Question = (props) => {
  const [error, setError] = useState("")
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState("")

  const dispatch = useDispatch()

  const { questions, loading } = useSelector((state) => state.questionsList)
  const { player } = useSelector((state) => state.playerSubmit.user)

  useEffect(() => {
    dispatch(listQuestions())
  }, [dispatch])

  const changeHandler = (e) => {
    setSelected(e.target.value)
  }
  const nextClickHandler = () => {
    if (selected === questions[active].answer) {
      dispatch(updateScore(player._id))
    }
    if (selected === "") {
      return setError("Please select one option!")
    }
    if (active < 4) {
      setActive(active + 1)
      setSelected("")
    }
  }

  return (
    <div className="card">
      {!loading && (
        <div className="card-content">
          <div className="content">
            <h2 style={{ color: "white" }} className="mb-5">
              {questions[active].question}
            </h2>
            <div className="control">
              {questions[active].choices.map((choice, i) => (
                <label className="radio has-background-light" key={i}>
                  <input type="radio" name="answer" checked={selected === choice} value={choice} onChange={changeHandler} />
                  {choice}
                </label>
              ))}
            </div>
            {error && <div className="has-text-danger">{error}</div>}
            {active < 4 && (
              <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>
                Next
              </button>
            )}
            {active === 4 && (
              <button
                className="button is-link is-medium is-fullwidth mt-4"
                onClick={() => {
                  if (selected === questions[active].answer) {
                    dispatch(updateScore(player._id))
                  }

                  props.history.push("/result")
                }}
              >
                Finish Quiz
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Question
