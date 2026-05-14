export default function Home() {
  return (
    <>
     <main
  className="home"
  style={{
    backgroundImage: "url('/thalvorien-bg.png')",
  }}
>
        <div className="backgroundOverlay"></div>

        <header className="navbar">
          <div className="brand">THALVORIEN</div>

          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#collection">Collection</a>
            <a href="#message">Message</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="heroPanel">
          <p className="eyebrow">Form · Strength · Light</p>
          <h1>Textile & Gift Goods Brand</h1>
          <p className="heroText">
            A Türkiye-based brand shaped around refined textile products,
            lifestyle goods and curated gift items.
          </p>
          <a href="#contact" className="heroButton">
            Business Inquiry
          </a>
        </section>
      </main>

      <section id="about" className="section">
        <h2>About Thalvorien</h2>
        <p>
          Thalvorien is a Türkiye-based brand focused on textile products,
          lifestyle goods and selected gift items. The brand combines production
          experience with a clean, elegant and timeless design approach.
        </p>
      </section>

      <section id="collection" className="section">
        <h2>Collection</h2>
        <p>
          Textile Products · Printed Apparel · Home Textile · Gift Items ·
          Lifestyle Accessories
        </p>
      </section>

      <section id="message" className="section darkSection">
        <h2>Our Message</h2>
        <p>
          Inspired by light, built on strength. Thalvorien is more than what you
          wear, it is what you become.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>For business, wholesale or collaboration inquiries:</p>
        <p>info@thalvorien.com</p>
      </section>
    </>
  );
}
