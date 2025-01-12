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
  }
}