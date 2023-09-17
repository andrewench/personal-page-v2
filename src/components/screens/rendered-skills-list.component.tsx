import { FC, memo } from 'react'

import { SkillsList } from '@/shared/data'

import { ProgressIndicator } from '@/components/ui'

export const RenderedSkillsList: FC = memo(function RenderedSkillsList() {
  return SkillsList.map((props, idx) => (
    <ProgressIndicator {...props} key={idx} />
  ))
})
