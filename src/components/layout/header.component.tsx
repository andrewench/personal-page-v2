'use client'

import { FC } from 'react'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { Logo } from '@/components/shared'

import { HeaderHashLink } from '@/components/ui'

export const Header: FC = () => {
  return (
    <StyledBox flex align="center" content="space-between">
      <Logo />

      <Flex align="center" gap={20}>
        <HeaderHashLink label="Skills" hash="#skills" />
        <HeaderHashLink label="Portfolio" hash="#portfolio" />
        <HeaderHashLink label="Plans" hash="#plans" />
        <HeaderHashLink label="About" hash="#about" />
      </Flex>
    </StyledBox>
  )
}

const StyledBox = styled(ScreenLayout)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 9000;
`
