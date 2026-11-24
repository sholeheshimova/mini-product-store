import { useNavigate } from "react-router-dom"
import styles from "./home.module.css"

function Home() {

    const navigate = useNavigate()
    return <>
 <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.badge}>✨ YOUR DAILY SHOPPING DESTINATION</span>

          <h1>
            Find Your
            <span> Perfect Style</span>
          </h1>

          <p>
            Explore our collection of amazing products.
            Quality, style and great prices — all in one place.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.primaryBtn}
              onClick={() => navigate("/products")}
            >
              Shop Now →
            </button>

            <button
              className={styles.secondaryBtn}
              onClick={() => navigate("/about")}
            >
              Discover More
            </button>
          </div>

          <div className={styles.stats}>
            <div>
              <h3>1000+</h3>
              <span>Products</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Support</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Quality</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.circle}></div>

          <div className={styles.shoppingCard}>
            <span className={styles.shoppingIcon}>🛍️</span>
            <h2>Mini Store</h2>
            <p>Everything you love, in one place.</p>
          </div>

          <div className={styles.floatingCard}>
            <span>⭐</span>
            <div>
              <strong>Great Deals</strong>
              <small>Just for you</small>
            </div>
          </div>

          <div className={styles.floatingCardTwo}>
            🚚 Free Shopping Experience
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <span>🚀</span>
          <div>
            <h3>Fast Shopping</h3>
            <p>Easy and convenient shopping experience.</p>
          </div>
        </div>

        <div className={styles.featureCard}>
          <span>💎</span>
          <div>
            <h3>Quality Products</h3>
            <p>Discover products you'll love.</p>
          </div>
        </div>

        <div className={styles.featureCard}>
          <span>💳</span>
          <div>
            <h3>Best Prices</h3>
            <p>Great products at great prices.</p>
          </div>
        </div>
      </section>
    </div>
    </>
}

export default Home