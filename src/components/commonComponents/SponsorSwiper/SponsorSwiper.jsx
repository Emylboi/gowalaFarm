import styles from "./sponsorSwiper.module.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const SponsorSwiper = ({images = []}) => {
  return (
    <section>
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
          slidesPerView={2}
          spaceBetween={10}
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
      </div>
    </section>
  );
};

export default SponsorSwiper;
