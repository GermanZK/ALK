import styles from "./page.module.css";

const productData = [
  {
    id: "whiskey-01",
    name: "Oak Barrel Whiskey",
    description: "Smooth bourbon with hints of vanilla and toasted oak.",
    volume: "750 ml",
    price: "$48",
    rating: 4.8,
    category: "Whiskey",
    tag: "Best Seller",
  },
  {
    id: "gin-02",
    name: "Juniper Coast Gin",
    description: "Bright, botanical gin with citrus and spice notes.",
    volume: "700 ml",
    price: "$36",
    rating: 4.6,
    category: "Gin",
    tag: "New",
  },
  {
    id: "vodka-03",
    name: "Crystal Pure Vodka",
    description: "Ultra-clean vodka distilled for a soft, crisp finish.",
    volume: "1 L",
    price: "$28",
    rating: 4.4,
    category: "Vodka",
    tag: "Popular",
  },
  {
    id: "rum-04",
    name: "Golden Island Rum",
    description: "Caramel and tropical fruit flavors with a warm finish.",
    volume: "750 ml",
    price: "$34",
    rating: 4.5,
    category: "Rum",
    tag: "Limited",
  },
  {
    id: "wine-05",
    name: "Velvet Noir Red",
    description: "Full-bodied red wine with dark berry aromas.",
    volume: "750 ml",
    price: "$22",
    rating: 4.3,
    category: "Wine",
    tag: "Reserve",
  },
  {
    id: "sparkling-06",
    name: "Luna Sparkling Brut",
    description: "Elegant bubbles with crisp apple and pear notes.",
    volume: "750 ml",
    price: "$30",
    rating: 4.7,
    category: "Sparkling",
    tag: "Staff Pick",
  },
];

const categoryFilters = [
  "Whiskey",
  "Vodka",
  "Gin",
  "Rum",
  "Wine",
  "Sparkling",
];

const priceFilters = ["Under $25", "$25 - $40", "$40 - $60", "Over $60"];

const volumeFilters = ["500 ml", "700 ml", "750 ml", "1 L"];

export default function CatalogPage() {
  return (
    <section className={styles.catalogPage}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Catalog</span>
          <h1 className={styles.title}>Premium spirits for every occasion</h1>
          <p className={styles.subtitle}>
            Discover curated bottles, seasonal highlights, and handcrafted
            collections designed to elevate your bar.
          </p>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Products</span>
            <strong className={styles.statValue}>120+</strong>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Delivery</span>
            <strong className={styles.statValue}>30 min</strong>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Rating</span>
            <strong className={styles.statValue}>4.9</strong>
          </div>
        </div>
      </header>

      <div className={styles.toolbar}>
        <label className={styles.searchField}>
          <span className={styles.searchLabel}>Search</span>
          <input
            className={styles.searchInput}
            placeholder="Search by product or brand"
            type="search"
          />
        </label>
        <label className={styles.sortField}>
          <span className={styles.sortLabel}>Sort by</span>
          <select className={styles.sortSelect} defaultValue="popular">
            <option value="popular">Most popular</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>

      <div className={styles.content}>
        <aside className={styles.filters}>
          <div className={styles.filterHeader}>
            <h2 className={styles.filterTitle}>Filters</h2>
            <button className={styles.filterReset} type="button">
              Reset all
            </button>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterSectionTitle}>Category</h3>
            <div className={styles.filterGroup}>
              {categoryFilters.map((category) => (
                <button
                  className={styles.filterChip}
                  key={category}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterSectionTitle}>Price</h3>
            <div className={styles.filterList}>
              {priceFilters.map((price) => (
                <label className={styles.filterOption} key={price}>
                  <input type="checkbox" />
                  <span>{price}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterSectionTitle}>Bottle size</h3>
            <div className={styles.filterGroup}>
              {volumeFilters.map((volume) => (
                <button
                  className={styles.filterChip}
                  key={volume}
                  type="button"
                >
                  {volume}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterSectionTitle}>Availability</h3>
            <div className={styles.filterList}>
              <label className={styles.filterOption}>
                <input type="checkbox" defaultChecked />
                <span>In stock</span>
              </label>
              <label className={styles.filterOption}>
                <input type="checkbox" />
                <span>Express delivery</span>
              </label>
              <label className={styles.filterOption}>
                <input type="checkbox" />
                <span>Gift wrap</span>
              </label>
            </div>
          </div>
        </aside>

        <div className={styles.productSection}>
          <div className={styles.productHeader}>
            <div>
              <h2 className={styles.productTitle}>Catalog picks</h2>
              <p className={styles.productSubtitle}>
                Hand-selected bottles popular with our customers.
              </p>
            </div>
            <button className={styles.primaryButton} type="button">
              Explore collections
            </button>
          </div>

          <div className={styles.productGrid}>
            {productData.map((product) => (
              <article className={styles.productCard} key={product.id}>
                <div className={styles.productImage}>
                  <span className={styles.productTag}>{product.tag}</span>
                </div>
                <div className={styles.productBody}>
                  <div className={styles.productMeta}>
                    <span>{product.category}</span>
                    <span>{product.volume}</span>
                  </div>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                </div>
                <div className={styles.productFooter}>
                  <div>
                    <span className={styles.productPrice}>{product.price}</span>
                    <span className={styles.productRating}>
                      {product.rating} ★
                    </span>
                  </div>
                  <button className={styles.secondaryButton} type="button">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
