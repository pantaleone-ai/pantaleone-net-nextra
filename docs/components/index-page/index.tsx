import { Feature, Features } from '@components/features'
import { ArrowRightIcon } from '@components/icons'
import cn from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import { useState } from 'react'
import styles from './index.module.css'

const LANGUAGES = [
  { lang: 'en', name: 'English' }
  // { lang: 'de', name: 'Deutsch' },
  // { lang: 'ja', name: '日本語' }
]

// function I18n() {
//   const [active, setActive] = useState('')

//   return (
//     <div className={styles.comparison}>
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
//         {LANGUAGES.map(({ lang }) => (
//           <span
//             key={lang}
//             onPointerOver={() => setActive(lang)}
//             className={cn(styles.file, active === lang && styles.active)}
//           >
//             /{lang}/hello.mdx
//           </span>
//         ))}
//       </div>
//       <ArrowRightIcon width="1.2em" />
//       <div className="overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/20">
//         {LANGUAGES.map(({ lang, name }) => (
//           <div
//             key={lang}
//             onPointerOver={() => setActive(lang)}
//             // eslint-disable-next-line tailwindcss/no-custom-classname -- TODO: configure eslint-plugin-tailwindcss to import nextra-theme-docs styles so below classes could be removed
//             className={cn(
//               'relative cursor-default select-none whitespace-nowrap px-4 py-1.5',
//               active === lang
//                 ? '_text-primary-600 _bg-primary-50 dark:_bg-primary-500/10'
//                 : 'text-gray-800 dark:text-gray-100 '
//             )}
//           >
//             {name}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export const IndexPage = () => (
  <div className="home-content">
    <div className="content-container">
      <h1 className="headline">
        Let's modernize <br className="sm:block hidden" />
        your business with AI
      </h1>
      <p className="subtitle">
        We help small and medium businesses {' '}
        <br className="max-md:hidden" />
        run faster with our proporietary AI-first approach.{' '}
      </p>
      <p className="subtitle">
        <Link className={styles.cta} href="/docs">
          Download our Free Guide <span>→</span>
        </Link>
      </p>
    </div>
    <style jsx>{`
      .content-container {
        max-width: 90rem;
        padding-left: max(env(safe-area-inset-left), 1.5rem);
        padding-right: max(env(safe-area-inset-right), 1.5rem);
        margin: 0 auto;
      }
      .features-container {
        margin: 8rem 0 0;
        padding: 4rem 0;
        background-color: #f3f4f6;
        border-bottom: 1px solid #e5e7eb;
      }
      .features-container .content-container {
        margin-top: -8rem;
      }
      :global(.dark) .features-container {
        background-color: #000;
        border-bottom: 1px solid rgb(38, 38, 38);
      }
      .headline {
        display: inline-flex;
        font-size: 3.125rem;
        font-size: min(4.375rem, max(8vw, 2.5rem));
        font-weight: 700;
        font-feature-settings: initial;
        letter-spacing: -0.12rem;
        margin-left: -0.2rem;
        margin-top: 3.4rem;
        line-height: 1.1;
        background-image: linear-gradient(146deg, #000, #757a7d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      :global(.dark) .headline {
        background-image: linear-gradient(146deg, #fff, #757a7d);
      }
      .subtitle {
        font-size: 1.3rem;
        font-size: min(1.3rem, max(3.5vw, 1.2rem));
        font-feature-settings: initial;
        line-height: 1.6;
      }
      :global(#docs-card) {
        color: #fff;
        text-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      }
      :global(#docs-card img) {
        object-fit: cover;
        object-position: left;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        z-index: 0;
        user-select: none;
        pointer-events: none;
      }
      :global(#docs-card img:nth-child(2)) {
        display: none;
      }
      :global(.dark #docs-card img:nth-child(2)) {
        display: initial;
      }
      :global(.dark #docs-card img:nth-child(1)) {
        display: none;
      }
      :global(#highlighting-card) {
        min-height: 300px;
        background-image: linear-gradient(to top, transparent, #fff 50%),
          url(/assets/syntax-highlighting.svg);
        background-size: 634px;
        background-position: -6px calc(100% + 4px);
        background-repeat: no-repeat;
      }
      :global(.dark #highlighting-card) {
        background-image: linear-gradient(to top, transparent, #202020 50%),
          url(/assets/syntax-highlighting.svg);
      }
      :global(.feat-darkmode) {
        min-height: 300px;
      }
      :global(.feat-darkmode h3) {
        font-size: 48px;
      }
      :global(#search-card) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      :global(#search-card p) {
        max-width: 320px;
      }
      :global(#search-card video) {
        position: absolute;
        right: 0;
        top: 24px;
        height: 430px;
        pointer-events: none;
        max-width: 60%;
      }
      :global(#fs-card) {
        min-height: 240px;
      }
      :global(#fs-card h3) {
        text-align: left;
        width: min(300px, 41%);
        min-width: 155px;
      }
      :global(#a11y-card) {
        background-image: url(/assets/high-contrast.png);
        background-position: -160px 160px;
      }
      @media screen and (max-width: 1300px) {
        :global(#a11y-card) {
          background-image: linear-gradient(to bottom, white, transparent),
            url(/assets/high-contrast.png);
        }
      }
      @media screen and (max-width: 1200px) {
        :global(#highlighting-card) {
          aspect-ratio: auto;
        }
        :global(.feat-darkmode h3) {
          font-size: 4vw;
          font-size: min(48px, max(4vw, 30px));
        }
        :global(#search-card video) {
          aspect-ratio: 787/623;
          height: auto;
        }
        .headline {
          letter-spacing: -0.08rem;
        }
      }
      @media screen and (max-width: 1024px) {
        :global(#docs-card) {
          aspect-ratio: 135/86;
        }
        :global(#search-card) {
          aspect-ratio: 8/3;
        }
        :global(#search-card h3) {
          text-align: left;
        }
        :global(#highlighting-card) {
          background-size: 136%;
        }
        :global(#a11y-card) {
          background-image: url(/assets/high-contrast.png);
          background-position: center 160px;
        }
      }
      @media screen and (max-width: 768px) {
        :global(#docs-card) {
          min-height: 348px;
          width: 100%;
          aspect-ratio: auto;
        }
        :global(#docs-card img) {
          object-position: -26px 0;
          width: 250%;
          max-width: initial;
        }
      }
      @media screen and (max-width: 640px) {
        :global(#search-card) {
          aspect-ratio: 2.5/2;
          justify-content: flex-start;
          align-items: stretch;
          min-height: 350px;
        }
        :global(#search-card h3) {
          text-align: center;
        }
        :global(#search-card p) {
          max-width: 100%;
        }
        :global(#search-card video) {
          position: relative;
          margin: 0.75em -1.75em 0;
          max-width: calc(100% + 3.5em);
        }
        :global(.dark #search-card video) {
          mix-blend-mode: lighten;
        }
      }
    `}</style>
    <div className="features-container">
      <div className="content-container">
        <Features>
          {/* <Feature
            index={0}
            large
            centered
            id="docs-card"
            href="/docs/docs-theme/start"
          >
            <Image src={docsCard} alt="Background" loading="eager" />
            <Image src={docsCardDark} alt="Background (Dark)" loading="eager" />
            <h3>
              Full-power documentation <br className="show-on-mobile" />
              in minutes
            </h3>
          </Feature> */}
          <Feature index={1} centered href="/docs/guide/image">
            <h3>
              We help businesses in all industries<br className="show-on-mobile" />
              increase their performance <br className="show-on-mobile" />
              <span className="font-extrabold italic">in 3 ways:</span> <br className="show-on-mobile" />

            </h3>
            <p className="text-left mb-8">
              Using our proprietary rapid value approach {' '}
              built with hundreds of client engagements and successes.
            </p>
            <div>
              <div className={styles.optimization}>
                <div className="leading-8">
                  <h4>
                  <code className="font-extrabold text-lg">1. Automation  <br className="show-on-mobile" /> 
                  <span className="font-medium text-sm">Your employees and partners are not doing the most important work they should be doing.</span>
                  </code>
                  </h4>                 
                </div>
              </div>
              <ArrowRightIcon
                width="1.2em"
                className="text-neutral-400 rotate-90 my-6 mx-auto"
              />
              <div className={styles.optimization}>
                <div className="leading-8">
                <h4>
                <code className="font-extrabold text-lg">2. AI Strategy  <br className="show-on-mobile" /> 
                  <span className="font-medium text-sm">Every business is an AI business.  We help you define and scale an AI strategy that works, and that you own and control.</span>
                  </code>
                  </h4>                
                </div>
              </div>
              <ArrowRightIcon
                width="1.2em"
                className="text-neutral-400 rotate-90 my-6 mx-auto"
              />
              <div className={styles.optimization}>
                <div className="leading-8">
                <h4>
                <code className="font-extrabold text-lg">3. Insourced Operations  <br className="show-on-mobile" /> 
                  <span className="font-medium text-sm">Reclaim those accelerating agency and consulting fees by bringing important workflows and IP, internally.</span>
                  </code>
                  </h4>                
                
                </div>
              </div>
            </div>
          </Feature>
          <Feature
            index={2}
            id="highlighting-card"
            href="/docs/guide/syntax-highlighting"
          >
            <h3>
              Workflow automation<br className="show-on-mobile" />
              powered by n8n and AI agents
            </h3>
            <p>
              We use custom workflows developed in n8n, a workflow automation platform that connects seamlessly to your teams and systems. We do the heavy lifting so you don't have to!{' '}
              <Link href="https://n8n.io" target='_blank'>n8n.io ↗</Link>.
            </p>
          </Feature>
          {/* <Feature index={3} href="/docs/guide/i18n">
            <h3>
              I18n as easy as <br className="show-on-mobile" />
              creating new files
            </h3>
            <p className="mb-4">
              Place your page files in folders specific to each locale, Nextra
              and Next.js will handle the rest for you.
            </p>
            <I18n />
          </Feature> */}
          <Feature
            index={4}
            centered
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(/hero-blue-grad.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff'
            }}
            href="/docs/guide/markdown"
          >
            <svg
              width="70%"
              viewBox="0 0 69 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, .1))'
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.375 0.375H2.625C1.38236 0.375 0.375 1.38236 0.375 2.625V25.875C0.375 27.1176 1.38236 28.125 2.625 28.125H66.375C67.6176 28.125 68.625 27.1176 68.625 25.875V2.625C68.625 1.38236 67.6176 0.375 66.375 0.375ZM23.625 5.75368V9.375V21.875H20.625V12.9963L16.1857 17.4357L15.125 18.4963L14.0643 17.4357L9.75 13.1213V22H6.75V9.5V5.87868L9.31066 8.43934L15.125 14.2537L21.0643 8.31434L23.625 5.75368ZM29.5607 12.5643L33.75 16.7537V5.375H36.75V16.7537L40.9393 12.5643L43.0607 14.6857L36.3107 21.4357L35.25 22.4963L34.1893 21.4357L27.4393 14.6857L29.5607 12.5643ZM62.3105 19.5592L56.1228 13.3736L62.4357 7.06066L60.3143 4.93934L54.0011 11.2526L47.6855 4.93916L45.5645 7.06084L51.8798 13.3739L45.6893 19.5643L47.8107 21.6857L54.0014 15.4949L60.1895 21.6808L62.3105 19.5592Z"
                fill="#fff"
              />
            </svg>
            <p
              style={{
                textShadow: '0 2px 4px rgb(0 0 0 / 20%)'
              }}
            >
              <Link href="https://mdxjs.com/blog/v3" className="text-current">
                MDX 3
              </Link>{' '}
              lets you easily customize and manage your experiences{' '}
              <br className="hide-medium" />
              making experience updates as simple as saving a new file.
            </p>
          </Feature>
          <Feature
            index={5}
            centered
            className="feat-darkmode"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              animate={{
                backgroundPosition: [
                  '0% 0%',
                  '50% 40%',
                  '50% 40%',
                  '100% 100%'
                ],
                backgroundImage: [
                  'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)',
                  'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                  'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                  'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)'
                ]
              }}
              transition={{
                backgroundPosition: {
                  times: [0, 0.5, 0.5, 1],
                  repeat: Infinity,
                  duration: 10,
                  delay: 1
                },
                backgroundImage: {
                  times: [0, 0.2, 0.8, 1],
                  repeat: Infinity,
                  duration: 10,
                  delay: 1
                }
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage:
                  'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                backgroundSize: '400% 400%',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <motion.h3
              animate={{
                color: ['#dae5ff', '#fff', '#fff', '#dae5ff']
              }}
              transition={{
                color: {
                  times: [0.25, 0.35, 0.7, 0.8],
                  repeat: Infinity,
                  duration: 10,
                  delay: 1
                }
              }}
              style={{
                position: 'relative',
                mixBlendMode: 'difference'
              }}
            >
              adaptive to<br />
              any <br />
              situation
            </motion.h3>
          </Feature>
          <Feature
            index={6}
            large
            id="fs-card"
            style={{
              color: 'white',
              backgroundImage:
                'url(/assets/routing.png), url(/hero-blue-grad.png)',
              backgroundSize: '140%, 180%',
              backgroundPosition: '130px -8px, top',
              backgroundRepeat: 'no-repeat',
              textShadow: '0 1px 6px rgb(38 59 82 / 18%)',
              aspectRatio: '1.765'
            }}
            href="/docs/docs-theme/page-configuration"
          >
            <h3>
              We create omnichannel experiences <br />
              that flex to support all contexts.
            </h3>
          </Feature>
        </Features>
      </div>
    </div>
  </div>
)
