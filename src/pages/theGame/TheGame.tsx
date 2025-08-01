import BottomNavigation from "../../components/BottomNavigation";
import {
  TheGameButton,
  TheGameButtonContainer,
  TheGameButtonTextContainer,
  TheGameButtonTextPrimary,
  TheGameButtonTextSecondary,
  TheGameCardsContainer,
  TheGameContainer,
  TheGameImage,
  TheGameLicense,
  TheGamePageTwo,
  TheGamePageTwoTitle,
  TheGameSubtitle,
  TheGameText,
  TheGameTextScrollContainer,
  TheGameTitle,
} from "./TheGame.styles";
import Cards from "../../assets/images/cards.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar, Keyboard } from "swiper/modules";
import PDFOnline from "../../assets/pdf/Sidra-Binder-Online.pdf";
import PDFPrint from "../../assets/pdf/Sidra-Binder-Print.pdf";
import { WhoWeAreTextSecondary } from "../whoWeAre/WhoWeAre.styles";

export default function TheGame() {
  const handleDownloadOnlineVersion = () => {
    const pdfUrl = PDFOnline;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "The_Sidra_Game_Online_Version.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPrintVersion = () => {
    const pdfUrl = PDFPrint;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "The_Sidra_Game_Print_Version.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <TheGameContainer>
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
          <TheGameCardsContainer>
            <TheGameSubtitle>Discover the</TheGameSubtitle>
            <TheGameTitle>Sidra Card Game</TheGameTitle>
            <TheGameImage src={Cards} alt="Cards" />
            <TheGameTextScrollContainer>
              <WhoWeAreTextSecondary>
                scroll down to know more
              </WhoWeAreTextSecondary>
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
            </TheGameTextScrollContainer>
          </TheGameCardsContainer>
        </SwiperSlide>
        <SwiperSlide>
          <TheGamePageTwo>
            <TheGamePageTwoTitle>what’s the game about?</TheGamePageTwoTitle>
            <TheGameText>
              The Sidra Game is a card game that invites players to reflect on
              what it means to feel at home in Kuwait. Through engaging
              discussions, it enquires about the sense of belonging —or its
              absence— by exploring life aspects like food, religion, work, and
              more. Play the game and join the conversation!
            </TheGameText>
            <TheGameLicense>
              This game is licensed under the Creative Commons License CC
              BY-NC-SA 4.0 (
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
              ).
            </TheGameLicense>
            <TheGameButtonContainer>
              <TheGameButton onClick={handleDownloadPrintVersion}>
                <svg
                  style={{ width: "2.625rem", height: "2.875rem" }}
                  viewBox="0 0 42 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.2353 0.764648V31.0294L35.2059 18.0588L37.0588 19.6894L21 35.7482L4.94118 19.6894L6.79412 18.0588L19.7647 31.0294V0.764648H22.2353ZM0 37.8235H2.47059V42.7647H39.5294V37.8235H42V45.2352H0V37.8235Z"
                    fill="#00171F"
                  />
                </svg>
                <TheGameButtonTextContainer>
                  <TheGameButtonTextPrimary>
                    download the game
                  </TheGameButtonTextPrimary>
                  <TheGameButtonTextSecondary>
                    print version
                  </TheGameButtonTextSecondary>
                </TheGameButtonTextContainer>
              </TheGameButton>
              <TheGameButton onClick={handleDownloadOnlineVersion}>
                <svg
                  style={{ width: "2.625rem", height: "2.875rem" }}
                  viewBox="0 0 42 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.2353 0.764648V31.0294L35.2059 18.0588L37.0588 19.6894L21 35.7482L4.94118 19.6894L6.79412 18.0588L19.7647 31.0294V0.764648H22.2353ZM0 37.8235H2.47059V42.7647H39.5294V37.8235H42V45.2352H0V37.8235Z"
                    fill="#00171F"
                  />
                </svg>
                <TheGameButtonTextContainer>
                  <TheGameButtonTextPrimary>
                    download the game
                  </TheGameButtonTextPrimary>
                  <TheGameButtonTextSecondary>
                    online full colour version
                  </TheGameButtonTextSecondary>
                </TheGameButtonTextContainer>
              </TheGameButton>
            </TheGameButtonContainer>
          </TheGamePageTwo>
        </SwiperSlide>
      </Swiper>
      <BottomNavigation />
    </TheGameContainer>
  );
}
