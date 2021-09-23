
import React, {useContext} from 'react'
import Answers from './answers'
import Quizcontext from './usecontext'

export default function Answer() {
    const{state, dispatch} = useContext(Quizcontext);
    const{currentAnswer, currentQuestion, questions} = state;
    const question = questions[currentQuestion]
    return (
        <>
            <Answers
                     letter='a' 
                     answer={question?.answer_a} 
                     dispatch= {dispatch}
                    //  handleClick={handleClick}
                     selected={currentAnswer === 'a'} 
            />
            <Answers 
                     letter='b' 
                     answer={question?.answer_b} 
                     dispatch={dispatch}
                    //  handleClick={handleClick}
                     selected={currentAnswer === 'b'}
            />
            <Answers 
                     letter='c' 
                     answer={question?.answer_c} 
                     dispatch={dispatch}
                    //  handleClick={handleClick}
                     selected={currentAnswer === 'c'}
            />
            
        </>
    )
}
