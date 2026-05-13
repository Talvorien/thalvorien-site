export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-[#f2efe9]">
      
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 border-b border-[#2a2a2d]">
        
        <div className="w-24 h-24 rounded-full border border-[#6b5a4a] flex items-center justify-center text-4xl tracking-[0.2em] text-[#c9a67b] mb-8">
          TV
        </div>

        <h1 className="text-5xl md:text-7xl uppercase tracking-[0.35em] text-[#d8c1a5]">
          THALVORIEN
        </h1>

        <p className="mt-8 text-lg md:text-xl text-[#b7b1aa] max-w-2xl leading-8">
          Inspired by light. Built on strength.
        </p>

      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#8f7a63] mb-6">
            Our Philosophy
          </p>

          <h2 className="text-4xl md:text-5xl leading-tight mb-8">
            Quiet luxury with timeless structure.
          </h2>

          <p className="text-[#aaa49d] leading-8 text-lg">
            THALVORIEN represents refined silhouettes,
            architectural simplicity, and modern elegance.
            Designed for individuals who value identity over noise.
          </p>
        </div>

        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#2f2f32]">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
            alt="Editorial"
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      {/* COLLECTION */}
      <section className="border-t border-[#2a2a2d] px-6 py-28">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-[#8f7a63] mb-4">
              Collection
            </p>

            <h2 className="text-4xl md:text-5xl">
              Signature Pieces
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
            ].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[2rem] border border-[#2a2a2d]"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={image}
                    alt="Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2a2a2d] py-16 px-6 text-center">

        <h3 className="text-3xl tracking-[0.3em] uppercase text-[#d8c1a5] mb-6">
          THALVORIEN
        </h3>

        <p className="text-[#9d9891]">
          contact@thalvorien.com
        </p>

      </footer>

    </main>
  );
}