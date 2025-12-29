import starFull from "../../assets/icons/star-full.svg";
import starEmpty from "../../assets/icons/star-empty.svg";

export default function Rating({ value }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Boucle sur chaque nombre */}
      {stars.map((position) => (
        // Pour chaque nombre, créer img
        <img
          // Opérateur ternaire -> étoile full ou empty
          src={position <= Number(value) ? starFull : starEmpty}
          alt="star"
          // Key unique pour React
          key={position}
          className="rating__star"
        />
      ))}
    </div>
  );
}
