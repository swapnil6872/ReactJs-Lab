import { Link,Outlet } from "react-router-dom"

Link
export default function User() {

    return (
        <div className=" w-1/2 m-auto mt-10 ">
            <h1 className="text-red-200 text-5xl mb-2">User</h1>

            <div className="flex w-1/2 flex-col mt-5">
                <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
                    to="/user/harsh" >
                    Harsh</Link>
                <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
                    to="/user/swapnil" >
                    Swapnil</Link>
                <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
                    to="/user/aditya" >
                    Aditya</Link>
                    <hr />
                    <Outlet/>
            </div>
        </div>
    )

}