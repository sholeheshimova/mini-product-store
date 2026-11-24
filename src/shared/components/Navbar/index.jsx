import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          MiniStore
        </Link>

        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
