import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();

  return (
    <div>
      <h1>Logement</h1>
      <p>ID du logement : {id}</p>
    </div>
  );
}

export default Logement;
