import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { submitPlayer } from "../actions/playerActions"

const Home = (props) => {
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  function startQuiz() {
    if (name === "") {
      setError("Name is Required")
      setTimeout(() => {
        setError("")
      }, 3000)
    } else {
      dispatch(submitPlayer(name, props))
    }
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 style={{ color: "white" }}>Start The Quiz</h1>
          <input
            className="nameInput"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                startQuiz()
              }
            }}
            style={{ textAlign: "center" }}
            placeholder="enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "white" }}>Good luck!</p>
          {error && <div className="has-text-danger">{error}</div>}
          <button className="button is-info is-medium" onClick={startQuiz}>
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
