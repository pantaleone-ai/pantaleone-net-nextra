export default {
  index: {
    type: 'page',
    title: 'Pantaleone.net',
    display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },

  shop: {
    type: 'menu',
    title: 'Shop',
    items: {
      '-- More': {
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
    }
  },
  Blog: {
    type: 'page',
    title: 'Blog'
  },
  about: {
    type: 'page',
    title: 'About',
    theme: {
      typesetting: 'article'
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
