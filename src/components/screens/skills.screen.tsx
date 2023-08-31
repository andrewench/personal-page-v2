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
          <ProgressIndicator label="HTML 5" maxWidth={280} percent={92} />
          <ProgressIndicator label="CSS 3" maxWidth={280} percent={92} />
          <ProgressIndicator
            label="JavaScript (ES6+)"
            maxWidth={280}
            percent={75}
          />
          <ProgressIndicator
            label="React + Routing"
            maxWidth={280}
            percent={70}
          />
          <ProgressIndicator label="TypeScript" maxWidth={280} percent={78} />
          <ProgressIndicator label="Tailwind CSS" maxWidth={280} percent={90} />
          <ProgressIndicator
            label="Styled Components"
            maxWidth={280}
            percent={30}
          />
          <ProgressIndicator label="Git" maxWidth={280} percent={45} />
          <ProgressIndicator label="Next.js" maxWidth={280} percent={37} />
          <ProgressIndicator
            label="Redux Toolkit + RTK Query"
            maxWidth={280}
            percent={50}
          />
          <ProgressIndicator
            label="React Native (Expo)"
            maxWidth={280}
            percent={30}
          />
          <ProgressIndicator label="Docker" maxWidth={280} percent={13} />
        </StyledLayout>
      </ScreenLayout>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  padding: 0 0 100px 0;
  background-color: #18181b;
  box-shadow: 30px 100px 100px #0b12140d;
  color: #fff;
`

const StyledLayout = styled(Flex)`
  margin-top: 100px;
  gap: 100px 60px;
`
