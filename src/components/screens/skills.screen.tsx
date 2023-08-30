import { FC } from 'react'

import { styled } from 'styled-components'

import { ScreenLayout } from '@/components/layout'

import { ProgressIndicator } from '@/components/ui'

export const Skills: FC = () => {
  return (
    <StyledBox>
      <StyledLayout flex grid content="space-between">
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
    </StyledBox>
  )
}

const StyledBox = styled.div`
  padding: 100px 0;
  height: 1500px;
  background-color: #18181b;
  color: #fff;
`

const StyledLayout = styled(ScreenLayout)`
  gap: 100px 60px;
`
