import '../App.css';
import React, { useState, } from 'react';
import {Questions} from '../helpers/Questions';
import {useContext} from 'react';
import {GameStateContext} from '../helpers/Contexts'

function Quiz(){

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');
    const {score, setScore, gameState, setGameState} = useContext(GameStateContext);
    

    function chooseOption(option){
        setOptionChosen(option);
        
    }

    function changeQuestion(){
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    function finishQuiz(){
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setGameState("finished")
    }

    return(
        <div className='Quiz'>
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className='questions'>
                <button onClick={() => 
                    chooseOption("OptionA")
                }>
                    {Questions[currentQuestion].OptionA}
                </button>

                <button onClick={() => 
                    chooseOption("OptionB")
                }>
                    {Questions[currentQuestion].OptionB}
                </button>

                <button onClick={() => 
                    chooseOption("OptionC")
                }>
                    {Questions[currentQuestion].OptionC}
                </button>

                <button onClick={() => 
                    chooseOption("OptionD")
                }>
                    {Questions[currentQuestion].OptionD}
                </button>
            </div>
            {currentQuestion === Questions.length - 1 ? (<button onClick={finishQuiz}>Submit Answers</button> ) : (<button onClick={changeQuestion}>Next Question</button>)}
        </div>
    )
}

export default Quiz;