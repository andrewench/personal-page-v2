'use client'

import { FC, memo, useEffect, useState } from 'react'

import { Portfolio, Skills, Welcome } from '@/components/screens'

import { Header } from '@/components/layout'

import { StyledProvider } from '@/components/providers'

export const MainProvider: FC = memo(function MainProvider() {
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    if (scrollY > 0) return

    setScrollY(window.scrollY)
  }, [scrollY])

  useEffect(() => {
    const scrollHandler = () => {
      setScrollY(window.scrollY)
    }

    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <main>
      <StyledProvider>
        <Header scrollY={scrollY} />

        <Welcome />
        <Skills />
        <Portfolio />
      </StyledProvider>
    </main>
  )
})
