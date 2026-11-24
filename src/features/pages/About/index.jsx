import styles from "./about.module.css"

function About() {
    return <>
     <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>ABOUT MINI STORE</span>

          <h1>
            Shopping Made
            <span> Simple & Better</span>
          </h1>

          <p>
            Mini Store is your online destination for discovering
            amazing products. We believe shopping should be simple,
            enjoyable and accessible to everyone.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualCircle}></div>
          <div className={styles.visualCard}>
            <span>🛍️</span>
            <h2>Mini Store</h2>
            <p>More than just shopping.</p>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionCard}>
          <span>🎯</span>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make online shopping easier by
            bringing a variety of products together in one place.
          </p>
        </div>

        <div className={styles.missionCard}>
          <span>💡</span>
          <h2>Our Vision</h2>
          <p>
            We want to create a shopping experience where
            everyone can discover products they truly love.
          </p>
        </div>

        <div className={styles.missionCard}>
          <span>💙</span>
          <h2>Our Values</h2>
          <p>
            Quality, simplicity and customer satisfaction
            are at the heart of everything we do.
          </p>
        </div>
      </section>

      <section className={styles.statistics}>
        <div>
          <h2>1000+</h2>
          <p>Available Products</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Customer Focus</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Online Access</p>
        </div>

        <div>
          <h2>∞</h2>
          <p>New Discoveries</p>
        </div>
      </section>

      <section className={styles.bottom}>
        <h2>Discover Something Amazing!</h2>
        <p>
          Explore our collection and find your next favorite product.
        </p>
      </section>
    </div>
    </>
}

export default About