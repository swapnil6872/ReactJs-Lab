function handleClick(){
    console.log("helloWorld");
}
function handleMouseOver(){
    console.log('byebye')
}
function handleDbclick(e){
    console.log('dbClicked');
    console.log(e)
}
export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa ducimus labore qui et architecto quia eos laudantium nulla unde deserunt sed laboriosam iure doloremque inventore, reiciendis animi voluptatem recusandae amet praesentium voluptatibus? Vero sequi eligendi numquam, natus similique ducimus veniam! Voluptatibus amet maiores, numquam veritatis suscipit eveniet laborum facere!</p>
            <button onDoubleClick={handleDbclick}>DbClick</button>
        </div>
    )
}