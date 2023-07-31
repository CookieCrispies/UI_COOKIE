import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CookieBase',
  description:
    'Sweeten your DeFi journey with CookieBase! 🌟 Embrace creamy yields and crumbly rewards on Base Blockchain.',
  image: 'https://cookiebase.finance/images/2logos',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | CookieBase',
  },
  '/competition': {
    title: 'Trading Battle | CookieBase',
  },
  '/prediction': {
    title: 'Prediction | CookieBase',
  },
  '/farms': {
    title: 'Farms | CookieBase',
  },
  '/pools': {
    title: 'Pools | CookieBase',
  },
  '/lottery': {
    title: 'Lottery | CookieBase',
  },
  '/collectibles': {
    title: 'Collectibles | CookieBase',
  },
  '/ido': {
    title: 'Initial DEX Offering | CookieBase',
  },
  '/teams': {
    title: 'Leaderboard | CookieBase',
  },
  '/profile/tasks': {
    title: 'Task Center | CookieBase',
  },
  '/profile': {
    title: 'Your Profile | CookieBase',
  },
}
