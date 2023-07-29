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
        href: 'https://app.pulsex.com/swap?outputCurrency=0xece11C704F38FF38520667AeCDd7f53eA82F60F5',
      },
      {
        label: 'Liquidity',
        href: 'https://app.pulsex.com/add/PLS/0xece11C704F38FF38520667AeCDd7f53eA82F60F5',
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
    label: 'PolyYogurt',
    icon: 'PawIcon',
    href: 'https://polyYogurt.com',
    status: {
      text: 'Polygon',
      color: 'warning',
    },
  }, */
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Coingecko',
        href: 'https://coingecko.com/',
      },
      {
        label: 'Coinmarketcap',
        href: 'https://coinmarketcap.com',
      },
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/pulsechain/0xca8544e46153f6b2ab535bb6549daaaecb71d58a',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.yogurtfinance.com/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@yogurtdefi',
      },
      {
        label: 'Github',
        href: 'https://github.com',
      },
      {
        label: 'Defillama',
        href: 'https://defillama.com/chain/Pulse',
      },

    ],
  },
  /* {
    label: 'Roadmap',
    icon: 'MoreIcon',
    href: 'https://docs.Yogurtdefi.com/roadmap',
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
    href: 'https://www.certik.org/projects/Yogurtfinance',
  }, */
]

export default config
