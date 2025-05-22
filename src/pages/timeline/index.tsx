import React from 'react'
import styled from 'styled-components'
import { PlotModal } from '../../components/PlotModal'

export const TimelineContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/src/assets/images/background_timeline.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 160px 164px;
`

export default function Timeline() {
  return (
    <TimelineContainer>
      <PlotModal/>
    </TimelineContainer>
  )
}
