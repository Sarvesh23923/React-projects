import '../App.css';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';
import Questions from '../helpers/Questions';

const EndScreen = () => {
    const {score, setScore, setGameState, userName} = useContext(GameStateContext);

    const restartQuiz = () => {
        setScore(0)
        setGameState('menu');
    }

    return(
        <div className="end-screen">
            <h1>Quiz Completed</h1>
            <h2>{userName}</h2>
            <h3>Your score: {score} / {Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;