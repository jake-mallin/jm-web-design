import Footer from './Footer'
import Header from './Header'

export default function Hero() {
  return (
    <section className="h-screen w-screen p-4 md:p-6">
      <div className="bg-jm-primary-300 before:bg-jm-primary-300/70 relative flex h-full w-full items-center justify-center rounded-3xl bg-[url(/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:rounded-3xl">
        <Header />
        <div className="flex w-full flex-col items-center gap-6 text-center md:gap-10">
          <h1 className="text-inverse xs:text-4xl relative w-full text-center text-3xl leading-none font-medium sm:text-5xl md:text-6xl">
            Websites that{' '}
            <span className="before:hero-gradient relative before:absolute before:top-1/2 before:left-1/2 before:mt-1.25 before:h-65/100 before:w-6/5 before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-2">
              <span className="relative">work</span>
            </span>
            <br />
            as{' '}
            <span className="before:hero-gradient relative before:absolute before:top-1/2 before:left-1/2 before:mt-1.5 before:h-7/10 before:w-6/5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-2">
              <span className="relative">good</span>
            </span>{' '}
            as they look
          </h1>
          <div className="relative flex gap-6">
            <a href="#work" className="btn-outline rounded-full">
              View my work
            </a>
            <a href="#contact" className="btn-accent rounded-full">
              Get in touch
            </a>
          </div>
        </div>
        <Footer className="absolute bottom-0" />
      </div>
    </section>
  )
}
