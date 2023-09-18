'use client'

import { ForwardedRef, PropsWithChildren, forwardRef } from 'react'

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

export const Flex = forwardRef(function Flex(
  {
    direction = 'row',
    align = 'start',
    content = 'start',
    gap = 5,
    grid = false,
    children,
    ...props
  }: PropsWithChildren<IFlex>,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledBox
      direction={direction}
      align={align}
      content={content}
      gap={gap}
      grid={grid}
      ref={ref}
      {...props}
    >
      {children}
    </StyledBox>
  )
})

const StyledBox = styled.div<IFlex>`
  display: flex;
  flex-wrap: ${({ grid }) => (grid ? 'wrap' : '')};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ content }) => content};
  gap: ${({ gap }) => `${gap}px`};
`
