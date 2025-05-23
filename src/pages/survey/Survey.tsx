import BottomNavigation from "../../components/BottomNavigation";
import {
  SurveyContainer,
  SurveyPageOne,
  SurveyPageTwo,
  SurveyQuestion,
  SurveyQuestionContainer,
  SurveyQuestionNumber,
  SurveyText,
  SurveyTextScrollContainer,
  SurveyTextSecondary,
  SurveyTitle,
} from "./Survey.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar, Keyboard } from "swiper/modules";
import { useState } from "react";

export default function Survey() {
  const [slide, setSlide] = useState<number>(1);

  return (
    <SurveyContainer>
      <Swiper
        modules={[Mousewheel, Keyboard, Scrollbar]}
        direction="vertical"
        slidesPerView={1}
        keyboard={{ enabled: true }}
        onSlideChange={(swiper) => setSlide(swiper.activeIndex + 1)}
        freeMode={true}
        mousewheel={slide === 1}
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
                width="20"
                height="24"
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
            <section>
              <SurveyQuestionContainer>
                <SurveyQuestionNumber>1</SurveyQuestionNumber>
                <SurveyQuestion>How do you identify yourself?</SurveyQuestion>
              </SurveyQuestionContainer>

              <label>
                <input type="checkbox" />
                Male
              </label>
              <label>
                <input type="checkbox" />
                Female
              </label>
              <label>
                <input type="checkbox" />
                Prefer to self describe, below:
              </label>
              <input type="text" placeholder="Write here your answer" />
            </section>

            <section>
              <SurveyQuestionContainer>
                <SurveyQuestionNumber>2</SurveyQuestionNumber>
                <SurveyQuestion>How old are you?</SurveyQuestion>
              </SurveyQuestionContainer>
              <label>
                <input type="checkbox" />
                18-24
              </label>
              <label>
                <input type="checkbox" />
                25-34
              </label>
              <label>
                <input type="checkbox" />
                35-44
              </label>
              <label>
                <input type="checkbox" />
                45-54
              </label>
              <label>
                <input type="checkbox" />
                55-64
              </label>
              <label>
                <input type="checkbox" />
                65+
              </label>
            </section>

            <section>
              <SurveyQuestionContainer>
                <SurveyQuestionNumber>3</SurveyQuestionNumber>
                <SurveyQuestion>
                  Were you born and/or raised in Kuwait?
                </SurveyQuestion>
              </SurveyQuestionContainer>

              <label>
                <input type="checkbox" />
                Born
              </label>
              <label>
                <input type="checkbox" />
                Raised
              </label>
              <label>
                <input type="checkbox" />
                None of the above
              </label>
            </section>

            <section>
              <SurveyQuestionContainer>
                <SurveyQuestionNumber>4</SurveyQuestionNumber>
                <SurveyQuestion>Which languages do you speak?</SurveyQuestion>
              </SurveyQuestionContainer>

              <label>
                <input type="checkbox" />
                English
              </label>
              <label>
                <input type="checkbox" />
                Arabic
              </label>
              <label>
                <input type="checkbox" />
                Hindi
              </label>
              <label>
                <input type="checkbox" />
                Bangla
              </label>

              <label>
                <input type="checkbox" />
                Urdu
              </label>
              <label>
                <input type="checkbox" />
                Tagalog
              </label>
              <label>
                <input type="checkbox" />
                Tamil
              </label>
              <label>
                <input type="checkbox" />
                Persian
              </label>

              <label>
                <input type="checkbox" />
                Nepali
              </label>
              <label>
                <input type="checkbox" />
                Amharic
              </label>
              <label>
                <input type="checkbox" />
                Other
              </label>
            </section>

            <section>
              <SurveyQuestionContainer>
                <SurveyQuestionNumber>5</SurveyQuestionNumber>
                <SurveyQuestion>Which languages do you speak?</SurveyQuestion>
              </SurveyQuestionContainer>

              <select id="nationality" name="user-nationality">
                <option value="Banglasesh">Banglasesh</option>
                <option value="India">India</option>
                <option value="Egypt">Egypt</option>
                <option value="Nepal">Nepal</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Philippines">Philippines</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Syria">Syria</option>
                <option value="Others">Others</option>
              </select>
            </section>

            <section>
              <SurveyQuestionContainer>
                <SurveyQuestionNumber>6</SurveyQuestionNumber>
                <SurveyQuestion>
                  Rate the following statements on a scale of 1 to 5 (1 =
                  strongly disagree 5 = strongly agree)
                </SurveyQuestion>
              </SurveyQuestionContainer>

              <SurveyQuestion>Kuwait is my home</SurveyQuestion>
              <label>
                <input type="checkbox" />1
              </label>
              <label>
                <input type="checkbox" />2
              </label>
              <label>
                <input type="checkbox" />3
              </label>
              <label>
                <input type="checkbox" />4
              </label>
              <label>
                <input type="checkbox" />5
              </label>

              <SurveyQuestion>
                I feel that I am welcomed as a person living in Kuwait
              </SurveyQuestion>
              <label>
                <input type="checkbox" />1
              </label>
              <label>
                <input type="checkbox" />2
              </label>
              <label>
                <input type="checkbox" />3
              </label>
              <label>
                <input type="checkbox" />4
              </label>
              <label>
                <input type="checkbox" />5
              </label>

              <SurveyQuestion>
                My memories living in Kuwait are overall positive
              </SurveyQuestion>
              <label>
                <input type="checkbox" />1
              </label>
              <label>
                <input type="checkbox" />2
              </label>
              <label>
                <input type="checkbox" />3
              </label>
              <label>
                <input type="checkbox" />4
              </label>
              <label>
                <input type="checkbox" />5
              </label>

              <SurveyQuestion>
                I have been treated unfairly or disrespected because of my
                nationality in Kuwait
              </SurveyQuestion>
              <label>
                <input type="checkbox" />1
              </label>
              <label>
                <input type="checkbox" />2
              </label>
              <label>
                <input type="checkbox" />3
              </label>
              <label>
                <input type="checkbox" />4
              </label>
              <label>
                <input type="checkbox" />5
              </label>
            </section>

            <section>
              <SurveyQuestionContainer>
                <SurveyQuestionNumber>7</SurveyQuestionNumber>
                <SurveyQuestion>
                  Do you feel you belong in Kuwait?
                </SurveyQuestion>
              </SurveyQuestionContainer>

              <label>
                <input type="checkbox" />
                Yes
              </label>
              <label>
                <input type="checkbox" />
                No
              </label>
              <label>
                <input type="checkbox" />
                Maybe
              </label>
              <textarea placeholder="Can you tell us why?" />
            </section>
          </SurveyPageTwo>
        </SwiperSlide>
      </Swiper>
      {slide === 1 && <BottomNavigation />}
    </SurveyContainer>
  );
}
