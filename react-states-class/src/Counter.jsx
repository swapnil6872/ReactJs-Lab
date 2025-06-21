import { useState } from "react";

export default function Counter(){
    
    // let [stateVariable,setStateVariable]= useState(0);
    let [count,setCount]=useState(0)

    let incCount = ()=>{
    //   setCount(count+1);
      // console.log(count);

      setCount((currCount)=>{  // callback function used to update the value becouse setCount works asynchronously
        return currCount+1;
      })
           setCount((currCount)=>{
        return currCount+1;
      })
    }

  
    return(
        <div>
            <h3> count = {count}</h3>
            <button onClick={incCount}>increaseCount</button>
        </div>

    )
}