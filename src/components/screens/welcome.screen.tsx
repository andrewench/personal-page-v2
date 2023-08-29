import { FC } from 'react'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { caveat } from '@/shared/fonts'

export const Welcome: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>
        <StyledFlex direction="column" align="center" content="center">
          <StyledHeading className={caveat.className}>
            Hello, I&apos;m Andrew
          </StyledHeading>

          <StyledSign className={caveat.className}>
            React Frontend Developer
          </StyledSign>
        </StyledFlex>
      </ScreenLayout>
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

const StyledFlex = styled(Flex)`
  height: calc(100vh - 70px - 40px - 70px);
`

const StyledHeading = styled.h1`
  font-weight: 100;
  font-size: 3rem;
  color: #fff;
`

const StyledSign = styled.p`
  font-size: 1.3rem;
  color: var(--text-level-3);
`
