import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Result = (props) => {
  const updatedPlayer = useSelector((state) => state.updatedPlayer.user)
  const { loading } = useSelector((state) => state.updatedPlayer)

  const { player: user } = useSelector((state) => state.playerSubmit.user)

  const dispatch = useDispatch()

  return (
    <div className="card">
      {!loading && (
        <div className="card-content">
          <div className="content">
            <h3 style={{ color: "white" }}>Your results</h3>
            {Object.keys(updatedPlayer)?.length > 0 ? (
              <>
                <p style={{ color: "white" }}>{updatedPlayer?.player?.score} of 5</p>
                <p>
                  <strong style={{ color: "white" }}>{Math.floor((updatedPlayer?.player?.score / 5) * 100)}%</strong>
                </p>
              </>
            ) : (
              <>
                <p style={{ color: "white" }}>{user?.score} of 5</p>
                <p>
                  <strong style={{ color: "white" }}>{Math.floor((user?.score / 5) * 100)}%</strong>
                </p>
              </>
            )}

            <button
              className="button is-success"
              onClick={() => {
                dispatch({ type: "SCORE_UPDATE_RESET" })
                props.history.push("/")
              }}
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Result
