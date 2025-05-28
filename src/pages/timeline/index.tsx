import { useState } from 'react'
import styled from 'styled-components'
import { PlotModal } from '../../components/PlotModal'
import TimelineProgress from '../../components/TimelineProgress'
import backgroundImage from '../../assets/images/background_timeline.png' 

export const TimelineContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 160px 164px;
`

export default function Timeline() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <TimelineContainer>
      <TimelineProgress currentSlide={currentSlide}></TimelineProgress>
      <PlotModal setCurrentSlide={setCurrentSlide} />
    </TimelineContainer>
  )
}
