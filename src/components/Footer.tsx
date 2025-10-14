import classNames from 'classnames'

type FooterProps = {
  hasBackground?: boolean
}

export default function Footer({ hasBackground = false }: FooterProps) {
  return (
    <footer
      className={classNames(
        'w-full rounded-lg', // always applied
        hasBackground ? 'bg-jm-primary' : 'bg-transparent'
      )}
    >
      <div className="text-neutral-0 flex h-20 items-center justify-between px-4 text-sm">
        <nav className="flex gap-4">
          <a href="mailto:jake.mallin@gmail.com" className="hover:text-slate-900">
            Privacy
          </a>
        </nav>
        <p>© {new Date().getFullYear()} JM Web Design</p>
      </div>
    </footer>
  )
}
