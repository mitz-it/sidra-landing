import React, { useState, useEffect } from "react";
import {
  InfoIcon,
  InfoText,
  InfoTooltip,
  MapButton,
  Modal,
  ModalContent,
  ModalText,
  Plot,
  PlotLegendContainer,
  PlotLegendItem,
  SkipButton,
  SmallSpecialModalText,
  SmallSpecialModalTitle,
  TreePlot,
} from "./styles";
import { LeafIcon } from "../../assets/svg/LeafIcon";
import { fullTree, nationalities, plot } from "../../utils/TimelineProps";
import { Mousewheel, Scrollbar, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { PinIcon } from "../../assets/svg/PinIcon";
import { LanguageTreePlot } from "../../assets/svg/LanguageTreePlot";

interface PlotModalProps {
  setCurrentSlide: (slide: number) => void;
}

export const PlotModal: React.FC<PlotModalProps> = ({ setCurrentSlide }) => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [selectedNationality, setSelectedNationality] =
    useState<string>(fullTree);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setCurrentSlide(activeSlide);
  }, [activeSlide, setCurrentSlide]);

  const getModalDimensions = () => {
    if (activeSlide === 0) return { height: "37.5rem", width: "62.5rem" };
    if (activeSlide === 1) return { height: "37.5rem", width: "43.75rem" };
    if (activeSlide === 2) return { height: "31.25rem", width: "43.75rem" };
    return { height: "min(54.125rem, 80vh)", width: "min(87.5rem, 90vw)" };
  };
  return (
    <Modal dimensions={getModalDimensions()}>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        modules={[Mousewheel, Keyboard, Scrollbar]}
        direction="vertical"
        slidesPerView={1}
        keyboard={{ enabled: true }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
        onSwiper={(swiper) => setActiveSlide(swiper.activeIndex)}
        freeMode={true}
        mousewheel
      >
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "1.25rem",
            overflow: "hidden",
          }}
        >
          <SmallSpecialModalTitle>
            A place is more than just a pin on a map.
          </SmallSpecialModalTitle>
          <SmallSpecialModalText>
            It is a living canopy of experiences—a connection of people,
            cultures, and shared memories.
          </SmallSpecialModalText>
          <PinIcon width={100} height={100} />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "1.25rem",
          }}
        >
          <SmallSpecialModalText>
            The <strong>places</strong> we visit <strong>root</strong> our
            experiences. They carry the mark of the <strong>people</strong> we
            meet, the <strong>food</strong> we taste, and the{" "}
            <strong>memories</strong> we cherish.
          </SmallSpecialModalText>
          <SmallSpecialModalTitle>
            Think of a happy memory.
          </SmallSpecialModalTitle>
          <SmallSpecialModalText>
            What places come to your mind? Who are the people sharing that
            moment with you? Which words would you use to describe this feeling?
            And in which language would you say them?
          </SmallSpecialModalText>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1.25rem",
          }}
        >
          <SmallSpecialModalTitle>
            Words, like places, can be vessels of memories.
          </SmallSpecialModalTitle>
          <SmallSpecialModalText>
            In Kuwait—a country you can cross in just two hours but where the
            sounds of over <strong>ten languages</strong> fill a single
            supermarket trip—<strong>words take on new depth.</strong>
          </SmallSpecialModalText>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <SmallSpecialModalTitle style={{ textAlign: "left" }}>
              The tree of languages
            </SmallSpecialModalTitle>
            <InfoIcon
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              i
            </InfoIcon>
            {hovered && (
              <InfoTooltip>
                This is the tree of the most spoken languages in Kuwait. The
                thickest branches represent the main languages: <b>Arabic</b>{" "}
                and <b>English</b>. Next are <b>Hindi</b>, <b>Bangla</b>,{" "}
                <b>Tagalog</b>, <b>Tamil</b>, <b>Urdu</b>, and <b>Nepali</b>,
                spoken by large expatriate communities. Finally, <b>Persian</b>{" "}
                and <b>Amharic</b>, which are spoken by smaller groups.
              </InfoTooltip>
            )}
          </div>
          <InfoText>Hovering the label shows a popup.</InfoText>
          <LanguageTreePlot />
          <ModalContent>{/* <LanguageTreePlot /> */}</ModalContent>
        </SwiperSlide>

        <SwiperSlide>
          <ModalContent>
            <ModalText
              dangerouslySetInnerHTML={{ __html: plot[0].description }}
            />
            <Plot imagePath={selectedNationality}>
              <PlotLegendContainer>
                <strong>Nationalities:</strong>
                {nationalities.map((item) => (
                  <PlotLegendItem
                    key={item.name}
                    onMouseOver={() => setSelectedNationality(item.image)}
                    onMouseLeave={() => setSelectedNationality(fullTree)}
                  >
                    <LeafIcon color={item.color} />
                    <span>{item.name}</span>
                    <span>{item.percent}</span>
                  </PlotLegendItem>
                ))}
              </PlotLegendContainer>
            </Plot>
          </ModalContent>
        </SwiperSlide>

        <SwiperSlide style={{ overflow: "hidden" }}>
          <ModalContent>
            <ModalText
              style={{ fontSize: "2rem", width: "57rem" }}
              dangerouslySetInnerHTML={{ __html: plot[1].description }}
              highlightColor="#cab8a0"
            />
            <TreePlot imagePath={plot[1]?.image ?? ""} />
          </ModalContent>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SmallSpecialModalText style={{ width: "42.459rem" }}>
            Yet, for many, their contributions coexist without{" "}
            <strong>limited rights:</strong> no permanent residency, restricted
            access to healthcare, and citizenship that remains unattainable
            without a <strong>direct Kuwaiti paternal bloodline</strong>—even
            for those born in Kuwait, who may not know any other home.
          </SmallSpecialModalText>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3.125rem",
          }}
        >
          <ModalText
            dangerouslySetInnerHTML={{ __html: plot[2].description }}
            highlightColor="#FC9918"
            style={{ fontSize: "1.5rem", width: "50.125rem" }}
          />
          <Plot
            imagePath={plot[2]?.image ?? ""}
            width="65.813rem"
            height="35.813rem"
          />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <ModalText
            dangerouslySetInnerHTML={{ __html: plot[3].description }}
            highlightColor="#FC9918"
            style={{ fontSize: "1.5rem", width: "52rem" }}
          />
          <Plot
            imagePath={plot[3]?.image ?? ""}
            width="88.875rem"
            height="35.813rem"
          />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.25rem",
          }}
        >
          <ModalText
            dangerouslySetInnerHTML={{ __html: plot[4].description }}
            highlightColor="#cab8a0"
            style={{ width: "58.768rem" }}
          />
          <Plot
            imagePath={plot[4]?.image ?? ""}
            width="29.089rem"
            height="29.089rem"
          />
        </SwiperSlide>
      </Swiper>
      {activeSlide === 9 ? (
        <MapButton onClick={() => navigate("/map")}>Visit map</MapButton>
      ) : (
        <SkipButton onClick={() => navigate("/map")}>Skip the intro</SkipButton>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "1.25rem",
          right: "1.25rem",
          fontSize: "0.875rem",
          color: "#666",
        }}
      >
        Last updated: December 2024
      </div>
    </Modal>
  );
};
