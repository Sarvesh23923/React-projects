import '../App.css';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';

const EndScreen = () => {
    const {score, setScore} = useContext(GameStateContext);

    return(
        <div className="end-screen">
            <h1>Quiz Completed</h1>
            <h3>Your score: {score}</h3>
        </div>
    )
}

export default EndScreen;