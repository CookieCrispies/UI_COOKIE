import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'YogurtFinance',
  description:
    'Turn Yogurt into cold, hard cash on PulseChain',
  image: 'https://Yogurtdefi.com/images/2logos',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | YogurtFinance',
  },
  '/competition': {
    title: 'Trading Battle | YogurtFinance',
  },
  '/prediction': {
    title: 'Prediction | YogurtFinance',
  },
  '/farms': {
    title: 'Farms | YogurtFinance',
  },
  '/pools': {
    title: 'Pools | YogurtFinance',
  },
  '/lottery': {
    title: 'Lottery | YogurtFinance',
  },
  '/collectibles': {
    title: 'Collectibles | YogurtFinance',
  },
  '/ido': {
    title: 'Initial DEX Offering | YogurtFinance',
  },
  '/teams': {
    title: 'Leaderboard | YogurtFinance',
  },
  '/profile/tasks': {
    title: 'Task Center | YogurtFinance',
  },
  '/profile': {
    title: 'Your Profile | YogurtFinance',
  },
}
