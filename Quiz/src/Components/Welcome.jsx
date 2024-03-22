import QuizImg from "../Img/quiz.svg"
import "./Welcome.css"


import { useContext } from "react"
import { QuizContext } from "../Context/quiz"

const Welcome = () => {

    const[ QuizState , dispach] = useContext(QuizContext)

    return (
        <div id="welcome">
            <h2>Seja Bem Vindo !</h2>
            <p>Clique No Botao Abaixo Para Começar:</p>
            <button onClick={() => dispach({type: "CHANGE_STATE"})}>Iniciar!</button>
            <img src={QuizImg} alt="Inicio Do Quiz" />
        </div>
    )
}

export default Welcome