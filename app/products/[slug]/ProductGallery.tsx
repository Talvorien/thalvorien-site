"use client";

import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="productInteractiveGallery">
      <div className="productActiveImage">
        <img src={activeImage} alt={productName} />
      </div>

      <div className="productThumbnailList">
        {images.map((image, index) => (
          <button
            type="button"
            className={
              image === activeImage
                ? "productThumbnail activeThumbnail"
                : "productThumbnail"
            }
            key={image}
            onClick={() => setActiveImage(image)}
            aria-label={`${productName} image ${index + 1}`}
          >
            <img src={image} alt={`${productName} view ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
