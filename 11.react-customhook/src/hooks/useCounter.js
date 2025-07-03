import { useState} from 'react'
export default function useCounter(){
  const [count,setCount]=useState(0);
  
  function incCount(){
    setCount(count+1);
  }

  
    return {
      count:count,
      incCount:incCount

    }
    
}