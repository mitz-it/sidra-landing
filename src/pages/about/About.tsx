import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import {
  AboutContainer,
  AboutHighlight,
  AboutPageOne,
  AboutText,
  AboutTitle,
} from "./About.styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar, Keyboard } from "swiper/modules";

export default function About() {
  return (
    <AboutContainer>
      <Swiper
        modules={[Mousewheel, Keyboard, Scrollbar]}
        direction="vertical"
        slidesPerView={1}
        keyboard={{ enabled: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        freeMode={true}
        mousewheel
      >
        <SwiperSlide>
          <AboutPageOne>
            <AboutTitle>about the project</AboutTitle>
            <AboutText>
              <AboutHighlight>Project Sidra</AboutHighlight> was born as an
              initiative for participatory research{" "}
              <AboutHighlight>
                designed to celebrate the richness and beauty of Kuwait’s
                cultural diversity.
              </AboutHighlight>{" "}
              We dreamt of creating different tools and resources through which
              anyone could learn about the many different nationalities and
              demographic profiles that make up Kuwait’s shared culture and
              history, and how they contribute to one another’s flourishing.
            </AboutText>
          </AboutPageOne>
        </SwiperSlide>
        <SwiperSlide>
          <AboutText>
            Following this dream, we worked hard to create the two
            interdependent components of the project:

          </AboutText>
        </SwiperSlide>
      </Swiper>
      <BottomNavigation />
    </AboutContainer>
  );
}
