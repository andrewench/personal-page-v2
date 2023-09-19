import Image from 'next/image'

import { FC, RefObject, useRef, useState } from 'react'

import { styled } from 'styled-components'

import { Flex } from '@/components/layout'

import { useCarousel } from '@/shared/hooks'

import { ProjectsList } from '@/shared/data'

import { CarouselGallery } from '@/components/ui'

export const ProjectCarouselGallery: FC = () => {
  const [slide, setSlide] = useState<number>(0)

  const wrapRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  const { mouseDownHandler, mouseUpHandler } = useCarousel({
    refs: {
      wrap: wrapRef,
      box: boxRef,
    },
    slides: {
      currentSlide: slide,
      setSlide,
      gap: 50,
      slideWidth: 828,
      maxAmount: 3,
    },
  })

  return (
    <div ref={wrapRef}>
      <StyledImageBox
        gap={50}
        ref={boxRef}
        className="scroll-bar"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      >
        {ProjectsList.map(({ slideIndex, ...props }) => (
          <StyledImage
            width={828}
            height={518}
            draggable={false}
            quality={100}
            slide={slideIndex}
            currentSlide={slide}
            key={slideIndex}
            {...props}
          />
        ))}
      </StyledImageBox>

      <CarouselGallery slide={slide} setSlide={setSlide} />
    </div>
  )
}

const StyledImageBox = styled(Flex)<{
  ref: RefObject<HTMLDivElement>
  className: string
  onMouseDown: () => void
  onMouseUp: () => void
}>`
  position: relative;
  z-index: 1;
  width: 828px;
  overflow-x: auto;
  padding-bottom: 5px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: var(--palette-yellow);
  }

  &::-webkit-scrollbar-thumb:hover {
    height: 6px;
    background-color: var(--palette-yellow);
  }
`

const StyledImage = styled(Image)<{ slide: number; currentSlide: number }>`
  display: block;
  object-fit: cover;
  user-select: none;
  box-shadow: 10px 30px 50px #00000010;
`
