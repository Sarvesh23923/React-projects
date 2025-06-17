import '../App.css';
import { useState } from 'react';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';
import Questions from '../helpers/Questions';


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');
    const {gameState, setGameState, score, setScore} = useContext(GameStateContext);

    const chooseOption = option => {
        setOptionChosen(option);
    }

    const nextQuestion = () => {
        if(!optionChosen) return //Prevents skipping without selecting

        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const finishQuiz = () => {
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setGameState('completed')
    }

    return(
        <div className="quiz">
            <h3>{Questions[currentQuestion].prompt}</h3>

            <div className="questions">
                <button onClick={() => chooseOption('optionA')}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => chooseOption('optionB')}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => chooseOption('optionC')}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => chooseOption('optionD')}>{Questions[currentQuestion].optionD}</button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button className='next-btn' onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button className='next-btn' onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    )
}

export default Quiz;