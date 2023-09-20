import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

interface IIconLink {
  link: {
    href: string
    title: string
  }
  image: {
    src: string
    alt: string
  }
  width?: number
  height?: number
  newTab?: boolean
}

export const IconLink: FC<IIconLink> = ({
  link,
  image,
  width,
  height,
  newTab,
}) => {
  return (
    <Link
      href={link.href}
      title={link.title}
      target={newTab ? '_blank' : undefined}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={width ?? 32}
        height={height ?? 32}
        draggable={false}
      />
    </Link>
  )
}
