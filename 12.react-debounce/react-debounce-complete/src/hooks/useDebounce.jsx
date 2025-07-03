import { useEffect,useState } from "react";


function useDebounce(value,delay=500,) {

    const  [debounceValue,setDebonceValue]=useState(value);

    useEffect(()=>{
        const id = setTimeout(()=>{
            console.log('set new time');
            setDebonceValue(value);
        },delay);

         return ()=> {
            console.log('clearTimeOut');
            clearTimeout(id);
         }

    },[value,delay]);
   
  return debounceValue;
}

export default useDebounce