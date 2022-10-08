import React,{useState, useEffect, useRef} from 'react'
import './game.scss'
import  quotes from '../../constants/index'
import { TextareaAutosize } from '@mui/base';
import { Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const Game = ({ text, countdown, countdownValue, isDisabled,
    updateIsDisabled, updateTextValue, updateCountdown, updateOpenSettings }) => {
    
    const idx = Math.floor(Math.random() * quotes.length);
    
    const [isGameOver, setGameOver] = useState(null);
    const [isError, setError] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [quote, setQuote] = useState('');
    const typingBoxRef = useRef(null);

    const handleTyping = e => {
        const { value } = e.target;
        const char = quote.split('');
        const typedChar = value.split('');

        if (typedChar[charIndex] === char[charIndex]) {
            updateTextValue(value);
            setCharIndex(charIndex + 1)
            setError(false);
        } else setError(true);
    };


    const setGameStart = () => {
        if (isGameOver === null || isGameOver === true) {
        updateTextValue('');
        updateCountdown(countdown === 0 ? countdownValue : countdown);
        setGameOver(false);
        updateOpenSettings(false);
        setQuote(quotes[idx])
            

        typingBoxRef.current.disabled = false;
        typingBoxRef.current.focus();
        }
    };

    useEffect(() => {
        if (isGameOver === false) {
            if (countdown > 0) {
                setTimeout(() => {
                    updateCountdown(time => {
                    return time - 1;
                });
                }, 1000);
                updateIsDisabled(true);
            } else {
                updateIsDisabled(false);
                
                setGameOver(true);
                setCharIndex(0);
                setError(false);
            }
        }
    }, [countdown, isGameOver]);

        return (
        <>  
            <div className='textArea-overlay'>
                {isError && <ErrorIcon className='error-icon'/>}
                <TextareaAutosize
                    className="typing-box overlay"
                    onChange={handleTyping}
                    value={isGameOver === false ? quote : ''}
                    aria-label="typing-box"
                    minRows={10}
                    maxRows={10}
                    disabled={true}
                />
                <TextareaAutosize
                    className="typing-box input"
                    onChange={handleTyping}
                    value={text}
                    aria-label="typing-box"
                    minRows={10}
                    maxRows={10}
                    placeholder={
                        isGameOver === null
                        ? `Press 'START' button to start the game.`
                        : ''
                    }
                    disabled={isGameOver === false ? false : true}
                    ref={typingBoxRef}
                />
            </div>
            
            <Button
            className="start-btn"
            variant="contained"
            onClick={setGameStart}
            disabled={isDisabled}>
            {isGameOver === null ? 'Start' : 'Try again!'}
            </Button>
        </>
        

    )
}

export default Game