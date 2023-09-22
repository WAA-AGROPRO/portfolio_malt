import CardWork from "../../components/CardWork/CardWork"
import "./Projets.scss"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
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
        navigation={true} modules={[Navigation]} className="mySwiper"
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