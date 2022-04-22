import React from 'react'
import Main from './components/Main'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Main />
    </MuiPickersUtilsProvider>
  )
}

export default App