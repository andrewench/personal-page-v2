'use client'

import { FC, memo } from 'react'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { Logo } from '@/components/shared'

import { HeaderHashLink } from '@/components/ui'

export const Header: FC<{ scrollY: number }> = memo(function Header({
  scrollY,
}) {
  return (
    <StyledBox flex align="center" content="space-between" scrollY={scrollY}>
      <Logo />

      <StyledLinks align="center" gap={0}>
        <HeaderHashLink label="Skills" hash="#skills" />
        <HeaderHashLink label="Portfolio" hash="#portfolio" />
        <HeaderHashLink label="Plans" hash="#plans" />
        <HeaderHashLink label="About" hash="#about" />
      </StyledLinks>
    </StyledBox>
  )
})

const StyledBox = styled(ScreenLayout)<{ scrollY: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 9000;
  box-shadow: ${({ scrollY }) => (scrollY > 400 ? '0 0 30px #00000060' : '')};
  backdrop-filter: ${({ scrollY }) => (scrollY > 400 ? 'blur(8px)' : '')};
`

const StyledLinks = styled(Flex)`
  height: 100%;
`
