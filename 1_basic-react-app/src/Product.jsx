import "./Product.css"
import Price from "./Price";

function Product({ title,idx }) {
  let oldPrice = ["2,500","9,000","21,000","140000"]
  let newPrice = ["2,000","8,000","20,000","130000"]
  let Description=[ 
    ["8000dpi","gaming best"],["smooth writing","low latecy"] , ["best display in sagment","12ich display" ], ["new apple intaligence,A17 powerfull cheap"]]

  return (
    <div className="Product" >
     <h4>{title}</h4>
     <p>{Description[idx][0]},</p>
     <p>{Description[idx][1]}</p>
     <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
  )
}

export default Product;