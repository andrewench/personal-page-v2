import { FC } from 'react'

import { styled } from 'styled-components'

import { ScreenLayout } from '@/components/layout'

import { SectionTitle } from '@/components/shared'

export const Portfolio: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>
        <SectionTitle label="\\ Portfolio _" bgColor="#131314" />
      </ScreenLayout>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  padding: 100px 0;
  height: 600px;
  background-color: #131314;
`
