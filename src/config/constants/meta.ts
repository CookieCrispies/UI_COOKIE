import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'YogurtFactory',
  description:
    'Turn Yogurt into cold, hard cash on PulseChain',
  image: 'https://Yogurtdefi.com/images/2logos',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | YogurtFactory',
  },
  '/competition': {
    title: 'Trading Battle | YogurtFactory',
  },
  '/prediction': {
    title: 'Prediction | YogurtFactory',
  },
  '/farms': {
    title: 'Farms | YogurtFactory',
  },
  '/pools': {
    title: 'Pools | YogurtFactory',
  },
  '/lottery': {
    title: 'Lottery | YogurtFactory',
  },
  '/collectibles': {
    title: 'Collectibles | YogurtFactory',
  },
  '/ido': {
    title: 'Initial DEX Offering | YogurtFactory',
  },
  '/teams': {
    title: 'Leaderboard | YogurtFactory',
  },
  '/profile/tasks': {
    title: 'Task Center | YogurtFactory',
  },
  '/profile': {
    title: 'Your Profile | YogurtFactory',
  },
}
