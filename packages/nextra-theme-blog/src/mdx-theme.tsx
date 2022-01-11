import ReactDOMServer from 'react-dom/server'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Slugger from 'github-slugger'
import Link from 'next/link'
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import type { Language, PrismTheme } from 'prism-react-renderer'
import ReactDOM from 'react-dom'

const THEME: PrismTheme = {
  plain: {
    backgroundColor: 'transparent'
  },
  styles: [
    {
      types: ['keyword', 'builtin'],
      style: {
        color: '#ff0078',
        fontWeight: 'bold'
      }
    },
    {
      types: ['comment'],
      style: {
        color: '#999',
        fontStyle: 'italic'
      }
    },
    {
      types: ['variable', 'language-javascript'],
      style: {
        color: '#0076ff'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: '#d9931e',
        fontStyle: 'normal'
      }
    },
    {
      types: ['boolean', 'regex'],
      style: {
        color: '#d9931e'
      }
    }
  ]
}

// Anchor links

const SluggerContext = createContext<Slugger | null>(null)

export const HeadingContext = createContext<
  React.RefObject<HTMLHeadingElement | null>
>(React.createRef())

const useHeadingRef = () => {
  const ref = useContext(HeadingContext)
  return ref
}

const H1 = ({ children }: { children?: React.ReactNode }) => {
  const ref = useHeadingRef()
  const [showHeading, setShowHeading] = useState(false)
  useEffect(() => {
    if (ref.current) {
      setShowHeading(true)
    }
  }, [])
  return (
    <>{showHeading ? ReactDOM.createPortal(children, ref.current!) : null}</>
  )
}

const HeaderLink = ({
  tag: Tag,
  children,
  ...props
}: {
  tag: any
  children: any
}) => {
  const slugger = useContext(SluggerContext)
  // @ts-expect-error safe slugger from context
  const slug = slugger.slug(ReactDOMServer.renderToStaticMarkup(children))
  return (
    <Tag {...props}>
      <span className="subheading-anchor" id={slug} />
      <a href={'#' + slug} className="subheading">
        {children}
        <span className="anchor-icon" aria-hidden>
          #
        </span>
      </a>
    </Tag>
  )
}

const H2 = ({ children, ...props }: { children?: React.ReactNode }) => {
  return (
    <HeaderLink tag="h2" {...props}>
      {children}
    </HeaderLink>
  )
}

const H3 = ({ children, ...props }: { children?: React.ReactNode }) => {
  return (
    <HeaderLink tag="h3" {...props}>
      {children}
    </HeaderLink>
  )
}

const H4 = ({ children, ...props }: { children?: React.ReactNode }) => {
  return (
    <HeaderLink tag="h4" {...props}>
      {children}
    </HeaderLink>
  )
}

const H5 = ({ children, ...props }: { children?: React.ReactNode }) => {
  return (
    <HeaderLink tag="h5" {...props}>
      {children}
    </HeaderLink>
  )
}

const H6 = ({ children, ...props }: { children?: React.ReactNode }) => {
  return (
    <HeaderLink tag="h6" {...props}>
      {children}
    </HeaderLink>
  )
}
const A = ({
  children,
  ...props
}: {
  children?: React.ReactNode
  href?: string
}) => {
  const isExternal = props.href && props.href.startsWith('https://')
  if (isExternal) {
    return (
      <a target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  }
  return props.href ? (
    <Link href={props.href}>
      <a {...props}>{children}</a>
    </Link>
  ) : (
    <></>
  )
}

const HightlightContext = React.createContext<{
  highlight?: string
}>({})

const Pre = ({
  children,
  ...props
}: {
  children?: React.ReactNode
  highlight?: string
}) => {
  return (
    <HightlightContext.Provider value={props}>
      <pre>{children}</pre>
    </HightlightContext.Provider>
  )
}

const Code = ({
  children,
  className,
  ...props
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const { highlight } = useContext(HightlightContext)
  const highlightedRanges = useMemo(() => {
    return highlight
      ? highlight.split(',').map(r => {
          if (r.includes('-')) {
            return r.split('-').map(v => parseInt(v, 10))
          }
          return +r
        })
      : []
  }, [highlight])
  if (!className) return <code {...props}>{children}</code>
  if (typeof children !== 'string') return <code {...props}>{children}</code>
  // https://mdxjs.com/guides/syntax-highlighting#all-together
  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={THEME}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              style={
                highlightedRanges.some(r => {
                  return Array.isArray(r)
                    ? r[0] <= i + 1 && i + 1 <= r[1]
                    : r === i + 1
                })
                  ? {
                      background: 'var(--c-highlight)',
                      margin: '0 -1rem',
                      padding: '0 1rem'
                    }
                  : {}
              }
            >
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  )
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: A,
  pre: Pre,
  code: Code
}

const MDXTheme: React.FC = ({ children }) => {
  const slugger = new Slugger()
  return (
    <SluggerContext.Provider value={slugger}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </SluggerContext.Provider>
  )
}

export default MDXTheme