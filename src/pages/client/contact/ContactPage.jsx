import Employees from "../../../components/commonComponents/Employees/Employees";
import Hero from "../../../components/commonComponents/Hero/Hero";
import TextField from "../../../components/commonComponents/TextField/TextField";
import ContactForm from "../../../components/pageComponents/ContactPage/ContactForm/ContactForm";
import ContactInfo from "../../../components/pageComponents/ContactPage/ContactInfo/ContactInfo";

const ContactPage = () => {
  return (
    <div>
      <Hero title="Kontakt Gowala" text="Vores kontaktinformationer" />
      <ContactForm />
      <ContactInfo />
      <TextField
        backgroundImage="/blob_02.jpg"
        title="Vores hold"
        optTitle="2000+ ansatte siden 1975"
        text="De ansatte på Gowala Farms er passionerede fagfolk, der med omsorg og ekspertise sikrer sunde dyr og produkter af højeste kvalitet."
      />
      <Employees />
    </div>
  );
};

export default ContactPage;
