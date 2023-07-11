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
        href: 'https://pancakeswap.finance/swap?outputCurrency=0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      },
      {
        label: 'Liquidity',
        href: 'https://pancakeswap.finance/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
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
    href: '/dens',
  },
  {
    label: 'Vaults',
    icon: 'PawIcon',
    href: '/kingdoms',
    status: {
      text: 'AUTO',
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
    label: 'PolyCUB',
    icon: 'PawIcon',
    href: 'https://polycub.com',
    status: {
      text: 'Polygon',
      color: 'warning',
    },
  }, */
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
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
        href: 'https://www.coingecko.com/',
      },
      {
        label: 'Coinmarketcap',
        href: 'https://coinmarketcap.com/',
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
    href: 'https://docs.cubdefi.com/roadmap',
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
    href: 'https://www.certik.org/projects/cubfinance',
  }, */
]

export default config
