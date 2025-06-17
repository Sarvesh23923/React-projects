import '../App.css';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';

const Menu = () => {
    const {gameState, setGameState} = useContext(GameStateContext);

    return(
        <div className="menu">
            <input type="text" placeholder='Ex.John Durairaj'/>
            <button onClick={() => setGameState('playing')}>Start Quiz</button>
        </div>
    )
}

export default Menu;