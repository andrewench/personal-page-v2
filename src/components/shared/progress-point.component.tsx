import { FC } from 'react'

import { styled } from 'styled-components'

interface IProgressPoint {
  label: string
  level: 1 | 2 | 3 | 4
}

export const ProgressPoint: FC<IProgressPoint> = ({ label, level }) => {
  return (
    <StyledBox>
      <StyledLabel level={level}>{label}</StyledLabel>

      <StyledArrow level={level} />
    </StyledBox>
  )
}

const StyledBox = styled.div`
  position: relative;
`

const StyledArrow = styled.div<{ level: number }>`
  position: relative;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 7px solid var(--text-level-2);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 10px;
    display: block;
    width: 1px;
    height: ${({ level }) => `${level * 10}px`};
    background-color: var(--text-level-1);
  }
`

const StyledLabel = styled.p<{ level: number }>`
  position: absolute;
  bottom: ${({ level }) => `${level * 10 + 14}px`};
  padding: 2px 5px;
  right: 4px;
  font-size: 0.75rem;
  border-bottom: 1px solid var(--text-level-1);
  white-space: nowrap;
  color: var(--text-level-3);
`
