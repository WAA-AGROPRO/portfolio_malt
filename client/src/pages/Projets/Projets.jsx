import CardWork from "../../components/CardWork/CardWork"
import "./Projets.scss"
import { useState, useEffect } from "react"
import SwiperCore, { EffectCoverflow, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination]);


function Projets() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("work.json")
      .then((res) => res.json())
      .then((data) => {
        setWorks(data);
      });
  }
  , []);

  return (
    <div className="projets">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        {works.map((work) => (
          <SwiperSlide key={work.id}>
            <CardWork work={work} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Projets