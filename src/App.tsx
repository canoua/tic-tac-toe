import './App.css'
import Game from './Game/Game'
import HomePage from './HomePage/HomePage'
import ResultPage from './ResultPage/ResultPage'

function App() {
  return (
    <>
      <div className="container">
        <HomePage/>
        <Game/>
        <ResultPage/>
      </div>
    </>
  )
}

export default App
