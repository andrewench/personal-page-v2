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
  position: relative;
  text-decoration: none;
  z-index: 0;
  padding: 32px 20px 0 20px;
  transition: 0.3s color;
  height: inherit;
  color: #fff;

  &:hover {
    color: var(--accent-color);
    background: linear-gradient(
      0deg,
      var(--accent-color) 2px,
      #00000020 2px,
      transparent
    );
  }
`
