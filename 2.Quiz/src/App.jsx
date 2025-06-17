import './App.css';
import { useState } from 'react';
import { GameStateContext } from './helpers/Contexts';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';

const App = () => {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === 'menu' && <Menu />}
        {gameState === 'playing' && <Quiz />}
        {gameState === 'completed' && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  )
}

export default App;