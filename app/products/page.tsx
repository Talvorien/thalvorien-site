const productSections = [
  {
    title: "Tops",
    description: "Blouses, shirts, jackets, dresses and printed upperwear pieces.",
    products: [
      {
        name: "Black Back Lace-Up Dress",
        images: [
          "/products/tops/tops-black-backlaceup-dress-1.png",
          "/products/tops/tops-black-backlaceup-dress-2.png",
          "/products/tops/tops-black-backlaceup-dress-3.png",
        ],
      },
      {
        name: "Black Basic T-Shirt",
        images: [
          "/products/tops/tops-black-basic-tshirt-1.png",
          "/products/tops/tops-black-basic-tshirt-3.png",
          "/products/tops/tops-black-basic-tshirt-4.png",
        ],
      },
      {
        name: "Black Beat Move Printed Blouse",
        images: [
          "/products/tops/tops-black-beatmoveprinted-blouse-1.png",
          "/products/tops/tops-black-beatmoveprinted-blouse-2.png",
          "/products/tops/tops-black-beatmoveprinted-blouse-3.png",
        ],
      },
      {
        name: "Black White Blouse",
        images: [
          "/products/tops/tops-blackwhite-blouse-1.png",
          "/products/tops/tops-blackwhite-blouse-2.png",
          "/products/tops/tops-blackwhite-blouse-3.png",
          "/products/tops/tops-blackwhite-blouse-4.png",
        ],
      },
      {
        name: "Blue Jean Jacket",
        images: [
          "/products/tops/tops-blue-jean-jacket-1.png",
          "/products/tops/tops-blue-jean-jacket-2.png",
        ],
      },
      {
        name: "Dark Blue Dress",
        images: [
          "/products/tops/tops-darkblue-dress-1.png",
          "/products/tops/tops-darkblue-dress-2.png",
          "/products/tops/tops-darkblue-dress-3.png",
        ],
      },
      {
        name: "Khaki Dress",
        images: [
          "/products/tops/tops-khaki-dress-1.png",
          "/products/tops/tops-khaki-dress-2.png",
          "/products/tops/tops-khaki-dress-3.png",
          "/products/tops/tops-khaki-dress-4.png",
        ],
      },
      {
        name: "Light Blue Shirt",
        images: [
          "/products/tops/tops-lightblue-shirt-1.png",
          "/products/tops/tops-lightblue-shirt-2.png",
        ],
      },
      {
        name: "Red Blouse",
        images: [
          "/products/tops/tops-red-blouse-1.png",
          "/products/tops/tops-red-blouse-3.png",
          "/products/tops/tops-red-blouse-4.png",
        ],
      },
      {
        name: "White Printed Blouse",
        images: [
          "/products/tops/tops-white-printed-blouse-1.png",
          "/products/tops/tops-white-printed-blouse-2.png",
          "/products/tops/tops-white-printed-blouse-3.png",
        ],
      },
    ],
  },
  {
    title: "Bottoms",
    description: "Trousers, skirts and complementary bottomwear pieces.",
    products: [
      {
        name: "Black Elastic Waist Trousers",
        images: [
          "/products/bottoms/bottoms-black-elasticwaist-trousers-1.png",
          "/products/bottoms/bottoms-black-elasticwaist-trousers-2.png",
          "/products/bottoms/bottoms-black-elasticwaist-trousers-3.png",
        ],
      },
      {
        name: "Blue Jean Skirt",
        images: [
          "/products/bottoms/bottoms-blue-jean-skirt-1.png",
          "/products/bottoms/bottoms-blue-jean-skirt-2.png",
        ],
      },
      {
        name: "Blue Green Jeans",
        images: [
          "/products/bottoms/bottoms-bluegreen-jeans-1.png",
          "/products/bottoms/bottoms-bluegreen-jeans-2.png",
        ],
      },
    ],
  },
  {
    title: "Accessories",
    description: "Selected lifestyle accessories designed to complete the look.",
    products: [],
  },
  {
    title: "Bags",
    description: "Carefully crafted canvas bags and textile-based carry goods.",
    products: [
      {
        name: "Black Canvas Tote",
        images: [
          "/products/bags/bags-canvas-tote-black-middle-1.png",
          "/products/bags/bags-canvas-tote-black-middle-2.png",
          "/products/bags/bags-canvas-tote-black-middle-3.png",
        ],
      },
      {
        name: "White Canvas Tote",
        images: [
          "/products/bags/bags-canvas-tote-white-middle-1.png",
          "/products/bags/bags-canvas-tote-white-middle-2.png",
        ],
      },
    ],
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
                  <article className="productCard" key={product.name}>
                    <div className="productMainImage">
                      <img src={product.images[0]} alt={product.name} />
                    </div>

                    <div className="productInfo">
                      <h3>{product.name}</h3>
                    </div>

                    <div className="productGallery">
                      {product.images.map((image, index) => (
                        <img
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          key={image}
                        />
                      ))}
                    </div>
                  </article>
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
