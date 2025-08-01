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
  AboutTextScrollContainer,
  AboutTextSecondary,
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
            <AboutTextScrollContainer>
              <AboutTextSecondary>scroll down to know more</AboutTextSecondary>
              <svg
                style={{ width: "1.25rem", height: "1.5rem" }}
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.289747 14.3299L9.94975 23.9399L19.6097 14.3299C19.7237 14.2432 19.8177 14.1329 19.8854 14.0066C19.953 13.8803 19.9928 13.741 20.0019 13.598C20.011 13.4551 19.9893 13.3118 19.9382 13.178C19.8872 13.0441 19.808 12.9228 19.7059 12.8222C19.6039 12.7216 19.4815 12.6442 19.3469 12.595C19.2124 12.5459 19.0688 12.5262 18.926 12.5374C18.7832 12.5486 18.6444 12.5903 18.5191 12.6597C18.3938 12.7292 18.2849 12.8247 18.1997 12.9399L10.9497 20.1299V0.999941C10.9497 0.734724 10.8444 0.480371 10.6569 0.292835C10.4693 0.105299 10.215 -5.91278e-05 9.94975 -5.91278e-05C9.68453 -5.91278e-05 9.43018 0.105299 9.24264 0.292835C9.0551 0.480371 8.94975 0.734724 8.94975 0.999941V20.1299L1.69975 12.9399C1.51144 12.753 1.25657 12.6484 0.991211 12.6494C0.725847 12.6503 0.471724 12.7566 0.284746 12.9449C0.0977688 13.1332 -0.0067482 13.3881 -0.00580978 13.6535C-0.00487137 13.9188 0.101444 14.173 0.289747 14.3599V14.3299Z"
                  fill="#FFEEDF"
                  fill-opacity="0.7"
                />
              </svg>
            </AboutTextScrollContainer>
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
