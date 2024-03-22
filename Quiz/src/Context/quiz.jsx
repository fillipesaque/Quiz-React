import { createContext , useReducer } from "react";
import Questions from "../Data/Questions"

const STAGES = ['Start' , 'PLaying' , 'End']

const initialState = {
    gameStage: STAGES[0],
    Questions,
    currentQuestion: 0,
    score:0,
    answerSelected: false
}

const QuizReducer = (state , action) => {


    switch (action.type ) {
        case "CHANGE_STATE":
        return{
            ...state,
            gameStage: STAGES[1]
        }

        case "REODER_QUESTIONS":
            const reorderedQuestion = Questions.sort(() => {
                return Math.random() -0.5;
            })

            return{
                ...state,
                Questions: reorderedQuestion,
            }

        case "CHANGE_QUESTION":
            const NextQuestion = state.currentQuestion +1 ;
            let endGame = false

            if (!Questions[NextQuestion]) {
                endGame = true
            }

            return{
                ...state,
                currentQuestion:NextQuestion,
                gameStage: endGame? STAGES[2] : state.gameStage,
                answerSelected: false
            }

            case "NEW_GAME":
                return initialState;

            case "CHECK_ANSWER":
                if(state.answerSelected) return state

                const answer = action.payload.answer
                const option = action.payload.option
                let correctAnswer = 0

                if(answer === option) correctAnswer = 1;

                return{
                    ...state,
                    score: state.score + correctAnswer,
                    answerSelected: option ,
                }
        default:
            return state;
    }

}


const QuizContext = createContext()

const QuizProvaider = ({children}) => {

    const value = useReducer(QuizReducer , initialState);

    return <QuizContext.Provider value={value} >{children}</QuizContext.Provider>
}

export { QuizContext , QuizProvaider}