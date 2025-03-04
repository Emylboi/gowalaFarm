import styles from "./SwiperHero.module.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const SwiperHero = ({ images = [], title, description, button }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/services`);
      };

  return (
    <div className={styles.swiper}>
      <Swiper
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        speed={2500}
        modules={[Autoplay, Navigation]}
        className={styles.swiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={handleClick}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default SwiperHero;
