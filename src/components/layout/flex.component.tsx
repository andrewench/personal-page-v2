'use client'

import { FC, PropsWithChildren } from 'react'

import { styled } from 'styled-components'

export interface IFlex {
  align?: 'start' | 'center' | 'end'
  content?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  gap?: number
  grid?: boolean
}

export const Flex: FC<PropsWithChildren<IFlex>> = ({
  direction = 'row',
  align = 'start',
  content = 'start',
  gap = 5,
  grid = false,
  children,
  ...props
}) => {
  return (
    <StyledBox
      direction={direction}
      align={align}
      content={content}
      gap={gap}
      grid={grid}
      {...props}
    >
      {children}
    </StyledBox>
  )
}

const StyledBox = styled.div<IFlex>`
  display: flex;
  flex-wrap: ${({ grid }) => (grid ? 'wrap' : '')};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ content }) => content};
  gap: ${({ gap }) => `${gap}px`};
`
