import BottomNavigation from "../../components/BottomNavigation";
import {
  SurveyContainer,
  SurveyPageOne,
  SurveyPageTwo,
  SurveyText,
  SurveyTextScrollContainer,
  SurveyTextSecondary,
  SurveyTitle,
} from "./Survey.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar, Keyboard } from "swiper/modules";
import { useState } from "react";
import SurveyForm from "./components/SurveyForm";

export default function Survey() {
  const [slide, setSlide] = useState<number>(0);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  return (
    <SurveyContainer>
      <Swiper
        modules={[Mousewheel, Keyboard, Scrollbar]}
        direction="vertical"
        slidesPerView={1}
        keyboard={{ enabled: true }}
        freeMode={true}
        onSlideChange={(swiper) => {
          setSlide(swiper.activeIndex);
          if (swiper.activeIndex === 1) {
            setIsLocked(true);
            swiper.disable();
          }
        }}
        mousewheel={!isLocked}
      >
        <SwiperSlide>
          <SurveyPageOne>
            <SurveyTitle>about the survey</SurveyTitle>
            <SurveyText>
              Thank you for participating in Project Sidra’s survey! Your input
              will help us celebrate Kuwait’s cultural diversity by
              understanding the experiences and identities that shape its shared
              heritage. <br />
              Your responses are anonymous and will be used solely for research
              purposes and as aggregated figures. With them, we can keep working
              on creating meaningful tools and resources to learn more about our
              local communities.
            </SurveyText>
            <SurveyTextScrollContainer>
              <SurveyTextSecondary>
                scroll down to participate
              </SurveyTextSecondary>
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
            </SurveyTextScrollContainer>
          </SurveyPageOne>
        </SwiperSlide>
        <SwiperSlide>
          <SurveyPageTwo>
            <SurveyForm />
          </SurveyPageTwo>
        </SwiperSlide>
      </Swiper>
      {slide === 0 && <BottomNavigation />}
    </SurveyContainer>
  );
}
