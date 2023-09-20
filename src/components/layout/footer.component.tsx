import Image from 'next/image'
import Link from 'next/link'

import { FC, useEffect, useState } from 'react'

import { styled } from 'styled-components'

import { Flex, ScreenLayout } from '@/components/layout'

import { BuildStackList } from '@/shared/data'

import { IconLink, Logo } from '@/components/ui'

type GithubResponse = {
  avatar_url: string
  name: string
}

export const Footer: FC = () => {
  const [githubUserResponse, setGithubUserResponse] = useState<GithubResponse>(
    {} as GithubResponse,
  )

  useEffect(() => {
    const fetchAvatarUrl = async () => {
      const response = await fetch('https://api.github.com/users/andrewench')

      const { avatar_url, name } = (await response.json()) as GithubResponse

      setGithubUserResponse(state => ({
        avatar_url,
        name,
      }))
    }

    fetchAvatarUrl()
  }, [])

  return (
    <StyledBox>
      <ScreenLayout>
        <Logo />

        <StyledMeta direction="column" align="center" gap={10}>
          <StyledProfileText align="center" gap={10}>
            Github:
            <StyledProfileLink
              href="https://github.com/andrewench"
              target="_blank"
              title="Open a new tab"
            >
              <StyledAvatar
                src={githubUserResponse.avatar_url}
                alt={`${githubUserResponse.name}'s Github Avatar`}
                width={40}
                height={40}
                quality={100}
              />
              andrewench
            </StyledProfileLink>
          </StyledProfileText>

          <StyledBuildStack align="center" gap={10}>
            <StyledBuildLabel>Build Stack:</StyledBuildLabel>

            {BuildStackList.map(
              (
                { link: { href, title }, icon: { src, alt, width, height } },
                idx,
              ) => (
                <IconLink
                  link={{ href, title }}
                  image={{ src, alt }}
                  width={width}
                  height={height}
                  newTab
                  key={idx}
                />
              ),
            )}
          </StyledBuildStack>
        </StyledMeta>

        <StyledCopyright>&copy; 2023. All rights reserved.</StyledCopyright>
      </ScreenLayout>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  padding: 50px 0;
  color: #fff;
  background-color: #0a0a0a;
`

const StyledCopyright = styled.p`
  text-align: center;
  font-size: 14px;
  color: var(--text-level-2);
`

const StyledMeta = styled(Flex)`
  margin: 50px 0;
`

const StyledProfileText = styled(Flex)`
  color: var(--palette-yellow);
`

const StyledProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-level-3);
`

const StyledAvatar = styled(Image)`
  border-radius: 50%;
`

const StyledBuildStack = styled(Flex)`
  color: var(--text-level-3);
`

const StyledBuildLabel = styled.span`
  color: var(--palette-yellow);
`
