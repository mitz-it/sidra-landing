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
  TheGameTitle,
} from "./TheGame.styles";
import Cards from "../../assets/images/cards.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar, Keyboard } from "swiper/modules";
import PDFOnline from "../../assets/pdf/Online-Manual+Cards.pdf";
import PDFPrint from "../../assets/pdf/Print-Manual+Cards.pdf";

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
          </TheGameCardsContainer>
        </SwiperSlide>
        <SwiperSlide>
          <TheGamePageTwo>
            <TheGamePageTwoTitle>what’s the game about</TheGamePageTwoTitle>
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
