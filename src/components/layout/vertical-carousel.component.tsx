import { FC, PropsWithChildren } from 'react'
import { IoArrowUpOutline } from 'react-icons/io5'

import { styled } from 'styled-components'

import { Flex } from '@/components/layout'

export const VerticalCarousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledBox direction="column" align="center" gap={20}>
      <StyledPrev>
        <IoArrowUpOutline size={32} />
      </StyledPrev>

      {children}

      <StyledNext>
        <IoArrowUpOutline size={32} />
      </StyledNext>
    </StyledBox>
  )
}

const StyledBox = styled(Flex)``

const StyledButton = styled.button`
  border: none;
  transition:
    0.3s transform,
    0.3s color;
  will-change: transform;
  padding: 5px;
  color: var(--text-level-3);
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: var(--palette-cyan);

    svg {
      filter: drop-shadow(0 0 20px var(--palette-cyan));
    }
  }

  & > {
    svg {
      path {
        stroke-width: 14px;
      }
    }
  }
`

const StyledPrev = styled(StyledButton)`
  &:hover {
    transform: translateY(-10px);
  }
`

const StyledNext = styled(StyledButton)`
  &:hover {
    transform: translateY(10px);
  }

  & > {
    svg {
      transform: rotate(180deg);
    }
  }
`
