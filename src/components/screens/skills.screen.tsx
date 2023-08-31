import { FC } from 'react'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { SectionTitle } from '@/components/shared'

import { ProgressIndicator } from '@/components/ui'

export const Skills: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>
        <SectionTitle label="\\ Skills _" bgColor="#18181b" />

        <StyledLayout grid content="space-between">
          <ProgressIndicator label="HTML 5" />
          <ProgressIndicator label="CSS 3" />
          <ProgressIndicator label="JavaScript (ES6+)" />
          <ProgressIndicator label="React + Routing" />
          <ProgressIndicator label="TypeScript" />
          <ProgressIndicator label="Tailwind CSS" />
          <ProgressIndicator label="Styled Components" />
          <ProgressIndicator label="Git" />
          <ProgressIndicator label="Next.js" />
          <ProgressIndicator label="Redux Toolkit + RTK Query" />
          <ProgressIndicator label="React Native (Expo)" />
          <ProgressIndicator label="Docker" />
        </StyledLayout>
      </ScreenLayout>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  padding: 0 0 100px 0;
  background-color: #18181b;
  color: #fff;
`

const StyledLayout = styled(Flex)`
  margin-top: 100px;
  gap: 100px 60px;
`
