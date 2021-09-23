
import React, {useReducer, useState} from "react";
import Progress from "./progress";
import Questions from "./Questions";
import Answer from "./answer";
import quizReducer from "./quizreducer";
import Quizcontext from "./usecontext";
import { SET_CURRENT_ANSWER, 
         SET_CURRENT_QUESTION, 
         SET_ERROR, 
         SET_SHOW_RESULTS, 
         SET_ANSWERS 
       } from "./reducer.js"



const allquestions = [
  {
    id: 1,
    question: 'Fill in the following: Dont go Chasing Waterfalls please stick to the....',
    answer_a: 'rivers and the lakes that youre use to',
    answer_b: 'hills and mountians around you',
    answer_c: 'oceans and ponds where the fish grew',
    correct_answer: 'a'
  },
  {
    id: 2,
    question: " Fill in the following: Sugar we're going down  _____",
    answer_a: 'running',
    answer_b: 'jumping',
    answer_c: 'swinging',
    correct_answer: 'c'
  },
  {
    id: 3,
    question: "Fill in the following: And we're ____ on the ____",
    answer_a: 'listening to jazz',
    answer_b: 'rolling, river',
    answer_c: 'walking on the sand',
    correct_answer: 'b'
  },
];

 
function App (props) {
        const initialState ={
          question,
          currentQuestion: 0,
          currentAnswer: ' ',
          answers: [ ],
          showResults: false,
          error: ' ',
          
        }
        const [state, dispatch] = useReducer(quizReducer, initialState);
        const {currentQuestion, currentAnswer, answers, showResults, error} = state
  
        
  const question = allquestions[currentQuestion];

  const handleClick = e => {
    props.dispatch({
      type: SET_CURRENT_ANSWER,
      currentAnswer: e.target.value
    });
  }
  

  const renderError = ()=>{
    if(!error){
      return;
    }
    return <div className='error'>{error}</div>
  };

  const renderResultsMark = (question, answer) => {
    if(question.answer === answers.answer){
      return <span className='correct'> correct</span>;
    }
      return <span className='incorrect'> incorrect</span>;
  }

  const renderResultData =() =>{
    return answers.map(answer  =>{
      let question = allquestions.find(
        que => que.id === answer.questionId

        );

        return(
          <div key ={question.id}>
                      {question.question} - {renderResultsMark(question, answers)}
          </div>
        )
    }
      );
  }
  

  const next = () =>{
    const answer ={questionId:question.id, answer: currentAnswer};

    if(!currentAnswer){
      dispatch({ type: SET_ERROR, currentError: 'Please select an option' })
      return;
    }
    // answers.push(answer);
    dispatch({type: SET_ANSWERS, answer });
    dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});

    if(currentQuestion + 1 < question.length){
      dispatch({ type: SET_CURRENT_QUESTION, currentQuestion: currentQuestion + 1 });
      
      return;
    }
    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };


  if(showResults){
    return(
      <div className= 'container results'>
        <h2>Musical Mood</h2>
        <ul>{renderResultData()}</ul>
      </div>
    )
  }else{

    return (
      <Quizcontext.Provider value ={{state, dispatch}}>
        <div className="container">
         <Progress 
          total={Questions.length} 
          current= {state.currentQuestion + 1}
          />
          <Questions 
           question={question?.question}
          />
          {renderError()}
          <Answer 
          question={question} 
          currentAnswer={currentAnswer} 
          dispatch= {dispatch}
          />
          <button className="btn btn-primary" onClick={next}> 
          Confirm & Continue
          </button>
        </div>
      </Quizcontext.Provider>
  );
    
}
}
export default App;
