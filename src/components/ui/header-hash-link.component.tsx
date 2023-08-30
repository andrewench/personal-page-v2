import Link from 'next/link'

import { FC, memo } from 'react'

import { styled } from 'styled-components'

interface IHeaderHashLink {
  label: string
  hash: string
}

export const HeaderHashLink: FC<IHeaderHashLink> = memo(
  function HeaderHashLink({ label, hash }) {
    return (
      <StyledText href={hash} replace draggable={false}>
        {label}
      </StyledText>
    )
  },
)

const StyledText = styled(Link)`
  text-decoration: none;
  color: #fff;
`
