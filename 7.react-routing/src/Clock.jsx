import { useRef, useState } from "react"

// a clock with a start and a stop  buton
export default function Clock(){
    const [currcount , serCurrCount] = useState(1);
    const timer= useRef();


    function startClock(){
        let value =setInterval(function(){
           serCurrCount((c)=> c+1 );  
        },1000);
        timer.current=value;
    }

    function stopClock(){
      clearInterval(timer.current);
    }
    return (
        <div>
           {currcount}
           <br />
           <button onClick={startClock}>Start</button>
           <button onClick={stopClock}>Stop</button>
        </div>
    )
}