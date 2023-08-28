import { FC } from 'react'

import { ScreenLayout } from '../layout'
import { styled } from 'styled-components'

export const Skills: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>Skills screen</ScreenLayout>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  height: 500px;
  background-color: #18181b;
  color: #fff;
`
