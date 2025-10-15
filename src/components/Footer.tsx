import classNames from 'classnames'

type FooterProps = {
  hasBackground?: boolean
  className?: string
}

export default function Footer({ hasBackground = false, className }: FooterProps) {
  return (
    <footer
      className={classNames(
        'w-full rounded-lg',
        hasBackground ? 'bg-jm-primary' : 'bg-transparent',
        className
      )}
    >
      <div className="text-neutral-0 flex items-center justify-between px-4 py-4 text-sm sm:px-6">
        <nav className="flex gap-4">
          <a href="mailto:jake.mallin@gmail.com" className="transition-all hover:scale-105">
            I want a website!
          </a>
        </nav>
        <p>© {new Date().getFullYear()} JM Web Design</p>
      </div>
    </footer>
  )
}
