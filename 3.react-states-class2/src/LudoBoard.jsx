import { useState } from "react"

export default function LudoBoard() {

    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr,setArr]=useState(["no moves"]);


    let updateBlue=()=>{
         moves.blue +=1;
        //  console.log(`moves.blue = ${moves.blue}`);
        // setMoves((prevMoves)=>{
        //     return {...prevMoves, blue:prevMoves.blue+1};
        // });
        arr.push('blue moves');
        setArr((prevArr) =>{
            return [...prevArr, "move arr"]
        })
        console.log(arr);
    }

     let updateyellow=()=>{
         moves.yellow +=1;
         console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow:prevMoves.yellow+1};
        });
    }

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                
                <p>Blue moves = {moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateyellow}>+1</button>
                <p>Green moves ={moves.green} </p>
                <button style={{ backgroundColor: "green" }}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }}>+1</button>
            </div>
        </div>
    )
}  