import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'
import usePost from './hooks/usePost'
import useFetch from './hooks/usefetch'
import { useState } from 'react'
import usePrev from './hooks/usePrev'
import { useDebounce } from './hooks/useDebounce'

// custom hook 


function App(){

   function sendDataToBackend(){
      fetch('api.amazon.com/search/');
   }

   const debounceFn = useDebounce(sendDataToBackend);

   return(
      <>
      <input type="text"  onChange={debounceFn} />
      </>
   )


}

export default App












// this code part of useFetch and re-fetch hook
//  const [count,setCount] = useState(1);
//   const {finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+count,10);


//   if(loading){
//     return <div>
//        Loading
//     </div>
//   }

//   function incCount(){
//       setCount(count+1);
//   }

//   return (
//     <div>
//        <h1> {JSON.stringify(finalData)} </h1>
//        <button onClick={incCount} >count</button>
//     </div>
//   )


// use prev Hook
// function App() {

//  let [count , setCount]=useState(0);

//  let  prev = usePrev(count);


//  return(
//   <div>
    
//      <h1>{count}</h1>
//      <button onClick={()=>{ setCount(count+1)}} >click me</button>
//      <h2>this is prev value : {prev}</h2>
//   </div>
//  )
 
// }
