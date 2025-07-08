import { useState } from 'react'
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'
function App() {

  return (
    <>
      <Counter />
    </>
  )
}

function Counter() {

  return <div>
    <CurrCount />
    <Increase />
    <Decrease />
  </div>
}

function CurrCount() {
  const count = useRecoilValue(counterAtom)
  return <div>
    {count}
  </div>

}

function Increase() {

  const setCount =  useSetRecoilState(counterAtom)
  function inc() {
    setCount(c => c + 1);
  }

  return <div>
    <button onClick={inc}>Increase</button>
  </div>
}

function Decrease() {

  const setCount = useSetRecoilState(counterAtom)
  function dec() {
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={dec}>Decrease</button>
  </div>
}


export default App

