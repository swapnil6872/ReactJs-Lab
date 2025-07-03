import { useEffect, useRef } from "react";

export default function usePrev(count){

     const ref = useRef();
      // 1. render component

     useEffect(()=>{
        //3 . now update the ref new value
        ref.current= count;
     },[count]);

   // 2.  now retun current value 
     return(
        ref.current
     )

}

    // so basically tha flow is in my case first ref value is undefined 
    //  function return the undefined 
    // after the return useEffect get called and update ref new value with count that 0.


    // useCases : like in spotify last played music stores.