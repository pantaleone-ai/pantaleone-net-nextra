import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { Link, useConfig } from 'nextra-theme-docs'

const logo = (
  <>
    <div className="w-6 h-7 flex items-center justify-center bg-transparent border border-white rounded">
      <span className="text-xl font-bold text-white">P</span>
    </div>
    <span aria-label="logo" className="ml-2">pantaleone</span>
  </>
)


const config: DocsThemeConfig = {
  // banner: {
  //   key: '3.0-release',
  //   content: (
  //     <div className='before:content-["🎉_"]'>
  //       Nextra 3.0 is released.{' '}
  //       <Link
  //         href="https://the-guild.dev/blog/nextra-3"
  //         className='after:content-["_→"]'
  //       >
  //         Read more
  //       </Link>
  //     </div>
  //   )
  // },
  // project: {
  //   link: 'https://github.com/pantaleone-ai'
  // },
  docsRepositoryBase: 'https://github.com/pantaleone-ai/pantaleone-net-nextra/tree/main/docs',
  logo,
  head: function useHead() {
    const config = useConfig()
    const { route } = useRouter()
    const isDefault = route === '/' || !config.title
    const image =
      'https://nextra.site/' +
      (isDefault ? 'og.jpeg' : `/og?title=${config.title}`)

    const description =
      config.frontMatter.description ||
      'Make beautiful websites with Next.js & MDX.'
    const title = config.title + (route === '/' ? '' : ' - Nextra')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    content: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="nextra-focus flex items-center gap-1 text-current"
            target="_blank"
            title="Rapigent.com AI Agents and Automated Workflows"
            href="https://rapigent.com?utm_source=pantaleone.net"
          >
            <span>Automated by Rapigent AI Agents</span>
            
          </a>
        </div>
        <p className="mt-6 text-xs">
       © {new Date().getFullYear()} Pantaleone.net, all rights reserved.
        </p>
      </div>
    )
  }
}

export default config
