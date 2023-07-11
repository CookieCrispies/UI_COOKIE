import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ColaFactory',
  description:
    'Turn Cola into cold, hard cash on PulseChain',
  image: 'https://coladefi.com/images/2logos',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | ColaFactory',
  },
  '/competition': {
    title: 'Trading Battle | ColaFactory',
  },
  '/prediction': {
    title: 'Prediction | ColaFactory',
  },
  '/farms': {
    title: 'Farms | ColaFactory',
  },
  '/pools': {
    title: 'Pools | ColaFactory',
  },
  '/lottery': {
    title: 'Lottery | ColaFactory',
  },
  '/collectibles': {
    title: 'Collectibles | ColaFactory',
  },
  '/ido': {
    title: 'Initial DEX Offering | ColaFactory',
  },
  '/teams': {
    title: 'Leaderboard | ColaFactory',
  },
  '/profile/tasks': {
    title: 'Task Center | ColaFactory',
  },
  '/profile': {
    title: 'Your Profile | ColaFactory',
  },
}
