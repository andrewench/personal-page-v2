import { FC } from 'react'

import { styled } from 'styled-components'

import {
  Flex,
  ProjectCarouselGallery,
  ScreenLayout,
  VerticalCarousel,
} from '@/components/layout'

import { SectionTitle } from '@/components/shared'

import { LinkSwitcher } from '@/components/ui'

export const Portfolio: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>
        <SectionTitle label="\\ Portfolio _" bgColor="#131314" />
      </ScreenLayout>

      <StyledFlex content="space-between">
        <ProjectCarouselGallery />

        <StyledStickyCarousel>
          <VerticalCarousel>
            <StyledSourceLinks gap={10}>
              <LinkSwitcher />
            </StyledSourceLinks>
          </VerticalCarousel>
        </StyledStickyCarousel>
      </StyledFlex>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  padding: 60px 0 100px 0;
  min-height: 600px;
  background-color: #131314;
`

const StyledFlex = styled(Flex)`
  margin-top: 60px;
  padding: 0 8rem;
`

const StyledSourceLinks = styled(Flex)`
  position: relative;
  z-index: 100;
`

const StyledStickyCarousel = styled.div`
  position: sticky;
  top: 100px;
`
