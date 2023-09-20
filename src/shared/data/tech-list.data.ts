interface ITechItem {
  link: {
    href: string
    title: string
  }
  icon: {
    src: string
    alt: string
    width?: number
    height?: number
  }
}

const TechList: Record<string, ITechItem> = {
  react: {
    link: {
      href: 'https://react.dev/',
      title: 'React',
    },
    icon: {
      src: '/assets/icons/react.svg',
      alt: 'React Icon',
    },
  },
  typescript: {
    link: {
      href: 'https://www.typescriptlang.org/',
      title: 'Typescript',
    },
    icon: {
      src: '/assets/icons/typescript.svg',
      alt: 'Typescript Icon',
    },
  },
  tailwind: {
    link: {
      href: 'https://tailwindcss.com/',
      title: 'TailwindCSS',
    },
    icon: {
      src: '/assets/icons/tailwind.svg',
      alt: 'TailwindCSS Icon',
    },
  },
  vite: {
    link: {
      href: 'https://vitejs.dev/',
      title: 'Vite',
    },
    icon: {
      src: '/assets/icons/vite.svg',
      alt: 'Vite Icon',
    },
  },
  electron: {
    link: {
      href: 'https://www.electronjs.org/',
      title: 'Electron',
    },
    icon: {
      src: '/assets/icons/electron.svg',
      alt: 'Electron Icon',
    },
  },
  i18next: {
    link: {
      href: 'https://www.i18next.com/',
      title: 'i18next',
    },
    icon: {
      src: '/assets/icons/i18next.svg',
      alt: 'i18next Icon',
    },
  },
  redux: {
    link: {
      href: 'https://redux.js.org/',
      title: 'Redux Toolkit',
    },
    icon: {
      src: '/assets/icons/redux.svg',
      alt: 'Redux Toolkit Icon',
    },
  },
  framer: {
    link: {
      href: 'https://www.framer.com/motion/',
      title: 'Framer Motion',
    },
    icon: {
      src: '/assets/icons/framer-motion.svg',
      alt: 'Framer Motion Icon',
    },
  },
  next: {
    link: {
      href: 'https://nextjs.org/',
      title: 'Next.js',
    },
    icon: {
      src: '/assets/icons/next.svg',
      alt: 'Next.js Icon',
    },
  },
  styledComponents: {
    link: {
      href: 'https://styled-components.com/',
      title: 'Styled Components',
    },
    icon: {
      src: '/assets/icons/styled-components.svg',
      alt: 'Styled Components Icon',
      width: 61,
      height: 40,
    },
  },
}

const {
  react,
  typescript,
  tailwind,
  vite,
  electron,
  i18next,
  redux,
  framer,
  next,
  styledComponents,
} = TechList

export const ProjectStackList = [
  react,
  typescript,
  tailwind,
  vite,
  electron,
  i18next,
  redux,
  framer,
]

export const BuildStackList = [next, typescript, styledComponents]
