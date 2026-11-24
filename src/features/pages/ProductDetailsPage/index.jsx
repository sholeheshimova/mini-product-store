import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../../../shared/services/productsApi";
import styles from "./detail.module.css";
import useProductById from "../../../shared/hooks/useProductById";

function ProductDetails() {
  const { id } = useParams();

  const { product, loading } = useProductById(id);

  const navigate = useNavigate();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.backButton}
          onClick={() => navigate("/products")}
        >
          ← Back to Products
        </button>

        <div className={styles.details}>
          <div className={styles.imageSection}>
            <span className={styles.category}>{product.category}</span>

            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.image}
            />
          </div>

          <div className={styles.infoSection}>
            <span className={styles.brand}>{product.brand}</span>

            <h1>{product.title}</h1>

            <div className={styles.rating}>
              ⭐ {product.rating} / 5<span>Customer Rating</span>
            </div>

            <h2 className={styles.price}>${product.price}</h2>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.stock}>
              <span className={styles.stockDot}></span>
              {product.stock > 0
                ? `${product.stock} items available`
                : "Out of stock"}
            </div>

            <div className={styles.extraInfo}>
              <div>
                <span>Category</span>
                <strong>{product.category}</strong>
              </div>

              <div>
                <span>Brand</span>
                <strong>{product.brand}</strong>
              </div>

              <div>
                <span>Product ID</span>
                <strong>#{product.id}</strong>
              </div>
            </div>

            <button
              className={styles.shopButton}
              onClick={() => navigate("/products")}
            >
              Explore More Products →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
