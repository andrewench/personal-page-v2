import { FC, memo } from 'react'

import { ProgressPoint } from '@/components/shared'

import { ProgressPointsList } from '@/shared/data'

export const RenderedProgressPoints: FC<{ percent: number }> = memo(
  function RenderedProgressPoints({ percent }) {
    return ProgressPointsList.map((props, idx) => (
      <ProgressPoint {...props} percent={percent} key={idx} />
    ))
  },
)
