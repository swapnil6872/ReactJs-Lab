import { useEffect, useRef } from "react";

export function useDebounce(ogfunc){

    const currClock= useRef();
   
    const func = () =>{
        clearInterval(currClock.current);
        currClock.current = setTimeout(ogfunc,200);
    }
    return func;
}