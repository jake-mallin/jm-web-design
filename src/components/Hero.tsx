export default function Hero() {
  return (
    <section className="section">
      <div className="container-px mx-auto grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Modern websites that <span className="text-blue-600">convert</span>
          </h1>
          <p className="mt-4 max-w-prose text-lg text-slate-600">
            I design and build fast, accessible websites with React, TypeScript, and Tailwind. From
            landing pages to full sites, I help businesses look sharp and grow.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="btn-primary">
              Start a project
            </a>
            <a href="#work" className="btn-outline">
              See my work
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">Based in the UK · Remote friendly</p>
        </div>
        <div className="card p-6">
          <ul className="grid gap-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              <div>
                <p className="font-semibold">Performance-first</p>
                <p className="text-slate-600">
                  Lighthouse 90+ scores, image optimization, and best practices baked in.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              <div>
                <p className="font-semibold">Accessible & SEO-ready</p>
                <p className="text-slate-600">
                  Semantic HTML, ARIA where needed, Open Graph tags, and sitemaps.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              <div>
                <p className="font-semibold">TypeScript quality</p>
                <p className="text-slate-600">
                  Type-safe components and clean, maintainable code architecture.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
