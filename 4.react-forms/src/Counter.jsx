import { useEffect, useState } from "react"

export default function Counter(){

    let [countx ,setCountx]=useState(0);
    let [county ,setCounty]=useState(0);

    let incCountx = () =>{
        setCountx((currCoun) => currCoun+1);
    }

      let incCounty = () =>{
        setCounty((currCoun) => currCoun+1)
    }
    useEffect(function print(){
        console.log("this is a side effect");
        
    },[ ]);

    return(
        <div>
            <h3>count ={countx}</h3>
            <button onClick={incCountx}>+1</button>

              <h3>count ={county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    )

}