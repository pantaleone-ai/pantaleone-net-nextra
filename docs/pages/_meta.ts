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
    type: 'page',
    title: 'Shop',
    // 'ai': '',
    // 'art-nfts': '',
    'custom-theme': '',
    '-- Shop Pantaleone @ Marketplaces': {
      type: 'separator',
      title: 'Shop Pantaleone @ Marketplaces'
      },
    'next.js-link-opensea': {
      title: 'OpenSea ↗',
      href: '#',
      newWindow: true
      },
    'next.js-link-coinbase': {
      title: 'Coinbase ↗',
      href: '#',
      newWindow: true
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
  // showcase: {
  //   type: 'page',
  //   title: 'Showcase',
  //   theme: {
  //     typesetting: 'article',
  //     layout: 'full',
  //     timestamp: false
  //   }
  // },
  // sponsors: {
  //   type: 'page',
  //   title: 'Sponsors',
  //   theme: {
  //     typesetting: 'article',
  //     layout: 'full',
  //     timestamp: false
  //   }
  // },
  404: {
    type: 'page',
    theme: {
      timestamp: false,
      typesetting: 'article'
    }
  }
}