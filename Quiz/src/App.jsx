import { useContext, useEffect } from 'react'
import { QuizContext } from './Context/quiz'
import Question from './Components/Question'
import './App.css'
import Welcome from './Components/Welcome'
import GameOver from './Components/GameOver'

function App() {
  
  const[ QuizState , dispach] = useContext(QuizContext)

  useEffect(() => {
      dispach({type: "REODER_QUESTIONS"})
  } , [])

  return (
    <>
      <div className='App'>
        <h1>Quiz De Programaçao</h1>
        {QuizState.gameStage === "Start" && <Welcome/>}
        {QuizState.gameStage === "PLaying" && <Question/>}
        {QuizState.gameStage === "End" && <GameOver/>}
      </div>
      
    </>
  )
}

export default App
