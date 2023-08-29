import { FC } from 'react'

import { styled } from 'styled-components'

import { Flex } from '@/components/layout'

import { ProgressPoint } from '@/components/shared'

interface IProgressIndicator {
  label: string
}

export const ProgressIndicator: FC<IProgressIndicator> = ({ label }) => {
  return (
    <StyledBar>
      <StyledStages content="space-between">
        <ProgressPoint level={1} label="WTF" />
        <ProgressPoint level={2} label="Doubts" />
        <ProgressPoint level={3} label="Comfort" />
        <ProgressPoint level={4} label="Deep" />
      </StyledStages>

      <StyledProgressBar>
        <StyledDrag></StyledDrag>
      </StyledProgressBar>

      <StyledLabel>{label}</StyledLabel>
    </StyledBar>
  )
}

const StyledBar = styled.div`
  width: 280px;
`

const StyledProgressBar = styled.div`
  position: relative;
  height: 6px;
  border-radius: 3px;
  background-color: #00000030;
`

const StyledStages = styled(Flex)`
  margin-bottom: 5px;
  color: var(--text-level-2);
`

const StyledLabel = styled.p`
  margin-top: 5px;
  font-size: 0.9rem;
  font-weight: 400;
  color: #fefefe;
`

const StyledDrag = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 30%;
  z-index: 10;
  height: inherit;
  border-radius: inherit;
  background-color: var(--drag-color);
`
