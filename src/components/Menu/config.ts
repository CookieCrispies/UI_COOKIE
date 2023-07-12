import { MenuEntry } from "@pancakeswap-libs/uikit";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.pulsex.com',
      },
      {
        label: 'Liquidity',
        href: 'https://app.pulsex.com',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Vaults',
    icon: 'PawIcon',
    href: '/vaults',
    status: {
      text: 'SOON',
      color: 'warning',
    },
  },
  /* {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  }, */
  /* {
    label: 'Wrap HBD',
    icon: 'DollarIcon',
    href: "https://wleo.io/hbd-bsc/",
  },
  {
    label: 'Wrap HIVE',
    icon: 'HiveIcon',
    href: "https://wleo.io/hive-bsc/",
  },
  {
    label: 'Polycola',
    icon: 'PawIcon',
    href: 'https://polycola.com',
    status: {
      text: 'Polygon',
      color: 'warning',
    },
  }, */
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
    status: {
      text: 'SOON',
      color: 'warning',
    },
  },
  {
    label: 'Vote',
    icon: 'VoteIcon',
    href: 'https://snapshot.org/#/colafactory.eth',
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PulseX',
        href: 'https://app.pulsex.com/swap',
      },
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/pulsechain',
      },
      {
        label: 'Coingecko',
        href: 'https://www.coingecko.com/en/coins/cola-token-2',
      },
      {
        label: 'Coinmarketcap',
        href: 'https://coinmarketcap.com/currencies/colafactory/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Cola-Factory',
      },
      {
        label: 'Docs',
        href: 'https://docs.colafactory.com/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@ColaFactoryEN',
      },
    ],
  },
  /* {
    label: 'Roadmap',
    icon: 'MoreIcon',
    href: 'https://docs.coladefi.com/roadmap',
  },
  {
    label: "Tokenized Blogging",
    icon: "TokenizeIcon",
    href: "https://leofinance.io/",
  }, */
  /* {
    label: "Blog",
    icon: "BlogIcon",
    href: "https://leofinance.io/@leofinance",
  },
  {
    label: 'CertiK Audit',
    icon: 'AuditIcon',
    href: 'https://www.certik.org/projects/colafinance',
  }, */
]

export default config
