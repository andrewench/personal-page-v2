import { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react'

interface IUseCarousel {
  refs: {
    wrap: RefObject<HTMLDivElement>
    box: RefObject<HTMLDivElement>
  }
  slides: {
    currentSlide: number
    setSlide: Dispatch<SetStateAction<number>>
    gap: number
    slideWidth: number
    maxAmount: number
  }
}

export const useCarousel = ({
  refs,
  slides: { currentSlide, gap, slideWidth },
}: IUseCarousel) => {
  const [isDrag, setDrag] = useState<boolean>(false)

  const mouseDownHandler = () => {
    if (!isDrag) setDrag(true)

    if (!refs.wrap.current) return
  }

  const mouseUpHandler = () => {
    if (!refs.box.current) return

    if (isDrag) {
      setDrag(false)
    }
  }

  useEffect(() => {
    if (!refs.box.current) return

    refs.box.current.scrollLeft = slideWidth * currentSlide + gap * currentSlide
  }, [refs.box, currentSlide, gap, slideWidth])

  return {
    mouseDownHandler,
    mouseUpHandler,
  }
}
