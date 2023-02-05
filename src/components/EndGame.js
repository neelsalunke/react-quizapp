import '../App.css';
import { useContext } from 'react';
import {GameStateContext} from '../helpers/Contexts'
import { Questions } from '../helpers/Questions';

function EndGame(){

    const {score, setScore, gameState, setGameState, username} = useContext(GameStateContext);

    function restartQuiz(){
        setScore(0);
        setGameState("menu");
    }

    return (
    <div className='EndGame'>
        <h1>Well Done!</h1>
        <h3>{username}</h3>
        <h1>
            {score} / {Questions.length}
        </h1>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
    )
    
}

export default EndGame;