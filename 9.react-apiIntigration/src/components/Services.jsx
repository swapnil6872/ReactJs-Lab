import { useEffect, useState } from "react";
import axios from "../utils/Axios"

function Services() {

  const [first ,setFirst]= useState('this is a normal Data');
  const [second,setSecond]=useState('this is a very Large Data');

  const getUsers = () => {
  

    axios.get("/users").then( users=> {
      console.log(users);

    }).catch((err) => { console.log(err) });
  }

     useEffect( ()=>{
      getUsers()
        console.log('service is creating'); 
        return()=>{
            console.log('service component deleted') 
        }
     },[second]);

  return (
    <div> 

      <h1>{first}</h1>
      <button onClick={()=>{setFirst("normal data has been canged")}} className= "rounded bg-red-100 p-2 mb-10" >Change Normal Data</button>

      <h1>{second}</h1>
          <button onClick={()=>{setSecond("Large data has been canged")}} className="rounded bg-red-100 p-2 mb-10">Large Data</button>
       </div>
  )
}
export default Services