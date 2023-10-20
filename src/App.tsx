import { useDispatch, useSelector } from 'react-redux'
import { Button, Box, Grid, Typography } from '@mui/material'

import { decrement, increment } from './features/counterSlice'
import { RootState } from './store'
import './App.css'
import Company from './components/Company'

function App() {
  
  return (
    <div className="App">
      <Company/>
   
    </div>
  )
}

export default App