
import React from 'react'
import { SET_CURRENT_ANSWER, SET_ERROR } from "./reducer.js"

export default function Answers(props) {
    let classes =['answer'];

    const handleClick = e => {
        props.dispatch({ 
            type: SET_CURRENT_ANSWER, 
            currentAnswer: e.target.value,
           
        });
        console.log(e.target.value)
        
        props.dispatch({ 
            type: SET_ERROR, 
            currentError: '' 
        });
    }

    if(props.selected){
        classes.push('selected');
    }
    return (
        <button 
            value={props.letter} 
            className={classes.join(' ')} 
            onClick= {handleClick}>
        <span className='letter'>{props.letter}. </span>{props.answer}
        </button>


    )
}
