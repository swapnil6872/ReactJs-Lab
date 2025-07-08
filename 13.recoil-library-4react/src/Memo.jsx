import { useEffect, useState } from 'react'
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'
import { memo } from 'react'
function Memo() {

  return (
    <>
      <Counter />
    </>
  )
}

function Counter() {
  
  const [count , setCount]=useState(0)
  console.log("rerender counterMain");
  

  useEffect( ()=>{
  setInterval(()=>{
   setCount((c)=> c+1);
  },3000)
  },[])

  return <div>
    <CurrCount />
    <Increase />
    <Decrease />
  </div>
}

const CurrCount=memo( function CurrCount() {
  console.log("rerender CurrCounter");
  return <div>
     1
  </div>

})

const Increase= memo( function Increase() {
console.log("rerender Inc");
 
  function inc() {
    
  }

  return <div>
    <button onClick={inc}>Increase</button>
  </div>
})

const Decrease =memo(function Decrease() {
console.log("rerender Dec");
 
  function dec() {
    
  }

  return <div>
    <button onClick={dec}>Decrease</button>
  </div>
})

export default Memo

