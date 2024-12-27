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
      2: {
        title: 'Comming Soon ↗',
        href: '#',
        newWindow: false
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
