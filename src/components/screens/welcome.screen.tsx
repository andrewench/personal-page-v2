import { FC } from 'react'

import { ScreenLayout } from '../layout'
import { styled } from 'styled-components'

export const Welcome: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>Welcome screen</ScreenLayout>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  position: relative;
  padding-top: 7rem;
  height: 100vh;
  background: url('/assets/images/poster.jpg') no-repeat fixed;
  background-position-y: -200px;
  background-size: cover;
  color: #fff;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0),
        rgba(42, 41, 41, 0.8) 63%,
        rgba(38, 38, 40, 0.897) 77%,
        #18181b 90%
      ),
      linear-gradient(
        43deg,
        rgba(65, 88, 208, 0.078),
        rgba(200, 80, 192, 0.078) 46%,
        rgba(255, 204, 112, 0.078)
      );
    backdrop-filter: blur(6px);
  }
`
