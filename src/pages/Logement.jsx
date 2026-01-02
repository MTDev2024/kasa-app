import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/ui/Carousel";
import Tag from "../components/ui/Tag";
import Rating from "../components/ui/Rating";
import Host from "../components/ui/Host";
import Collapse from "../components/ui/Collapse";

export default function Logement() {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const logement = logements.find((l) => l.id === id); // Trouve le logement

  // Si le logement n'existe pas, rediriger vers 404
  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement">
      {/* 
  Le titre est passé au Carousel pour créer des attributs alt accessibles.
  Format généré : "Titre du logement - Photo X sur Y"
  (le JSON ne fournit pas de descriptions d'images)
*/}
      <Carousel images={logement.pictures} title={logement.title} />

      <div className="logement__header">
        <div className="logement__info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating value={logement.rating} />
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
