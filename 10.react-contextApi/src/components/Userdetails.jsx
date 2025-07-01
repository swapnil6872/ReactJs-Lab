import { useContext } from "react"
import { UserContext } from "../context/Context"
import { Navigate, useNavigate, useParams } from "react-router-dom";


const Userdetails = () => {
  
  const {id}= useParams();
  const {users} = useContext(UserContext);
  const Navigate = useNavigate();

 
  return (
    <div>
      <h1 className="text-red-200 text-2xl font-bold">{users[id].username}</h1>
        <h1 className="text-red-200 text-2xl font-bold">{users[id].email}</h1>
          <h1 className="text-red-200 text-2xl font-bold">{users[id].password}</h1>

          <button className="bg-red-100 p-2 mt-5 rounded" onClick={()=>( Navigate(-1))}>go back</button>
    </div>

  )
}

export default Userdetails