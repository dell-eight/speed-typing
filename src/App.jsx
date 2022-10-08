import React, { useState } from 'react';
import { Container } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Result ,Settings, Game } from './components'
import './App.scss';

const App = () => {
  let countdown_value = 30;

  const [text, setText] = useState('');
  const [countdown, setCountdown] = useState(countdown_value);

  const [isOpenSettings, setOpenSettings] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const handleSettingsToggle = () => {
    setOpenSettings((prev) => !prev);
  }

  const changeCountdown = (val) => {
    setCountdown(val)
  }

  const updateTextValue = (textVal) => {
    setText(textVal);
  }

  const updateCountdown = (Val) => {
    setCountdown(Val);
  }

  const updateIsDisabled = (Val) => {
    setDisabled(Val);
  }

  const updateOpenSettings = (Val) => {
    setOpenSettings(Val);
  }

  return (
    <Container fixed className="App">
      <Container className='header'>
        <div className='blank'></div>
        <h1>Typing Practice</h1>
        <div  className='settings'>
          <SettingsRoundedIcon className='settings-icon' onClick={handleSettingsToggle} />
          {isOpenSettings && <Settings isDisabled={isDisabled} changeCountdown={changeCountdown} defaultValue={countdown_value} />}
        </div>
      </Container>
      <Container fixed className="game">
        
        <Game text={text} countdown={countdown} isDisabled={isDisabled} updateIsDisabled={updateIsDisabled}
          updateTextValue={updateTextValue} updateCountdown={updateCountdown}
          updateOpenSettings={updateOpenSettings} countdownValue={countdown_value}
        />

        <Result text={text} countdown={countdown} />
        
      </Container>
    </Container>
  );
};

export default App;
