import './App.css'
import Lottery from './Lottery'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Ticket from './Ticket'
import {Sum} from './helper'
function App() {

  let winCondition = (ticket)=>{
    return Sum(ticket) === 15 ;
  }

  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
