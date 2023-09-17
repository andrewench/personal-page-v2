import { FC, useState } from 'react'

import { styled } from 'styled-components'

import { Flex } from '@/components/layout'

import { CarouselDotButton } from '@/components/ui'

export const CarouselGallery: FC = () => {
  const [slide, setSlide] = useState<number>(1)

  return (
    <StyledDotCarousel align="center" content="center" gap={6}>
      <CarouselDotButton slide={1} currentSlide={slide} setSlide={setSlide} />

      <StyledDivider />

      <CarouselDotButton slide={2} currentSlide={slide} setSlide={setSlide} />

      <StyledDivider />

      <CarouselDotButton slide={3} currentSlide={slide} setSlide={setSlide} />

      <StyledDivider />

      <CarouselDotButton slide={4} currentSlide={slide} setSlide={setSlide} />
    </StyledDotCarousel>
  )
}

const StyledDotCarousel = styled(Flex)`
  margin-top: 20px;
`

const StyledDivider = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 1px;
  background-color: #dbad4570;
`
