interface IProjectList {
  slideIndex: number
  src: string
  alt: string
}

export const ProjectsList: IProjectList[] = [
  {
    slideIndex: 0,
    src: '/assets/images/music-platform-playlist.png',
    alt: 'Playlist Image',
  },
  {
    slideIndex: 1,
    src: '/assets/images/music-platform-playlists.png',
    alt: 'Playlists page',
  },
  {
    slideIndex: 2,
    src: '/assets/images/music-platform-language.png',
    alt: 'Multi-language feature',
  },
]
