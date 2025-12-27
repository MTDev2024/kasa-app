import Banner from "../components/ui/Banner";
import bannerImage from "../assets/images/banner-home.jpg";

export default function Home() {
  return (
    <>
      <Banner
        image={bannerImage}
        text="Chez vous, partout et ailleurs"
        alt="Paysage de montagne"
      />
    </>
  );
}
