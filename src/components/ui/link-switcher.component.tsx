import Image from 'next/image'
import Link from 'next/link'

import { FC, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'styled-components'

import { Flex } from '@/components/layout'

import { ProjectStackList } from '@/shared/data'

import { IconLink, Tab } from '@/components/ui'

export const LinkSwitcher: FC = () => {
  const [tab, setTab] = useState<'stack' | 'qr'>('stack')

  return (
    <div>
      <StyledTabs>
        <Tab label="Stack" tabRole="stack" currentTab={tab} setTab={setTab} />
        <Tab label="QR-Link" tabRole="qr" currentTab={tab} setTab={setTab} />
      </StyledTabs>

      <AnimatePresence>
        {tab === 'stack' && (
          <StyledDescription
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            exit={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <StyledLabel>Stack:</StyledLabel>

            <StyledStackList grid gap={22}>
              {ProjectStackList.map(
                ({ icon: { alt, src }, link: { href, title } }, idx) => (
                  <IconLink
                    link={{
                      href,
                      title,
                    }}
                    image={{ src, alt }}
                    key={idx}
                    newTab
                  />
                ),
              )}
            </StyledStackList>
          </StyledDescription>
        )}

        {tab === 'qr' && (
          <StyledImageBox
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            exit={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <StyledGithubLink
              href="https://github.com/andrewench/music-platform-frontend"
              target="_blank"
              title="Click to open a new tab"
            >
              <StyledImage
                src="/assets/images/qr_frontend.png"
                alt="QR Frontend"
                width={180}
                height={180}
                quality={100}
                draggable={false}
              />
            </StyledGithubLink>
          </StyledImageBox>
        )}
      </AnimatePresence>
    </div>
  )
}

const StyledTabs = styled.div`
  position: relative;
  z-index: 100;
  margin-bottom: 14px;
  border-radius: 6px;
  overflow: hidden;
`

const StyledLabel = styled.p`
  margin-bottom: 14px;
  color: var(--text-level-3);
`

const StyledStackList = styled(Flex)`
  align-content: start;
`

const StyledDescription = styled(motion.div)`
  width: 180px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 10px -10px 30px #141414;
  background-color: #1b1b1b;
`

const StyledImageBox = styled(motion.div)`
  padding-top: 6px;
  border-radius: 10px;
  box-shadow: 10px -10px 30px #292828;
`

const StyledGithubLink = styled(Link)`
  position: relative;
  display: block;

  &::before {
    --borderOffset: -6px;

    content: '';
    position: absolute;
    left: var(--borderOffset);
    top: var(--borderOffset);
    right: var(--borderOffset);
    bottom: var(--borderOffset);
    display: block;
    border: 2px solid var(--palette-yellow);
    border-radius: 14px;
  }

  &::after {
    content: '';
    position: absolute;
    right: -15px;
    top: -15px;
    width: 0;
    height: 0;
    transform: rotate(-48deg);
    border: 8px solid transparent;
    border-left: 10px solid var(--palette-yellow);
  }
`

const StyledImage = styled(Image)`
  display: block;
`
