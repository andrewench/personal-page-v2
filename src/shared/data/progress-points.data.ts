interface IProgressPointsList {
  level: 1 | 2 | 3 | 4
  label: string
  tooltip: string
}

export const ProgressPointsList: IProgressPointsList[] = [
  {
    level: 1,
    label: 'WTF',
    tooltip: 'WTF – lack of knowledge',
  },
  {
    level: 2,
    label: 'Doubts',
    tooltip: 'Doubts – basic knowledge',
  },
  {
    level: 3,
    label: 'Comfort',
    tooltip: 'Comfort – comfort level of use',
  },
  {
    level: 4,
    label: 'Deep',
    tooltip: 'Deep – deep knowledge',
  },
]

export const ProgressPointsColors = ['#db5945', '#dbad45', '#86db45', '#45d4db']
