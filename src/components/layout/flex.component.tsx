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
}

export const Flex: FC<PropsWithChildren<IFlex>> = ({
  direction = 'row',
  align = 'start',
  content = 'start',
  gap = 5,
  children,
  ...props
}) => {
  return (
    <StyledBox
      direction={direction}
      align={align}
      content={content}
      gap={gap}
      {...props}
    >
      {children}
    </StyledBox>
  )
}

const StyledBox = styled.div<IFlex>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => `${gap}px`};
`
