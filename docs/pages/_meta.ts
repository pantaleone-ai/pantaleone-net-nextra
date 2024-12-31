export default {
  index: {
    type: 'page',
    title: 'Pantaleone.net',
    display: 'hidden',
    theme: {
      breadcrumb: false,
      footer: true,
      sidebar: true,
      toc: true,
      layout: 'raw'
    }
  },
  shop: {
    title: 'Shop',
    type: 'menu',
    items: {
      aiagents: {
        title: 'AI Agents',
        href: '/shop/ai'
      },
      aiworkflows: {
        title: 'AI Workflows',
        href: '/ai-workflows'
      },
      art: {
        title: 'Artwork & NFTs',
        href: '/art-nfts'
      },
    // '--- Shop Pantaleone @ Marketplaces': {
    //   type: 'separator',
    //   title: 'Shop Pantaleone @ Marketplaces'
    //   }
    // 'next.js-link-opensea': {
    //   title: 'OpenSea ↗',
    //   type: 'page',
    //   href: '#',
    //   newWindow: true
    //   },
    // 'next.js-link-coinbase': {
    //   title: 'Coinbase ↗',
    //   type: 'page',
    //   href: '#',
    //   newWindow: true
    //   }
    }
  },
  Blog: {
    type: 'page',
    title: 'Blog'
  },

  projects: {
    type: 'page',
    title: 'Projects',
    theme: {
    }
  },
  about: {
    type: 'page',
    title: 'About',
    theme: {
      breadcrumb: false,
      footer: true,
      sidebar: true,
      toc: true,
    }
  },
  404: {
    type: 'page',
    theme: {
      timestamp: false,
      typesetting: 'article'
    }
  }
}