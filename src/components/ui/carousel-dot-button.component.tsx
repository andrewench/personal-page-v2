import { Dispatch, FC, SetStateAction } from 'react'

import { styled } from 'styled-components'

interface ICarouselDotButton {
  slide: number
  currentSlide: number
  setSlide: Dispatch<SetStateAction<number>>
}

export const CarouselDotButton: FC<ICarouselDotButton> = ({
  slide,
  currentSlide,
  setSlide,
}) => {
  return (
    <StyledBox slide={slide} currentSlide={currentSlide}>
      <StyledButton onClick={() => setSlide(slide)} />
    </StyledBox>
  )
}

const StyledBox = styled.div<{ slide: number; currentSlide: number }>`
  --circle-size: 10px;

  position: relative;
  width: 20px;
  height: 20px;

  &::before,
  &::after {
    content: '';
    left: 5px;
    top: 5px;
    position: absolute;
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: calc(var(--circle-size) / 2);
  }

  &::before {
    background-color: #dbad4550;
  }

  &::after {
    z-index: 10;
    opacity: ${({ slide, currentSlide }) =>
      slide === currentSlide ? '1' : '0'};
    transform: ${({ slide, currentSlide }) =>
      slide === currentSlide
        ? 'translateY(0);'
        : 'translateY(calc(var(--circle-size) + 5px))'};
    transition:
      0.3s transform,
      0.3s opacity;
    background-color: ${({ slide, currentSlide }) =>
      slide === currentSlide ? '#dbad45' : '#dbad4530'};
  }

  &:hover {
    cursor: pointer;

    &::after {
      transform: translateY(0);
      opacity: 1;
      background-color: var(--palette-yellow);
    }
  }
`

const StyledButton = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  display: block;
  border: none;
  z-index: 100;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`
