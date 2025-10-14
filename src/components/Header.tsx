'use client'

import { useEffect, useId, useState } from 'react'

import classNames from 'classnames'

import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [open])

  return (
    <header className="border-neutral-0/24 bg-neutral-0/6 absolute top-8 z-50 mx-16 w-[calc(100%-128px)] rounded-full border p-0.5 backdrop-blur md:top-12 md:left-1/2 md:w-auto md:-translate-x-1/2 md:pl-20">
      <div className="flex items-center">
        <a
          href="#"
          className="absolute top-1/2 left-2 -translate-y-1/2 text-xl font-semibold tracking-tight"
        >
          <Logo color="white" shadow className="h-16 w-auto" />
        </a>

        <nav className="hidden gap-6 text-sm font-medium md:flex md:items-center">
          <a
            href="#services"
            className="text-neutral-0 hover:border-neutral-0/12 border-neutral-0/0 text-shadow-nav-item flex items-center gap-1.5 rounded-full border px-4 py-2 font-light text-nowrap transition-all"
          >
            Clients
          </a>
          <a
            href="#work"
            className="text-neutral-0 hover:border-neutral-0/12 border-neutral-0/0 text-shadow-nav-item flex items-center gap-1.5 rounded-full border px-4 py-2 font-light text-nowrap transition-all"
          >
            About me
          </a>
          <a
            href="#contact"
            className="text-neutral-0 hover:border-neutral-0/12 border-neutral-0/0 text-shadow-nav-item flex items-center gap-1.5 rounded-full border px-4 py-2 font-light text-nowrap transition-all"
          >
            Resume
            <i className="ml-1 inline-block">
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g clipPath="url(#clip0_62_12)">
                  <path
                    d="M8 1.11135C8 1.10749 8 1.1017 8 1.09785C8 1.09206 8 1.08627 8 1.08049C8 1.0747 8 1.06892 7.998 1.0612C7.998 1.05735 7.998 1.05349 7.998 1.0477C7.998 1.04192 7.996 1.0342 7.994 1.02842C7.994 1.02456 7.994 1.0207 7.992 1.01685C7.992 1.00913 7.99 1.00335 7.988 0.99756C7.988 0.993703 7.988 0.989846 7.986 0.987917C7.986 0.982132 7.982 0.974417 7.98 0.968632C7.98 0.964775 7.978 0.960917 7.976 0.95706C7.976 0.951274 7.972 0.945489 7.97 0.939703C7.97 0.935846 7.968 0.931989 7.966 0.928132C7.964 0.922346 7.962 0.91656 7.96 0.912703C7.96 0.908846 7.956 0.90306 7.954 0.899203C7.952 0.895346 7.95 0.88956 7.948 0.885703C7.946 0.879917 7.944 0.87606 7.94 0.870274C7.94 0.866417 7.936 0.86256 7.934 0.858703C7.932 0.852918 7.928 0.847132 7.926 0.843275C7.926 0.839417 7.922 0.83556 7.92 0.833632C7.916 0.827846 7.914 0.82206 7.91 0.816274C7.908 0.812417 7.906 0.810489 7.904 0.806632C7.9 0.800846 7.896 0.79506 7.892 0.789275C7.89 0.785417 7.888 0.783489 7.884 0.779632C7.88 0.773846 7.876 0.769989 7.872 0.764203C7.87 0.760346 7.866 0.756489 7.864 0.752632C7.86 0.748775 7.856 0.742989 7.852 0.739132C7.848 0.733346 7.844 0.729489 7.84 0.725632C7.838 0.721774 7.834 0.719846 7.832 0.715989C7.818 0.70056 7.802 0.685132 7.786 0.671632C7.782 0.667774 7.78 0.665846 7.776 0.663917C7.772 0.66006 7.766 0.656203 7.762 0.652346C7.758 0.648489 7.752 0.644632 7.748 0.640775C7.744 0.638846 7.74 0.634989 7.738 0.63306C7.732 0.629203 7.726 0.625346 7.722 0.621489C7.718 0.61956 7.716 0.617632 7.712 0.615703C7.706 0.611846 7.7 0.607989 7.694 0.604132C7.69 0.604132 7.688 0.600275 7.684 0.598346C7.678 0.594489 7.672 0.59256 7.666 0.588703C7.662 0.588703 7.658 0.584846 7.656 0.582917C7.65 0.57906 7.644 0.577132 7.638 0.575203C7.634 0.573274 7.63 0.571346 7.626 0.569418C7.62 0.567489 7.616 0.56556 7.61 0.561703C7.606 0.559774 7.6 0.557846 7.596 0.555917C7.592 0.555917 7.586 0.55206 7.582 0.550132C7.576 0.548203 7.57 0.546275 7.566 0.544346C7.562 0.544346 7.558 0.542418 7.554 0.540489C7.548 0.53856 7.542 0.536632 7.536 0.534703C7.532 0.534703 7.528 0.532775 7.524 0.530846C7.518 0.530846 7.51 0.526989 7.504 0.52506C7.5 0.52506 7.498 0.52506 7.494 0.523132C7.486 0.523132 7.48 0.519275 7.472 0.519275C7.468 0.519275 7.466 0.519275 7.462 0.519275C7.454 0.519275 7.448 0.517346 7.44 0.515417C7.436 0.515417 7.432 0.515417 7.428 0.515417C7.422 0.515417 7.414 0.515417 7.408 0.513489C7.402 0.513489 7.398 0.513489 7.392 0.513489C7.386 0.513489 7.38 0.513489 7.374 0.513489C7.364 0.513489 7.356 0.513489 7.346 0.513489H7.342H0.666C0.298 0.513489 0 0.800846 0 1.1557C0 1.51056 0.298 1.79792 0.666 1.79792H5.724L0.196 7.12849C-0.064 7.3792 -0.064 7.78613 0.196 8.03685C0.326 8.1622 0.496 8.22585 0.668 8.22585C0.84 8.22585 1.01 8.1622 1.14 8.03685L6.668 2.70627V7.58363C6.668 7.93849 6.966 8.22585 7.334 8.22585C7.702 8.22585 8 7.93849 8 7.58363V1.1422C8 1.13063 8 1.12099 8 1.10942V1.11135Z"
                    fill="white"
                    fillOpacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_62_12">
                    <rect width="8" height="9" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </i>
          </a>
          <a
            href="#contact"
            className="btn-accent rounded-full text-nowrap inset-shadow-[-1px_-2px_0px_#E4114D,0.5px_1px_0px_#F4678F] hover:inset-shadow-[-1px_-2px_0px_#F4678F,0.5px_1px_0px_#E4114D]"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="border-neutral-0/20 bg-neutral-0/10 text-neutral-0 hover:bg-neutral-0/20 mr-2 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur transition md:hidden"
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className={classNames('h-5 w-5', { hidden: open })}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg
            className={classNames('h-5 w-5', { hidden: !open })}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div
            id={menuId}
            className="border-neutral-0/20 bg-neutral-0/90 absolute top-24 left-1/2 w-[92vw] -translate-x-1/2 rounded-2xl border p-4 shadow-2xl backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col gap-2 text-base">
              <a
                href="#services"
                className="text-neutral-0 hover:bg-neutral-0/10 rounded-xl px-4 py-3 transition"
                onClick={() => setOpen(false)}
              >
                Clients
              </a>
              <a
                href="#work"
                className="text-neutral-0 hover:bg-neutral-0/10 rounded-xl px-4 py-3 transition"
                onClick={() => setOpen(false)}
              >
                About me
              </a>
              <a
                href="#contact"
                className="text-neutral-0 hover:bg-neutral-0/10 rounded-xl px-4 py-3 transition"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
              <a
                href="#contact"
                className="btn-accent mt-2 rounded-full px-4 py-3 inset-shadow-[-1px_-2px_0px_#E4114D,0.5px_1px_0px_#F4678F] hover:inset-shadow-[-1px_-2px_0px_#F4678F,0.5px_1px_0px_#E4114D]"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
