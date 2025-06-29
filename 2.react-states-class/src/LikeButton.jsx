import { useState } from "react";

export default function Likebutton() {

    let [isliked, setLiked] = useState(false);
    let [count,setCount] = useState(0);
    console.log(`count is ${count} `);


    let toggleLike = () => {
        setLiked(!isliked);
        setCount(count+1);
        console.log(`count in render ${count}`);
    }
    
    let likedStyle = {color:"red"};
    return (
        
        <div>
            <p>count = {count}</p>
            <p onClick={toggleLike} >
                {isliked ? (<i style={likedStyle} class="fa-solid fa-heart"> </i>) : (<i style={likedStyle} class="fa-regular fa-heart"></i>)}
            </p>
        </div>
    )
}