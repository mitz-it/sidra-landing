import React, { useState } from "react";
import {
  Modal,
  ModalText,
  Plot,
  PlotContainer,
  PlotLegendContainer,
  PlotLegendItem,
  SkipButton,
} from "./styles";
import { LeafIcon } from "../../assets/svg/LeafIcon";
import { nationalities, plot } from "../../utils/TimelineProps";

export const PlotModal = () => {
  const [selectedNationality, setSelectedNationality] = useState<string | null>(
    null
  );
  return (
    <Modal>
      <ModalText dangerouslySetInnerHTML={{ __html: plot[0].description }} />

      <PlotContainer>
        <PlotLegendContainer>
          <strong>Nationalities:</strong>
          {nationalities.map((item) => (
            <PlotLegendItem
              key={item.name}
              onMouseOver={() => setSelectedNationality(item.pathName)}
              onMouseLeave={() => setSelectedNationality(null)}
            >
              <LeafIcon color={item.color} />
              <span>{item.name}</span>
              <span>{item.percent}</span>
            </PlotLegendItem>
          ))}
        </PlotLegendContainer>

        <Plot
          imagePath={`/src/assets/plots/tree/${
            selectedNationality ?? "full_tree"
          }.webp`}
        />
      </PlotContainer>
      <SkipButton>Skip the intro</SkipButton>
    </Modal>
  );
};
