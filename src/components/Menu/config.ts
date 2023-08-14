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
        label: 'Exchange (Uniswap)',
        href: 'https://app.uniswap.org/#/swap',
      },
      {
        label: 'Liquidity (Uniswap)',
        href: 'https://app.uniswap.org/#/add/ETH',
      },
      {
        label: 'Bridge (Official)',
        href: 'https://bridge.base.org/deposit',
      },
      {
        label: 'Bridge (Axelar)',
        href: '/bridge',
      },
    ],
  },
  {
    label: 'Yield',
    icon: 'PoolIcon',
    items: [
      {
        label: 'Farms',
        href: '/farms',
      },
      {
        label: 'Pools',
        href: '/pools',
      },
      /* {
        label: 'Cooking',
        href: '/cooking',
      }, */
    ]
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
    status: {
      text: 'LIVE',
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
    label: 'PolyCookie',
    icon: 'PawIcon',
    href: 'https://polyCookie.com',
    status: {
      text: 'Polygon',
      color: 'warning',
    },
  }, */
  {
    label: 'Docs',
    icon: 'MoreIcon',
    href: 'https://docs.cookiebase.xyz/',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Coingecko',
        href: 'https://www.coingecko.com/en/coins/cookiebase',
      },
      {
        label: 'Coinmarketcap',
        href: 'https://coinmarketcap.com/currencies/cookiebase/',
      },
      {
        label: 'Defillama',
        href: 'https://defillama.com/protocol/cookiebase',
      },
      {
        label: 'BaseScan',
        href: 'https://basescan.org/address/0x614747C53CB1636b4b962E15e1D66D3214621100#code',
      },
      /* {
        label: 'Blog',
        href: 'https://medium.com/@Cookiedefi',
      }, */

    ],
  },
  /* {
    label: 'Roadmap',
    icon: 'MoreIcon',
    href: 'https://docs.cookiebase.finance/roadmap',
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
    href: 'https://www.certik.org/projects/CookieBase',
  }, */
]

export default config
