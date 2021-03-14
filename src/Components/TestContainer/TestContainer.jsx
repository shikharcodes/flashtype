import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer = ({
        selectedParagraph, 
        words, 
        characters, 
        wpm, 
        timeRemaining, 
        timerStarted,
        testInfo
    }) => {
    return(
        <div className="test-container">
            {timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-cont">
                        <TypingChallengeContainer
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        words={words}         characters={characters}  wpm={wpm}
                        selectedParagraph={selectedParagraph}
                        testInfo={testInfo}
                        />
                    </div>
                ):(
                    <div className="try-again-container">
                        <TryAgain words={words}characters={characters} wpm={wpm}/>
                    </div>
                )
            }
        </div>
    );
}

export default TestContainer;