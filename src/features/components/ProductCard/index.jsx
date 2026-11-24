import styles from "./card.module.css";
import {useNavigate} from "react-router-dom"

function ProductCard({ product }) {

  const navigate = useNavigate()
  return (
    <>
      <div className={styles.card}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
        />

        <h3 className={styles.title}>{product.title}</h3>

        <p className={styles.price}>${product.price}</p>

        <p className={styles.rating}>⭐ {product.rating}</p>

        <button className={styles.button} onClick={() => navigate(`/products/${product.id}`)}>Details</button>
      </div>
    </>
  );
}

export default ProductCard;
