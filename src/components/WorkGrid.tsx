import { projects } from '@/lib/projects'

export default function WorkGrid() {
  return (
    <section id="work" className="section">
      <div className="container-px mx-auto">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Selected work</h2>
            <p className="mt-2 max-w-prose text-slate-600">
              A few recent projects. More on request.
            </p>
          </div>
          <a href="#contact" className="btn-outline">
            Work with me
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="card group block overflow-hidden p-6 transition hover:-translate-y-0.5"
            >
              <div className="aspect-video w-full rounded-xl bg-slate-100" />
              <h3 className="mt-4 text-lg font-semibold group-hover:text-blue-700">{p.title}</h3>
              <p className="mt-1 text-slate-600">{p.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-slate-200 px-2 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
