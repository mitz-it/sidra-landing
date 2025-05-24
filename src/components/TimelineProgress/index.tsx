import React from 'react'
import { ProgressBar, StoriesContainer } from './styles';



const TimelineProgress: React.FC<{ currentSlide: number }> = ({ currentSlide }) => {
    return (
      <StoriesContainer>
        {Array.from({ length: 10 }).map((_, idx) => (
          <ProgressBar
            key={idx}
            idx={idx}
            currentSlide={currentSlide}
          />
        ))}
      </StoriesContainer>
    );
  };

export default TimelineProgress;