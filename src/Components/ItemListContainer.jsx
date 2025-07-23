import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ welcome }) => {
  const [products, setProducts] = useState([])

  const { category } = useParams();

  console.log(category)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);


  return (
    <main className="main">
      <h2>{welcome}</h2>
      <section >
        <ItemList products= {products} selectedCategory={category}/>
      </section>
    </main>



  )
}

export default ItemListContainer