import { FC } from 'react'

import { styled } from 'styled-components'

interface ISectionTitle {
  label: string
  bgColor: string
}

export const SectionTitle: FC<ISectionTitle> = ({ label, bgColor }) => {
  return (
    <div>
      <StyledLine />
      <StyledHeading bgColor={bgColor}>{label}</StyledHeading>
    </div>
  )
}

const StyledHeading = styled.h1<{ bgColor: string }>`
  position: relative;
  display: block;
  width: max-content;
  font-weight: 300;
  font-size: 28px;
  padding: 0 30px;
  transform: translateX(-30px);
  z-index: 1000;
  color: #fefefe;
  background-color: ${({ bgColor }) => bgColor};
`

const StyledLine = styled.div`
  display: block;
  position: absolute;
  left: -12rem;
  top: 18px;
  z-index: -1;
  width: 100vw;
  height: 1px;
  background: linear-gradient(90deg, #fefefe10, transparent);
`
