import styles from "./search.module.css"

function ProductSearch({search,setSearch}) {
    return (
      <div className={styles.search}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    )
}

export default ProductSearch