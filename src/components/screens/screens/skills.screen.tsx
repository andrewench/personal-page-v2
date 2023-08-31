import { FC } from 'react'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { SectionTitle } from '@/components/shared'

import { RenderedSkillsList } from './rendered-skills-list.component'

export const Skills: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>
        <SectionTitle label="\\ Skills _" bgColor="#18181b" />

        <StyledLayout grid content="space-between">
          <RenderedSkillsList />
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
