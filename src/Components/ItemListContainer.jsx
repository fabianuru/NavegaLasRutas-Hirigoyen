import { useState, useEffect } from "react"

const ItemListContainer = ({welcome}) => {

const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products)) // ¡Ojo! la propiedad es `data.products`
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);


  return (
    <div 
    
    
    className="main">{welcome}

     <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
        </div>
      ))}
    </div>



    </div>
  )
}

export default ItemListContainer