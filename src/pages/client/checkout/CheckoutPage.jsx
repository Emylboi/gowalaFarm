import Hero from "../../../components/commonComponents/Hero/Hero";
import TextField from "../../../components/commonComponents/TextField/TextField";
import Checkout from "../../../components/pageComponents/CheckoutPage/Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <div>
      <Hero title="Gowala shopping" text="Færdiggør din bestilling" />
      <TextField
        title="Bestil"
        optTitle="Udfyld venligst formularen herunder"
        boldTitle={true}
      />
      <Checkout/>
    </div>
  );
};

export default CheckoutPage;
