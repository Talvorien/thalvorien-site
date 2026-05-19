const knittedTops = [
  ["Bust (cm)", 116, 120, 124, 128, 132, 136, 140, 144, 148, 152],
  ["Waist (cm)", 115, 119, 123, 127, 131, 135, 139, 143, 147, 151],
  ["Hip (cm)", 120, 124, 128, 132, 136, 140, 144, 148, 152, 156],
];

const wovenTops = [
  ["Bust (cm)", 120, 124, 130, 136, 142, 148, 154, 160, 166, 172],
  ["Waist (cm)", 119, 123, 129, 135, 141, 147, 153, 159, 165, 171],
  ["Hip (cm)", 124, 128, 134, 140, 146, 152, 158, 164, 170, 174],
];

const fabricTrousers = [
  ["Waist (cm)", 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120],
  ["Hip (cm)", 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144],
];

const denimTrousers = [
  ["Waist (cm)", 80, 84, 88, 92, 97, 102, 107, 112, 117, 122, 127],
  ["Hip (cm)", 92, 96, 100, 104, 109, 114, 119, 124, 129, 134, 139],
];

function SizeTable({
  title,
  sizes,
  rows,
}: {
  title: string;
  sizes: number[];
  rows: (string | number)[][];
}) {
  return (
    <section className="sizeTableBlock">
      <h2>{title}</h2>

      <div className="sizeTableScroll">
        <table className="sizeTable">
          <thead>
            <tr>
              <th>Size</th>
              {sizes.map((size) => (
                <th key={size}>{size}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th key={cell}>{cell}</th>
                  ) : (
                    <td key={`${row[0]}-${cell}`}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function SizeGuidePage() {
  return (
    <main className="sizeGuidePage">
      <header className="sizeGuideHeader">
        <a href="/" className="backLink">
          THALVORIEN
        </a>

        <nav className="productsNav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="sizeGuideHero">
        <p className="productsEyebrow">Size Guide</p>
        <h1>Size Guide</h1>
        <p>
          Use the measurements below as a general guide. Measurements are given
          in centimeters and may vary slightly depending on fabric, fit and
          product style.
        </p>
      </section>

      <section className="sizeGuideContent">
        <section className="specialSizeBlock">
          <h2>Upper Body - Special Size Group</h2>

          <div className="sizeTableScroll">
            <table className="sizeTable">
              <thead>
                <tr>
                  <th>Size Group</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Special</th>
                  <td>44-46</td>
                  <td>48-50</td>
                  <td>52-54</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <SizeTable
          title="Knitted Tops"
          sizes={[44, 46, 48, 50, 52, 54, 56, 58, 60, 62]}
          rows={knittedTops}
        />

        <SizeTable
          title="Woven Tops"
          sizes={[44, 46, 48, 50, 52, 54, 56, 58, 60, 62]}
          rows={wovenTops}
        />

        <SizeTable
          title="Fabric Trousers"
          sizes={[42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62]}
          rows={fabricTrousers}
        />

        <SizeTable
          title="Denim Trousers"
          sizes={[42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62]}
          rows={denimTrousers}
        />
      </section>
    </main>
  );
}
