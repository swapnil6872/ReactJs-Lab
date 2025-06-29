import { useNavigate, useParams } from "react-router-dom"
import User from "./User"

function UserDetail() {
    const d = useParams();
    const navigate =useNavigate();

    function handleBack(){
    //    navigate('/user')
       navigate(-1);
    }

    return (
        <div className=" w-1/2 m-auto mt-10 ">
            <h1 className="text-red-200 text-5xl mb-2">UserDetails </h1>

            <h1 className="text-3xl ">Hello!!! {d.name}</h1>
            <button onClick={handleBack} className="mt-5 text-white p-3 bg-zinc-300">Go Back</button>
        </div>

    )
}

export default UserDetail