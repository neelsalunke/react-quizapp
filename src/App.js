import {useState} from 'react';
import './App.css';
import Menu  from './components/Menu';
import Quiz from './components/Quiz';
import EndGame from './components/EndGame'
import {GameStateContext} from './helpers/Contexts'

function App() {
  const [gameState, setGameState] = useState('menu')
  const [username, setUserName] = useState('')
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState, setGameState, username, setUserName, score, setScore}}>
        {gameState === "menu" && <Menu/>} 
        {gameState === "playing" && <Quiz/>}
        {gameState === "finished" && <EndGame/>}
      </GameStateContext.Provider>
      
    </div>
  );
}

export default App;
