const categories = [
  {
    title: "Tops",
    description: "Blouses, shirts, tops,dresses and printed upperwear pieces.",
    image: "/products/tops.jpg",
  },
  {
    title: "Bottoms",
    description: "Trousers, skirts and complementary bottomwear pieces.",
    image: "/products/bottoms.jpg",
  },
  {
    title: "Accessories",
    description: "Selected lifestyle accessories designed to complete the look.",
    image: "/products/accessories.jpg",
  },
  {
    title: "Bags",
    description: "Carefully crafted canvas bags and textile-based carry goods.",
    image: "/products/bags.jpg",
  },
];

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
      </section>

      <section className="categoryGrid">
        {categories.map((category) => (
          <article className="categoryCard" key={category.title}>
            <div
              className="categoryImage"
              style={{
                backgroundImage: `url('${category.image}')`,
              }}
            ></div>

            <div className="categoryContent">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
