import React from 'react'
import './result.scss'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper
  } from '@mui/material';

const Result = ({text, countdown}) => {

    const calculateWordcount = () => {
        if (text !== '') {
          return text.trim().split(' ').length;
        } else return 0;
    };
    
  return (
    <TableContainer component={Paper} className="result-table">
      <Table aria-label="result-table">
        <TableBody>
          <TableRow>
            <TableCell>CountDown:</TableCell>
            <TableCell>{countdown}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Word Count:</TableCell>
            <TableCell>{calculateWordcount()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default Result;