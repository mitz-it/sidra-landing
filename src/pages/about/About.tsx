import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import {
  AboutContainer,
  AboutEllipse,
  AboutEllipseContainer,
  AboutEllipseHighlight,
  AboutEllipseNumber,
  AboutEllipseText,
  AboutHighlight,
  AboutPageOne,
  AboutPageTwo,
  AboutText,
  AboutTitle,
} from "./About.styles";
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
          <AboutPageTwo>
            <AboutText>
              Following this dream, we worked hard to create the two
              interdependent components of the project:
            </AboutText>
            <AboutEllipseContainer>
              <AboutEllipse>
                <AboutEllipseNumber>1</AboutEllipseNumber>
                <p>
                  A <b>qualitative</b> and <b>quantitative research</b> about
                  what it means to <b>feel at home in Kuwait</b>. The results of
                  this research were used for the creation of...
                </p>
              </AboutEllipse>

              <AboutEllipse>
                <AboutEllipseNumber>2</AboutEllipseNumber>

                <div>
                  <AboutEllipseHighlight>The Sidra game!</AboutEllipseHighlight>
                  <p>
                    In which participants can <b>explore</b>, <b>discuss</b>,
                    and <b>understand</b> socio-cultural belonging through
                    role-play, dilemmas, and thought-provoking challenges.
                  </p>
                </div>
              </AboutEllipse>
            </AboutEllipseContainer>
            <AboutEllipseText>
              <p>
                We want to keep collecting data about what it means
                <br /> to feel at home in Kuwait for each one of us.
              </p>
              <p>Do you want to help us in this mission?</p>
              <p>
                <a href="/survey" aria-label="Click here">
                  Click here
                </a>{" "}
                to answer a few questions.
              </p>
            </AboutEllipseText>
          </AboutPageTwo>
        </SwiperSlide>
      </Swiper>
      <BottomNavigation />
    </AboutContainer>
  );
}
