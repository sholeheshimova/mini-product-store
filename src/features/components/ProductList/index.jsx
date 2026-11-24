import ProductCard from "../ProductCard";
import styles from "./list.module.css";

function ProductList({products}) {
    return (
       <div className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    )
}

export default ProductList