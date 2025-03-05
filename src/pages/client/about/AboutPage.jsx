import Hero from "../../../components/commonComponents/Hero/Hero";
import SponsorSwiper from "../../../components/commonComponents/SponsorSwiper/SponsorSwiper";
import TextField from "../../../components/commonComponents/TextField/TextField";
import Cards from "../../../components/pageComponents/HomePage/Cards/Cards";
import Article from "../../../components/pageComponents/ServicesPage/Article/Article";
import useArticle from "../../../hooks/useArticle";

const AboutPage = () => {
  //Use the useArticle hook to fetch the one article we need on this page.
  const { article, loading, error, noDataMessage } =
    useArticle("Om Gowala Farms");

  return (
    <div>
      <Hero title="Om Gowala Farms" text="Vores kvalitet og service" />

      {loading && <p>Loading...</p>}
      {noDataMessage && <p>{noDataMessage}</p>}

      {article && <Article article={article} />}

      <TextField
        title="Vores partnere"
        optTitle="er vi stolte af"
        text="Hos Gowala Farms samarbejder vi med nøje udvalgte partnere, der deler vores værdier om kvalitet, bæredygtighed og dyrevelfærd. Gennem disse partnerskaber sikrer vi, at vores produkter altid lever op til de højeste standarder."
        boldTitle={true}
      />
      <SponsorSwiper images={["/sponsors/04.png", "/sponsors/03.png"]} />
      <TextField
        title="Den førende mælkeproducent"
        optTitle="Sund og nærende mælk siden 1975"
        boldOptTitle={true}
      />
      <Cards />
    </div>
  );
};

export default AboutPage;
