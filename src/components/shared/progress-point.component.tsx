import { FC } from 'react'

import { styled } from 'styled-components'

import { ProgressPointsColors } from '@/shared/data'

interface IProgressPoint {
  label: string
  level: 1 | 2 | 3 | 4
  tooltip: string
  percent: number
}

export const ProgressPoint: FC<IProgressPoint> = ({
  label,
  level,
  tooltip,
  percent,
}) => {
  return (
    <StyledBox>
      <StyledLabel level={level} data-tooltip={tooltip}>
        {label}
      </StyledLabel>

      <StyledArrow level={level} percent={percent} />
    </StyledBox>
  )
}

const StyledBox = styled.div`
  position: relative;
`

const StyledArrow = styled.div<{ level: number; percent: number }>`
  position: relative;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 7px solid
    ${({ level, percent }) =>
      percent >= 25 * level
        ? `${ProgressPointsColors[level - 1]}`
        : `${ProgressPointsColors[level - 1]}40`};

  &::before {
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
  transition: 0.3s color;
  color: var(--text-level-3);

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    visibility: hidden;
    opacity: 0;
    display: block;
    left: -30px;
    bottom: 28px;
    border-radius: 4px;
    width: max-content;
    padding: 4px 10px;
    z-index: 1000;
    white-space: break-spaces;
    transition: 0.3s opacity;
    color: #fefefe;
    background-color: #0b0b0b;
    box-shadow: 4px 4px 10px #0b0b0b70;
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 4px);
    top: -10px;
    visibility: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    transition: 0.3s opacity;
    border: 6px solid transparent;
    border-top: 8px solid #0b0b0b;
  }

  &:hover {
    cursor: pointer;
    color: #fff;
  }

  &:hover::after,
  &:hover::before {
    visibility: visible;
    opacity: 1;
  }
`
