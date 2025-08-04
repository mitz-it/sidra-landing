import React from 'react'
import { ProgressBar, StoriesContainer, StoriesText } from "./styles";

const TimelineProgress: React.FC<{ currentSlide: number }> = ({
  currentSlide,
}) => {
  return (
    <>
      {" "}
      <StoriesContainer>
        {Array.from({ length: 10 }).map((_, idx) => (
          <ProgressBar key={idx} idx={idx} currentSlide={currentSlide} />
        ))}
      </StoriesContainer>
      <StoriesText>Use your ↓ key to continue reading</StoriesText>
    </>
  );
};

export default TimelineProgress;