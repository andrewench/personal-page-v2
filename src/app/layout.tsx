import { Metadata } from 'next'

import { ReactNode } from 'react'

import { inter } from '@/shared/fonts'

import './globals.css'

export const metadata: Metadata = {
  title: 'andrewench \\ Personal page',
  description: 'andrewench \\ Personal page',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
