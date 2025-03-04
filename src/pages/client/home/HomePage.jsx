import Button from "../../../components/commonComponents/Button/Button";
import Employees from "../../../components/commonComponents/Employees/Employees";
import Newsletter from "../../../components/commonComponents/Newsletter/Newsletter";
import Products from "../../../components/commonComponents/Products/Products";
import SponsorSwiper from "../../../components/commonComponents/SponsorSwiper/SponsorSwiper";
import TextField from "../../../components/commonComponents/TextField/TextField";
import Cards from "../../../components/pageComponents/HomePage/Cards/Cards";
import SwiperHero from "../../../components/pageComponents/HomePage/SwiperHero/SwiperHero";

const HomePage = () => {
  return (
    <div>
      <SwiperHero
        images={[
          "/headerslider/01.jpg",
          "/headerslider/02.jpg",
          "/headerslider/03.jpg",
          "/headerslider/04.jpg",
        ]}
        title="Gowala Farms"
        description="The Complete Milk"
        button="Read More"
      />
      <TextField
        title="Den førende mælkeproducent"
        optTitle="Sund og nærende mælk siden 1975"
        boldOptTitle={true}
      />
      <Cards />
      <TextField
        title="Vores produkter"
        optTitle="Vi har udvalgt de bedste produkter"
        text="Her finder du et udvalg af friske mejeriprodukter og kvalitetskød fra Gowala Farms - direkte fra gården til dit bord."
        boldTitle={true}
      />
      <Products randomize={true} maxItems={4} />
      <Button buttonText="Se alle produkter" />
      <TextField
        backgroundImage="/blob_02.jpg"
        title="Vores hold"
        optTitle="2000+ ansatte siden 1975"
        text="De ansatte på Gowala Farms er passionerede fagfolk, der med omsorg og ekspertise sikrer sunde dyr og produkter af højeste kvalitet."
      />
      <Employees />
      <Newsletter/>
      <SponsorSwiper images={["/sponsors/01.png", "/sponsors/02.png", "/sponsors/03.png", "/sponsors/04.png", "/sponsors/05.png"]}/>
    </div>
  );
};

export default HomePage;
