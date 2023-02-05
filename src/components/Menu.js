import { useContext } from 'react';
import '../App.css';
import { GameStateContext } from '../helpers/Contexts';

function Menu() {
    const {gameState, setGameState} = useContext(GameStateContext);
    const {username, setUserName} = useContext(GameStateContext)

    return (
        <div className="Menu">
            <label>Enter Your Name :</label>
            <input type = "text" placeholder="Enter Your Name" onChange={(event) => setUserName(event.target.value)}/>
            <button onClick={()=>setGameState("playing")}>Start Quiz</button>
        </div>
    )

}

export default Menu;