import CushionLink from '@/components/CushionLink'
import { ProjectCategory, projects } from '@/constants/projects'
import { Page } from '@/types/general'
import clsx from 'clsx'
import {
  ArrowUpRight,
  Link as LinkIcon,
  LogoApple,
} from 'framework7-icons-plus/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import s from './index.home.module.scss'

const Home: Page = () => {
  const chevronLeftRef = useRef<SVGSVGElement>(null!)
  const chevronRightRef = useRef<SVGSVGElement>(null!)
  const scrollContainerRef = useRef<HTMLDivElement>(null!)
  const leftShaderRef = useRef<HTMLDivElement>(null!)
  const rightShaderRef = useRef<HTMLDivElement>(null!)
  const [filter, setFilter] = useState<ProjectCategory | null>(null)

  const onScrollCategories = () => {
    if (scrollContainerRef.current.scrollLeft <= 0) {
      chevronLeftRef.current.classList.remove(s.visible)
      leftShaderRef.current.classList.remove(s.visible)
    } else {
      chevronLeftRef.current.classList.add(s.visible)
      leftShaderRef.current.classList.add(s.visible)
    }

    if (
      Math.round(
        scrollContainerRef.current.scrollLeft +
          scrollContainerRef.current.getBoundingClientRect().width
      ) >= scrollContainerRef.current.scrollWidth
    ) {
      chevronRightRef.current.classList.remove(s.visible)
      rightShaderRef.current.classList.remove(s.visible)
    } else {
      chevronRightRef.current.classList.add(s.visible)
      rightShaderRef.current.classList.add(s.visible)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      onScrollCategories()
    }, 0)
  }, [])

  return (
    <div className={s['wrapper']}>
      <div className={s['introduction']}>
        <div>
          <figure className={s['portrait']}>
            {/* <img
              src="/images/jhaemin_portrait.jpg"
              alt="Jang Haemin Portrait"
              className="dark-mode"
            /> */}
            <img
              src="/images/jhaemin-wwc23-wide.jpeg"
              alt="Jang Haemin Woowacon"
              // className={clsx('light-mode', s['light'])}
            />

            {/* <figcaption className={clsx('dark-mode', s.caption)}>
              Photo by 김명중
            </figcaption> */}
          </figure>
        </div>
        <div className={s['manifesto']}>
          <p>Hi, my name is Jang Haemin.</p>
          <p>
            I mostly spend time designing, developing and surfing the web while
            listening to{' '}
            <span className={s['apple-music']}>
              <span className={s['apple-music-text']}>Apple</span>
              <LogoApple className={s['logo-apple']} /> Music
            </span>{' '}
            or watching Netflix. Endless learning keeps me alive and never hangs
            me down to the past.
          </p>
          <p>
            For me, programming isn’t just about writing great codes, but one of
            the ways express myself and improve our lives.
          </p>
          <p>I love my family, friends and Seoul.</p>
        </div>
      </div>

      <div className={s['education-and-work']}>
        <section className={clsx(s['home-section'], s['open-source'])}>
          <h1 className={s['subtitle']}>Experience</h1>

          <div>
            <div className={s['section-item']}>
              <p className={s['section-item-title']}>TwelveLabs Inc.</p>
              <p className={s['section-item-description']}>
                2026. 02. – current
              </p>
            </div>

            <div className={s['section-item']}>
              <p className={s['section-item-title']}>Woowa Brothers Corp.</p>
              <p className={s['section-item-description']}>
                2020. 10. – 2026. 02.
              </p>
            </div>
          </div>
        </section>

        <section className={clsx(s['home-section'], s['open-source'])}>
          <h1 className={s['subtitle']}>Education</h1>

          <div>
            <div className={s['section-item']}>
              <p className={s['section-item-title']}>Chung-Ang University</p>
              <p className={s['section-item-description']}>
                Bachelor’s degree, Computer Science
              </p>
              <p className={s['section-item-description']}>2015 – 2021</p>
            </div>

            <div className={s['section-item']}>
              <p className={s['section-item-title']}>Purdue University</p>
              <p className={s['section-item-description']}>
                K-SW Square Winter Program
              </p>
              <p className={s['section-item-description']}>Winter 2020</p>
            </div>
          </div>
        </section>
      </div>

      {/* <section className={clsx($["section"], $["open-source"])}>
        <h1 className={$["subtitle"]}>Open Source</h1>
      </section> */}

      <section className={clsx(s['home-section'], s['projects'])}>
        <h1 className={s['subtitle']}>Works</h1>

        <CushionLink href="https://geullim.com" className={s.geullim} newWindow>
          <div className={s.container}>
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
              radius="50%"
              className={s.geullimBorder}
            >
              <rect
                className={s.geullimRect}
                width="100%"
                height="100%"
                fill="none"
                stroke="var(--geullim-theme)"
                strokeWidth="12"
                strokeDasharray="32, 32"
                strokeDashoffset="0"
                strokeLinecap="round"
                rx="30px"
                ry="30px"
              />
            </svg>
            <picture className={s.geullimThumb}>
              <img alt="쓰면글림체" src="/images/geullim.png" />
            </picture>
          </div>
        </CushionLink>

        <CushionLink
          href="https://2023.woowacon.com"
          className={s.woowacon23}
          newWindow
        >
          <div className={s.container}>
            <img
              className={s.woowacon23Logo}
              alt="WOOWACON 2023"
              src="/images/woowacon23-white.png"
            />
            <picture className={s.baedalScience}>
              <source
                media="(max-width: 734px)"
                srcSet="/images/baedal-science-portrait.png"
              />
              <img
                alt="Baedal Science"
                src="/images/baedal-science-landscape.png"
              />
            </picture>
          </div>
        </CushionLink>

        <div className={s.recentWorksContainer}>
          <CushionLink
            href="https://everymoji.com"
            className={clsx(s.recentWork, s.everymoji)}
            cottonClassName={s.container}
            newWindow
          >
            <span className={s.label}>Recent Work</span>
            <h2 className={s.title}>everymoji</h2>
          </CushionLink>

          <CushionLink
            href="https://pp.land"
            className={clsx(s.recentWork, s.poker)}
            cottonClassName={s.container}
            newWindow
          >
            <span className={s.label}>Recent Work</span>
            <h2 className={s.title}>Planning Poker</h2>
          </CushionLink>
        </div>

        <div className={s.filters}>
          <div
            ref={scrollContainerRef}
            className={s.scrollContainer}
            onScroll={onScrollCategories}
          >
            <div
              className={clsx(s.filter, {
                [s.selected]: filter === null,
              })}
              onClick={() => {
                setFilter(null)
              }}
            >
              All
            </div>
            {Object.values(ProjectCategory).map((category) => {
              return (
                <div
                  key={category}
                  className={clsx(s.filter, {
                    [s.selected]: filter === category,
                  })}
                  onClick={() => {
                    setFilter(category as ProjectCategory)
                  }}
                >
                  {category}
                </div>
              )
            })}
          </div>

          <div ref={leftShaderRef} className={clsx(s.shader, s.left)} />
          <div ref={rightShaderRef} className={clsx(s.shader, s.right)} />

          <svg
            ref={chevronLeftRef}
            className={clsx(s.scrollTo, s.left)}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="20.2832"
            height="19.9316"
            onClick={() => {
              scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft - 200,
                behavior: 'smooth',
              })
            }}
          >
            <g>
              <rect height="19.9316" opacity="0" width="20.2832" x="0" y="0" />
              <path
                d="M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM10.8594 5.17578L6.79688 9.01367C6.24023 9.52148 6.24023 10.4199 6.79688 10.9277L10.8594 14.7656C11.1328 15.0195 11.6406 15.0391 11.8945 14.7949C12.1973 14.4922 12.1875 14.0234 11.9043 13.75L7.89062 9.96094L11.9043 6.19141C12.1973 5.91797 12.1875 5.42969 11.8848 5.14648C11.6113 4.88281 11.1621 4.89258 10.8594 5.17578Z"
                fill="var(--jhm-primary-text-color)"
                fillOpacity="1"
              />
            </g>
          </svg>

          <svg
            ref={chevronRightRef}
            className={clsx(s.scrollTo, s.right)}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="20.2832"
            height="19.9316"
            onClick={() => {
              scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft + 200,
                behavior: 'smooth',
              })
            }}
          >
            <g>
              <path
                d="M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM7.65625 5C7.34375 5.29297 7.33398 5.79102 7.64648 6.08398L11.7871 9.9707L7.64648 13.8672C7.34375 14.1504 7.34375 14.6387 7.64648 14.9512C7.91992 15.2051 8.44727 15.1855 8.73047 14.9121L12.9199 10.9668C13.4863 10.4395 13.4961 9.51172 12.9199 8.97461L8.73047 5.03906C8.41797 4.74609 7.94922 4.7168 7.65625 5Z"
                fill="var(--jhm-primary-text-color)"
                fillOpacity="1"
              />
            </g>
          </svg>
        </div>

        <div className={s['projects-list']}>
          {projects
            .filter((project) =>
              filter === null ? true : project.categories.includes(filter)
            )
            .map(({ name, description, href, links }) => {
              const hasSingleLink = !!href
              const anchorAttr = href?.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer' }
                : {}

              return (
                <div key={name}>
                  {hasSingleLink ? (
                    <CushionLink
                      href={href}
                      newWindow={href.startsWith('http')}
                    >
                      <div className={s['project-item']}>
                        <div className={s['project-info']}>
                          <h2 className={s['project-name']}>
                            {name} <ArrowUpRight className={s['arrow']} />
                          </h2>
                          <p className={s['project-description']}>
                            {description}
                          </p>
                          {links && links.length > 0 && (
                            <div className={s['project-links']}>
                              {links.map(({ url, title }) => (
                                <Link
                                  key={url + title}
                                  href={url}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                  }}
                                >
                                  <LinkIcon />
                                  {title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CushionLink>
                  ) : (
                    <div className={s['project-item']}>
                      <div className={s['project-info']}>
                        <h2 className={s['project-name']}>{name}</h2>
                        <p className={s['project-description']}>
                          {description}
                        </p>
                        {links && links.length > 0 && (
                          <div className={s['project-links']}>
                            {links.map(({ url, title }) => (
                              <Link
                                key={url + title}
                                href={url}
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <LinkIcon />
                                {title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
        </div>

        {filter && (
          <button
            className={s.seeAllProjects}
            onClick={() => {
              setFilter(null)
              scrollContainerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
              })
            }}
          >
            See all works
          </button>
        )}
      </section>

      <section className={clsx(s['home-section'])}>
        <h1 className={s['subtitle']}>Featured</h1>
        <div className={s['embeds']}>
          <div
            className={s['embedded-video-wrapper']}
            style={{
              gridColumn: '1 / -1',
            }}
          >
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/YtrIAqgSDp8?si=9sIA5VdwQn82LyiT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s['embedded-video-wrapper']}>
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/nbVF9LzIQMo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s['embedded-video-wrapper']}>
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/BiLa7i81BcU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s['embedded-video-wrapper']}>
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/B_sB_PJR_x8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s['embedded-video-wrapper']}>
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/XDC4QH-4Xms"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
