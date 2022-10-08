import React from 'react'
import {TextField, Paper} from '@mui/material';
import './settings.scss'

const Settings = ({ isDisabled, changeCountdown, defaultValue }) => {
  

  const handleCountdown = (e) => {
    const { value } = e.target;
    changeCountdown(value)
    
  }

  return (
       <Paper elevation={3} className='change-countdown'  > 
        <h6>change countdown:</h6>
        <TextField 
          id="outlined-number"
          placeholder={`Default count is ${defaultValue}s`}
          type="number"
          size='small'
          onChange={handleCountdown}
          disabled={isDisabled}
        />
      </Paper>
  )
}

export default Settings