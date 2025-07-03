import { useState } from 'react'
import styled from 'styled-components'
import { PlotModal } from '../../components/PlotModal'
import TimelineProgress from '../../components/TimelineProgress'
import backgroundImage from "../../assets/images/background_timeline.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar, Keyboard } from "swiper/modules";
import Intro from "./components/Intro";

export const TimelineContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 160px 164px;
  position: relative;
`;

export default function Timeline() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  return (
    <Swiper
      style={{ display: "flex", height: "100vh" }}
      modules={[Mousewheel, Keyboard, Scrollbar]}
      direction="vertical"
      slidesPerView={1}
      keyboard={{ enabled: true }}
      freeMode={true}
      onSlideChange={(swiper) => {
        if (swiper.activeIndex === 1) {
          setIsLocked(true);
          swiper.disable();
        }
      }}
      mousewheel={!isLocked}
    >
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <TimelineContainer>
          <TimelineProgress currentSlide={currentSlide}/>
          <PlotModal setCurrentSlide={setCurrentSlide} />
        </TimelineContainer>
      </SwiperSlide>
    </Swiper>
  );
}
