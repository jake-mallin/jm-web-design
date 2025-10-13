export default function Services() {
  const items = [
    {
      title: 'Custom websites',
      desc: 'Bespoke marketing sites and landing pages built with Next.js.',
    },
    {
      title: 'Site refresh & audits',
      desc: 'Modernize UI, improve performance, and fix UX blockers.',
    },
    { title: 'Component libraries', desc: 'Reusable UI systems in TypeScript.' },
  ]

  return (
    <section id="services" className="section bg-slate-50">
      <div className="container-px mx-auto">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 max-w-prose text-slate-600">
          Clear scope, transparent pricing, and reliable delivery.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
