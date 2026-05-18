import { notFound } from "next/navigation";
import { allProducts } from "../productData";

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="productDetailPage">
      <header className="productsHeader">
        <a href="/" className="backLink">
          THALVORIEN
        </a>

        <nav className="productsNav">
          <a href="/products">Products</a>
          <a href="/size-guide">Size Guide</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="productDetailLayout">
        <div className="productDetailGallery">
          {product.images.map((image, index) => (
            <div className="productDetailImage" key={image}>
              <img src={image} alt={`${product.name} view ${index + 1}`} />
            </div>
          ))}
        </div>

        <aside className="productDetailInfo">
          <p className="productCategory">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="productDescription">{product.description}</p>

          <div className="productDetailsBlock">
            <h2>Product Details</h2>
            <ul>
              {product.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>

          {product.sizeGuide ? (
            <a href={product.sizeGuide} className="sizeGuideLink">
              View Size Guide
            </a>
          ) : (
            <p className="bagMeasureNote">
              Bag measurements can be added to this product page.
            </p>
          )}

          <a href="/products" className="backToProducts">
            Back to Products
          </a>
        </aside>
      </section>
    </main>
  );
}
