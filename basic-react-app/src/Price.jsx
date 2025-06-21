export default function Price({oldPrice, newPrice}){

    let oldStyles={
        textDecorationLine:"line-through",
    }
    let newStyle={
        fontWeight:"bold"
    }
    let styles={
        backgroundColor:"#e0c367",
        borderBottomLeftRadius:"12px",
        borderBottomRightRadius:"12px",
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
             &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
} 