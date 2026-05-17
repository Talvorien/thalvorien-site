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
  <a href="#about">Brand</a>
  <a href="#collection">Products</a>
  <a href="#message">Vision</a>
  <a href="#contact">Contact</a>
</nav>
        </header>

        
      </main>

      <section id="about" className="section">
        <h2>About Thalvorien</h2>
        <p>
          Thalvorien is a textile and lifestyle brand shaped by strength, elegance
  and a refined sense of form.
        </p>
      </section>

      <section id="collection" className="section">
        <h2>Collection</h2>
        <p>
          Our product range brings together textiles, printed clothing, accessories
    and carefully crafted canvas bags, developed for modern online retail.
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
