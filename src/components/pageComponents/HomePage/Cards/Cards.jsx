import Card from "./Card/Card";
import styles from "./cards.module.css";

const Cards = () => {
  return (
    <div>
      
      <div className={styles.cards}>
        <Card
          image={"/cards/01.png"}
          title="Farmens Teknologi"
          text="Vores avancerede teknologi kombinerer effektivitet med høj hygiejnestandard, hvilket garanterer produkter af den bedste kvalitet."
        />
        <Card
          image={"/cards/02.png"}
          title="Farmens landmænd"
          text="Landmændene hos Gowala Farms er dedikeret til dyrevelfærd og bæredygtigt landbrug, hvor omsorg for køerne altid kommer i første række."
        />
        <Card
          image={"/cards/03.png"}
          title="Fra mejeriet til forbrugeren"
          text="Transporten fra mejeriet til butikken foregår hurtigt og skånsomt for at bevare produkternes friskhed og kvalitet."
        />
      </div>
    </div>
  );
};

export default Cards;
