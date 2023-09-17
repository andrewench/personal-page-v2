import Image from 'next/image'

import { FC } from 'react'

import { styled } from 'styled-components'

import { Flex, ScreenLayout, VerticalCarousel } from '@/components/layout'

import { SectionTitle } from '@/components/shared'

import { CarouselGallery, LinkSwitcher } from '@/components/ui'

export const Portfolio: FC = () => {
  return (
    <StyledBox>
      <ScreenLayout>
        <SectionTitle label="\\ Portfolio _" bgColor="#131314" />
      </ScreenLayout>

      <StyledFlex content="space-between">
        <div>
          <StyledImageBox>
            <StyledImage
              width={828}
              height={518}
              src="/assets/images/music-platform-playlist.png"
              alt="Pet Project"
              draggable={false}
              quality={100}
            />
          </StyledImageBox>

          <CarouselGallery />
        </div>

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

const StyledImageBox = styled.div`
  position: relative;
  z-index: 1;
`

const StyledImage = styled(Image)`
  display: block;
  object-fit: cover;
  box-shadow: 10px 30px 50px #00000010;
`

const StyledSourceLinks = styled(Flex)`
  position: relative;
  z-index: 100;
`

const StyledStickyCarousel = styled.div`
  position: sticky;
  top: 100px;
`
