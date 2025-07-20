import { useState, useEffect } from "react"

const ItemListContainer = ({welcome}) => {

const [products, setProducts] = useState([])

useEffect(()=> {
  fetch("https://dummyjson.com/products")
  .then((response)=> {return response.json()})
  .then((products)=> {
    setProducts(products)
  })
  
},[])


  return (
    <div 
    
    
    className="main">{welcome}

    <div>
      {JSON.stringify(products)}
    </div>



    </div>
  )
}

export default ItemListContainer