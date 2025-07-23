const ItemList = ({ products, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p><strong>${product.price}</strong></p>
          </div>
        ))
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </>
  );
};

export default ItemList;
