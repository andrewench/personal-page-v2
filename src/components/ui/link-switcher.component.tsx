import Image from 'next/image'

import { FC, useState } from 'react'

import { styled } from 'styled-components'

import { Tab } from '@/components/ui'

interface ILinkSwitcher {}

export const LinkSwitcher: FC<ILinkSwitcher> = () => {
  const [tab, setTab] = useState<'qr' | 'link'>('qr')

  return (
    <div>
      <StyledTabs>
        <Tab label="QR" tabRole="qr" currentTab={tab} setTab={setTab} />
        <Tab label="Link" tabRole="link" currentTab={tab} setTab={setTab} />
      </StyledTabs>

      <StyledImageBox>
        <StyledImage
          src="/assets/images/qr_frontend.png"
          alt="QR Frontend"
          width={180}
          height={180}
          quality={100}
          draggable={false}
        />
      </StyledImageBox>
    </div>
  )
}

const StyledTabs = styled.div`
  margin-bottom: 14px;
  border-radius: 6px;
  overflow: hidden;
`

const StyledImageBox = styled.div`
  border-radius: 10px;
  box-shadow: 10px -10px 30px #292828;
`

const StyledImage = styled(Image)`
  display: block;
`
