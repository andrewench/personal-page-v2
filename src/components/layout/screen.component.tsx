import { FC, PropsWithChildren } from 'react'

import { styled } from 'styled-components'

import { Flex, IFlex } from '@/components/layout'

type TScreenLayout = Partial<
  IFlex & {
    flex: boolean
  }
>

export const ScreenLayout: FC<PropsWithChildren<TScreenLayout>> = ({
  flex,
  children,
  ...flexProps
}) => {
  if (flex) return <StyledFlex {...flexProps}>{children}</StyledFlex>

  return <StyledBox>{children}</StyledBox>
}

const StyledFlex = styled(Flex)`
  z-index: 100;
  padding: 0 12rem;
  position: relative;
`

const StyledBox = styled.div`
  z-index: 100;
  padding: 0 12rem;
  position: relative;
`
