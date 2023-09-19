import Link from 'next/link'

import { FC } from 'react'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { Logo } from '@/components/ui'

export const Footer: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>
        <Logo />

        <StyledMeta direction="column" align="center" gap={10}>
          <StyledProfileText>
            Github Profile:{' '}
            <StyledProfileLink
              href="https://github.com/andrewench"
              target="_blank"
              title="Open a new tab"
            >
              andrewench
            </StyledProfileLink>
          </StyledProfileText>

          <StyledBuildText>
            <StyledBuildLabel>Build Stack:</StyledBuildLabel> Next.js,
            Typescript, Styled Components
          </StyledBuildText>
        </StyledMeta>

        <StyledCopyright>&copy; 2023. All rights reserved.</StyledCopyright>
      </ScreenLayout>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  padding: 50px 0;
  color: #fff;
  background-color: #060606;
`

const StyledCopyright = styled.p`
  text-align: center;
  font-size: 14px;
  color: var(--text-level-2);
`

const StyledMeta = styled(Flex)`
  margin: 50px 0;
`

const StyledProfileText = styled.p`
  color: var(--palette-yellow);
`

const StyledProfileLink = styled(Link)`
  color: var(--text-level-3);
`

const StyledBuildText = styled.p`
  color: var(--text-level-3);
`

const StyledBuildLabel = styled.span`
  color: var(--palette-yellow);
`
