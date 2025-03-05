import Hero from "../../../components/commonComponents/Hero/Hero";
import Newsletter from "../../../components/commonComponents/Newsletter/Newsletter";
import Articles from "../../../components/pageComponents/ServicesPage/Articles";

const ServicesPage = () => {
  return (
    <div>
      <Hero title="Gowala tilbyder" text="Hvad vi tilbyder vores forbrugere"/>
      <Articles/>
      <Newsletter/>
    </div>
  );
};

export default ServicesPage;
