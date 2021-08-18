import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Question from "./components/Question"
import Result from "./components/Result"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Home} exact></Route>
        <Route path="/questions" component={Question} exact></Route>
        <Route path="/result" component={Result} exact></Route>
      </div>
    </BrowserRouter>
  )
}

export default App
