export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/70 backdrop-blur">
      <div className="container-px mx-auto flex h-16 items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          <span className="text-blue-600">JM</span> Web Design
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#services" className="hover:text-blue-700">
            Services
          </a>
          <a href="#work" className="hover:text-blue-700">
            Work
          </a>
          <a href="#contact" className="hover:text-blue-700">
            Contact
          </a>
        </nav>
        <a href="#contact" className="btn-primary">
          Get a quote
        </a>
      </div>
    </header>
  )
}
