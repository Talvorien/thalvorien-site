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
          <a href="#" className="brand">
            THALVORIEN
          </a>

          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#collection">Collection</a>
            <a href="#message">Message</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        
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
        <p className="emailText">info@thalvorien.com</p>
      </section>
    </>
  );
}
