import Banner from "../components/ui/Banner";
import Card from "../components/ui/Card";
import bannerImage from "../assets/images/banner-home.jpg";
import logements from "../data/logements.json";

export default function Home() {
  return (
    <>
      <Banner
        image={bannerImage}
        text={
          <>
            Chez vous, <br className="banner__break" />
            partout et ailleurs
          </>
        }
        alt="Paysage de montagne"
      />

      <div className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </>
  );
}
