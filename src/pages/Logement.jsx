import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Tag from "../components/ui/Tag";

export default function Logement() {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const logement = logements.find((l) => l.id === id); // Trouve le logement

  return (
    <div>
      <h1>{logement.title}</h1>

      {/* Affiche tous les tags */}
      <div className="logement__tags">
        {logement.tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
}
