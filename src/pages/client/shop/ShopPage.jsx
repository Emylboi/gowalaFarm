import Hero from "../../../components/commonComponents/Hero/Hero";
import Products from "../../../components/commonComponents/Products/Products";
import TextField from "../../../components/commonComponents/TextField/TextField";

const ShopPage = () => {
  return (
    <div>
      <Hero title="Gowala Shopping" text="Vi er taknemmelige for dit bidrag" />
      <TextField
        title="Alle vores produkter"
        optTitle="Alt på ét sted"
        text="Her på siden finder du alle vores friske mejeriprodukter og kvalitetskød fra Gowala Farms - direkte fra gården til dit bord."
        boldTitle={true}
      />
      {/* Sort component? */}
      <Products sort={true}/>
    </div>
  );
};

export default ShopPage;
