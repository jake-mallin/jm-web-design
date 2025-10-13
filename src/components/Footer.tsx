export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="container-px mx-auto flex h-20 items-center justify-between text-sm text-slate-500">
        <p>© {new Date().getFullYear()} JM Web Design</p>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-slate-900">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-900">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  )
}
