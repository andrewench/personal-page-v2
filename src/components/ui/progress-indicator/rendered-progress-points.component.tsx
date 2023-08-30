import { FC, memo } from 'react'

import { ProgressPoint } from '@/components/shared'

import { ProgressPointsList } from '@/shared/data'

export const RenderedProgressPoints: FC = memo(
  function RenderedProgressPoints() {
    return ProgressPointsList.map((props, idx) => (
      <ProgressPoint {...props} key={idx} />
    ))
  },
)
