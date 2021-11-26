import React from "react";

import Categoria from "../Categoria";
import { useHistory } from "react-router-dom";
import { Container, Banner, Categorias, Slider } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const MainHome: React.FC = () => {
  const history = useHistory();

  function navigateToCategory() {
    history.push("/");
  }
  return (
    <Container>
      <Banner>
        <div>
          <h1>Feito para você</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
            fringilla bibendum mi, massa nunc ornare at.
          </p>
          <button>Loja</button>
        </div>
      </Banner>
      <Categorias>
        <h1>Categorias</h1>
        <Slider>
          <Categoria name="Console" />
          <Categoria name="Desktop" />
          <Categoria name="Periféricos" />
          <Categoria name="Periféricos" />
        </Slider>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Categorias>
    </Container>
  );
};

export default MainHome;
