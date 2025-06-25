import { useState } from "react"

export default function CommentsForm(){


    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating: 5,
    })
 
    let handleInputChange =(event) =>{
        setFormData( (currData)=>{
            return {...currData,[event.target.name]:event.target.value}
        } )
    }
     let handleSubmit= (event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
              username:"",
        remarks:"",
        rating: 5,
        })
     }

    return (
        <div>
             <h4>Give a Comments</h4>

             <form action="" onSubmit={handleSubmit}>
                
                <label htmlFor="username">username</label> &nbsp; &nbsp;
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username" />
                <br /><br /><br />   
                 
                 <label htmlFor="remarks">Remarks</label> &nbsp; &nbsp;
                <textarea value={formData.remarks} placeholder="remarks" onChange={handleInputChange} id="remarks" name="remarks">Remarks</textarea>
                <br /><br /><br />
                
                <label htmlFor="rating">ratings</label> &nbsp; &nbsp;
                <input placeholder="rating" type="number" value={formData.rating} min={1} max={5} onChange={handleInputChange} id="rating" name="rating" />
                <br /><br /><br />

                <button>Add Comment</button>
             </form>
        </div>
    )
}