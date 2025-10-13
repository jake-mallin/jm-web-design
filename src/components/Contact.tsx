export default function Contact() {
  return (
    <section id="contact" className="section bg-slate-50">
      <div className="container-px mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Let’s build something</h2>
            <p className="mt-2 max-w-prose text-slate-600">
              Tell me about your project and I’ll get back with a plan and timeline.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              <p>
                <strong>Email:</strong> hello@jmweb.design
              </p>
              <p className="mt-2">
                <strong>Availability:</strong> Booking new projects for next month.
              </p>
            </div>
          </div>

          <form className="card p-6" action="https://formspree.io/f/your-id" method="POST">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Budget</label>
                <select
                  name="budget"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="undisclosed">Undisclosed</option>
                  <option value="<£1k">Under £1,000</option>
                  <option value="£1k-£3k">£1,000–£3,000</option>
                  <option value=">£3k">Over £3,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Project details</label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button className="btn-primary" type="submit">
                Send enquiry
              </button>
              <p className="text-xs text-slate-500">
                This form uses Formspree. Replace the action with your own endpoint.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
