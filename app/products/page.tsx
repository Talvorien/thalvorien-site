import { productSections } from "./productData";

export default function ProductsPage() {
  return (
    <main className="productsPage">
      <header className="productsHeader">
        <a href="/" className="backLink">
          THALVORIEN
        </a>

        <nav className="productsNav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/size-guide">Size Guide</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="productsHero">
        <p className="productsEyebrow">Product Categories</p>
        <h1>Products</h1>
        <p>
          Our product range brings together textiles, printed clothing,
          accessories and carefully crafted canvas bags, developed for modern
          online retail.
        </p>

        <a href="/size-guide" className="sizeGuideLink">
          View Size Guide
        </a>
      </section>

      <section className="productSections">
        {productSections.map((section) => (
          <div className="productSection" key={section.title}>
            <div className="productSectionHeader">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>

            {section.products.length > 0 ? (
              <div className="productGrid">
                {section.products.map((product) => (
                  <a
                    className="productCard"
                    href={`/products/${product.slug}`}
                    key={product.slug}
                  >
                    <div className="productMainImage">
                      <img src={product.images[0]} alt={product.name} />
                    </div>

                    <div className="productInfo">
                      <h3>{product.name}</h3>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="comingSoonCard">
                <p>Coming Soon</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
