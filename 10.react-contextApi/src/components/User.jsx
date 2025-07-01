import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/Context"
const User = () => {

 
  const {users,setUser} = useContext(UserContext );
   
   console.log(users);
   
  
  return (
    <div>
        <h1 className="text-3xl ">Userlist</h1>
        <div className="mt-10 flex flex-col w-1/2 ">
         {users.map((u)=>(
             <Link key={u.id} to={`/user/${u.id}`}  className="mb-3 p-3 bg-red-100" >{u.username}</Link>
         ))}
        
        </div>
    </div>
  )
}

export default User