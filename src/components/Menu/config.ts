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
    label: 'More',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.yogurtfinance.com/',
      },
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com',
      },
      {
        label: 'Github',
        href: 'https://github.com',
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
