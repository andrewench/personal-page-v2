import { Inconsolata } from 'next/font/google'

import { FC } from 'react'

import { styled } from 'styled-components'

const inconsolata = Inconsolata({ subsets: ['latin'], weight: ['300', '400'] })

export const Logo: FC = () => {
  return (
    <div>
      <StyledTitle>andrewench</StyledTitle>
      <StyledDescription className={inconsolata.className}>
        {'\\> about.me();'}
      </StyledDescription>
    </div>
  )
}

const StyledTitle = styled.p`
  color: #fff;
`

const StyledDescription = styled.span`
  color: var(--text-level-3);
`
