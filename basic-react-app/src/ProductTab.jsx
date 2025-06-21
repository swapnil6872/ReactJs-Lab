import Product from "./product";

function ProductTab() {
    let styles ={
        display:"flex",
        flex:"wrap",
        justifyContent:"center",
        alignItems:"center"
        
    }
    
    return (
        <div style={styles}>
              
            <Product title="logitech G402" idx={0} />
            <Product title="Apple pencil 2nd Gen" idx={1} />
            <Product title="Redmi pad pro 5g" idx={2}/>
            <Product title="Iphone 16 pro max" idx={3}/>
        </div>
    )
}

export default ProductTab;