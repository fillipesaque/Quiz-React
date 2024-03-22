import { useContext} from "react"
import { QuizContext } from "../Context/quiz"
import "./Question.css"
import Options from "./Options"

const Question = () => {

    const[ QuizState , dispach] = useContext(QuizContext)
    const currentQuestion = QuizState.Questions[QuizState.currentQuestion]

    const onSelectOption = (option) => {
        dispach({
            type: "CHECK_ANSWER",
            payload:{answer: currentQuestion.answer, option}
        })
    }

    return (
        <div id="question">
            <p>
                Pergunta {QuizState.currentQuestion + 1} de {QuizState.Questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Options 
                    options={option} 
                    key={option} 
                    answer={currentQuestion.answer}
                    selectOption={() => onSelectOption(option)}
                    />
                ))}
            </div>
            {QuizState.answerSelected && (
                <button onClick={() => dispach({type:'CHANGE_QUESTION'})}> 
                    Continuar
                </button>
            )}
        </div>
    )
}

export default Question