
import React from 'react';
import Quizcontext from './usecontext';
import { useContext } from 'react';

export default function Questions() {
    const {state} = useContext(Quizcontext);
    const {currentQuestion, question} = state;
    const Now = question[currentQuestion];
    return <h1>{question}</h1>
    
}

