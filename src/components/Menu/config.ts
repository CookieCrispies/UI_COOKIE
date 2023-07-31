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
        href: 'https://base.leetswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://base.leetswap.finance/#/add/v2/ETH',
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
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
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
    label: 'Info',
    icon: 'InfoIcon',
    items: [
     /* {
        label: 'Coingecko',
        href: 'https://coingecko.com/',
      },
      {
        label: 'Coinmarketcap',
        href: 'https://coinmarketcap.com',
      },
      {
        label: 'PulseX',
        href: 'https://app.pulsex.com/info/pool/0xca8544e46153f6b2ab535bb6549daaaecb71d58a',
      }, */
      {
        label: 'BaseScan',
        href: 'https://basescan.org/address/0x614747C53CB1636b4b962E15e1D66D3214621100#code',
      },
      /* {
        label: 'Defillama',
        href: 'https://defillama.com/chain/Pulse',
      }, */
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.cookiebase.finance/',
      },
      /* {
        label: 'Blog',
        href: 'https://medium.com/@Cookiedefi',
      }, */
      {
        label: 'Github',
        href: 'https://github.com/CookieBaseFinance',
      },
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
