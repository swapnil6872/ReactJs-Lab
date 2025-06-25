import { useState } from "react"

export default function Form() {

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    })

    let handleInputChange = (event) => {
        // let fieldname = event.target.name;
        // let newVaue = event.target.value;
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Fullname</label>
            <input placeholder="Enter Yout Fullname" type="text" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName" />

            <br />

            <label htmlFor="username">username</label>
            <input placeholder="Enter Yout username" type="text" value={formData.userName} onChange={handleInputChange} id="username" name="userName" />

            <br />

            <label htmlFor="password">password</label>
            <input placeholder="Enter Yout password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password" />

            <br />
            <button>Submit</button>
        </form>
    )
}