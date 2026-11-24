import ProductList from "../../components/ProductList";
import useProducts from "../../../shared/hooks/useProducts";
import { useMemo, useState } from "react";
import ProductSearch from "../../components/ProductSearch";

function ProductPage() {
  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");


  // Search və Filter
  const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
}, [products, search]);



  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
 <div>
      <h1>Products</h1>

      <div>
        <ProductSearch
          search={search}
          setSearch={setSearch}
        />
      </div>

      <p>Found products: {filteredProducts.length}</p>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <h2>No products found!</h2>
      )}
    </div>
    </>
  );
}

export default ProductPage;
