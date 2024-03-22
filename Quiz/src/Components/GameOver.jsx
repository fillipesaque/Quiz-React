import { useContext } from 'react'
import { QuizContext } from '../Context/quiz'
import "./GameOver.css"
import Welldone from "../Img/welldone.svg"

const GameOver = () => {

    const[ QuizState , dispach] = useContext(QuizContext)

    return(
        <div id='gameover'> 
            <h2>Fim Do Jogo!</h2>
            <p>Pontuaçao:{QuizState.score}</p>
            <p>Voce Acertou {QuizState.score} de {QuizState.Questions.length} perguntas</p>
            <img src={Welldone} alt="Fim De Game" />
            <button onClick={() => dispach({type: "NEW_GAME"})}>Reiniciar!</button>
        </div>
    )
}

export default GameOver