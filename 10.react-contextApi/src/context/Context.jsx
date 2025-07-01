import { createContext, useState } from "react"


export const UserContext = createContext();

const Context = (props) => {
     
   const [users,setUser]=useState([
  {
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
  },
  {
    "id": 2, 
    "email": "morrison@gmail.com",
    "username": "mor_2314",
    "password": "83r5^_",
  },
])
    return <UserContext.Provider value={{users,setUser}}>
        {props.children}
    </UserContext.Provider>  
}

export default Context