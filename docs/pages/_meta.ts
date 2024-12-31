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
    }
  },
  Blog: {
    type: 'menu',
    title: 'Blog',
    items: {
      blogindex: {
        title: 'Latest Writings',
        href: '/blog'
      },
      topics: {
        title: 'Blog Topics & Tags',
        href: '/blog/tags'
      },
      rss: {
        title: 'Article RSS Feed ↗',
        href: '/rss.xml',
        newWindow: true
      },
    }
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
      toc: true
    }
  },
  404: {
    type: 'page',
    theme: {
      timestamp: false,
      typesetting: 'article'
    }
  },
  blog: {
    type: 'page',
    display: 'hidden'
  }
}