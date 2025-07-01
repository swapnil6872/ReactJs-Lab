import axios from "../utils/Axios"
import { useEffect, useState } from "react";

function Show() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProduct()

  }, [])

  const getProduct = () => {
               
    axios.get("/products")
    .then((res) => {
      setProducts(res.data)
      // console.log(products);
    }).catch((err) => { console.log(err) });
  }
  return (

    <>
      {/* <button className="rounded px-5 py-2 bg-red-300" onClick={getProduct}>call api</button> */}
      <hr />
      <ul className="pt-10 ">

        {products.length > 0 ? products.map( (p) => <li key={p.id} className="rounded mb-2  p-5 bg-red-200">{p.title} </li>) : <h1>Loading.....</h1>}

      </ul>

    </>
  )
}

export default Show