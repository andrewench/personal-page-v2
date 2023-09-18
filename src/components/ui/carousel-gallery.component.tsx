import { Dispatch, FC, SetStateAction, useState } from 'react'

import { styled } from 'styled-components'

import { Flex } from '@/components/layout'

import { CarouselDotButton } from '@/components/ui'

interface ICarouselGallery {
  slide: number
  setSlide: Dispatch<SetStateAction<number>>
}

export const CarouselGallery: FC<ICarouselGallery> = ({ slide, setSlide }) => {
  return (
    <StyledDotCarousel align="center" content="center" gap={6}>
      <CarouselDotButton slide={0} currentSlide={slide} setSlide={setSlide} />

      <StyledDivider />

      <CarouselDotButton slide={1} currentSlide={slide} setSlide={setSlide} />

      <StyledDivider />

      <CarouselDotButton slide={2} currentSlide={slide} setSlide={setSlide} />
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
