import { FC, memo, useEffect, useRef } from 'react'

import { animate, motion, motionValue, useInView } from 'framer-motion'
import { styled } from 'styled-components'

import { Flex } from '@/components/layout'

import { ProgressPointsColors } from '@/shared/data'

import { RenderedProgressPoints } from './rendered-progress-points.component'

interface IProgressIndicator {
  label: string
  percent: number
}

export const ProgressIndicator: FC<IProgressIndicator> = memo(
  function ProgressIndicator({ label, percent }) {
    const progressBarRef = useRef<HTMLDivElement>(null)
    const progressPercentRef = useRef<HTMLParagraphElement>(null)

    const animatedPercent = motionValue(0)

    const isInView = useInView(progressBarRef, { once: true })

    const calculateProgress = (percent: number) => (280 * percent) / 100

    useEffect(() => {
      if (!progressBarRef.current) return

      if (isInView) {
        animate(
          progressBarRef.current,
          {
            width: `${calculateProgress(percent)}px`,
          },
          {
            duration: 1,
          },
        )
      }
    }, [isInView, percent])

    useEffect(() => {
      const controls = animate(animatedPercent, percent, {
        duration: 1,
        onUpdate(value) {
          if (!progressPercentRef.current) return

          progressPercentRef.current.textContent = value.toFixed(0) + '%'
        },
      })

      return () => {
        controls.stop()
      }
    }, [percent, animatedPercent])

    return (
      <StyledBar>
        <StyledStages content="space-between">
          <RenderedProgressPoints percent={percent} />
        </StyledStages>

        <StyledProgressBarBox>
          <StyledProgressBar
            ref={progressBarRef}
            initial={{ width: 0 }}
            width={calculateProgress(percent)}
          >
            <StyledTrack palette={ProgressPointsColors} />
            <StyledDrag />
          </StyledProgressBar>
        </StyledProgressBarBox>

        <Flex align="center" content="space-between">
          <StyledLabel>{label}</StyledLabel>
          <StyledPercent
            ref={progressPercentRef}
            palette={ProgressPointsColors}
            percent={percent}
          />
        </Flex>
      </StyledBar>
    )
  },
)

const StyledBar = styled.div`
  width: 280px;
`

const StyledProgressBarBox = styled.div`
  border-radius: 3px;
  height: 6px;
  background-color: #00000030;
`

const StyledProgressBar = styled(motion.div)<{ width: number }>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: 6px;
  overflow: hidden;
  border-radius: 3px;
`

const StyledTrack = styled.div<{ palette: string[] }>`
  width: 280px;
  height: inherit;
  border-radius: inherit;
  background: ${({ palette }) =>
    `linear-gradient(to right,
  ${palette[0]} 25%,
  #1b1b1b 25%,
  #1b1b1b 25.6%,
  ${palette[1]} 25%, ${palette[1]} 50%,
  #1b1b1b 50%,
  #1b1b1b 50.6%,
  ${palette[2]} 50%, ${palette[2]} 75%,
  #1b1b1b 75%,
  #1b1b1b 75.6%,
  ${palette[3]} 75%)`};
`

const StyledStages = styled(Flex)`
  padding: 0 10% 0 11.6%;
  margin-bottom: 5px;
  color: var(--text-level-2);
`

const StyledLabel = styled.p`
  margin-top: 6px;
  font-size: 0.9rem;
  font-weight: 400;
  color: #fefefe;
`

const StyledPercent = styled.div<{
  palette: string[]
  percent: number
}>`
  font-size: 0.9rem;
  color: ${({ palette, percent }) => `${palette[Math.floor(percent / 25)]}`};
`

const StyledDrag = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 30%;
  z-index: 10;
  height: inherit;
  border-radius: inherit;
`
