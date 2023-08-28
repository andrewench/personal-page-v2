'use client'

import { Skills, Welcome } from '@/components/screens'

import { Header } from '@/components/layout'

import { StyledProvider } from '@/components/providers'

const Main = () => {
  return (
    <main>
      <StyledProvider>
        <Header />

        <Welcome />
        <Skills />
      </StyledProvider>
    </main>
  )
}

export default Main
