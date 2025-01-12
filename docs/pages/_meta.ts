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
  // shop: {
  //   title: 'Shop',
  //   type: 'menu',
  //   theme: {
  //     breadcrumb: true,
  //     footer: true,
  //     sidebar: true,
  //     toc: true,
  //     layout: 'article'
  //   },
  //   items: {
  //     aiagents: {
  //       title: 'AI Agents',
  //       href: '/shop/ai'
  //     },
  //     aiworkflows: {
  //       title: 'AI Workflows',
  //       href: '/ai-workflows'
  //     },
  //     art: {
  //       title: 'Artwork & NFTs',
  //       href: '/art-nfts'
  //     },
  //   },
  // },
  blog: {
    type: 'menu',
    title: 'Blog',
    theme: {
      breadcrumb: true,
      footer: true,
      sidebar: true,
      toc: true,
      layout: 'article'
    },
    items: {
      blogindex: {
        title: 'Latest Articles',
        href: '/blog/posts'
      },
      // topics: {
      //   title: 'Blog Topics & Tags',
      //   href: '/blog/tags'
      // },
      // rss: {
      //   title: 'RSS Feed ↗',
      //   href: '/rss.xml',
      //   newWindow: true
      // },
    }
  },
  // projects: {
  //   type: 'page',
  //   title: 'Projects',
  //   theme: {
  //     breadcrumb: true,
  //     footer: true,
  //     sidebar: true,
  //     toc: true,
  //   }
  // },
  about: {
    type: 'page',
    title: 'About Us',
    theme: {
      breadcrumb: true,
      footer: true,
      sidebar: true,
      toc: true,
      timestamp: true,
    }
  },
  404: {
    type: 'page',
    theme: {
      timestamp: false,
    }
  },
  // blog: {
  //   type: 'page',
  //   display: 'hidden'
  // }
}