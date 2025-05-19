import React from 'react'
import styled from 'styled-components'

export const TimelineContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/src/assets/background_timeline.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export default function Timeline() {
  return (
    <TimelineContainer />
  )
}
