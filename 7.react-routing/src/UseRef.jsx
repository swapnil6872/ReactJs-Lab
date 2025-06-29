import { useRef } from "react";

export default function UseRef(){

    const inputref =useRef();

    function focusOnInput(){
        // document.getElementById("name").focus();
        inputref.current.focus();
    }

    return (
          <div>
            SIGNUP
            <input ref={inputref} type="text"/>
            <input type="text" />
            <button onClick={focusOnInput}>Submit</button>
          </div>
    )
}