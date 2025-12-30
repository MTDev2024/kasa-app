import { useState } from "react";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";

export default function Carousel({ images }) {
  // Ici on initialise à l'index 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ici index +1
  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Ici index -1
  const goPrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Si pas d'image -> on n'affiche rien (return null)
  if (!images || images.length === 0) return null;

  // Là on affiche le carousel
  return (
    <div className="carousel">
      {/* L'image actuelle */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel__image"
      />

      {/* Si images.length > 1 on affiche les flèches et le compteur */}
      {images.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="carousel__btn carousel__btn--prev"
          >
            <img src={chevronLeft} alt="Précédent" />
          </button>

          <button
            onClick={goNext}
            className="carousel__btn carousel__btn--next"
          >
            <img src={chevronRight} alt="Suivant" />
          </button>

          {/* Ici on affiche le compteur */}
          <p className="carousel__counter">
            {currentIndex + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}
