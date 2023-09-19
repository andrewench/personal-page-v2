interface IProjectStackList {
  link: {
    href: string
    title: string
  }
  icon: {
    src: string
    alt: string
  }
}

export const ProjectStackList: IProjectStackList[] = [
  {
    link: {
      href: 'https://react.dev/',
      title: 'React',
    },
    icon: {
      src: '/assets/icons/react.svg',
      alt: 'React Icon',
    },
  },
  {
    link: {
      href: 'https://www.typescriptlang.org/',
      title: 'Typescript',
    },
    icon: {
      src: '/assets/icons/typescript.svg',
      alt: 'Typescript Icon',
    },
  },
  {
    link: {
      href: 'https://tailwindcss.com/',
      title: 'TailwindCSS',
    },
    icon: {
      src: '/assets/icons/tailwind.svg',
      alt: 'TailwindCSS Icon',
    },
  },
  {
    link: {
      href: 'https://vitejs.dev/',
      title: 'Vite',
    },
    icon: {
      src: '/assets/icons/vite.svg',
      alt: 'Vite Icon',
    },
  },
  {
    link: {
      href: 'https://www.electronjs.org/',
      title: 'Electron',
    },
    icon: {
      src: '/assets/icons/electron.svg',
      alt: 'Electron Icon',
    },
  },
  {
    link: {
      href: 'https://www.i18next.com/',
      title: 'i18next',
    },
    icon: {
      src: '/assets/icons/i18next.svg',
      alt: 'i18next Icon',
    },
  },
  {
    link: {
      href: 'https://redux.js.org/',
      title: 'Redux Toolkit',
    },
    icon: {
      src: '/assets/icons/redux.svg',
      alt: 'Redux Toolkit Icon',
    },
  },
  {
    link: {
      href: 'https://www.framer.com/motion/',
      title: 'Framer Motion',
    },
    icon: {
      src: '/assets/icons/framer-motion.svg',
      alt: 'Framer Motion Icon',
    },
  },
]
