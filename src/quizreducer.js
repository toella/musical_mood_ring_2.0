import { 
    SET_CURRENT_ANSWER, 
    SET_CURRENT_QUESTION, 
    SET_ERROR, 
    SET_SHOW_RESULTS, 
    SET_ANSWERS 
} from "./reducer.js"

export default function quizReducer(state, action) {
    switch (action.type) {
        case SET_CURRENT_ANSWER:
            return {
                ...state,
                currentAnswer: action.currentAnswer,
            }
        case SET_CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: action.currentQuestion
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_SHOW_RESULTS:
            return {
                ...state,
                showResults: action.showResults
            }
        case SET_ANSWERS:
            // console.log(state, action)
            return {
                ...state,
                answers: [...state.answers, action.answers]

            }
        default:
            return state;
    }
}
